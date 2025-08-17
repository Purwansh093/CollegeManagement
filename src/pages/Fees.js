import React, { useEffect, useState } from 'react';

function Fees() {
  const [fees, setFees] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ studentId: '', amount: '', status: 'Unpaid' });

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));

    fetch('http://localhost:5000/api/fees')
      .then(res => res.json())
      .then(data => setFees(data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/fees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      const newFee = await res.json();
      setFees([...fees, newFee]);
      setForm({ studentId: '', amount: '', status: 'Unpaid' });
    }
  };

  return (
    <div className="container">
      <h1>Fees</h1>

      {/* Add Fee Form */}
      <form onSubmit={handleSubmit}>
        <select name="studentId" value={form.studentId} onChange={handleChange} required>
          <option value="">Select Student</option>
          {students.map(s => (
            <option key={s._id} value={s._id}>{s.name} ({s.rollNo})</option>
          ))}
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Fee Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <button type="submit">Add Fee</button>
      </form>

      {/* Fees Table */}
      {fees.length === 0 ? (
        <p>No fees recorded</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Student</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {fees.map(fee => (
              <tr key={fee._id}>
                <td>{fee.studentId?.name} ({fee.studentId?.rollNo})</td>
                <td>{fee.amount}</td>
                <td>{fee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Fees;