import React from 'react';
import './styles.css';

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  onEnroll: () => void;
  isEnrolled: boolean;
}

const CourseCard: React.FC<CourseCardProps> = (props) => {

  return (
    <div className="my-class">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.lessons} lectures</p>

      {/* Step 5: he CourseCard will now receive isEnrolled and onEnroll as props from the parent component. */}
      <button onClick={props.onEnroll} disabled={props.isEnrolled}>
        {props.isEnrolled ? '已报名': '立即报名' }
      </button>
    </div>
  );
}

export default CourseCard;