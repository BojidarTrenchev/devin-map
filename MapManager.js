var map;
var allMarkers;
var openBoxNum;
var isBoxOpen;
var coords = [
  ["Триградско ждрело", { lat: 41.615111,lng: 24.386585}, "zhdrela"],
  ["Дяволско гърло", { lat: 41.614138,lng: 24.379352}, "cave"],
  ["Харамийска дупка", { lat: 41.616198, lng: 24.381428}, "cave"],
  ["Ягодинска пещера", { lat: 41.628768,lng: 24.329664}, "cave"],
  ["Мечешкия водопад", { lat: 41.7513778,lng: 24.3434278}, "other"],
  ["Музей на балканската пъстърва", { lat: 41.700927,lng: 24.399584}, "museum"]
];

$(".main").hide();

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.612170,lng: 24.366892},
    streetViewControl: false,
    zoom: 14
  });

  SetMarkers();

    google.maps.event.addListener(allMarkers[0], 'click', function(){
      allMarkers[0].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#a", 0);
      //infowindow.open(map, marker1);
    });
    google.maps.event.addListener(allMarkers[1], 'click', function(){
      allMarkers[1].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#b", 1);
    });
    google.maps.event.addListener(allMarkers[2], 'click', function(){
      allMarkers[2].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#c", 2);
    });
    google.maps.event.addListener(allMarkers[3], 'click', function(){
      allMarkers[3].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#d", 3);
    });
    google.maps.event.addListener(allMarkers[4], 'click', function(){
      allMarkers[4].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#e", 4);
    });
    google.maps.event.addListener(allMarkers[5], 'click', function(){
      allMarkers[5].setAnimation(google.maps.Animation.BOUNCE);
      ShowBox("#f", 5);
    });
  }

  $(document).ready(function() {
  $(".closeButton").click(function() {
    FadeOutBox();
    isBoxOpen= false;
  });
  });

  function FadeInBox(id){
    $(id).fadeIn();
    $(id).fadeIn("slow");
    $(id).fadeIn(3000);
    isBoxOpen= true;
  }

  function FadeOutBox(){
    $(".main").fadeOut();
    $(".main").fadeOut("slow");
    $(".main").fadeOut(3000);
    allMarkers[openBoxNum].setAnimation(null);
    $("#legend").show();
  }

  function ShowBox(id, boxNum){
    if (isBoxOpen){
      FadeOutBox();
    }
    openBoxNum = boxNum;
    FadeInBox(id);
    $("#legend").hide();
  }

  function SetMarkers(){
    allMarkers = new Array(coords.length);
    var i;
    var nameOfPNG = "marker";
    var type;
    for (i = 0; i < allMarkers.length; i++){
      if(coords[i][2] == "other"){
        type ="mark-other.png"
      }
      else if(coords[i][2] == "cave"){
        type ="mark-caves.png"
      }
      else if(coords[i][2] == "zhdrela"){
        type ="mark-zhdrela.png"
      }
      else if(coords[i][2] == "museum"){
        type ="mark-museums.png"
      }
      allMarkers[i] = new google.maps.Marker({
        position: coords[i][1],
        map: map,
        title: coords[i][0],
        icon: type
        });
    }
  }
