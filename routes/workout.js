const express = require('express')

const router = express.Router()


const { createWorkout, getAllWorkout, getOneWorkout, deleteWorkout, updateWorkout } = require('../controller/workoutController')

router.get('/',getAllWorkout)

router.get('/:id',getOneWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router
