const sharp = require("sharp");
const yargs = require("yargs");
const sizeOf = require("image-size");
const uniqid = require("uniqid")
//use 4 sharp methods

//resize
//rotate
//output
//blur
//console.log(process.argv)

const argv = yargs
    .command("imgmodify", "Provide an image file", {
        image: {
            description: "Image path to use",
            alias: "i",
            type: "string"
        },
        width: {
            description: "The width to use",
            alias: "w",
            type: "number"
        },
        height: {
            description: "The height to use",
            alias: "h",
            type: "number"
        },
        type: {
            description: "Filetype extension to output as",
            alias: "t",
            type: "string"
        },
        rotate: {
            description: "Degrees to rotate by",
            alias: "r",
            type: "number"
        },
        blur: {
            description: "Blur an image (true or leave out)",
            alias: "b",
            type: "boolean"
        }
    })
    .argv;


// function resizeImage() {
//     let dimensions = sizeOf(flags.image);

//     console.log(dimensions);
//     sharp(flags.image)
//         .resize()

// }

if (argv._.includes("imgmodify")) {
    const file = argv.image.split("/").pop();
    const filename = file.split(".")[0];
    const extension = argv.type || file.split(".").pop();

    console.log("File Stuff: ", file, extension);
    console.log("entered here", argv);

    var sharpImage = sharp(argv.image);


    if (typeof(argv.width) !== "undefined" && typeof(argv.height) !== "undefined") {
        console.log("checks passed");
        
        sharpImage = sharpImage.resize(argv.width, argv.height);
    }


    if (typeof (argv.rotate) !== "undefined") {
        sharpImage = sharpImage.resize(argv.width, argv.height).rotate(argv.rotate);
    }
        
    if (typeof(argv.rotate) !== "undefined" && typeof(argv.width) === "undefined" && typeof(argv.height) === "undefined" ) {
        sharpImage = sharpImage.rotate(argv.rotate);
    }

    if (typeof(argv.blur) !== "undefined") {
        sharpImage = sharpImage.blur();
    }

    if (typeof(argv.type) !== "undefined") {
        sharpImage = sharpImage.toFile(uniqid(filename, `.${argv.type}`));
    } else {
        sharpImage = sharpImage.toFile(uniqid(filename, `.${extension}`));
    }



}


// if (flags.image) {
//     console.log("Path to image: ", flags.image);

    
// } else {
//     console.log("Please supply an image path.");
// }
