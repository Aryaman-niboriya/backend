const express = require("express")
const multer = require("multer")
const  uploadfile = require("./services/storage.service")
const postmodel = require("./modules/post.model")

const app = express()
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Please upload an image" })
        }
        
        const result = await uploadfile(req.file.buffer)
        
        const post = await postmodel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "post created successfully",
            post
        })
    } catch (error) {
        console.error("Error creating post:", error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
})

module.exports = app;