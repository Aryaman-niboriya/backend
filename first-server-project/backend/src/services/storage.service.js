const ImageKit=require("@imagekit/nodejs")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "your_public_key",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/your_imagekit_id"
})

    async function uploadfile(buffer){
        const result = await imagekit.files.upload({
            file:buffer.toString("base64"),
            fileName:"image.jpg",
        })
        return result;
    }
module.exports = uploadfile; 