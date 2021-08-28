const router = require('express').Router();
const User = require('../models/user-model');
const Plant = require('../models/plants-model');

// Users plants
router.get(`/:id/plants`, (req, res, next) => {
  User.getUsersPlants(req.params.id)
    .then((plants) => {
      if (!plants) {
        next({ status: 404, message: 'User has no plants' });
      } else {
        res.status(200).json(plants);
      }
    })
    .catch((err) => {
      console.log(err);
      next({ message: 'Error getting users plants' });
    });
});

// Get plant by id
router.get('/:id', (req, res, next) => {
  Plant.getPlantById(req.params.id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      console.log(err);
      next({ status: 500, message: 'Error getting plant' });
    });
});

// Add new plant
router.post('/', async (req, res, next) => {
  let newPlant = req.body;

  await Plant.addPlant(newPlant)
    .then((plant) => {
      res.status(201).json({ message: 'Plant has been added' });
    })
    .catch(next);
});

// Update plant
router.put('/:id', async (req, res, next) => {
  let updates = req.body;

  await Plant.updatePlant(req.params.id, updates)
    .then((updatedPlant) => {
      res.json(updatedPlant);
    })
    .catch(next);
});

module.exports = router;
