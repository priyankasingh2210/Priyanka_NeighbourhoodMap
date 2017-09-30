'use strict';
/*jshint strict:false */

var map, resetMap;
/*global ko*/
/*global google*/
/*globals $:false */
/*jshint unused:false*/


/* Hardcoding top 12 busiest railway stations in india - our data - model*/
/** This list is from 
http://www.walkthroughindia.com/walkthroughs/trains/top-12-busiest-railway-stations-india/ */

var railways = [
    {
        title: "Howrah Junction Railway Station",
        lat: 22.5839456,
        lng: 88.3434068,
        streetAddress: "Station Rd, Howrah Railway Station ",
        cityAddress: "Howrah, West Bengal 711101",
        visible: ko.observable(true),
        id: "nav0",
        showIt: true
    },{
        title: "New Delhi Railway Station",
        lat: 28.615854,
        lng: 77.2186094,
        streetAddress: "Bhavbhuti Marg, Kamla Market, Ajmeri Gate",
        cityAddress: "New Delhi, Delhi 110006",
        visible: ko.observable(true),
        id: "nav1",
        showIt: true
    },{
        title: "Kanpur Central",
        lat: 26.453855,
        lng: 80.3511946,
        streetAddress: "Central Station,, Jaipuria Rd, Rail Bazar, Mirpur, Kanpur",
        cityAddress: "Kanpur, Uttar Pradesh 208004",
        visible: ko.observable(true),
        id: "nav2",
        showIt: true
    },{
        title: "Kalyan Junction",
        lat : 19.2354082,
        lng : 73.131024,
        streetAddress: "421301, Kalyan Building, PB Marg, Grant Road East, Bharat Nagar, Grant Road",
        cityAddress: "Mumbai, Maharashtra 400007",
        visible: ko.observable(true),
        id: "nav3",
        showIt: true
    },{
        title: "Patna Railway Station",
        lat: 25.6033028,
        lng: 85.137137,
        streetAddress: "Station Rd, Fraser Road Area, ",
        cityAddress: "Patna, Bihar 800001",
        visible: ko.observable(true),
        id: "nav4",
        showIt: true
    },{
        title: "Vijayawada Railway Station",
        lat: 16.5186249,
        lng: 80.6198977,
        streetAddress: "Gandhi Nagar, Vijayawada",
        cityAddress: "Vijayawada, Andhra Pradesh 520001",
        visible: ko.observable(true),
        id: "nav5",
        showIt: true
    },{
        title: "Allahabad Junction",
        lat: 25.4456773,
        lng: 81.83024879999999,
        streetAddress: "Civil Lines",
        cityAddress: "Allahabad, Uttar Pradesh 211001",
        visible: ko.observable(true),
        id: "nav6",
        showIt: true
    },{
        title: "Itarsi Junction",
        lat: 22.6082196,
        lng: 77.7670225,
        streetAddress: "Foot Over Bridge, Venkatesh Colony, Itarsi",
        cityAddress: "Itarsi, Madhya Pradesh 461122",
        visible: ko.observable(true),
        id: "nav7",
        showIt: true
    },{
        title: "Vadodara Railway Station",
        lat: 22.3107749,
        lng: 73.18093,
        streetAddress: "Maharaja Sayajirao University, Alkapuri",
        cityAddress: "Vadodara, Gujarat 390020",
        visible: ko.observable(true),
        id: "nav8",
        showIt: true
    },{
        title: "Lucknow Railway Station",
        lat: 26.8311093,
        lng: 80.92439760000001,
        streetAddress: "Kanpur Road, Preeti Nagar, Railway Colony, Charbagh, Lucknow",
        cityAddress: "Lucknow, Uttar Pradesh, 226001",
        visible: ko.observable(true),
        id: "nav9",
        showIt: true
    },{
        title: "Mughal Sarai Junction",
        lat: 25.2784626,
        lng: 83.1199829,
        streetAddress: "Mughal Sarai",
        cityAddress: "Mughal Sarai, Uttar Pradesh 232101",
        visible: ko.observable(true),
        id: "nav10",
        showIt: true
    },{
        title: "Chhatrapati Shivaji Terminus",
        lat: 18.9398208,
        lng: 72.8354676,
        streetAddress: "Chhatrapati Shivaji Terminus Area, Fort, Mumbai",
        cityAddress: "Mumbai, Maharashtra 400001",
        visible: ko.observable(true),
        id: "nav11",
        showIt: true
    }
];



/* Function that alert error if google map load fails */
function googleError(){
    window.alert("ERROR: Error in loading google maps");
}

/* Initializing map, markers */
function initMap() {

    var myLatlng = new google.maps.LatLng(28.615854,77.2186094);
    var mapOptions = {
        zoom: 6,
        center: myLatlng,
        disableDefaultUI: true
    };

    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(13.7685215,71.7225677), //SW coordinates here
        new google.maps.LatLng(28.7685215,88.7225677) //NE coordinates here
    );

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.fitBounds(bounds);

    setMarkers(railways);
    setMapWithMarker();

    /* Function to reset the map zoom and set center */
    resetMap = function(){
        map.fitBounds(bounds);
    };

    $(window).resize(function(){
        map.fitBounds(bounds);
    });
}

/* Controlling the visibility of marker based on the 'showIt' property */
function setMapWithMarker() {
    for (var i = 0; i < railways.length; i++) {
        if(railways[i].showIt === true) {
            railways[i].locMarker.setMap(map);
        } else {
            railways[i].locMarker.setMap(null);
        }
    }
}


function makeWikkiCall(i, wikiUrl, location){
    var wikiRequestTimeout = setTimeout(function() {
        $('.show-error').html('ERROR: Failed to load wikipedia data - Railways details will not show up! Sorry for the inconvenience caused.');
    }, 5000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp"
    }).done(function(response){
        var article = response[2][0];
        var pageLink = response[3][0];
        location[i].contentString =
        '<strong>'+ location[i].title + '</strong><br><p>' + location[i].streetAddress+ '<br>' + location[i].cityAddress + '<br></p><p>' + article +
        '<p><a href=\"'+pageLink+'\" target=\"_blank\"> Wikipedia link </a><br></p></p><p>Source: Wikipedia</p>';
        clearTimeout(wikiRequestTimeout);
    }).error(function(){
        location[i].contentString = "wiki network call failed";
    });
}


function getInfoWindow(marker,location, infowindow){
    return function(){
        marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(null);
                }, 2400);
                infowindow.setContent(location.contentString);
                infowindow.open(map,this);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
    };
}

function getPopupWindow(marker,location, infowindow){
    return function(){
        marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    marker.setAnimation(null);
                }, 2200);
                infowindow.setContent(location.contentString);
                infowindow.open(map,marker);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
    };
}

/* Setting markers on map and attaching content to each of their info windows */
function setMarkers(location) {
    var img = 'img/trains32.png';
    for (var i = 0; i < location.length; i++) {
        location[i].locMarker = new google.maps.Marker({
            position: new google.maps.LatLng(location[i].lat, location[i].lng),
            map: map,
            animation: google.maps.Animation.DROP,
            title: location.title,
            icon:img
        });

        var railwayTitle = location[i].title;
        var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +railwayTitle + '&format=json&callback=wikiCallback';

        makeWikkiCall(i, wikiUrl, location);

        /* info window initialization and setting content to each marker's info window */
        var infowindow = new google.maps.InfoWindow({maxWidth: 200});

        var setInfoWindow = getInfoWindow(location[i].locMarker,location[i], infowindow);
        new google.maps.event.addListener(location[i].locMarker, 'click', setInfoWindow);

        /* info window call when clicked on railways menu item */
        var searchNav = $('#nav' + i);

        var popUpwindow = getPopupWindow(location[i].locMarker,location[i], infowindow);
        searchNav.click(popUpwindow);
    }
}

/* Function for toggling the menu */
function slideToggle() {
    /*jshint validthis:true */
    $(this).toggleClass('toggled');
    $( "#listing" ).toggle( "slow", function() {
        // Animation complete.
    });
}

/* Our view model */
function viewModel() {
    /*jshint validthis:true */
    var self = this;
    /*jshint validthis:true */
    this.locMarkerSearch = ko.observable('');
    ko.computed(function() {
        var search = self.locMarkerSearch().toLowerCase();
        return ko.utils.arrayFilter(railways, function(railways) {
            if (railways.title.toLowerCase().indexOf(search) >= 0) {
                railways.showIt = true;
                return railways.visible(true);
            } else {
                railways.showIt = false;
                setMapWithMarker();
                return railways.visible(false);
            }
        });
    });
}

// Activates knockout.js
ko.applyBindings(new viewModel());

$(window).resize(function(){
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
        $( "#listing" ).slideDown( "slow", function() {
            // Animation complete.
        });
    }
});
