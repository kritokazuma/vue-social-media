const router = require("express").Router();
const Authorize = require("../Utils/middleware/authorize");
const PostController = require("../Controllers/post");

router
  .route("/")
  .get(Authorize, PostController.getPost) //TODO: need to add pagination
  .post(Authorize, PostController.createPost); //TODO: need to add file upload

module.exports = router;
