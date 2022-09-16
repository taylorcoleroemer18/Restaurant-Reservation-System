const router = require("express").Router();
const controller = require("./tables.controller");
const seatRouter = require("../seat/seat.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use("/:table_id/seat", seatRouter);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
