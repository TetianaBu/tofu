"use client";
import React, { useState } from "react";

import styles from "./ContactForm.module.css";

function ContactForm() {
  const id = React.useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const requestBody = JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      if (response.status === 200) {
        setValues({ name: "", email: "", message: "" });
        setLoading(false);
        setSuccess(true);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroupsContainer}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId}>Name:</label>
          <input
            value={values.name}
            onChange={handleChange}
            id={nameId}
            name="name"
            aria-label="Name"
            autoComplete="on"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={emailId}>Email:</label>
          <input
            onChange={handleChange}
            className={styles.input}
            id={emailId}
            name="email"
            required={true}
            disabled={loading}
            type="email"
            aria-label="Email address"
            autoComplete="on"
            value={values.email}
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={messageId}>Your message:</label>
        <textarea
          onChange={handleChange}
          className={styles.input}
          id={messageId}
          name="message"
          required={true}
          minLength={10}
          maxLength={1000}
          disabled={loading}
          type="text"
          aria-label="Message"
          value={values.message}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button
          disabled={loading}
          type="submit"
          className={styles.submitButton}
        >
          {loading ? "Submitting…" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
