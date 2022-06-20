import React, { useState } from 'react';

function ContactForm() {
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // hook that will manage the form data 


    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;