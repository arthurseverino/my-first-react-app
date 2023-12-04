import { useState } from 'react';
import Information from './Information.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Resume from './Resume.jsx';
import './App.css';

function App() {
  // the initial state is used to render the resume,
  // the second set function is used to render the contact info with
  // the updated value from Information component(if it changed at all)
  const [status, setStatus] = useState('pending');
  const [name, setName] = useState('Nameeee');
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone');
  const submitSetter = () => {
    if (status == 'pending') {
      setStatus('submitted');
    } else if (status == 'submitted') {
      setStatus('edit');
    } else if (status == 'edit') {
      setStatus('submitted');
    }
  };

  //Education
  const [statusEdu, setStatusEdu] = useState('pending');
  const [school, setSchool] = useState('School');
  const [degree, setDegree] = useState('Degree');
  const [startDate, setStartDate] = useState('Start Date');
  const [endDate, setEndDate] = useState('End Date');
  const submitSetterEdu = () => {
    if (statusEdu == 'pending') {
      setStatusEdu('submitted');
    } else if (statusEdu == 'submitted') {
      setStatusEdu('edit');
    } else if (statusEdu == 'edit') {
      setStatusEdu('submitted');
    }
  };

  // Experience
  const [statusExp, setStatusExp] = useState('pending');
  const [company, setCompany] = useState('Company');
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [startDateExp, setStartDateExp] = useState('Start Date');
  const [endDateExp, setEndDateExp] = useState('End Date');
  const submitSetterExp = () => {
    if (statusExp == 'pending') {
      setStatusExp('submitted');
    } else if (statusExp == 'submitted') {
      setStatusExp('edit');
    } else if (statusExp == 'edit') {
      setStatusExp('submitted');
    }
  };

  return (
    <>
      <h1>CV Maker</h1>
      <div className="container">
        <div className="left">
          <Information
            // nameProp is passing in the setName function into Information
            // so every time submit is pressed:
            // nameProp(nameinfo) is called which is setName(nameinfo):
            // which is just the new value of the input
            // what is nameinfo? it's the value of the new input
            // (e.target.value is the value of the input)
            // whenever the value changes, so does nameInfo

            //long story short it just updates to whatever the new value is
            // that's why we have it as setName and not just name
            // as for status, we will always start with status as pending
            // so we pass it in the variable, not a function
            nameProp={setName}
            emailProp={setEmail}
            phoneProp={setPhone}
            statusProp={status}
            submitSetterProp={submitSetter}
          />
          <Education
            schoolProp={setSchool}
            degreeProp={setDegree}
            startDateProp={setStartDate}
            endDateProp={setEndDate}
            statusEdu={statusEdu}
            submitSetterEdu={submitSetterEdu}
          />

          <Experience
            statusExp={statusExp}
            submitSetterExp={submitSetterExp}
            companyProp={setCompany}
            jobTitleProp={setJobTitle}
            startDateExpProp={setStartDateExp}
            endDateExpProp={setEndDateExp}
          />
        </div>

        <div className="right">
          <Resume
            name={name}
            email={email}
            phone={phone}
            school={school}
            degree={degree}
            startDate={startDate}
            endDate={endDate}
            company={company}
            jobTitle={jobTitle}
            startDateExp={startDateExp}
            endDateExp={endDateExp}
          />
        </div>
      </div>
    </>
  );
}

export default App;
