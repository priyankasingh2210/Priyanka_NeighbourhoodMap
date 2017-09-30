
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