const stages = require("express").Router();
const db = require('../models');
const { Stage } = db;
const { Op } = require('sequelize')

// Stage Index route - GET
stages.get("/", async (req, res) => {
  try {
    const allStages = await Stage.findAll({
        order: [['available_start_time', 'ASC']],
        where: {
            "stage_name": { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
        }
    });
    res.status(200).json(allStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Stage Show Route - GET
stages.get("/:id", async (req, res) => {
  try {
    const stage = await Stages.findOne({
      where: { stage_id: req.params.id },
    });
    if (stage) {
      res.status(200).json(stage);
    } else {
      res.status(404).json({ message: "Stage not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create Stage Route - POST
stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(201).json({
      message: "New stage added.",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Stage Update Route - PUT
stages.put("/:id", async (req, res) => {
  try {
    const updatedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id, 
      },
    });
    if (updatedStage[0]) {
      res.status(200).json({
        message: `Successfully updated stage with ID ${req.params.id}`,
      });
    } else {
      res.status(404).json({
        message: `Stage with ID ${req.params.id} not found`,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Stage Delete Route - DELETE
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    if (deletedStages) {
      res.status(200).json({
        message: `Deleted stage with ID ${req.params.id} successfully.`,
      });
    } else {
      res.status(404).json({
        message: `Stage with ID ${req.params.id} not found`,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = stages;