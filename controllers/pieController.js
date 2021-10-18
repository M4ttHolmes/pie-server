const express = require("express");
const router = express.Router();
const { PieModel } = require("../models");
const { validateSession } = require("../middleware");

// router.use("/", (req, res) => res.send("I love pie!"));
//! Get all the pies
router.get("/", async (req, res) => {
    try {
        const allPies = await PieModel.findAll();
        res.status(200).json(allPies);
    } catch(err) {
        res.status(500).json({ error: err });
    }
})

//! Create pie
router.post("/create", validateSession, async (req, res) => {
    const {
        nameOfPie,
        baseOfPie,
        crust,
        timeToBake,
        servings,
        rating
    } = req.body;

    try {
        const Pie = await PieModel.create({
            nameOfPie,
            baseOfPie,
            crust,
            timeToBake,
            servings,
            rating
        });
        res.status(201).json({
            message: "Pie successfully created.",
            Pie
        })
    } catch(err) {
        res.status(500).json({ 
            message: `Failed to create pie. ${err}`,
        });
    };
});

//! Update Pies
router.put("/:id", async (req, res) => {
    const { nameOfPie, baseOfPie, crust, timeToBake, servings, rating } = req.body;
    try {
      await PieModel.update(
        { nameOfPie, baseOfPie, crust, timeToBake, servings, rating },
        { where: { id: req.params.id }, returning: true }
      ).then((result) => {
        res
          .status(200)
          .json({ message: "Pie successfully updated", updatedPie: result });
      });
    } catch (err) {
      res.status(500).json({ message: `Failed to update pie: ${err}` });
    }
  });

//! Get Pie By Name  
router.get("/:nameOfPie", async (req, res) => {
try {
    const locatedPie = await PieModel.findAll({
    where: { nameOfPie: req.params.nameOfPie },
    });
    res
    .status(200)
    .json({ message: "Pies successfully retrieved", locatedPie });
} catch (err) {
    res.status(500).json({ message: `Failed to retrieve pies: ${err}` });
}
});

//! Delete Pie
router.delete("/delete:id", async (req, res) => {
    try {
        const query = {where: { id: req.params.id }};
        await PieModel.destroy(query);
        res.status(200).json({message: "Pie Entry Removed"});
    } catch (err) {
        res.status(500).json({ error: err });
    }
})


module.exports = router;