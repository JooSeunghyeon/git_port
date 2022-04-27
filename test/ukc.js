function goDest(dest){
    // alert(dest);
    var address = 'port of '+dest;
    geocoder.geocode({'address' : dest}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK) {
        gmap.setZoom(12);
        gmap.setCenter(results[0].geometry.location);
      }
      else{
        alert(address+"not found.");
      }
    });

    // $("#tab1").css("display","inline-block");
    // $("#UKCpanel").show();
    // $("#tab1").show();
    $("#dialogList").dialog("open");

    // window.open("anitab.html","UKC","width=680, height = 700, top=200, left=100");
  }

//       function showresult(date,place){
//         var jsontxt =
//         `
//         {
//     "coord": {
//         "lon": 129.0426,
//         "lat": 35.1005
//     },
//     "weather": [
//         {
//             "id": 803,
//             "main": "Clouds",
//             "description": "broken clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 301.18,
//         "feels_like": 303.74,
//         "temp_min": 301.18,
//         "temp_max": 301.18,
//         "pressure": 1014,
//         "humidity": 69
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 2.57,
//         "deg": 70
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1626709137,
//     "sys": {
//         "type": 1,
//         "id": 8086,
//         "country": "KR",
//         "sunrise": 1626726234,
//         "sunset": 1626777364
//     },
//     "timezone": 32400,
//     "id": 1838524,
//     "name": "Busan",
//     "cod": 200
// }
//         `;
//         alert(date+" , "+place + "\n" + jsontxt);

//       }

  // $( function() {
  // } );

  function initMap() {
    var gmapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(35.07618, 127.01),
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    gmap = new google.maps.Map(document.getElementById('map'), gmapOptions);

    geocoder = new google.maps.Geocoder();

    //좌표
    google.maps.event.addListener(gmap, 'mousemove', function(event){
      var Center = gmap.getCenter();
      var CenterLatdeg = parseInt(Center.lat());
      var CenterLatmin = parseInt((Center.lat() - CenterLatdeg)*60);
      var CenterLatsec = Math.round(((Center.lat() - CenterLatdeg)*60-CenterLatmin)*60);
      var CenterLat =  CenterLatdeg + `B0` + CenterLatmin + `'` + CenterLatsec  + `" N`;
      var CenterLngdeg = parseInt(Center.lng());
      var CenterLngmin = parseInt((Center.lng() - CenterLngdeg)*60);
      var CenterLngsec = Math.round(((Center.lng() - CenterLngdeg)*60-CenterLngmin)*60);
      var CenterLng = CenterLngdeg + `B0` + CenterLngmin + `'` + CenterLngsec  + `" E`;
      var MousePos = event.latLng;
      var MousePosLatdeg = parseInt(MousePos.lat());
      var MousePosLatmin = parseInt((MousePos.lat() - MousePosLatdeg)*60);
      var MousePosLatsec = Math.round(((MousePos.lat() - MousePosLatdeg)*60-MousePosLatmin)*60);
      var MousePosLat =  MousePosLatdeg + `B0` + MousePosLatmin + `'` + MousePosLatsec  + `" N`;
      var MousePosLngdeg = parseInt(MousePos.lng());
      var MousePosLngmin = parseInt((MousePos.lng() - MousePosLngdeg)*60);
      var MousePosLngsec = Math.round(((MousePos.lng() - MousePosLngdeg)*60-MousePosLngmin)*60);
      var MousePosLng = MousePosLngdeg + `B0` + MousePosLngmin + `'` + MousePosLngsec  + `" E`;
      document.getElementById("map_msg").innerHTML = "<font color='white'>Zoom Level: " + gmap.getZoom() + ", Map Center:" + CenterLat +","+ CenterLng+" ,Selected Location:" + MousePos.lat() +"," + MousePos.lng() +"</font>";
    });

    var ctrlCircles = null;
    google.maps.event.addListener(gmap, 'click',function(event){
        // const xhr = new XMLHttpRequest();
        //
        // var evtPos = event.latLng;
        // var baseurl = 'https://api.openweathermap.org/data/2.5/weather?';
        // var pos = 'lat='+parseInt(evtPos.lat()) + '&lon='+parseInt(evtPos.lng()) + '&';
        // var apikey = 'APPID=b0f14f816163550261e73b7c5d362205';
        // const requrl = baseurl + pos + apikey;
        //
        // fetch(requrl)
        // .then((response) => response.json())
        // .then((data) => {
        //   console.log(data);
        //   var weathertxt = data.name + '\nwind: ' + data.wind.speed
        //                             + '\nweather: ' + data.weather[0].main;
        //   alert(weathertxt)});
        if(ctrlCircles){
          ctrlCircles.setMap(null);
        }
        // alert(event.latLng);
        var circleOptions = {
          strokeColor: "#F4D03F",
          strokeOpacity: 0.5,
          strokeWeight: 2.5,
          fillColor: "#0000ff",
          fillOpacity: 0.3,
          map: gmap,
          // center: new google.maps.LatLng(34.899, 127.738),
          center: event.latLng,
          zIndex: 70000,
          radius: 3*1852,
        };
        ctrlCircles = new google.maps.Circle(circleOptions);
        ctrlCircles.setMap(gmap);
    });

    // google.maps.event.addListener(ctrlCircles,'click',function(){
    //     alert('aaa');
    // });

    // Points
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(33.8486, 126.4042),
      map: gmap,
      title: "MarkerI",
      icon:{
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 8,
        rotation: 125,
        strokeColor: "#000069",
        strokeWeight: 5,
        fillColor: "#28288C",
        fillOpacity: 0.7,
      },
      zindex: 100000,
    });

    marker.addListener("click",() =>{
      alert(marker.title+" clicked");
    });

    marker.addListener("rightclick",()=>{
      const infowindow = new google.maps.InfoWindow();
      infowindow.setContent("<div style='width:100px'>rightclick</div>");
      infowindow.open(map, marker);
    })

    //ViewCircle
    var circleOptions = {
      strokeColor: "#F4D03F",
      strokeOpacity: 0.5,
      strokeWeight: 2.5,
      fillColor: "#0000ff",
      fillOpacity: 0.5,
      map: gmap,
      center: new google.maps.LatLng(34.899, 127.738),
      zIndex: 70000,
      radius: 1.5*1852,
    };
    var ctrlCircles = new google.maps.Circle(circleOptions);
    ctrlCircles.setMap(gmap);

    //ViewLine
    var MapRouteQS2Coords = [
      // new google.maps.LatLng(33.523117,126.536333),
      // new google.maps.LatLng(33.535217,126.543850),
      // new google.maps.LatLng(33.959633,126.344350),
      // new google.maps.LatLng(33.959983,126.306550),
      // new google.maps.LatLng(33.985017,126.327683),
      // new google.maps.LatLng(34.011800,126.324433),
      // new google.maps.LatLng(34.224267,126.391567),
      // new google.maps.LatLng(34.273783,126.419217),
      // new google.maps.LatLng(34.313833,126.450167),
      // new google.maps.LatLng(34.391583,126.415217),
      // new google.maps.LatLng(34.427867,126.403450),
      // new google.maps.LatLng(34.446033,126.399167),
      // new google.maps.LatLng(34.478317,126.397950),
      // new google.maps.LatLng(34.487567,126.396400),
      // new google.maps.LatLng(34.513633,126.386867),
      // new google.maps.LatLng(34.537883,126.364900),
      new google.maps.LatLng(35.0614,129.0444),
      new google.maps.LatLng(35,129.05),
      new google.maps.LatLng(35,130.2),
      new google.maps.LatLng(37.05,132.25),
      new google.maps.LatLng(38.6825918,135.0444),
      new google.maps.LatLng(40.2595999,138.0444),
      new google.maps.LatLng(41.3512,140.303),
      new google.maps.LatLng(41.65,140.95),
      new google.maps.LatLng(41.65,145.4),
      new google.maps.LatLng(44.85,148.6),
      new google.maps.LatLng(45.1092124,149.303),
      new google.maps.LatLng(46.114993,152.303),
      new google.maps.LatLng(47.0095475,155.303),
      new google.maps.LatLng(47.7992066,158.303),
      new google.maps.LatLng(48.489612,161.303),
      new google.maps.LatLng(49.0857233,164.303),
      new google.maps.LatLng(49.5918347,167.303),
      new google.maps.LatLng(50.0115947,170.303),
      new google.maps.LatLng(50.3480282,173.303),
      new google.maps.LatLng(50.603557,176.303),
      new google.maps.LatLng(50.780018,179.303),
      new google.maps.LatLng(50.8786785,-177.697),
      new google.maps.LatLng(50.9002461,-174.697),
      new google.maps.LatLng(50.8448757,-171.697),
      new google.maps.LatLng(50.7121701,-168.697),
      new google.maps.LatLng(50.5011768,-165.697),
      new google.maps.LatLng(50.21038,-162.697),
      new google.maps.LatLng(49.8376881,-159.697),
      new google.maps.LatLng(49.3804167,-156.697),
      new google.maps.LatLng(48.8352699,-153.697),
      new google.maps.LatLng(48.1983181,-150.697),
      new google.maps.LatLng(47.4649775,-147.697),
      new google.maps.LatLng(46.6299902,-144.697),
      new google.maps.LatLng(45.6874123,-141.697),
      new google.maps.LatLng(44.6306117,-138.697),
      new google.maps.LatLng(43.4522851,-135.697),
      new google.maps.LatLng(42.1445005,-132.697),
      new google.maps.LatLng(40.6987806,-129.697),
      new google.maps.LatLng(39.1062377,-126.697),
      new google.maps.LatLng(33.6,-121.2),
      new google.maps.LatLng(33.65,-118.2),
      new google.maps.LatLng(33.734,-118.2196),
    ];

    var MapRouteQS2 = new google.maps.Polyline({
      path: MapRouteQS2Coords,
      geodesic: true,
      editable: true,
      strokeColor: '#000',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      zIndex: 80000,
      map: gmap,
    });

    var MapRouteQS1Coords = [
      new google.maps.LatLng(35.1035355,129.0423688),
      new google.maps.LatLng(40.9467672559499,138.880559057672),
      new google.maps.LatLng(45.7942728530557,150.438963758061),
      new google.maps.LatLng(49.2713869682521,163.844174950311),
      new google.maps.LatLng(50.9994290691625,178.723025630268),
      new google.maps.LatLng(50.7423587298949,194.074211715117),
      new google.maps.LatLng(48.5376696055095,208.649747312663),
      new google.maps.LatLng(44.6736068268315,221.595011012999),
      new google.maps.LatLng(39.5392150862409,232.690178610836),
      new google.maps.LatLng(33.754185,241.783542),
    ];

    var MapRouteQS1 = new google.maps.Polyline({
      path: MapRouteQS1Coords,
      geodesic: true,
      editable: true,
      strokeColor: 'blue',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      zIndex: 80000,
      map: gmap,
    });

    // ViewPolygon
    var polycoords = [
      {lat: 34.00511, lng: 126.52875},
      {lat: 33.74514, lng: 126.57467},
      {lat: 33.89689, lng: 126.89190},
      {lat: 34.14275, lng: 126.77105},
    ];

    var warnPoly = new google.maps.Polygon({
      paths : polycoords,
      strokeColor : '#B22222',
      strokeOpacity : 0.8,
      strokeWeight : 1.5,
      fillColor : '#B22222',
      fillOpacity : 0.0,
      zIndex : 50000,
    });
    warnPoly.setMap(gmap);

    // startAnimation();
  }

  var RouteArray = [];
      var interval;
      var AnimationSpeed = 200;
      var AnimationStep;
      var startStep = 0;
  var Route = [
    //시간, 위도, 경도, 목적지, ETA
    ['20210330080027',36.020332,129.40416,'POHANG','3292200'],
    ['20210330080027',36.020332,129.40416,'POHANG','3292200'],
  ];

  function startAnimation(){
    alert(Route.length);
    AnimationStep = startStep;
    //setTimeout과 비교해본다. https://ko.javascript.info/settimeout-setinterval
    interval = setInterval(function(){
      var oneObject = Route[AnimationStep];
      var RouteLatLng = new google.maps.LatLng(oneObject[1], oneObject[2]);
      var Tmarker = new google.maps.Marker({
        position: RouteLatLng,
        map: gmap,
        //icon: "/images/typhoon_blue.png",
        title: oneObject[0],
        zIndex: AnimationStep
      });
      RouteArray.push(Tmarker);
      AnimationStep++;
      // alert(AnimationStep+','+Route.length);
      if(AnimationStep >= Route.length)
        clearInterval(interval);
    },
    AnimationSpeed
    );
  }

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  $(document).ready(function(){
		$( "#dialogList" ).dialog({
			autoOpen: false,
			width: 840,
			height: 800,
			//minWidth: 500,
			//minHeight: 500,
			position: [10, 50],
			close: function() {
					$("#chkButtonList").show();
			},
			show: {
				effect: "blind",
				duration: 500
			},
			hide: {
				effect: "explode",
				duration: 500
			}
		});
  });
