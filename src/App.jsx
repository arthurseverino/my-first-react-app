import { useState } from 'react';
import Information from './Information.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Resume from './Resume.jsx';
import './App.css';

function App() {
  // the initial state is for the resume, the second is for the contact info
  const [name, setName] = useState('Nameeee');
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone');
  const [status, setStatus] = useState('pending');

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
            // its passing in the setName function into Information
            // so every time submit is pressed, nameProp is updated to the current new name
            nameProp={setName}
            emailProp={setEmail}
            phoneProp={setPhone}
            statusProp={status}
            submitSetterProp={submitSetter}
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
