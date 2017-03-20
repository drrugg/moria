// Moria marker file, for the MapCrafter map
//
// Based on file and docs from https://docs.mapcrafter.org/builds/stable/markers.html#manually-specifying-markers
//

// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
    // just one example marker group
    {
        // id of the marker group, without spaces/other special chars
        "id" : "signs",
        // name of the marker group, displayed in the webinterface
        "name" : "Signs",
        // icon of the markers belonging to that group (optional)
        "icon" : "sign.png",
        // size of that icon
        "iconSize" : [32, 32],
        // whether this marker group is shown by default (optional)
        "showDefault" : true,
        // markers of this marker group...
        "markers" : {
            // ...in the world "world"
            "world" : [
                // example marker, pretty format:
                {
                    // position ([x, z, y])
                    "pos" : [35, -21, 64],
                    // title when you hover over the marker
                    "title" : "Sign1",
                    // text in the marker popup window
                    "text" : "Hello."
                    // override the icon of a single marker (optional)
                    "icon" : "player.png",
                    // override the size of the marker icon (optional)
                    "iconSize" : [16, 32]
                },
                // more markers:
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
        "icon" : "home.png",
        "iconSize" : [32, 32],
        "markers" : {
            "world" : [
                {"pos" : [42, 73, 64], "title" : "Steve's home"},
            ],
            "world2" : [
                {"pos" : [73, 42, 64], "title" : "Steve's other home"},
            ],
        },
    },
];
