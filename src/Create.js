import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); //disable default page refresh
        setIsPending(true);

        setTimeout(() => {
            const blog = { title, body, author };
            
            fetch('http://localhost:8000/blogs', {
               method: 'POST',
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(blog)
            }).then(() => {
               console.log('new blog added');
               setIsPending(false);
            })
        }, 1000)
    };

    return (
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Post body:</label>
                <input
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                 />
                <label>Post author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;