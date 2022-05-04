var gmap = null;
var geocoder = null;
var FactoryMapData = [];
var MineMapData = [];
var ShipMapData = [];
var FactoryMarkers = [];
var MineMarkers = [];
var ShipMarkers = [];

// var gmapOptions = {
//   zoom: 8,
//   center: new google.maps.LatLng(36.673527, 128.311745),
//   mapTypeId : google.maps.MapTypeId.ROADMAP
// }
//
// gmap = new google.maps.Map(document.getElementById('gmap_canvas'), gmapOptions);
// geocoder = new google.maps.Geocoder();

function ViewFactory(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var obj = JSON.parse(xhttp.responseText);
      for(var i=0; i<obj.length; i++){
        var oneLatLng = new google.maps.LatLng(obj[i].Latitude, obj[i].Longitude);
        var marker = new google.maps.Marker({
          position: oneLatLng,
          map: gmap,
          title: obj[i].factoryName,
          icon : "images/red_0_s.png"
        });
        FactoryMarkers.push(marker);
        FactoryMapData.push([obj[i].factoryName, obj[i].Latitude, obj[i].Longitude, obj[i].yearPermitted, obj[i].yearClosed, obj[i].srcType]);
      }
      // alert("factory:"+FactoryMapData);
    }
  }
  xhttp.open("GET","/ajax_getFactory", true);
  xhttp.send();
}

function ViewECA(){
  // alert('ECA');
  var ECA_USPacific_Coor = [
    new google.maps.LatLng(32.53611111,-117.103056),
    new google.maps.LatLng(32.53444444,-117.1247222),
    new google.maps.LatLng(32.5275,-117.2388889),
    new google.maps.LatLng(32.55361111,-117.2638889),
    new google.maps.LatLng(32.5725,-117.3669444),
    new google.maps.LatLng(32.58972222,-117.4647222),
    new google.maps.LatLng(32.62722222,-117.8261111),
    new google.maps.LatLng(31.13305556,-118.6058333),
    new google.maps.LatLng(30.55694444,-121.7913889),
    new google.maps.LatLng(31.76972222,-123.2894444),
    new google.maps.LatLng(32.36611111,-123.8455556),
    new google.maps.LatLng(32.94416667,-124.1963889),
    new google.maps.LatLng(33.67,-124.4541667),
    new google.maps.LatLng(34.52444444,-125.2811111),
    new google.maps.LatLng(35.24388889,-125.7230556),
    new google.maps.LatLng(35.73333333,-126.3147222),
    new google.maps.LatLng(36.27361111,-126.7583333),
    new google.maps.LatLng(37.02638889,-127.1216667),
    new google.maps.LatLng(37.76083333,-127.6338889),
    new google.maps.LatLng(38.41888889,-127.8833333),
    new google.maps.LatLng(39.41805556,-128.5230556),
    new google.maps.LatLng(40.31305556,-128.7627778),
    new google.maps.LatLng(41.2275,-128.6727778),
    new google.maps.LatLng(42.21361111,-129.0105556),
    new google.maps.LatLng(42.79277778,-129.095),
    new google.maps.LatLng(43.43944444,-129.0238889),
    new google.maps.LatLng(44.41194444,-128.6897222),
    new google.maps.LatLng(45.51194444,-128.6672222),
    new google.maps.LatLng(46.18361111,-128.8169444),
    new google.maps.LatLng(46.56527778,-129.0747222),
    new google.maps.LatLng(47.66527778,-131.2613889),
    new google.maps.LatLng(48.54222222,-132.6833333),
    new google.maps.LatLng(48.96305556,-133.2463889),
    new google.maps.LatLng(49.3775,-134.2641667),
    new google.maps.LatLng(50.03111111,-135.3169444),
    new google.maps.LatLng(51.055,-136.7625),
    new google.maps.LatLng(51.90111111,-137.6983333),
    new google.maps.LatLng(52.75333333,-138.3372222),
    new google.maps.LatLng(53.48888889,-138.6766667),
    new google.maps.LatLng(53.6775,-138.8147222),
    new google.maps.LatLng(54.22916667,-139.5438889),
    new google.maps.LatLng(54.65694444,-139.9386111),
    new google.maps.LatLng(55.33833333,-140.9291667),
    new google.maps.LatLng(56.12,-141.605),
    new google.maps.LatLng(56.47555556,-142.2886111),
    new google.maps.LatLng(56.62194444,-142.8158333),
    new google.maps.LatLng(58.85111111,-153.2508333),
  ];

  var ECA_USPacific = new google.maps.Polyline({
    path: ECA_USPacific_Coor,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor : '#B22222',
    fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

  var ECA_USAtlantic_Coor = [
    new google.maps.LatLng(60,-64.16),
    new google.maps.LatLng(60,-56.71666667),
    new google.maps.LatLng(58.90027778,-55.63472222),
    new google.maps.LatLng(57.84777778,-55.06305556),
    new google.maps.LatLng(57.58694444,-54.01638889),
    new google.maps.LatLng(57.23888889,-53.13277778),
    new google.maps.LatLng(56.8025,-52.39138889),
    new google.maps.LatLng(56.30361111,-51.82833333),
    new google.maps.LatLng(54.38916667,-50.29555556),
    new google.maps.LatLng(53.74833333,-50.12138889),
    new google.maps.LatLng(53.08305556,-50.16805556),
    new google.maps.LatLng(52.335,-49.9525),
    new google.maps.LatLng(51.57222222,-48.87916667),
    new google.maps.LatLng(50.67083333,-48.26777778),
    new google.maps.LatLng(50.04111111,-48.1175),
    new google.maps.LatLng(49.40083333,-48.15972222),
    new google.maps.LatLng(48.65611111,-47.92138889),
    new google.maps.LatLng(47.40694444,-47.78222222),
    new google.maps.LatLng(46.58666667,-48.015),
    new google.maps.LatLng(45.32916667,-48.72444444),
    new google.maps.LatLng(44.72722222,-49.28055556),
    new google.maps.LatLng(44.27722222,-49.85638889),
    new google.maps.LatLng(43.8875,-50.56694444),
    new google.maps.LatLng(43.60166667,-51.34472222),
    new google.maps.LatLng(43.39972222,-52.28944444),
    new google.maps.LatLng(43.33055556,-53.33694444),
    new google.maps.LatLng(43.35388889,-54.15555556),
    new google.maps.LatLng(43.49472222,-55.12805556),
    new google.maps.LatLng(42.67,-55.52888889),
    new google.maps.LatLng(41.97194444,-56.15944444),
    new google.maps.LatLng(41.33916667,-57.08694444),
    new google.maps.LatLng(40.92611111,-58.04861111),
    new google.maps.LatLng(40.69388889,-59.08833333),
    new google.maps.LatLng(40.6425,-60.20555556),
    new google.maps.LatLng(40.76277778,-61.23416667),
    new google.maps.LatLng(41.08111111,-62.29694444),
    new google.maps.LatLng(40.61527778,-63.18027778),
    new google.maps.LatLng(40.29222222,-64.14361111),
    new google.maps.LatLng(40.12944444,-64.99194444),
    new google.maps.LatLng(40.09555556,-65.88527778),
    new google.maps.LatLng(39.96805556,-65.9975),
    new google.maps.LatLng(39.47333333,-66.35388889),
    new google.maps.LatLng(39.03166667,-66.80916667),
    new google.maps.LatLng(38.65444444,-67.34972222),
    new google.maps.LatLng(38.32222222,-68.03361111),
    new google.maps.LatLng(38.09138889,-68.78194444),
    new google.maps.LatLng(37.97055556,-69.56861111),
    new google.maps.LatLng(37.96305556,-70.4025),
    new google.maps.LatLng(37.87944444,-70.63055556),
    new google.maps.LatLng(37.31027778,-71.1425),
    new google.maps.LatLng(36.54027778,-71.56638889),
    new google.maps.LatLng(35.58277778,-71.43388889),
    new google.maps.LatLng(34.55277778,-71.61777778),
    new google.maps.LatLng(33.91361111,-71.87638889),
    new google.maps.LatLng(33.32305556,-72.28666667),
    new google.maps.LatLng(32.75861111,-72.90138889),
    new google.maps.LatLng(31.92027778,-74.20055556),
    new google.maps.LatLng(31.45388889,-75.25555556),
    new google.maps.LatLng(31.05444444,-75.855),
    new google.maps.LatLng(30.76166667,-76.52722222),
    new google.maps.LatLng(30.21333333,-77.30805556),
    new google.maps.LatLng(29.42138889,-76.945),
    new google.maps.LatLng(28.61638889,-76.8),
    new google.maps.LatLng(28.28694444,-76.66944444),
    new google.maps.LatLng(28.28666667,-79.18972222),
    new google.maps.LatLng(27.88222222,-79.47638889),
    new google.maps.LatLng(27.43361111,-79.52722222),
    new google.maps.LatLng(27.27027778,-79.57166667),
    new google.maps.LatLng(27.19833333,-79.58222222),
    new google.maps.LatLng(27.09972222,-79.58861111),
    new google.maps.LatLng(27.00777778,-79.58805556),
    new google.maps.LatLng(26.92111111,-79.5775),
    new google.maps.LatLng(26.89944444,-79.57416667),
    new google.maps.LatLng(26.76277778,-79.54472222),
    new google.maps.LatLng(26.74166667,-79.53972222),
    new google.maps.LatLng(26.72777778,-79.53888889),
    new google.maps.LatLng(26.68666667,-79.53361111),
    new google.maps.LatLng(26.63694444,-79.52555556),
    new google.maps.LatLng(26.60833333,-79.51833333),
    new google.maps.LatLng(26.58916667,-79.51388889),
    new google.maps.LatLng(26.58083333,-79.51277778),
    new google.maps.LatLng(26.56972222,-79.51055556),
    new google.maps.LatLng(26.52,-79.50416667),
    new google.maps.LatLng(26.48472222,-79.49805556),
    new google.maps.LatLng(26.42527778,-79.49944444),
    new google.maps.LatLng(26.39138889,-79.49861111),
    new google.maps.LatLng(26.38916667,-79.49833333),
    new google.maps.LatLng(26.31583333,-79.53194444),
    new google.maps.LatLng(26.25722222,-79.55472222),
    new google.maps.LatLng(26.25361111,-79.55638889),
    new google.maps.LatLng(26.13583333,-79.59805556),
    new google.maps.LatLng(26.12972222,-79.6025),
    new google.maps.LatLng(26.11638889,-79.60972222),
    new google.maps.LatLng(26.04777778,-79.63944444),
    new google.maps.LatLng(25.99166667,-79.6675),
    new google.maps.LatLng(25.98777778,-79.66888889),
    new google.maps.LatLng(25.96333333,-79.67722222),
    new google.maps.LatLng(25.93833333,-79.685),
    new google.maps.LatLng(25.90111111,-79.69388889),
    new google.maps.LatLng(25.89,-79.69611111),
    new google.maps.LatLng(25.865,-79.69972222),
    new google.maps.LatLng(25.82583333,-79.70444444),
    new google.maps.LatLng(25.80666667,-79.70638889),
    new google.maps.LatLng(25.80555556,-79.70666667),
    new google.maps.LatLng(25.77388889,-79.71222222),
    new google.maps.LatLng(25.77111111,-79.7125),
    new google.maps.LatLng(25.72777778,-79.71638889),
    new google.maps.LatLng(25.70861111,-79.71333333),
    new google.maps.LatLng(25.67694444,-79.7075),
    new google.maps.LatLng(25.62333333,-79.7075),
    new google.maps.LatLng(25.61888889,-79.7075),
    new google.maps.LatLng(25.5175,-79.70333333),
    new google.maps.LatLng(25.46638889,-79.70305556),
    new google.maps.LatLng(25.40111111,-79.70333333),
    new google.maps.LatLng(25.3725,-79.70555556),
    new google.maps.LatLng(25.35805556,-79.70222222),
    new google.maps.LatLng(25.28111111,-79.69),
    new google.maps.LatLng(25.26583333,-79.69194444),
    new google.maps.LatLng(25.1775,-79.69194444),
    new google.maps.LatLng(25.16416667,-79.69333333),
    new google.maps.LatLng(25.15083333,-79.69583333),
    new google.maps.LatLng(25.06527778,-79.70805556),
    new google.maps.LatLng(25.05,-79.71555556),
    new google.maps.LatLng(25.00833333,-79.73472222),
    new google.maps.LatLng(24.98416667,-79.74666667),
    new google.maps.LatLng(24.92444444,-79.76583333),
    new google.maps.LatLng(24.73833333,-79.82333333),
    new google.maps.LatLng(24.71777778,-79.82722222),
    new google.maps.LatLng(24.71,-79.84722222),
    new google.maps.LatLng(24.69638889,-79.8825),
    new google.maps.LatLng(24.64222222,-79.99944444),
    new google.maps.LatLng(24.6075,-80.06416667),
    new google.maps.LatLng(24.555,-80.21194444),
    new google.maps.LatLng(24.55138889,-80.2225),
    new google.maps.LatLng(24.53694444,-80.25444444),
    new google.maps.LatLng(24.52416667,-80.28194444),
    new google.maps.LatLng(24.51583333,-80.29638889),
    new google.maps.LatLng(24.50388889,-80.3225),
    new google.maps.LatLng(24.50166667,-80.32888889),
    new google.maps.LatLng(24.49388889,-80.35138889),
    new google.maps.LatLng(24.47166667,-80.40972222),
    new google.maps.LatLng(24.46833333,-80.41944444),
    new google.maps.LatLng(24.45638889,-80.45555556),
    new google.maps.LatLng(24.44166667,-80.49166667),
    new google.maps.LatLng(24.41861111,-80.53944444),
    new google.maps.LatLng(24.39166667,-80.6025),
    new google.maps.LatLng(24.37583333,-80.64888889),
    new google.maps.LatLng(24.36861111,-80.66416667),
    new google.maps.LatLng(24.32527778,-80.75583333),
    new google.maps.LatLng(24.32111111,-80.76305556),
    new google.maps.LatLng(24.31055556,-80.78027778),
    new google.maps.LatLng(24.30972222,-80.78166667),
    new google.maps.LatLng(24.16416667,-80.99638889),
    new google.maps.LatLng(24.16333333,-80.9975),
    new google.maps.LatLng(24.14944444,-81.01861111),
    new google.maps.LatLng(24.14166667,-81.03083333),
    new google.maps.LatLng(24.14055556,-81.0325),
    new google.maps.LatLng(24.12444444,-81.05166667),
    new google.maps.LatLng(24.03888889,-81.15138889),
    new google.maps.LatLng(24,-81.18777778),
    new google.maps.LatLng(23.92555556,-81.21527778),
    new google.maps.LatLng(23.89777778,-81.32861111),
    new google.maps.LatLng(23.84777778,-81.49972222),
    new google.maps.LatLng(23.83388889,-81.66638889),
    new google.maps.LatLng(23.81805556,-81.83305556),
    new google.maps.LatLng(23.81805556,-82.00305556),
    new google.maps.LatLng(23.82833333,-82.16638889),
    new google.maps.LatLng(23.85388889,-82.41638889),
    new google.maps.LatLng(23.85388889,-82.66638889),
    new google.maps.LatLng(23.82833333,-82.81472222),
    new google.maps.LatLng(23.82555556,-82.85305556),
    new google.maps.LatLng(23.82333333,-82.99972222),
    new google.maps.LatLng(23.83111111,-83.24972222),
    new google.maps.LatLng(23.85611111,-83.43027778),
    new google.maps.LatLng(23.87416667,-83.55027778),
    new google.maps.LatLng(23.90111111,-83.69305556),
    new google.maps.LatLng(23.92972222,-83.80305556),
    new google.maps.LatLng(23.97722222,-83.99972222),
    new google.maps.LatLng(24.16027778,-84.49083333),
    new google.maps.LatLng(24.22222222,-84.64416667),
    new google.maps.LatLng(24.27805556,-84.76861111),
    new google.maps.LatLng(24.39166667,-84.99972222),
    new google.maps.LatLng(24.44361111,-85.10527778),
    new google.maps.LatLng(24.64916667,-85.53166667),
    new google.maps.LatLng(24.73805556,-85.71972222),
    new google.maps.LatLng(24.89916667,-85.99972222),
    new google.maps.LatLng(25.17888889,-86.50194444),
    new google.maps.LatLng(25.72083333,-86.35388889),
    new google.maps.LatLng(26.22027778,-86.1125),
    new google.maps.LatLng(26.45611111,-86.22083333),
    new google.maps.LatLng(26.56277778,-86.61861111),
    new google.maps.LatLng(26.02333333,-87.49305556),
    new google.maps.LatLng(25.70694444,-88.55),
    new google.maps.LatLng(25.78166667,-90.49472222),
    new google.maps.LatLng(25.74416667,-90.78472222),
    new google.maps.LatLng(25.86194444,-91.88055556),
    new google.maps.LatLng(26.29555556,-93.06638889),
    new google.maps.LatLng(25.99861111,-93.56444444),
    new google.maps.LatLng(26.00888889,-95.6575),
    new google.maps.LatLng(26.00916667,-96.80833333),
    new google.maps.LatLng(25.97555556,-96.92444444),
    new google.maps.LatLng(25.97083333,-96.97805556),
    new google.maps.LatLng(25.96611111,-97.03166667),
    new google.maps.LatLng(25.96138889,-97.08555556),
    new google.maps.LatLng(25.95666667,-97.13916667),
    new google.maps.LatLng(25.95666667,-97.14638889),
  ];

  var ECA_USAtlantic = new google.maps.Polyline({
    path: ECA_USAtlantic_Coor,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    // fillColor : '#B22222',
    // fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

  var ECA_Hawaii_Coor = [
    new google.maps.LatLng(22.54833333,-153.0091667),
    new google.maps.LatLng(23.10138889,-153.4766667),
    new google.maps.LatLng(23.53638889,-154.0366667),
    new google.maps.LatLng(23.86305556,-154.6133333),
    new google.maps.LatLng(24.36361111,-155.8536111),
    new google.maps.LatLng(24.69638889,-156.4575),
    new google.maps.LatLng(24.95916667,-157.3713889),
    new google.maps.LatLng(25.22805556,-157.9036111),
    new google.maps.LatLng(25.42527778,-158.51),
    new google.maps.LatLng(25.52194444,-159.1630556),
    new google.maps.LatLng(25.50861111,-159.9058333),
    new google.maps.LatLng(25.36472222,-160.6647222),
    new google.maps.LatLng(25.00166667,-161.6425),
    new google.maps.LatLng(24.68027778,-162.2202778),
    new google.maps.LatLng(24.26472222,-162.7188889),
    new google.maps.LatLng(23.68055556,-163.2166667),
    new google.maps.LatLng(23.05555556,-163.5494444),
    new google.maps.LatLng(22.33583333,-163.7447222),
    new google.maps.LatLng(21.6125,-163.7675),
    new google.maps.LatLng(20.92388889,-163.6288889),
    new google.maps.LatLng(20.22611111,-163.3202778),
    new google.maps.LatLng(19.65083333,-162.8966667),
    new google.maps.LatLng(19.16194444,-162.3430556),
    new google.maps.LatLng(18.65444444,-161.3205556),
    new google.maps.LatLng(18.50861111,-160.6416667),
    new google.maps.LatLng(18.49194444,-159.9380556),
    new google.maps.LatLng(18.17805556,-159.2355556),
    new google.maps.LatLng(17.52138889,-158.9486111),
    new google.maps.LatLng(16.90166667,-158.5080556),
    new google.maps.LatLng(16.43027778,-157.9902778),
    new google.maps.LatLng(15.99916667,-157.2930556),
    new google.maps.LatLng(15.67694444,-156.3516667),
    new google.maps.LatLng(15.62666667,-155.3711111),
    new google.maps.LatLng(15.72944444,-154.7769444),
    new google.maps.LatLng(15.92555556,-154.2180556),
    new google.maps.LatLng(16.77416667,-152.8197222),
    new google.maps.LatLng(17.56166667,-152.0088889),
    new google.maps.LatLng(18.50444444,-151.5066667),
    new google.maps.LatLng(19.04638889,-151.3713889),
    new google.maps.LatLng(19.57944444,-151.3297222),
    new google.maps.LatLng(20.12833333,-151.3827778),
    new google.maps.LatLng(20.64527778,-151.5266667),
    new google.maps.LatLng(21.48583333,-151.9972222),
    new google.maps.LatLng(22.11611111,-152.5236111),
    new google.maps.LatLng(22.54833333,-153.0091667),
  ];

  var ECA_Hawaii = new google.maps.Polygon({
    path: ECA_Hawaii_Coor,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor : '#B22222',
    fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

  var ECA_Caribbean_Coor = [
    new google.maps.LatLng(17.3102777777778,-67.5372222222222),
    new google.maps.LatLng(19.1872222222222,-67.4458333333333),
    new google.maps.LatLng(19.5077777777778,-65.28),
    new google.maps.LatLng(19.2069444444444,-65.1022222222222),
    new google.maps.LatLng(18.7536111111111,-65.0061111111111),
    new google.maps.LatLng(18.6872222222222,-64.9925),
    new google.maps.LatLng(18.4894444444444,-64.8975),
    new google.maps.LatLng(18.4597222222222,-64.8894444444445),
    new google.maps.LatLng(18.4225,-64.8775),
    new google.maps.LatLng(18.4083333333333,-64.8719444444444),
    new google.maps.LatLng(18.3975,-64.8638888888889),
    new google.maps.LatLng(18.395,-64.8563888888889),
    new google.maps.LatLng(18.3933333333333,-64.8380555555556),
    new google.maps.LatLng(18.3966666666667,-64.8280555555556),
    new google.maps.LatLng(18.4030555555556,-64.8166666666667),
    new google.maps.LatLng(18.4077777777778,-64.7991666666667),
    new google.maps.LatLng(18.405,-64.7836111111111),
    new google.maps.LatLng(18.3869444444444,-64.7769444444444),
    new google.maps.LatLng(18.3769444444444,-64.7555555555556),
    new google.maps.LatLng(18.3775,-64.745),
    new google.maps.LatLng(18.3783333333333,-64.7433333333333),
    new google.maps.LatLng(18.3769444444444,-64.74),
    new google.maps.LatLng(18.3775,-64.7283333333333),
    new google.maps.LatLng(18.375,-64.7266666666667),
    new google.maps.LatLng(18.3736111111111,-64.7161111111111),
    new google.maps.LatLng(18.3738888888889,-64.7077777777778),
    new google.maps.LatLng(18.3708333333333,-64.7008333333333),
    new google.maps.LatLng(18.3727777777778,-64.6833333333333),
    new google.maps.LatLng(18.3658333333333,-64.6708333333333),
    new google.maps.LatLng(18.3641666666667,-64.6397222222222),
    new google.maps.LatLng(18.3561111111111,-64.6377777777778),
    new google.maps.LatLng(18.3441666666667,-64.6425),
    new google.maps.LatLng(18.3208333333333,-64.6372222222222),
    new google.maps.LatLng(18.3186111111111,-64.6377777777778),
    new google.maps.LatLng(18.2897222222222,-64.6605555555556),
    new google.maps.LatLng(18.2786111111111,-64.6613888888889),
    new google.maps.LatLng(18.1925,-64.6494444444444),
    new google.maps.LatLng(18.0505555555556,-64.6341666666667),
    new google.maps.LatLng(18.0488888888889,-64.4930555555556),
    new google.maps.LatLng(18.0475,-64.4505555555556),
    new google.maps.LatLng(18.0416666666667,-64.3522222222222),
    new google.maps.LatLng(18.0419444444444,-64.3355555555556),
    new google.maps.LatLng(18.0341666666667,-64.2658333333333),
    new google.maps.LatLng(18.0033333333333,-64.0413888888889),
    new google.maps.LatLng(17.9994444444444,-64.0177777777778),
    new google.maps.LatLng(17.9797222222222,-63.9502777777778),
    new google.maps.LatLng(17.9641666666667,-63.8983333333333),
    new google.maps.LatLng(17.9438888888889,-63.8891666666667),
    new google.maps.LatLng(17.6611111111111,-63.9147222222222),
    new google.maps.LatLng(17.6188888888889,-63.9194444444444),
    new google.maps.LatLng(17.5058333333333,-63.9322222222222),
    new google.maps.LatLng(17.1933333333333,-63.9658333333333),
    new google.maps.LatLng(17.0833333333333,-63.9780555555556),
    new google.maps.LatLng(16.9969444444444,-63.9883333333333),
    new google.maps.LatLng(17.3102777777778,-67.5372222222222),
  ];

  var ECA_Caribbean = new google.maps.Polygon({
    path: ECA_Caribbean_Coor,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor : '#B22222',
    fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

  var ECA_Baltic_Coor1 = [
    new google.maps.LatLng(62.,5.343),
    new google.maps.LatLng(62.,-4),
    new google.maps.LatLng(58.567,-4),
  ];

  var ECA_Baltic1 = new google.maps.Polyline({
    path: ECA_Baltic_Coor1,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor : '#B22222',
    fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

  var ECA_Baltic_Coor2 = [
    new google.maps.LatLng(50.1447,-5),
    new google.maps.LatLng(48.5,-5),
    new google.maps.LatLng(48.5,-4.777),
  ];

  var ECA_Baltic2 = new google.maps.Polyline({
    path: ECA_Baltic_Coor2,
    geodesic: true,
    // editable: true,
    strokeColor: '#F36',
    strokeOpacity: 0.5,
    strokeWeight: 3,
    fillColor : '#B22222',
    fillOpacity : 0.1,
    zIndex: 80000,
    map: gmap,
  });

/*
  alert('path: ' + window.location.pathname);
  const balticLayer = new google.maps.KmlLayer({
      // url: 'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml',
      // url: 'https://raw.githubusercontent.com/JuyoungKim0310/optimalRoute/main/MarineRegions-iho.kml',
      // url:'file:////C:/KJ/dev/OptimalRoute/main/mini/MarineRegions-iho.kml',
      url: 'uploads/MarineRegions-iho.kml',
      map: gmap,
  });
  alert('layer:'+balticLayer.url);
*/

  google.maps.event.addListener(ECA_Hawaii, 'click', function() {
      alert("ECA_Hawaii");
  });
  google.maps.event.addListener(ECA_USPacific, 'click', function() {
      alert("ECA_USPacific");
  });
  google.maps.event.addListener(ECA_USAtlantic, 'click', function() {
      alert("ECA_USAtlantic");
  });
  google.maps.event.addListener(ECA_Caribbean, 'click', function() {
      alert("ECA_Caribbean");
  });
  google.maps.event.addListener(ECA_Baltic1, 'click', function() {
      alert("ECA North Sea & Baltic Sea");
  });
  google.maps.event.addListener(ECA_Baltic2, 'click', function() {
      alert("ECA North Sea & Baltic Sea");
  });
}

function convertLatLngtoDist(lat, lng){
  var latDeg = parseInt(lat);
  var latMin = parseInt((lat-latDeg)*60);
  var latSec = ((lat-latDeg)*60-latMin)*60;
  var lngDeg = parseInt(lng);
  var lngMin = parseInt((lng-lngDeg)*60);
  var lngSec = ((lng-lngDeg)*60-lngMin)*60;
  var latDist = (latDeg*3600 + latMin*60 + latSec)*30.8;
  var lngDist = (lngDeg*3600 + lngMin*60 + lngSec)*24.69;
  return {
    latDist: latDist,
    lngDist: lngDist
  };
}

var GCLines = [];
var RHLines = [];
var markers = [];
var Waypoints = [];
var Infowindows = [];

function searchRoute(){
  alert("from: "+$('#dep_port').val() + " to: " +$('#des_port').val());
  for(var i =0;i< markers.length; i++){
    markers[i].setMap(null);
  }
  markers.length = 0;

  var geocoder = new google.maps.Geocoder();
  var point_1, point_2 = null;
  var lat_dep, lng_dep, lat_des, lng_des = null;
  var status1, status2 = null;

  geocoder.geocode({'address' : "port of "+$('#dep_port').val()}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      status1 = 1;
      gmap.setZoom(3);
      // gmap.setCenter(results[0].geometry.location);
      lat_dep = results[0].geometry.location.lat();
      lng_dep = results[0].geometry.location.lng();
      point_1 = new google.maps.LatLng(lat_dep, lng_dep);
      var marker = new google.maps.Marker({
        map: gmap,
        position: point_1,
        title: $('#dep_port').val() //tooltip으로 표시됨
      });
      var LocBuffer_1;
      var BufferOptions_1 = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: gmap,
        center: point_1,
        radius: 5000
      };
      LocBuffer_1 = new google.maps.Circle(BufferOptions_1);
    }
    markers.push(marker);
  });

  geocoder.geocode({'address' : "port of" + $('#des_port').val()}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      status2 = 1;
      gmap.setZoom(3);
      // gmap.setCenter(results[0].geometry.location);
      lat_des = results[0].geometry.location.lat();
      lng_des = results[0].geometry.location.lng();
      point_2 = new google.maps.LatLng(lat_des, lng_des);
      var marker = new google.maps.Marker({
        map: gmap,
        position: point_2,
        title: $('#des_port').val() //tooltip으로 표시됨
      });
      var LocBuffer_2;
      var BufferOptions_2 = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: gmap,
        center: point_2,
        radius: 5000
      };
      LocBuffer_2 = new google.maps.Circle(BufferOptions_2);
    }
    markers.push(marker);
  });

  // alert(GCLines.length);

  setTimeout(function(){
    if(RHLines.length > 0){
      for(var i =0;i< RHLines.length; i++){
        RHLines[i].setMap(null);
      }
      RHLines.length = 0;
    }

    var rhdis = distance_thumb_lines(lat_dep, lng_dep, lat_des, lng_des);
    // alert(rhdis);
    var path = [];
    path.push(new google.maps.LatLng(lat_dep, lng_dep));
    path.push(new google.maps.LatLng(lat_des, lng_des));
    var RhumbLine = new google.maps.Polyline({
      path: path,
      // geodesic: true,
      // editable: true,
      strokeColor: '#228B22',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      zIndex: 80000,
      map: gmap,
    })
    RHLines.push(RhumbLine);

    var infoRL = new google.maps.InfoWindow();
    infoRL.setPosition(path[1]);
    infoRL.setContent("Rhumb Line Dist:<font color='blue'>" + rhdis +"</font>NM");
    infoRL.open(gmap);
    Infowindows.push(infoRL);

    if(GCLines.length > 0){
      for(var i =0;i< GCLines.length; i++){
        GCLines[i].setMap(null);
      }
      GCLines.length = 0;
    }

    var GCLine = new google.maps.Polyline({
      path: path,
      geodesic: true,
      editable: true,
      strokeColor: '#FFA500',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      zIndex: 80000,
      map: gmap,
    });
    GCLines.push(GCLine);
    getWaypoints(lat_dep,lng_dep,lat_des,lng_des);
  }, 1000);
}

var Broute = [];

function searchRoute_db(){
  // alert("from: "+$('#dep').val() + " to: " +$('#dest').val());
  // alert("from: "+$('#dep_port').val() + " to: " +$('#des_port').val());
  $('#dist-tab').trigger("click");
  var dep = $('#dep').val();
  var depDate = $('#depDate').val();
  var depTime = $('#depTime').val();
  // alert("dep. date:"+depDate+"dep. time"+depTime);
  // alert(Waypoints.length);
  if(Waypoints.length > 0){
    for(var i =0;i< Waypoints.length; i++){
      Waypoints[i].setMap(null);
    }
    Waypoints.length = 0;
  }

  // for(var i =0;i< markers.length; i++){
  //   markers[i].setMap(null);
  // }
  // markers.length = 0;
  var destarr = $('#dest').val();
  var destsplit = destarr.split('|');
  var dest = destsplit[0];

  // alert(dest+","+Broute.length);
  if(Broute.length > 0){
    for(var i =0 ; i<Broute.length; i++){
      Broute[i].setMap(null);
    }
  }

  function fillzero(width, str){
    return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;//남는 길이만큼 0으로 채움
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // alert("res:"+xhttp.responseText);
      var pathCoords = [];
      var tablehtml = "";
      var obj = JSON.parse(xhttp.responseText);
      console.log("obj : " + JSON.stringify(obj));
      // var infoLatLng = null;
      var lastlen = obj.length-1;
      var ttldist = obj[lastlen].accdist;
      // alert("dis:"+ttldist);
      for(var i=0; i<obj.length; i++){

        var oneLatLng = new google.maps.LatLng(obj[i].lat, obj[i].lng);
        var symbol = 'M 0,-4 1.5,-2 1.5,4 -1.5,4 -1.5,-2 z'; // 마커 모양 
        pathCoords.push(oneLatLng);

        if(i==0 || i==obj.length-1){
          // alert(i);
          if(i == 0){
              var iurl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
              var text = "Dep: " + dep;
          }
          else if(i==obj.length-1){
              var iurl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
              var text = "Dest: "+dest;
          }
          var marker = new google.maps.Marker({
            position: oneLatLng,
            map: gmap,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: text,
            icon : {
              url: iurl,
              scale: 7,
            }
          });
        }
        else{
          var marker = new google.maps.Marker({
            position: oneLatLng,
            map: gmap,
            draggable: true,
            // animation: google.maps.Animation.DROP,
            title: "waypoint "+i+"\nlat: "+obj[i].lat+"\nlng: "+obj[i].lng+"\ncog: "+obj[i].crsnext.toFixed(0)+"\nttl dist: "+(obj[i].accdist/1.852).toFixed(2)+"miles",
            icon : {
              //path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, // 화살표 
              path: symbol, // 배 모양 
              scale: 2, // 마커 크기 
              //rotation: obj[i].crsnext, 
              rotation: obj[i].lat * obj[i].lng, // 각도 
              strokeColor: "#000069", // 테두리 색
              strokeWeight: 1, // 테두리 두께
              fillColor: "#28288C", // 반경 색
              fillOpacity: 0.6, // 반경 투명도
            }
            
          });
        }
        console.log("obj[i].crsnext : "+obj[i].crsnext);
        Waypoints.push(marker);
        var crsnext = fillzero(3,obj[i].crsnext.toFixed(0));
        tablehtml = tablehtml +
                    `<tr>
                      <td>`+i+`</td>
                      <td>`+obj[i].lat+`</td>
                      <td>`+obj[i].lng+`</td>
                      <td>`+crsnext+`</td>
                      <td>`+(obj[i].distnext).toFixed(1)+`</td>
                      <td>`+(obj[i].accdist).toFixed(1)+`</td>
                      <td>`+((ttldist-obj[i].accdist)).toFixed(1)+`</td>
                      <td>`+(((ttldist-obj[i].accdist))/$('#speed').val()).toFixed(2)+`</td>
                      </tr>`;
      }
      // alert("table:"+tablehtml);

      var routetable = `
      <table id="datatable" class="table table-striped table-bordered" style="width:100%" overflow="auto">
        <thead>
          <tr>
            <th>seq</th>
            <th>latitude</th>
            <th>longtude</th>
            <th>CTS (Course To Steer)</th>
            <th>DTG (Distance To Go)</th>
            <th>total distance (miles)</th>
            <th>remain distance</th>
            <th>TTG (Time To Go: hours)</th>
          </tr>
        </thead>
        <tbody>`
        +
        tablehtml
        +
        `
        </tbody>
      </table>
      `
      //DB를 읽어 routing point를 radioBox에 check한다.
      // alert("radio");
      $("input:radio[name='roupoint']:radio[value='suez']").prop('checked',true);
      document.getElementById("dist").innerHTML = routetable;
      // var totaldist = (ttldist-obj[0].accdist)/1.8;
      var totaldist = (ttldist-obj[0].accdist);
      // alert(totaldist);
      document.getElementById("ttldist").innerHTML = totaldist.toFixed(2)+" miles";
      var etahour = (totaldist/$('#speed').val()).toFixed(2);
      var etamsec = etahour*1000*60*60;
      alert("etahour:"+etamsec);
      var depdt = new Date(2022, 3, 2, 5, 0, 0, 0);
      alert("depdt:"+depdt.getTime());
      var newdt = etamsec+depdt.getTime();
      var newdt1 = new Date(newdt);
      alert("DateTime:"+newdt1.toString());

      document.getElementById("eta").innerHTML = (totaldist/$('#speed').val()).toFixed(2)+" hours" + '<br />' + newdt1.toString();

      var tmpcenter = parseInt(pathCoords.length/2);
      // gmap.setZoom(3);
      // alert(tmpcenter);
      gmap.setCenter(pathCoords[tmpcenter]);

      var Route = new google.maps.Polyline({
        path:  pathCoords,
        geodesic: true,
        editable: true,
        strokeColor: '#FFA500',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        zIndex: 80000,
        map: gmap,
      });
      Broute.push(Route);
      // alert("Great Circle Distance:"+obj[obj.length-1].dis/1852 + " NM");
      // var infoGC = new google.maps.InfoWindow();
      // infoGC.setPosition(infoLatLng);
      // infoGC.setContent("Great Circle Dist:<font color='red'>" + (obj[obj.length-1].dis/1852).toFixed(2) + "</font> NM");
      // infoGC.open(gmap);
      // Infowindows.push(infoGC);

    }
  }
  xhttp.open("GET","/getroute?dep="+dep+"&dest="+dest, true);
  xhttp.send();
}

function getWaypoints(lat_dep,lng_dep,lat_des,lng_des){
  // alert(lat_dep+","+lng_dep+","+lat_des+","+lng_des);

  for(var i =0;i< Waypoints.length; i++){
    Waypoints[i].setMap(null);
  }
  Waypoints.length = 0;
  if(Waypoints.length > 0){
  }
  // alert("Infowin:"+Infowindows.length);
  if(Infowindows.length > 2){
    for(var i =0;i< Infowindows.length-1; i++){
      Infowindows[i].close();
    }
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // alert(xhttp.responseText);
      var obj = JSON.parse(xhttp.responseText);
      var infoLatLng = null;
      for(var i=0; i<obj.length; i++){
        var oneLatLng = new google.maps.LatLng(obj[i].lat, obj[i].lng);
        if(i==obj.length-2){
          infoLatLng = oneLatLng;
        }
        var marker = new google.maps.Marker({
          position: oneLatLng,
          map: gmap,
          draggable: true,
          // animation: google.maps.Animation.DROP,
          title: "waypoint "+i+"\nlat: "+obj[i].lat+"\nlng: "+obj[i].lng+"\ncog: "+obj[i].azi+"\nttl dist: "+obj[i].dis/1000+"Kms",
          icon : {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 3,
            rotation: obj[i].azi,
            strokeColor: "#000069",
            strokeWeight: 2,
            fillColor: "#28288C",
            fillOpacity: 0.3,
          }
        });
        Waypoints.push(marker);
        // FactoryMapData.push([obj[i].factoryName, obj[i].Latitude, obj[i].Longitude, obj[i].yearPermitted, obj[i].yearClosed, obj[i].srcType]);
      }
      // alert("waypoints:"+Waypoints);
      alert("Great Circle Distance:"+obj[obj.length-1].dis/1852 + " NM");
      var infoGC = new google.maps.InfoWindow();
      infoGC.setPosition(infoLatLng);
      infoGC.setContent("Great Circle Dist:<font color='red'>" + (obj[obj.length-1].dis/1852).toFixed(2) + "</font> NM");
      infoGC.open(gmap);
      Infowindows.push(infoGC);
    }
  }
  xhttp.open("GET","/getWaypoints?lat1="+lat_dep+"&lng1="+lng_dep+"&lat2="+lat_des+"&lng2="+lng_des, true);
  xhttp.send();
}

function distance_thumb_lines(lat_dep, lng_dep, lat_des, lng_des){
  // alert(lat_dep+","+lng_dep+","+lat_des+","+lng_des);
  var tenEtwelfe = 1000000000000;
  var r = 3443.89849; //Radius of earth in NM.
  // const lat1 = lat_dep => (lat_dep*Math.PI)/180.0;
  // const lng1 = lng_dep => (lng_dep*Math.PI)/180.0;

  const lat1 = (lat_dep*Math.PI)/180.0;
  const lng1 = (lng_dep*Math.PI)/180.0;
  const lat2 = (lat_des*Math.PI)/180.0;
  const lng2 = (lng_des*Math.PI)/180.0;
  // alert(lat1 + "," + lng1);
  var dlat = Math.abs(lat2-lat1);
  var dlon = Math.abs(lng2-lng1);

  if(dlon > Math.PI){
    if(dlon > 0){
      dlon = -(2*Math.PI-dlon);
    }
    else{
      dlon = 2*Math.PI + dlon;
    }
  }
  var x = Math.log(Math.tan(Math.PI/4 + lat2/2) / Math.tan(Math.PI/4 + lat1/2));
  if(Math.abs(x) > tenEtwelfe){
    var q = dlat/dlon;
  }
  else{
    var q = Math.cos(lat1);
  }

  var dist = Math.sqrt(dlat*dlat + q*q*dlon*dlon) * r;
  alert("Rhumb Line Distance:" + dist +" NM");
  return dist.toFixed(2);
}

function calUKC(){
  // var queryData = $("form[name=ukcinput]").serialize();
  var destarr = $('#dest').val();
  if(destarr == ''){
    alert("please input destination port");
    return;
  }
  var destsplit = destarr.split('|');
  var dest = destsplit[0];
  // alert("speed:"+$('#speed').val());
  var queryData = "?arrport=" + dest + "&depfore="+ $("#depfore").val() +"&depmid="+ $("#depmid").val() +"&depaft="+ $("#depaft").val() +"&arrfore="+ $("#arrfore").val() +"&arrmid="+ $("#arrmid").val() + "&arraft=" + $("#arraft").val()
  + "&disp=" + $("#disp").val() + "&len=" + $("#len").val() + "&bre="+ $("#bre").val() +"&tpc="+$("#tpc").val()+"&density="+$("#density").val()+"&speed="+$("#speed").val()+"&arrDate="+$("#arrDate").val()+"&arrTime="+$("#arrTime").val();
  alert("q:"+queryData);
  $.ajax({
    type: 'GET',
    url: "http://1.220.41.11:5800/getukc"+queryData,
    // url: "http://52.79.229.96:5000/getukc"+queryData,//AWS,
    data: "test",
    dataType: 'json',
    success: function(data){
      // alert("q:"+url);
      document.getElementById('ukcresult').innerHTML = data.opensea[0].calUKC.toFixed(2) + " m";
      // alert("result:"+JSON.stringify(data));
      // alert(JSON.stringify(data.confinedsea[0].calUKC));
      // alert("calUKC:"+data.confinedsea[0].calUKC);
      var ukcresult = `
      <ul class="nav nav-tabs bar_tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="open-tab" data-toggle="tab" href="#open" role="tab" aria-controls="open" aria-selected="true">Open Sea</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="confined-tab" data-toggle="tab" href="#confined" role="tab" aria-controls="confined" aria-selected="false">Confined Sea</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade in active ukc-cal-wrap" id="open" role="tabpanel" aria-labelledby="open-tab">
          <div>
            <p class="ukc-cal-tb-tit">Calculationof expected UKC</p>
            <table class="table tb-border">
                <colgroup>
                  <col width="80%">
                  <col width="20%">
                </colgroup>
                <tr>
                    <td class="point-color">Anticipated controlling depth</td>
                    <td id="sumdepth" class="point-color bold">`+data.opensea[0].contdepth.toFixed(2)+`</td>
                </tr>
                <tr>
                    <td class="point-color">Calculated Maximum Draft</td>
                    <td id="maxdraft" class="point-color bold">`+data.opensea[0].maxdraft.toFixed(2)+`</td>
                </tr>
                <tr>
                    <td class="point-red">Calculated  UKC</td>
                    <td id="calUKC" class="point-red bold">`+data.opensea[0].calUKC.toFixed(2)+`</td>
                </tr>
            </table>
          </div>
          <div>
            <p class="ukc-cal-tb-tit">Anticipated controlling Depth</p>
            <table  class="table tb-border">
              <colgroup>
                <col width="80%">
                <col width="30%">
              </colgroup>
              <tr>
                  <td><small>Least depth found on chart or on other nautical publication</small></td>
                  <td id="mindepth">`+data.opensea[0].leastDepth+`</td>
                </tr>
              <tr>
                  <td><small>Tidal correction</small>&nbsp;<button id="viewDetails" type="button" class="ukc-btn">View</button></td>
                  <td id="tidalcor">`+data.opensea[0].tidalCor.toFixed(2)+`</td>
                </tr>
              <tr>
                  <td><small>Wave response allowance</small></td>
                  <td id="waveall">`+data.opensea[0].waveallow.toFixed(2)+`</td>
              </tr>
              <tr>
                  <td style="point-color">Anticipated controlling depth</td>
                  <td id="condepth" style="point-color">`+data.opensea[0].contdepth.toFixed(2)+`</td>
              </tr>
            </table>
          </div>
          <div>
            <p class="ukc-cal-tb-tit">Calculated Maximum  Draft</p>
            <table  class="table tb-border">
                 <colgroup>
                    <col width="40%">
                    <col width="20%">
                    <col width="20%">
                    <col width="20%">
                </colgroup>
                <tr>
                    <th><small>Items</small></th>
                    <th><small>Forward</small></th>
                    <th><small>Mid</small></th>
                    <th><small>Aft</small></th>
                </tr>
                <tr>
                    <td><small>Arr  Drafts</small></td>
                    <td id="arrmaxfore">`+$('#arrfore').val()+`</td>
                    <td id="arrmaxmid">`+$('#arrmid').val()+`</td>
                    <td id="arrmaxaft">`+$('#arraft').val()+`</td>
                </tr>
                <tr>
                    <td><small>F W A</small></td>
                    <td id="fwafore">`+data.opensea[0].fwaf+`</td>
                    <td id="fwamid">`+data.opensea[0].fwam+`</td>
                    <td id="fwaaft">`+data.opensea[0].fwaa+`</td>
                </tr>
                <tr>
                    <td><small>Squat</small>&nbsp;<button type="button" class="ukc-btn" id="viewSquat">View</button></td>
                    <td ID="sqtfore">`+data.opensea[0].squatf.toFixed(3)+`</td>
                    <td id="sqtmid">`+data.opensea[0].squatm.toFixed(3)+`</td>
                    <td id="sqtaft">`+data.opensea[0].squata.toFixed(3)+`</td>
                </tr>
                <tr>
                    <td style="point-color">Cal max drafts</td>
                    <td id="maxdfore" style="point-color"></td>
                    <td id="maxdmid" style="point-color"></td>
                    <td id="maxdaft" style="point-color">`+data.opensea[0].maxdraft.toFixed(3)+`</td>
                </tr>
            </table>
          </div>
        <div class="tab-pane fade" id="confined" role="tabpanel" aria-labelledby="confined-tab">
        </div>
      </div>
      `;
      // alert("mapDepths:"+JSON.stringify(data.mapDepths));

      //추후에 데이터베이스로 수정한다.
      var latlng;
      var mapcenter, mapzoom;
      if(dest.trim() == "Qingdao"){
        latlng = new google.maps.LatLng(36.089, 120.312);
        mapcenter = new google.maps.LatLng(36.042, 120.359);
        mapzoom = 12;
      }
      else if(dest.trim() == "Zhangjiagang" ){
        latlng = new google.maps.LatLng(32.0255,120.446);
        mapcenter = new google.maps.LatLng(31.675, 120.936);
        mapzoom = 10;
      }
      // alert("latlng"+latlng);
      gmap.setCenter(mapcenter);
      gmap.setZoom(mapzoom);

      // 구글 맵 마카 표시: API에서 수심데이터 받아서 화면에 출력한다.
      var circleOptions = {
        strokeColor: "#F4D03F",
        strokeOpacity: 0.5,
        strokeWeight: 2.5,
        fillColor: "#0000ff",
        fillOpacity: 0.5,
        map: gmap,
        // center: new google.maps.LatLng(36.097,120.327333333333),
        // center: new google.maps.LatLng(MapRouteUQCoords[data.length-1]),
        // center: MapRouteUQCoords[data.length-1],
        center: latlng,
        zIndex: 70000,
        radius: 3*1852,
      };
      ctrlCircles = new google.maps.Circle(circleOptions);
      ctrlCircles.setMap(gmap);

      for(var i=0; i< data.mapDepths.length; i++){
        var mapdepth = data.mapDepths[i].depth;
        var arrlat = data.mapDepths[i].lat;
        var arrlng = data.mapDepths[i].lng;
        if(mapdepth > -5)  var dcolor = "#FF0000";
        else var dcolor = "#ADFF2F";
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(arrlat, arrlng),
          map: gmap,
          label: {
            text: String(mapdepth),
            color: "#000000",
            fontSize: "10px",
            fontWeight: "bold",
          },
          icon:{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            rotation: 30,
            strokeColor: "#69F0AE",
            strokeWeight: 1,
            fillColor: dcolor,
            fillOpacity: 0.7,
          },
          zindex: 100000,
        });
      }

      document.getElementById("ukcoutput").innerHTML = ukcresult;
      document.getElementById("arrDateTime").innerHTML = $("#arrDate").val() + "  " + $("#arrTime").val();
      $('#open-tab').trigger("click");
    },
  })
}

function calCII(){
  var ship_type = document.getElementById("shiptype").value;
  var dwt = document.getElementById("dwt").value;
  // var gt = document.getElementById("gt").value;
  // var len = $("input[name='fueltype']:checked").length;
  var len1 = document.getElementsByName("fueltype").length;
  var fuel_type_list = [];
  for(var i=0;i < len1; i++){
    if(document.getElementsByName("fueltype")[i].checked == true){
      var val = document.getElementsByName("fueltype")[i].value;
      fuel_type_list.push(val);
      break;
    }
  }
  // var fuleTypes = [];
  // if(len > 1){
  //   $("input[name='fueltype']:checked]").each(function(e){
  //     var value = $(this).val();
  //     fuelTypes.push(value);
  //   })
  // }

  // var fuel_amount_list = [];
  // for(i=0; i<fuel_type_list.length; i++){
  //     fuel_amount_list.push(document.getElementById("fuel_type" + i).value);
  // }
  var distance_sailed = document.getElementById("distance_sailed").value;
  var fuel_amount_list = []
  fuel_amount_list.push(document.getElementById("fuel_amount").value);
  var gt=0;
  data = {"ship_type":ship_type, "DWT":dwt, "GT":gt, "fuel_type":fuel_type_list, "fuel_amount":fuel_amount_list, "distance_sailed":distance_sailed};
  alert("data1:"+ship_type+","+dwt+","+fuel_type_list+","+fuel_amount_list+","+distance_sailed);
  alert("data2:"+data);
  $.ajax({
      type:'POST',
      contentType:'application/json; charset=utf-8',
      url: 'http://1.220.41.11:7500/api/',
      dataType: 'json',
      data: JSON.stringify(data),
      success: function(res){
          alert("SUCCESS: " + res);
          // document.getElementById('required_cii').innerHTML = "Required CII: " + res[0];
          // document.getElementById('required_cii_list').innerHTML = "Required CII (2023-2026): " + JSON.stringify(res[1]);
          document.getElementById('attcii').innerHTML = res[2]+" (Req: "+res[0]+" / "+res[3]+")";
          if(res[3]=='A'||res[3]=='B'||res[3]=='C'){
            document.getElementById('ciioutput').innerHTML = "<br />"+"Attained CII: " + res[2] + "<br />" + "Required CII: " + res[0] + "<br />" + "<font color='green'><h2>"+res[3]+"</h2></font>";
          }
          else {
            document.getElementById('ciioutput').innerHTML = "<br />"+"Attained CII: " + res[2] + "<br />" + "Required CII: " + res[0] + "<br />" + "<font color='red'><h2>"+res[3]+"</h2></font>";
          }
      },
      error: function(xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          alert("ERROR: " + err.Message + error);
      },
  });
}

function calEEXI(){
  alert("caleexi");
  var ship_type = document.getElementById("shiptype_x").value;
  var dwt = document.getElementById("dwt_x").value;
  var gt = document.getElementById("gt_x").value;
  var mcr = document.getElementById("mcr_x").value;
  var mpp = document.getElementById("mpp_x").value;
  var propulsion_type  = document.getElementById("pt_x").value;
  var SFC_main = document.getElementById("mesfc_x").value;
  var SFC_auxiliary = document.getElementById("aesfc_x").value;
  var fuel_type_main = document.getElementById("meft_x").value;
  var fuel_type_auxiliary = document.getElementById("aeft_x").value;
  var reference_speed = document.getElementById("speed").value;
  // var ice_clasㄴ = document.getElementsByName("gt_x").value;
  var block_coefficient = document.getElementById("cb_x").value;
  var data = {"ship_type":ship_type, "DWT":dwt, "GT":gt, "MCR":mcr, "MPP":mpp, "propulsion_type":propulsion_type, "SFC_main":SFC_main, "SFC_auxiliary":SFC_auxiliary, "fuel_type_main":fuel_type_main, "fuel_type_auxiliary":fuel_type_auxiliary, "reference_speed":reference_speed, "ice_class":0, "block_coefficient":block_coefficient}
  alert("data:"+JSON.stringify(data));
  $.ajax({
      type:'POST',
      contentType:'application/json; charset=utf-8',
      url: 'http://1.220.41.11:7501/api/',
      dataType: 'json',
      data: JSON.stringify(data),
      success: function(res){
          alert("SUCCESS: " + res);
          // document.getElementById('required_eexi').innerHTML = "Required EEXI: " + res[1];
          document.getElementById('atteexi').innerHTML = res[0]+" (Req: "+res[1]+")";
          document.getElementById('eexioutput').innerHTML = "<br />"+"Attained EEXI: " + res[0] + "<br />" + "Required EEXI: " + res[1] + "<br />";
      },
      error: function(xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          alert("ERROR: "+ err);
      },
  });
}
