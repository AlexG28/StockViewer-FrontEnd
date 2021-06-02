/*
VIDEO FOR TUTORIAL
https://www.youtube.com/watch?v=w7ejDZ8SWv8

*/



//import logo from './logo.svg';
import './App.css';

// import our own components
import Header from './components/Header';

function App() {
  const name = 'Alex';
  return (
    <div className="container">
      
      <h1>Hello this is a stock website</h1>
      <p>My name is {name}</p>

      <Header title='title'/>

    </div>
  );
}

export default App;
