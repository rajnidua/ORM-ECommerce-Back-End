const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [
        {
          model: Product,
          as: "products",
          required: false,
          //attributes: [id, product_name],

          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: ProductTag,
            as: "product_tags",
            attributes: ["id", "product_id", "tag_id"],
          },
        },
      ],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [
        {
          model: Product,
          as: "products",
          required: false,
          // Pass in the Product attributes that you want to retrieve
          attributes: ["id", "product_name"],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: ProductTag,
            as: "product_tags",
            attributes: ["id", "product_id", "tag_id"],
          },
        },
      ],
    });

    if (!singleTag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
