import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //rerender the dom every time value changes
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const [name, setName] = useState('mario'); //mario - inital value
    const [age, setAge] = useState(25);
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    //     { title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    // ])

    const handleClick = () => {
        setName('luigi');
        setAge(age + 1);
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect runs function every render of the component
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]); //useEffect Dependency - if given useEffect will run on first render + on change to given variable

    // e - event object
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)    
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>Name: { name } Age: { age }</p>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => {handleClickAgain('jacek', e)}}>Click me againg!</button>
            <br></br>
            {/* handleDelete={handleDelete} */}
            {isPending && <div style={{color: '#fc0303', fontSize: 60}}>Loading...</div>}
            {error && <div style={{color: '#fc0303', fontSize: 60}}>Error: {error}</div>}
            {blogs && <BlogList blogs={blogs} title="All posts"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario posts"/>}
            <button onClick={() => setName('jacekChange')}>Change name</button>
            <p>{ name }</p>
        </div>   
     );
}
 
export default Home;