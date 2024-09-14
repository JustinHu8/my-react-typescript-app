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


  async function fetchCourses() {
    const response = await fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards');
    const data = await response.json();
    console.log(data);
  }

  fetchCourses()

  // Fetch courses from the remote URL
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch courses');
  //       }
  //       const data: Course[] = await response.json();
  //       setCourses(data); // Update courses state
  //     } catch (error) {
  //       console.log('Error fetching data');
  //     }
  //   };

  //   fetchCourses();
  // }, []);

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
