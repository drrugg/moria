// Moria marker file, for the MapCrafter map
//
// Based on file and docs from https://docs.mapcrafter.org/builds/stable/markers.html#manually-specifying-markers
//

// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
    // just one example marker group
    {
        "id" : "freebies",
        "name" : "Freebies",
        "icon" : "sign.png",
        "iconSize" : [32, 32],
        "showDefault" : true,

        "markers" : {
            "moria" : [
                {"pos" : [-361, 30, 259], "title" : "Guardian Farm"},
                {"pos" : [708, 63, 518], "title" : "Darkling's Freebies"},
            ],
        },
    },

    // another marker group
    {
        "id" : "homes",
        "name" : "Homes",
//        "icon" : "home.png",
//        "iconSize" : [32, 32],
        "markers" : {
            "moria" : [
                {"pos" : [-293, 71, 3861], "title" : "drrugg's base"},
                {"pos" : [-361, 30, 259], "title" : "Guardian Farm"},
                {"pos" : [708, 63, 518], "title" : "Darkling's Base"},
                {"pos" : [708, 63, 518], "title" : "Darkling's Freebies"},
            ],
            "moria-nether-tunnels" : [
                {"pos" : [-38, 5, 355], "title" : "Portal to drrugg"},
                {"pos" : [-45, 5, 28], "title" : "Portal to Guardian Farm"},
                {"pos" : [88, 5, 16], "title" : "Portal to TimeTraveller"},
                {"pos" : [86, 5, 118], "title" : "Stairs to Pooka/Darkling"},
                {"pos" : [193, 5, 257], "title" : "Portal to XP Farm"},
                {"pos" : [87, 42, 71], "title" : "Portal to Darkling"},
            ],
        },
    },
    
];


// Marker Example
//{
//        "id" : "signs",        // id of the marker group, without spaces/other special chars
//        "name" : "Signs",        // name of the marker group, displayed in the webinterface
//        "icon" : "sign.png",        // icon of the markers belonging to that group (optional)
//        "iconSize" : [32, 32],       // size of that icon
//        "showDefault" : true,        // whether this marker group is shown by default (optional)
//
//        // markers of this marker group...
//        "markers" : {
//            // ...in the world "world":[],"world2":[] etc
//            "world" : [
//                {                           // example marker, pretty format:
//                    "pos" : [35, -21, 64],  // position ([x, z, y])
//                    "title" : "Sign1",      // title when you hover over the marker
//                    "text" : "Hello."       // text in the marker popup window
//                    "icon" : "player.png",  // override the icon of a single marker (optional)
//                    "iconSize" : [16, 32]   // override the size of the marker icon (optional)
//                },
//
//                // more markers:
//                {"pos" : [100, 100, 64], "title" : "Test1"},
//                {"pos" : [100, 200, 64], "title" : "Test2"},
//                {"pos" : [500, 30, 64], "title" : "Test2"},
//            ],
//        },
//    }
