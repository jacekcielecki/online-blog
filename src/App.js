import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to my blog!';
  const likes = 50;
  const person = { name: 'jacek', age: 23 }
  const link = 'https://www.google.pl/';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ person.name }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link }>Google site</a>
      </div>
    </div>
  );
}

export default App;
