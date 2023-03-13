import React, { useState, useRef, useEffect } from 'react';
import { Header, Button } from '../../components';
import { validateEmail } from '../../utils/validation';

const Contact = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const userNameInput = useRef(null);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'email') {
      if (validateEmail(value)) {
        setData((prevdata) => ({ ...prevdata, [name]: value }));
        setErrors((prevError) => ({ ...prevError, email: null }));
      } else {
        setErrors((prevError) => ({
          ...prevError,
          email: 'email is not valid',
        }));
      }
    } else {
      setData((prevdata) => ({ ...prevdata, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && data.userName && data.subject) {
      setSuccess(true);
      const inputs = document.querySelectorAll('.containerForm form input');
      inputs.forEach((input) => {
        const item = input;
        item.value = '';
      });
      document.querySelector('.containerForm form textarea').value = '';
    } else {
      console.log('all of the inputs are required');
    }
  };
  useEffect(() => {
    userNameInput.current.focus();
  }, []);
  return (
    <>
      <Header />
      <h1> Contact Pages</h1>
      <div className="containerForm">
        <form onSubmit={handleSubmit} noValidate>
          <div className="formControl">
            <span>useName:(Required)</span>
            <input
              id="useName"
              type="text"
              placeholder="userName"
              name="userName"
              ref={userNameInput}
              onChange={handleChange}
            />
          </div>
          <div className="formControl">
            <span>email:(Required)</span>
            {errors.email && <span>{errors.email}</span>}
            <input
              id="email"
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="formControl" style={{ width: '100%' }}>
            <span>subject:(Required)</span>
            <textarea
              id="subject"
              rows="5"
              placeholder="subject"
              name="subject"
              onChange={handleChange}
            />
          </div>

          <div className="formControl" style={{ width: '150px' }}>
            {!errors.email && data.userName && data.subject ? (
              <Button type="submit"> send</Button>
            ) : (
              <Button type="submit" disabled>
                {' '}
                can not send
              </Button>
            )}
            {success && (
              <h4 style={{ color: 'green' }}>
                {' '}
                congratulations!(open the console page)
              </h4>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
