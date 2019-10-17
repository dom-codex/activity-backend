const Receipe = require('../models/receipe');

exports.createRecipe = (req, res, next) => {
  const receipe = new Receipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    prepareTime: req.body.time,
    difficulty: req.body.difficulty
  });
  receipe.save().then(
    () => {
      res.status(201).json({
        message: 'receipe saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneRecipe = (req, res, next) => {
  Receipe.findOne({
    _id: req.params.id
  }).then(
    (receipe) => {
      res.status(200).json(receipe);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyRecipe = (req, res, next) => {
  const receipe = new Receipe({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    prepareTime: req.body.prepareTime,
    difficulty: req.body.difficulty
  });
  Receipe.updateOne({_id: req.params.id},receipe).then(
    () => {
      res.status(201).json({
        message: 'Receipe updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteRecipe = (req, res, next) => {
  Receipe.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Receipe Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllRecipe = (req, res, next) => {
  Receipe.find().then(
    (receipes) => {
      res.status(200).json(receipes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}; 