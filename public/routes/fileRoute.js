const router = require("express").Router();
const path = require("path");
const multers = require("multer");
const upload = multers({ dest: "uploadfile/" });
const fs = require("fs");

router.route("/uploadfile").post(upload.single("upfile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    res.json({
      Error: "Please upload the file."
    });
  } else {
    const fileName = path.resolve("./uploadfile/" + file.filename);
    fs.unlinkSync(fileName);
    const storage = {
      name: file.originalname,
      size: file.size,
      type: file.mimetype
    };
    res.json(storage);
  }
});

module.exports = router;
