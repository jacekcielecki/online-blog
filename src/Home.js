import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {  
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ])

    const handleClick = () => {
        setName('luigi');
        setAge(age + 1);
    }

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
            <BlogList blogs={blogs} title="All posts"/>
        </div>   
     );
}
 
export default Home;