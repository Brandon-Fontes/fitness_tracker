const router = require("express").Router();
const workout = require("../models").workout;

router.get("/api/workouts", (req, res) => {
    workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {exercises: req.body}
        },
        {
            new: true
        }
    ).then(workout => res.json(workout))
    .catch(err => res.json(err));
});

router.post("/api/workouts", (req, res) => {
    workout.create({
        day: Date.now()
    })
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => res.json(err));
});

router.delete("/api/workouts", (req, res) => {

})

module.exports;