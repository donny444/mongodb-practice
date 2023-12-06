import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
    return (
        <>
            <Link to="/post"><button>Add Post</button></Link>
            <BlogList />
        </>
    );
}

function BlogList() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = "http://localhost:5174/";
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }

            setLoading(true);

            try {
                const response = await fetch(apiUrl, options);
                if(!response.ok) {
                    const errMsg = response.text();
                    throw new Error(errMsg || "Network response was not ok");
                }
                const responseData = await response.json();
                setResponse(responseData);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error {error}</p>}
            {response &&
                <div>
                    {response.map((blog, index) => (
                        <Blog key={index} title={blog.title} author={blog.author} body={blog.body} date={blog.date} />
                    ))}
                </div>
            }
        </>
    );
}

function Blog({ title, author, body, date }) {

    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{body}</p>
            <h5>{date}</h5>
        </div>
    );
}