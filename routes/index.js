const express = require("express");
const router = express.Router();

const Url = require("../models/Url")

// @route GET /:code
// @desc redirect to long/original url
router.get("/:code", async (req, res) => {
    try {
        const url = await Url.findOne({urlCode: req.params.code});

        if (url) {
            return res.redirect(url.longUrl)
        } else {
            res.status(404).json("no url found")
        }

    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
})


module.exports = router