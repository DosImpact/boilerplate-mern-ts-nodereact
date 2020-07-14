import * as mongoose from "mongoose";

const types = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: types.String,
    maxlength: 50,
  },
  email: {
    type: types.String,
    trim: true,
    unique: 1,
  },
  password: {
    type: types.String,
    minlength: 5,
  },
  lastname: {
    type: types.String,
    maxlength: 50,
  },
  role: {
    type: types.Number,
    default: 0,
  },
  image: {
    type: types.String,
  },
  token: {
    type: types.String,
  },
  toeknExp: {
    type: types.String,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
