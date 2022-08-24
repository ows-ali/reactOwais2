const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nanoId: {
      type: String,
    },
    theme: {
      type: Boolean,
      default: false,
    },
    teacherId: {
      type: String,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
    firstName: {
      type: String,
      required: true,
      min: 1,
      max: 2,
    },
    lastName: {
      type: String,
      required: true,
      min: 1,
      max: 2,
    },
    email: {
      type: String,
      index: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    nationalId: {
      type: String,
    },
    gender: {
      type: String,
    },
    birth: {
      type: String,
    },
    survey: {
      type: String,
    },
    streetNo: {
      type: String,
    },
    street: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    suburb: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    filename: {
      type: String,
    },

    password: {
      type: String,
      min: 6,
      max: 255,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    googleId: {
      type: String,
    },
    facebookId: {
      type: String,
    },
    photos: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
