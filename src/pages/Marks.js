import React, { useEffect, useState } from 'react';

function Marks() {
  const [marks, setMarks] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ studentId: '', courseId: '', marksObtained: '', totalMarks: '' });

  // Fetch students, courses, and marks
  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error(err));

    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));

    fetch('http://localhost:5000/api/marks')
      .then(res => res.json())
      .then(data => setMarks(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new mark
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/marks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const newMark = await res.json();
      setMarks([...marks, newMark]);
      setForm({ studentId: '', courseId: '', marksObtained: '', totalMarks: '' });
    }
  };

  return (
    <div className="container">
      <h1>Marks</h1>

      {/* Add Mark Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        {/* Student dropdown */}
        <select name="studentId" value={form.studentId} onChange={handleChange} required>
          <option value="">Select Student</option>
          {students.map(s => (
            <option key={s._id} value={s._id}>{s.name} ({s.rollNo})</option>
          ))}
        </select>

        {/* Course dropdown */}
        <select name="courseId" value={form.courseId} onChange={handleChange} required>
          <option value="">Select Course</option>
          {courses.map(c => (
            <option key={c._id} value={c._id}>{c.name} ({c.code})</option>
          ))}
        </select>

        {/* Marks input */}
        <input type="number" name="marksObtained" placeholder="Marks Obtained"
          value={form.marksObtained} onChange={handleChange} required />
        <input type="number" name="totalMarks" placeholder="Total Marks"
          value={form.totalMarks} onChange={handleChange} required />

        <button type="submit">Add Mark</button>
      </form>

      {/* Display Marks */}
      {marks.length === 0 ? (
        <p>No marks available</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Marks Obtained</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {marks.map(mark => (
              <tr key={mark._id}>
                <td>{mark.studentId?.name || mark.studentId}</td>
                <td>{mark.courseId?.name || mark.courseId}</td>
                <td>{mark.marksObtained}</td>
                <td>{mark.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Marks;