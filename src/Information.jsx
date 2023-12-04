import { useState } from 'react';

/* 
Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
 */

export default function Information({
  nameState,
  emailState,
  phoneState,
  status,
  submitSetter,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    nameState(name);
    emailState(email);
    phoneState(phone);
    submitSetter();
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1>Contact Information</h1>
      {(status === 'pending' || status === 'edit') && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </>
      )}
      {status === 'submitted' && <button>Edit</button>}
    </form>
  );
}
