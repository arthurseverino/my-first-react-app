export default function Resume({name, email, phone, school, degree, startDate, endDate, company, jobTitle, startDateExp, endDateExp}) {
  return (
    <>
      <h1>Resume</h1>
      <div className="contact">
        <h2>Contact Information</h2>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <p>{school} </p>
        <p>{degree}</p>
        <p>{startDate} -</p>
        <p>{endDate} </p>
      </div>

      <div className="experience">
        <h2>Experience</h2>
        <p>{company} </p>
        <p>{jobTitle}</p>
        <p>{startDateExp}</p>
        <p>{endDateExp}</p>
      </div>
    </>
  );
}
