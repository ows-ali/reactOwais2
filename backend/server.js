const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv/config");
const cookieParser = require("cookie-parser");
const { config } = require("./config");
const url = require("url");
const mongoStore = require("connect-mongo")(session);
const multer = require("multer");
const path = require("path");
const server = http.createServer(app);
const cors = require("cors");

app.use(
  session({
    secret: config.JWT_SECRET,
    saveUninitialized: false,
    resave: true,
    store: new mongoStore({
      url: process.env.DB_CONNECT,
      ttl: 1 * 24 * 60 * 60,
    }),
  })
);

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Import routes
const postsRoute = require("./routes/auth");
const User = require("./models/userModel");

//Routes Middleware
app.use("/api/users", postsRoute);

////////////////////////////////////////////////////////////////////////////

//Set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("gameFile");

function checkFileType(file, cb) {
  //allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  //Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

app.post("/upload", async (req, res) => {
  // OWAIS HELP
  upload(req, res, async (err) => {
    const email = req.session.user.email;
    const user = await User.findOne({ email });
  });
});

//Connect to DB (returns a mongoose instance)
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log("Connect to database")
);

//Listening
const port = 4000;

server.listen(process.env.PORT || 4000, function () {
  console.log(`server up and running ${port}`);
});
