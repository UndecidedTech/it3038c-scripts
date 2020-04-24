const sharp = require("sharp");
const yargs = require("yargs");
const sizeOf = require("image-size");
const uniqid = require("uniqid")
//use 4 sharp methods

//resize
//rotate


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
    const filename = argv.image.split("/").pop();
    const extension = argv.type || filename.split(".").pop();

    console.log("File Stuff: ", filename, extension);
    console.log("entered here", argv);



    if (typeof(argv.width) !== "undefined" && typeof(argv.height) !== "undefined") {
        console.log("checks passed");
        
        if (typeof (argv.rotate) !== "undefined") {
            sharp(argv.image).resize(argv.width, argv.height).rotate(argv.rotate).toFile(uniqid(filename, `.${extension}`));
        } else {
            sharp(argv.image).resize(argv.width, argv.height).toFile(uniqid(filename, `.${extension}`));
        }
        
    } else if (typeof(argv.rotate) !== "undefined" && typeof(argv.width) === "undefined" && typeof(argv.height) === "undefined" ) {
        sharp(argv.image).rotate(argv.rotate).toFile(uniqid(filename, `.${extension}`))
    }

}


// if (flags.image) {
//     console.log("Path to image: ", flags.image);

    
// } else {
//     console.log("Please supply an image path.");
// }
