const Post = require("../Models/post");
const {
  getAllPost,
  getAllPostByUser,
  createPost,
} = require("../Services/post");
const AppError = require("../Utils/errorThrow");
exports.getPost = async (req, res, next) => {
  try {
    const user = req.user;
    const posts = await getAllPostByUser(user.id);
    return res.status(200).json({ data: posts });
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const body = req.body;
    const userid = req.user.id;
    if (!body.desc) {
      throw new AppError("Please input description", 400);
    }
    const post = await createPost(body, userid);
    return res.status(200).json({ data: post });
  } catch (error) {
    next(error);
  }
};
