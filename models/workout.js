const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {type: Date, required: true},
    exercises: [
        {
            type: {
                type: String
            },
            
            name: {
                    type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;