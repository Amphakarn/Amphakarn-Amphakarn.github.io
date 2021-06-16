import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const userID = 'user_8gONvGrUlrgtAdI4aL1L8';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage('Message sent successfully!');
        setTimeout(() => setSuccessMessage(''), 5000);
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts py-5 px-3">
      <div className="text-center">
        <h1>contact me</h1>
        {/* <p>I would love to hear from you, feel free to get in touch.</p> */}
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row gx-4">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  type="text"
                  {...register('name', {
                    required: 'Please enter your name.',
                    maxLength: {
                      value: 20,
                      message:
                        'Please enter a name with fewer than 20 characters',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  className="form-control"
                  placeholder="example@example.com"
                  name="email"
                  type="email"
                  {...register('email', {
                    required: 'Please provide your email.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>

              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  {...register('subject', {
                    required: 'Oops!, you forget to add the subject.',
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/* MESSAGE */}
              <div className="text-center">
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Please write your message here..."
                  name="message"
                  type="text"
                  {...register('message', {
                    required: 'Please write your message....',
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.message && errors.message.message}
              </span>

              <button className="btn-main-offer contact-btn" type="submit">
                send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
