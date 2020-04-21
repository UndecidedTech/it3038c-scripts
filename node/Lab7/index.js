const sharp = require("sharp");
const args = require("args");
const sizeOf = require("image-size");
//use 4 sharp methods

//console.log(process.argv)

args
    .option("image", "Path to the image file")
    .command("shrink", "Shrink an image", resizeImage)
    .command("convert", "Convert Image type")
    .command("create", "Create an image")
    .command("rotate", "Rotate an image")
    .command("blur", "Blur an image")



const flags = args.parse(process.argv);

function resizeImage() {
    let dimensions = sizeOf(flags.image);

    console.log(dimensions);
    sharp(flags.image)
        .resize(

        )

}


if (flags.image) {
    console.log("Path to image: ", flags.image);
    
} else {
    console.log("Please supply an image path.");
}
