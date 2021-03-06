// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  //onDelete: "Null",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    as: "tags",
    foreignKey: "product_id",

    unique: false,
  },
  // Define an alias for when data is retrieved
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    as: "products",
    foreignKey: "tag_id",
    unique: false,
  },
  // Define an alias for when data is retrieved
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
