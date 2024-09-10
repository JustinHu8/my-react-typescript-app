import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard'

const courses = [
  {
    id: 3,
    title: "Redux Basic",
    description: "This is not easy",
    lessons: 15
  },
  {
    id: 1,
    title: "TypeScript Basic",
    description: "This is awesome",
    lessons: 10
  },
  {
    id: 5,
    title: "Blah blah",
    description: "This is awesome",
    lessons: 10
  },
  {
    id: 2,
    title: "JavaScript Basic",
    description: "This is bad",
    lessons: 90
  },
  {
    id: 4,
    title: ".NET Basic",
    description: "This is too much",
    lessons: 30
  }
];

function App() {
  return (
    <div className="App">
      {courses.map(course => (
        <CourseCard
          key={course.id} // Unique key for each course
          title={course.title}
          description={course.description}
          lessons={course.lessons}
        />
      ))}
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
