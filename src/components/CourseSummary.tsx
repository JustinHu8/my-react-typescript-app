import React from 'react';

interface CourseSummaryProps {
    totalCourses: number;
    enrolledCoursesCount: number;
}

const CourseSummary: React.FC<CourseSummaryProps> = (props) => {
    return (
        <div>
            <h2>Course Summary</h2>
            <p>Total Courses: {props.totalCourses}</p>
            <p>Enrolled Courses: {props.enrolledCoursesCount}</p>
        </div>
    )
};

export default CourseSummary;
