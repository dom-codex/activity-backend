const express = require('express');
const router = express.Router();
const receipeCtrl = require('../controllers/reciepelogic');

router.get('/', receipeCtrl.getAllRecipe);
router.post('/', receipeCtrl.createRecipe);
router.get('/:id', receipeCtrl.getOneRecipe);
router.put('/:id', receipeCtrl.modifyRecipe);
router.delete('/:id', receipeCtrl.deleteRecipe);

module.exports = router;