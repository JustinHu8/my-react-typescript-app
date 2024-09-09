import React, { useState } from 'react';
import './styles.css';

// Define the type for props
interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
}

const CourseCard: React.FC<CourseCardProps> = (props) => {
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
  }

  return (
    <div className="my-class">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.lessons} lectures</p>

      <button onClick={handleEnroll} disabled={isEnrolled}>
        {isEnrolled ? '已报名': '立即报名' }
      </button>
    </div>
  );
}

export default CourseCard;