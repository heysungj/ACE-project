const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: {
    type: String,
  },
  photo: [String],
  video: String,
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  },
});

module.exports = mongoose.model("Blog", blogSchema);
