const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 5000;


//initialize body parser
app.use(express.json());
//cors for avoid cross origin
app.use(cors());

//handle url form submission
app.use(express.urlencoded({ extended: true }));
//handle
//static file
app.use(express.static(path.resolve(__dirname, "public")));

//API Routes
const Files = require("./public/routes/fileRoute");
app.use("/api/files", Files);

app.listen(Port, () => {
  console.log(`The app is listening on ${Port}`);
});
