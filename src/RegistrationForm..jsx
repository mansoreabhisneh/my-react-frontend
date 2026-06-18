import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Tattoo_Idea: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://sheetdb.io/api/v1/wc7onoap3geft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [formData] })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        alert('Registration submitted successfully!');
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          Tattoo_Idea: ''
        });
      })
      .catch((error) => {
        console.error('Submit error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  return (
  <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', color: 'white' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Book a Tattoo Consultation</h2>

    {/* Name Field */}
    <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'flex-start' }}>
      <label htmlFor="name" style={{ width: '100px', textAlign: 'right', marginRight: '15px', marginTop: '8px' }}>
        Name
      </label>
      <input
        type="text"
        id="name"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
      />
    </div>

    {/* Email Field */}
    <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'flex-start' }}>
      <label htmlFor="email" style={{ width: '100px', textAlign: 'right', marginRight: '15px', marginTop: '8px' }}>
        Email
      </label>
      <input
        type="email"
        id="email"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
      />
    </div>

    {/* Phone Field */}
    <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'flex-start' }}>
      <label htmlFor="phone" style={{ width: '100px', textAlign: 'right', marginRight: '15px', marginTop: '8px' }}>
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="Phone"
        value={formData.Phone}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
      />
    </div>

    {/* Tattoo Idea Field */}
    <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'flex-start' }}>
      <label htmlFor="idea" style={{ width: '100px', textAlign: 'right', marginRight: '15px', marginTop: '8px' }}>
        Tattoo Idea
      </label>
      <textarea
        id="idea"
        name="Idea"
        value={formData.Idea}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px', minHeight: '80px', resize: 'vertical' }}
      />
    </div>

    {/* Submit Button */}
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button 
        type="submit" 
        style={{ padding: '10px 20px', backgroundColor: '#666', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </div>
  </form>
);
  
}
