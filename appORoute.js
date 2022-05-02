var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var sync_mysql = require('sync-mysql');
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var static = require('serve-static');
var async = require('async');
var multer = require('multer');
var session = require('express-session');
const {OperationHelper} = require('apac');

var client = mysql.createConnection({
//  host: '52.79.229.96',
  host: '192.168.1.126',
  user: 'root',
  password: 'wntmdgus1192!',
  database: 'oroute',
  multipleStatements: true,
  dateStrings: 'date',
});

client.connect((err) => {
  if(err) throw err;
  console.log('Connected successfully');
})


var sync_conn = new sync_mysql({
//  host: '52.79.229.96',
  host: '192.168.1.126',
  user: 'root',
  password: 'wntmdgus1192!',
  database: 'oroute',
  dateStrings: 'date',
});

var gWhere = "";
var gString = "";

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({
  secret:'jemOR!@#$%QWRTY',
  resave: false,
  saveUninitialized: true
}))

app.set('view engine','ejs');
const curDir = __dirname;
// app.use('/common', static(path.join(__dirname,'common')));
console.log("path:"+curDir);

app.locals.pretty = true;
app.use(express.static('gentelella-master'));
app.use('/uploads', static(path.join(__dirname,'uploads')));

var storageModel	=	multer.diskStorage({ destination: function (req, file, callback) {callback(null, 'uploads/model/');},
  filename: function (req, file, callback) { callback(null, file.originalname); }
});
// var uploadModel = multer({ storage : storageModel}).single('fileModel');
var uploadModel = multer({ storage : storageModel});

var storagePart	=	multer.diskStorage({ destination: function (req, file, callback) {callback(null, 'uploads/part/');},
  filename: function (req, file, callback) { callback(null, file.originalname); }
});
var uploadPart = multer({ storage : storagePart});

var storagePMS	=	multer.diskStorage({ destination: function (req, file, callback) {callback(null, 'uploads/pms/');},
  filename: function (req, file, callback) { callback(null, file.originalname); }
});
var uploadPMS = multer({ storage : storagePMS});

app.listen(5007,function(){
  console.log('Connected 5007(optimal) port!');
});

//route와 waypoints 좌표 가져오기
app.get('/getroute',function(req,res){
  var dep = req.query.dep;
  var dest = req.query.dest;
  console.log(dep + "," + dest);
  //var q1 = 'select distinct roupoint from waypoints where groupidx = (select groupidx from routes where depportnm = "'+dep+'" and destportnm = "'+dest+'");';
  var q1 = 'select distinct roupoint from oroute.waypoint where groupidx = (select groupidx from oroute.routes where depportnm = "'+dep+'" and destportnm = "'+dest+'");';
  client.query(q1,function(error, result){
    console.log('res:'+JSON.stringify(result));
    //console.log('res[0]:'+result[0].roupoint);
    var roupoint = 'n';
    for(var i=0;i< result.length; i++){
      roupoint = result[i].roupoint;
      if(roupoint == 'a'){
        roupoint='a';
        // break;
      }
      else if(roupoint == 's'){
        roupoint = 's';
        // break;
      }
      else if(roupoint == 'p'){
        roupoint == 'p';
        // break;
      }
    }
    if(roupoint){
      console.log("roupoint : " + roupoint);
      //var queryStr = 'select seq, lat, lng, distnext, accdist, crsnext from waypoints where groupidx = (select groupidx from routes where depportnm = "'+dep+'" and destportnm = "'+dest+'") and roupoint="'+ roupoint +'";';
      //var queryStr = 'select seq, lat, lng from best_route where point = "'+dest+'" order by seq;';
      var queryStr = 'select seq, lat, lng, distnext, accdist, crsnext from oroute.waypoint where groupidx = (select groupidx from oroute.routes where depportnm = "'+dep+'" and destportnm = "'+dest+'") and roupoint="'+ roupoint +'";';
      client.query( queryStr , function (error, result) {
        if(error) console.log(error);
        console.log('res1:'+JSON.stringify(result));
        res.json(result);
      });
    }
  })
})

app.get('/',function(req,res){
    fs.readFile('OrouteMap.html','utf8', function(error, data){
      res.send(data);
    })
})

app.get('/ukc',function(req,res){
    fs.readFile('OrouteMap_0405.html','utf8', function(error, data){
      res.send(data);
    })
})

app.get('/eexi',function(req,res){
    fs.readFile('OrouteMap.html','utf8', function(error, data){
      res.send(data);
    })
})

//통계
app.get('/statistics',function (req, res){
  fs.readFile('statistics.html', 'utf8', function (error, data) {
    res.send(data);
  });
});

//피드백
app.get('/feedback',function (req, res){
  fs.readFile('feedback.html', 'utf8', function (error, data) {
    res.send(data);
  });
});

app.get('/popup',function (req, res){
  fs.readFile('popup.html', 'utf8', function (error, data) {
    res.send(data);
  });
});

app.get('/getWaypoints',function(req, res){
  var geo = require("geographiclib");
  var resList = new Array();

  var lat1 = Number(req.query.lat1);
  var lng1 = Number(req.query.lng1);
  var lat2 = Number(req.query.lat2);
  var lng2 = Number(req.query.lng2);
  // var lat1 = 35.0;
  // var lng1 = 129.0;
  // var lat2 = 33.5;
  // var lng2 = -118.5;
  console.log("\n"+lat1+","+lng1+","+lat2+","+lng2);

  var geod = geo.Geodesic.WGS84;
  var Geodesic = geo.Geodesic,
      DMS = geo.DMS,
      geod = Geodesic.WGS84;

  var ds = 1079030;

  var l = geod.InverseLine(lat1, lng1, lat2, lng2),
      n = Math.ceil(l.s13 / ds),
      i, s;
  var r = geod.Inverse(lat1, lng1, lat2, lng2);
  for (i = 0; i <= n; ++i) {
    var data = new Object();
    s = Math.min(ds * i, l.s13);
    r = l.Position(s, Geodesic.STANDARD | Geodesic.LONG_UNROLL);
    console.log("r:"+JSON.stringify(r));
    console.log(r.s12.toFixed(0) + " " + r.lat2.toFixed(5) + " " + r.lon2.toFixed(5) + " " + r.azi2.toFixed(5));
    data.lat = Number(r.lat2.toFixed(3));
    data.lng = Number(r.lon2.toFixed(3));
    data.dis = Number(r.s12.toFixed(0));
    data.azi = Number(r.azi2.toFixed(0));
    resList.push(data);
  }
  res.send(resList);
})

//funnctions
setInterval(function(){
  client.query('Select 1');
  console.log('Select 1 : Site Optimal Route' + new Date().toLocaleString());
}, 30*60*1000);

function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}

function getToday(){
  var now = new Date();
  var today = now.getFullYear();
  if((now.getMonth()+1)<10)
    today += '-0'+(now.getMonth() + 1);
  else
    today += '-'+(now.getMonth() + 1);
  today += '-'+now.getDate();
  return today;
}
