import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';

function App() {
  // const title = 'Welcome to my blog!';
  // const likes = 50;
  // const person = { name: 'jacek', age: 23 }
  // const link = 'https://www.google.pl/';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          <p>{ person.name }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>
          <a href={ link }>Google site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
