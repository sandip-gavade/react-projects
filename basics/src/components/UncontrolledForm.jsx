import React, { useRef, useState } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log('Form submitted:', { name, email });

    setSubmittedData({ name, email });

    // Optional: Clear fields
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name: </label>
          <input type="text" ref={nameRef} required />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label>
          <input type="email" ref={emailRef} required />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default UncontrolledForm;
