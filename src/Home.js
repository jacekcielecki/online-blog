const Home = () => {
// e - event object
    const handleClick = (e) => {
        console.log('hello world', e)    
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)    
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => {handleClickAgain('jacek', e)}}>Click me againg!</button>
        </div>   
     );
}
 
export default Home;