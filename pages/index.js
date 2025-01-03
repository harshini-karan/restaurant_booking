// pages/index.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restaurant Table Booking</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className={styles.input} />
        
        <label className={styles.label}>Time</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className={styles.input} />
        
        <label className={styles.label}>Number of Guests</label>
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} required className={styles.input} />
        
        <label className={styles.label}>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} />
        
        <label className={styles.label}>Contact Information</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className={styles.input} />
        
        <button type="submit" className={styles.button}>Book Now</button>
      </form>
    </div>
  );
}
