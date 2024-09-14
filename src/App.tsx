import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard'
import CourseSummary from './components/CourseSummary'

const courses = [
  {
    id: 1,
    title: "TypeScript Basic",
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
    id: 3,
    title: "Redux Basic",
    description: "This is not easy",
    lessons: 15
  },
  {
    id: 4,
    title: ".NET Basic",
    description: "This is too much",
    lessons: 30
  }
];

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  // [1, 2, 3, 4, 5]  
  // const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId: number) => {
    setEnrolledCourses([...enrolledCourses, courseId]);
  }
  // If to write in JavaScript, it will be like this:
  // const handleEnroll = (courseId) => {
  //   setEnrolledCourses([...enrolledCourses, courseId]);
  // }


  return (
    <div className="App">
      <CourseSummary 
        totalCourses={courses.length}
        enrolledCoursesCount={enrolledCourses.length}
      />
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          lessons={course.lessons}
          isEnrolled={enrolledCourses.includes(course.id)}
          onEnroll={() => handleEnroll(course.id)}
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
