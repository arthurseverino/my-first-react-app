import { useState } from 'react';

export default function Education({
  degreeProp,
  schoolProp,
  startDateProp,
  endDateProp,
  statusEdu,
  submitSetterEdu,
}) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    degreeProp(degree);
    schoolProp(school);
    startDateProp(startDate);
    endDateProp(endDate);
    submitSetterEdu();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Education</h1>
      {(statusEdu === 'pending' || statusEdu === 'edit') && (
        <>
          <input
            type="text"
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
          Start Date
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          End Date
          <input
            type="date"
            placeholder="EndDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </>
      )}
      {statusEdu === 'submitted' && <button>Edit</button>}
    </form>
  );
}
