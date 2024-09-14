import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard'
import CourseSummary from './components/CourseSummary'

// Define the course type
interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  // Fetch courses from the remote URL using Promise style
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards')
      .then(response => response.json())
      .then(data => {
        setCourses(data); // Update courses state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEnroll = (courseId: number) => {
    setEnrolledCourses([...enrolledCourses, courseId]);
  }

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
