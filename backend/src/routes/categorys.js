const router = require("express").Router();

module.exports = db => {
  router.get("/categorys", (request, response) => {
    db.query(
      `
      SELECT
      * FROM category;
    `
    ).then(({ rows: categorys}) => {
      response.json(categorys);
    });
  });

  return router;
};
