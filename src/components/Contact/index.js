import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the form fields are empty or if there's an error message
    if (!formState.name) {
      setErrorMessage('Name is required.');
      return;
    } else if (!validateEmail(formState.email)) {
      setErrorMessage('Your email is invalid.');
      return;
    } else if (!formState.message) {
      setErrorMessage('Message is required.');
      return;
    } else {
      setErrorMessage(''); // Clear any previous error message
    }
  
    // Proceed with sending email if all fields are valid
    emailjs.send(
      'service_oq6x6oa', 
      'template_i7spinv', 
      {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      'q_z-IEMPgIM8Ujst2' 
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      
      // Clear form fields after successful submission
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('Failed to send email.', err);
    });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate email
    if (name === 'email') {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!value.length) {
        setErrorMessage(`${name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    // Update formState on every input change
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name} // Controlled input with value
            onChange={handleChange} // Use onChange instead of onBlur
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={email} // Controlled input with value
            onChange={handleChange} // Use onChange instead of onBlur
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message} // Controlled textarea with value
            onChange={handleChange} // Use onChange instead of onBlur
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
