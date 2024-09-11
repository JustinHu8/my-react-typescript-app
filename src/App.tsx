import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard';

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
}

function App() {
  // State for courses and enrolled courses
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch courses.');
        setLoading(false);
      });
  }, []);

  // Event handler to enroll in a course
  const handleEnroll = (courseId: number) => {
    setEnrolledCourses([...enrolledCourses, courseId]);
  };

  // Render loading state
  if (loading) {
    return <div>Loading courses...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      {courses.map((course) => (
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
