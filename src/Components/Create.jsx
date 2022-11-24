import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Zain');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(() => {
                setIsPending(false);
                history.push('/');
            });
        setTitle('');
        setBody('');
        setAuthor('Zain');
    };



    return (
        <>
            {/* <h1>ZAIN</h1> */}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Blog Title</label>
                    <input
                        type="text"
                        id="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div>
                    <label htmlFor="body">Blog Body</label>
                    <textarea
                        id="body"
                        required
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <select
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Zain">Zain</option>
                        <option value="Bilal">Bilal</option>

                    </select>
                </div>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button type="submit" disabled>Adding Blog....</button>}
            </form>

        </>
    );
};

export default Create;