const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      // Make sure to include the products
      include: [
        {
          model: Product,
          as: "products",
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ["id", "product_name"],
        },
      ],
    });
    return res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [
        {
          model: Product,
          as: "products",
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ["id", "product_name"],
        },
      ],
    });

    if (!singleCategory) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
