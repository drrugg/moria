// Moria marker file, for the MapCrafter map
//
// Based on file and docs from https://docs.mapcrafter.org/builds/stable/markers.html#manually-specifying-markers
//

// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
    // just one example marker group
    {
        "id" : "signs",
        "name" : "Signs",
        "icon" : "sign.png",
        "iconSize" : [32, 32],
        "showDefault" : true,

        "markers" : {
            "world" : [
                {"pos" : [100, 100, 64], "title" : "Test1"},
                {"pos" : [100, 200, 64], "title" : "Test2"},
                {"pos" : [500, 30, 64], "title" : "Test2"},
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
            "world" : [
                {"pos" : [-293, 71, 3861], "title" : "drrugg's base"},
            ],
            "world2" : [
                {"pos" : [-38, 5, 355], "title" : "drrugg"},
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
