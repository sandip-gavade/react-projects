import React, { useState } from 'react';

function FormDemo() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Radio Buttons */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === 'Male'}
              required
            />
            Male
          </label>
          <label style={{ marginLeft: '1rem' }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === 'Female'}
            />
            Female
          </label>
        </div>

        {/* Date Picker */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Date of Birth: </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Show submitted values */}
      {submittedData && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
          <p>
            <strong>DOB:</strong> {submittedData.dob}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormDemo;
