import { useState } from 'react';

export default function Information({
  //the props are passed in here with nothing in them really because they depend on below 
  nameProp,
  emailProp,
  phoneProp,
  statusProp,
  submitSetterProp,
}) {
  // these states are for contact info, not resume.
  const [nameInfo, setNameInfo] = useState('');
  const [emailInfo, setEmailInfo] = useState('');
  const [phoneInfo, setPhoneInfo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    nameProp(nameInfo);
    emailProp(emailInfo);
    phoneProp(phoneInfo);
    submitSetterProp();
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1>Contact Information</h1>
      {(statusProp === 'pending' || statusProp === 'edit') && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={nameInfo}
            onChange={(e) => setNameInfo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={emailInfo}
            onChange={(e) => setEmailInfo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneInfo}
            onChange={(e) => setPhoneInfo(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </>
      )}
      {statusProp === 'submitted' && <button>Edit</button>}
    </form>
  );
}
