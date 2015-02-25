angular.module('mobility')

.factory('Incidents', function() {
  // Traffic API mock data
  var incidents = [
    {
      "id": 0,
      "date": "2/9/2015, 2:43 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "ALA MOANA & CORAL ST",
      "location": null,
      "area": "KAKAAKO",
      "lat": 21.297355,
      "lng": -157.861581
    },
    {
      "id": 1,
      "date": "2/9/2015, 2:41 PM",
      "code": "632",
      "type": "HAZARDOUS DRIVER",
      "address": "N KAINALU DR & UILAMA ST",
      "location": null,
      "area": "KAILUA",
      "lat": 21.412146,
      "lng": -157.746353
    },
    {
      "id": 2,
      "date": "2/9/2015, 3:01 PM",
      "code": "633",
      "type": "STALLED/HAZARDOUS VEHICLE",
      "address": "KALANI/KEAHOLE",
      "location": null,
      "area": null,
      "lat": null,
      "lng": null
    },
    {
      "id": 3,
      "date": "2/9/2015, 3:00 PM",
      "code": "630",
      "type": "TRAFFIC NUISANCE OR PARKING VIOLATION",
      "address": "KAMEHAMEHA HWY & KULEANA RD",
      "location": null,
      "area": "PEARL CITY",
      "lat": 21.389531,
      "lng": -157.959728
    },
    {
      "id": 4,
      "date": "2/9/2015, 2:57 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "99058X KAM HWY",
      "location": "MAKALAPA GATE PH",
      "area": "PEARL HBR",
      "lat": 21.413385,
      "lng": -157.800201
    },
    {
      "id": 5,
      "date": "2/9/2015, 3:21 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "AUMOKU ST & KANEOHE BAY DR",
      "location": null,
      "area": "KANEOHE",
      "lat": 21.403316,
      "lng": -157.797841
    },
    {
      "id": 6,
      "date": "2/9/2015, 3:11 PM",
      "code": "633",
      "type": "STALLED/HAZARDOUS VEHICLE",
      "address": "14X H1W FWY",
      "location": "H1W RADFORD PED OP",
      "area": "AIEA",
      "lat": null,
      "lng": null
    },
    {
      "id": 7,
      "date": "2/9/2015, 3:38 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "KAHEKILI HWY & KAHUHIPA ST",
      "location": null,
      "area": "KANEOHE",
      "lat": 21.41319,
      "lng": -157.810308
    },
    {
      "id": 8,
      "date": "2/9/2015, 3:38 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "45072X KEAAHALA RD",
      "location": "WINDWARD COMM COLLEG",
      "area": "KANEOHE",
      "lat": 21.411072,
      "lng": -157.807561
    },
    {
      "id": 9,
      "date": "2/9/2015, 3:37 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "87111X PAAKEA RD",
      "location": "MIKILUA GROCERY",
      "area": "MAILI",
      "lat": 21.424496,
      "lng": -158.166762
    },
    {
      "id": 10,
      "date": "2/9/2015, 3:35 PM",
      "code": "632",
      "type": "HAZARDOUS DRIVER",
      "address": "NUUANU AVE & PALI HWY",
      "location": null,
      "area": "NUUANU",
      "lat": null,
      "lng": null
    },
    {
      "id": 11,
      "date": "2/9/2015, 3:26 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "KALAKAUA AVE & KANUNU ST",
      "location": null,
      "area": "HONOLULU",
      "lat": 21.294117,
      "lng": -157.836915
    },
    {
      "id": 12,
      "date": "2/9/2015, 3:46 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "72X 8TH AVE",
      "location": null,
      "area": "KAIMUKI",
      "lat": null,
      "lng": null
    },
    {
      "id": 13,
      "date": "2/9/2015, 3:45 PM",
      "code": "630",
      "type": "TRAFFIC NUISANCE OR PARKING VIOLATION",
      "address": "PALI HWY & WAOKANAKA ST",
      "location": null,
      "area": "NUUANU",
      "lat": 21.342531,
      "lng": -157.832538
    },
    {
      "id": 14,
      "date": "2/9/2015, 3:44 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "174X KEALIA DR",
      "location": null,
      "area": "KALIHI",
      "lat": 21.335616,
      "lng": -157.859059
    },
    {
      "id": 15,
      "date": "2/9/2015, 4:06 PM",
      "code": "633",
      "type": "STALLED/HAZARDOUS VEHICLE",
      "address": "20X H1E FWY",
      "location": "H1E LIKELIKE OFF",
      "area": "KALIHI",
      "lat": null,
      "lng": null
    },
    {
      "id": 16,
      "date": "2/9/2015, 4:22 PM",
      "code": "560",
      "type": "TRAFFIC INCIDENT - NO COLLISION",
      "address": "421X BOUGAINVILLE AVE",
      "location": null,
      "area": "KALAELOA",
      "lat": 21.326741,
      "lng": -158.056985
    },
    {
      "id": 17,
      "date": "2/9/2015, 4:10 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "330X AOLELE ST",
      "location": null,
      "area": "AIRPORT",
      "lat": 21.332778,
      "lng": -157.910043
    },
    {
      "id": 18,
      "date": "2/9/2015, 4:53 PM",
      "code": "632",
      "type": "HAZARDOUS DRIVER",
      "address": "13X H1W FWY",
      "location": "H1W KAIMAKANI OP",
      "area": "AIEA",
      "lat": null,
      "lng": null
    },
    {
      "id": 19,
      "date": "2/9/2015, 4:47 PM",
      "code": "550",
      "type": "MOTOR VEHICLE COLLISION",
      "address": "99X KALAPAKI ST",
      "location": null,
      "area": "HAWAII KAI",
      "lat": 21.302793,
      "lng": -157.683965
    }
];

  return {
    all: function() {
      return incidents;
    },
    remove: function(incident) {
      incidents.splice(incidents.indexOf(incident), 1);
    },
    get: function(incidentId) { // State params id is a string value
      for (var i = 0; i < incidents.length; i++) {
        if (incidents[i].id === parseInt(incidentId)) {
          return incidents[i];
        }
      }
      return null;
    }
  }
});
