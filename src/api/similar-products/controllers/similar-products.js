"use strict";

module.exports = {
  async findSimilar(ctx) {
      const { productId } = ctx.query;
      // console.log("find similar here" , productId)

    // Fetch the current product
    const product = await strapi.db.query("api::post.post").findOne({
      where: { id: productId },
      populate: ["category", "tags", "subcategory"], // Include necessary relations
    });

    // console.log("product" , product.category)

    if (!product) {
      return ctx.notFound("Product not found");
    }

    // Find similar products (same category or tags)
    const similarProducts = await strapi.db.query("api::post.post").findMany({
      where: {
        id: { $ne: productId }, // Exclude the current product
        category: product.category?.id, // Match by category
      },
      limit: 6, // Limit the number of similar products
      populate: {
        images: true, // Populate images field
        category: true, // Populate category field
      },
    });

    // console.log("similarProducts" , similarProducts)

    ctx.body = similarProducts;
  },
};
