import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2>Courses</h2>
      {courses.length === 0 ? <p>No courses available</p> : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Code</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.name}</td>
                <td>{course.code}</td>
                <td>{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
<div className="container">
  <h2>Your Courses</h2>
  <ul>
    <li>Physics</li>
    <li>Math</li>
    <li>Computer Science</li>
  </ul>
</div>


export default Courses;