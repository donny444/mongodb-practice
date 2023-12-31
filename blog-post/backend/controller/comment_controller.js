import Comment from "../model/comment_model.js";

async function commentController(req, res) {
    const { title, name, detail } = req.body;
    try {
        if(!title || !name || !detail) {
            return res.status(406).json({ message: "All input is required"});
        }

        if(title.length > 20) {
            return res.status(406).json({ message: "Title must be less than 30 characters" });
        }

        if(name.length > 20) {
            return res.status(406).json({ message: "Name must be less than 20 characters" });
        }

        if(detail.length > 50) {
            return res.status(406).json({ message: "Detail must be less than 100 characters" });
        }

        const comment = new Comment({
            title,
            name,
            detail
        })
        data = await comment.save();

        return res.status(201).json({ message: "Commented Successfully"});
    } catch(err) {
        console.error(err);
    }
}

export default commentController;