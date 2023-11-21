const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema(
  {
    date: Date,
    title: String,
    checked: Boolean,
    status: String,
    index: Number,
  },
  { toJSON: { virtuals: true } }
);

todoItemSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const TodoItem = mongoose.model("TodoItem", todoItemSchema);

module.exports = TodoItem;
