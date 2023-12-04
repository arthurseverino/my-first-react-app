import { useState } from 'react';

export default function Experience({
  companyProp,
  jobTitleProp,
  startDateExpProp,
  endDateExpProp,
  statusExp,
  submitSetterExp,
}) {
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDateExp, setStartDateExp] = useState('');
  const [endDateExp, setEndDateExp] = useState('');

  const handleSubmit = (e) => {
    companyProp(company);
    jobTitleProp(jobTitle);
    startDateExpProp(startDateExp);
    endDateExpProp(endDateExp);
    e.preventDefault();
    submitSetterExp();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Experience</h1>
        {(statusExp === 'pending' || statusExp === 'edit') && (
          <>
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Start Date"
              value={startDateExp}
              onChange={(e) => setStartDateExp(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="End Date"
              value={endDateExp}
              onChange={(e) => setEndDateExp(e.target.value)}
              required
            />
            <input type="submit" value="Submit" />
          </>
        )}
        {statusExp === 'submitted' && <button> Edit</button>}
      </form>
    </>
  );
}
