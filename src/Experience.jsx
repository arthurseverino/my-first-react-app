export default function Experience() {
  return (
    <>
      <form className="expForm">
        <h1>Experience</h1>
        <input type="text" placeholder="Company Name" required />
        <input type="text" placeholder="Job Title" required />
        <input type="date" placeholder="Start Date" required />
        <input type="date" placeholder="End Date" required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}