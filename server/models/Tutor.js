const { Schema, model } = require("mongoose");
const { default: mongoose } = require("mongoose");
const User = require("./User");

const tutorSchema = new Schema(
  {
    tutorId: {
      type: { type: mongoose.Types.ObjectId, ref: "User" },
    },
    hourlyRate: {
      type: String,
    },
    knownSubjects: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 250,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tutor = model("Tutor", tutorSchema);

module.exports = Tutor;
