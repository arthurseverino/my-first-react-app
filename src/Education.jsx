export default function Education() {
  
  return (
    <>
      <form className="eduForm">
        <h1>Education</h1>
        <input type="text" placeholder="School Name" required />
        <input type="text" placeholder="Degree" required />
        <input type="date" placeholder="Start Date" required />
        <input type="date" placeholder="End Date" required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}