import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard'

function App() {
  return (
    <div className="App">
      <CourseCard title="TypeScript Basic" description="This is awesome" lessons={10} />
      <CourseCard title="JavaScript Basic" description="This is bad" lessons={90} />
      <CourseCard title="Redux Basic" description="This is not easy" lessons={15} />
      <CourseCard title=".NET Basic" description="This is too much" lessons={30} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
