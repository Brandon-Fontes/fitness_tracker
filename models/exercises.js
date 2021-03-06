const mongoose = require("mongoose");

const schema = mongoose.schema;
const exerciseSchema = new schema({
    name: {type: String, required: true},
    reps: {type: Number},
    sets: {type: Number},
    weight: {type: Number},
    minutes: {type: Number}
});

const excercises = mongoose.model("exercises", exerciseSchema);

module.exports = excercises;