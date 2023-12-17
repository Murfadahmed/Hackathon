import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    phonenumber : {
        type: Number,
        required : true,
    },
    studentId:{
      type: String,
      required: true,
    },
    profilePicture:{
      type: String,
      default: '',
    }
  },
  { timestamps: true }
);

export default mongoose.model("Student", StudentSchema);