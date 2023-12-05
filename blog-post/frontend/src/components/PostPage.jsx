import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
    return (
        <>
            <PostForm />
        </>
    )
}

function PostForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "http://localhost:5174/post";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                author,
                body
            })
        }
        try {
            const response = await fetch(apiUrl, options);
            if(!response.ok) {
                const errMsg = response.text();
                throw new Error(errMsg || "Some Error");
            }
            const responseData = await response.json();
            setResponse(responseData);
            navigate("/");
        } catch(err) {
            setError(err.message);
        }
    }
    return (
        <div>
            <h2>What&apos happened?</h2>
            <form onSubmit={handleSubmit}>
                <label>What&apos; the Title</label>
                <input
                    type="text"
                    placeholder="The Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={30}
                    required
                />
                <label>Who&apos; the Author</label>
                <input
                    type="text"
                    placeholder="The Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    maxLength={20}
                    required
                />
                <label>Body of the blog</label>
                <textarea
                    placeholder="Body Here"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <input
                    type="submit"
                    value="Post"
                />
                {error && <p>Error: {error}</p>}
                {response && <p>Response: {response}</p>}
            </form>
        </div>
    )
}