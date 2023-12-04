import { useState } from 'react';
import Information from './Information.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Resume from './Resume.jsx';
import './App.css';

function App() {
  // contact information states
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone');
  const [status, setStatus] = useState('pending');

  // contact information setters
  const setNameChange = (value) => {
    setName(value);
  };
  const setEmailChange = (value) => {
    setEmail(value);
  };
  const setPhoneChange = (value) => {
    setPhone(value);
  };
  const submitSetter = () => {
    if (status == 'pending') {
      setStatus('submitted');
    } else if (status == 'submitted') {
      setStatus('edit');
    } else if (status == 'edit') {
      setStatus('submitted');
    }
  };

  return (
    <>
      <h1>CV Maker</h1>
      <div className="container">
        <div className="left">
          <Information
            nameState={name}
            emailState={setEmailChange}
            phoneState={setPhoneChange}
            statusState={status}
            submitSetter={submitSetter}
          />
          <Education />
          <Experience />
        </div>

        <div className="right">
          <Resume name={name} email={email} phone={phone} />
        </div>
      </div>
    </>
  );
}

export default App;
