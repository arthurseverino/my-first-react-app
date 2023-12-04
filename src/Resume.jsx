export default function Resume({name, email, phone}) {
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
        <p>School Name: </p>
        <p>Degree: </p>
        <p>Start Date: </p>
        <p>End Date: </p>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <p>Company Name: </p>
        <p>Job Title: </p>
        <p>Start Date: </p>
        <p>End Date: </p>
      </div>
    </>
  );
}
