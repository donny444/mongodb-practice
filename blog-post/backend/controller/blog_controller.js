import Blog from "../model/blog_model.js";

async function blogController(req, res) {
    const data = await Blog.find({});
    return res.status(200).json(data);
}

export default blogController;