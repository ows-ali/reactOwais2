const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const nanoId = require("nanoid").nanoid;
const generate = require("nanoid-generate");
const { generateToken } = require("../util");
const myId = generate.numbers(9);
const url = require("url");

// Imports
const User = require("../models/userModel");
const {
  signUpValidation,
  loginValidation,
  detailsValidation,
} = require("../validation");

//============ GET ALLUSER PAGE ==============
router.get("/allusers/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//============ SIGN UP ==============
router.post("/signup", async (req, res) => {
  try {
    //LETS VALIDATE THE DATA BEFORE
    const { error } = signUpValidation(req.body);
    if (error)
      return res.status(400).json({ invalid: error.details[0].message });

    // Check email if already exist in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).json({
        prompt:
          "此<b>Email</b> 已經註冊了. 請試試看<a href='/forgotpassword'> 忘記密碼?</a>",
      });

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      nanoId: "A" + myId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      survey: "",
      gender: "",
      birth: "",
      nationalId: "",
      phone: "",
      country: "",
      password: hashedPassword,
    });
    const savedUser = await user.save();
    console.log(savedUser, "database");
    const token = generateToken(savedUser);
    res.cookie("authToken", token, { httpOnly: false });

    req.session.user = {
      _id: savedUser._id,
      nanoId: savedUser.nanoId,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      isAdmin: savedUser.isAdmin,
      isTeacher: savedUser.isTeacher,
      theme: savedUser.theme,
      survey: "",
      gender: "",
      birth: "",
      nationalId: "",
      phone: "",
      country: "",
    };
    console.log(req.session.user, "session");

    res.send({ user: savedUser, token });
  } catch (err) {
    res.status(400).json({ err });
  }
});


//=================== EMAIL LOGIN ==============
router.post("/logout", async (req, res) => {
  // res.cookie("connect.sid", '');
  res.clearCookie('connect.sid');

  // res.send('success')
  console.log('in logout')
  res.json({ sucess: true });

})

//=================== EMAIL LOGIN ==============
router.post("/login", async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).json({ invalid: error.details[0].message });

  // Check email if already exist in database
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Email 或密碼不正確. 請確認再輸入.");
  }

  // Password is correct?
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass)
    return res.status(400).send("Email 或密碼不正確. 請確認再輸入.");

  if (!user) {
    const errorMessage = "Email 或密碼不正確.";
    res.status.send(errorMessage);
  } else {
    const token = generateToken(user);
    res.cookie("authToken", token, { httpOnly: false });

    req.session.user = {
      _id: user._id,
      nanoId: user.nanoId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birth: user.birth,
      survey: user.survey,
      phone: user.phone,
      gender: user.gender,
      nationalId: user.nationalId,
      filename: user.filename,
      streetNo: user.streetNo,
      street: user.street,
      suburb: user.suburb,
      postalCode: user.postalCode,
      city: user.city,
      state: user.state,
      country: user.country,
      longitude: user.longitude,
      latitude: user.latitude,
      theme: user.theme,
      isTeacher: user.isTeacher,
      isAdmin: user.isAdmin,
    };

    res.json({ user: req.session.user, token });
  }
});

//==================== UPDATE IN ALLUSERS =================
router.put("/allusers", async (req, res, next) => {
  try {
    const { error } = detailsValidation(req.body);
   
    if (error)
      return res.status(400).json({ invalid: error.details[0].message });

   
    // const streetNo = req.body.streetNo;
    // const myArray = streetNo.split("");
    // const last = myArray.at(-1);
    // if (last === "號") {
    //   req.body.streetNo;
    // } else {
    //   req.body.streetNo = req.body.streetNo + "號";
    // }

    const email = req.body.email;
 
    const user = await User.findOne({ email });
    
    // New data (from req.body) to database
    User.findByIdAndUpdate(user._id, req.body).then(function () {
      User.findOne(user._id).then(function (storedUser) {
        if (storedUser) {
          // database to session
          req.session.user = {
            _id: storedUser._id,
            nanoId: storedUser.nanoId,
            isTeacher: storedUser.isTeacher,
            firstName: storedUser.firstName,
            lastName: storedUser.lastName,
            email: storedUser.email,
            phone: storedUser.phone,
            gender: storedUser.gender,
            nationalId: storedUser.nationalId,
            survey: storedUser.survey,
            birth: storedUser.birth,
            filename: storedUser.filename,
            // streetNo: storedUser.streetNo,
            // street: storedUser.street,
            // suburb: storedUser.suburb,
            // postalCode: storedUser.postalCode,
            // city: storedUser.city,
            // state: storedUser.state,
            // country: storedUser.country,
            // longitude: storedUser.longitude,
            // latitude: storedUser.latitude,
            token: storedUser.token,
            isAdmin: storedUser.isAdmin,
          };
        }
        storedUser.save();
        console.log(storedUser);
        res.send(storedUser);
      });
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//check toekn for every api request, which requires user to be logged in 
// use req.headers instead of cookies to get the token

router.get("/allusersdummy/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params._id });
    console.log('headers',req.headers)
    console.log('header authorization',req.headers.authorization)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/allusersdummypost/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params._id });
    console.log('req body', req.body)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
