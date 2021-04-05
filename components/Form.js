import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from './Button';
import Input from './Input';
import CodeCountryNameMap from '../countries';

const Form = () => {
  const [form, setForm] = useState({ error: '', loading: false, country: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, error: '' });
    const fields = {
      fields: {
        'First Name': form.firstName,
        'Last Name': form.lastName,
        Country: CodeCountryNameMap[form.country],
        Email: form.email,
      },
    };
    setForm({ ...form, loading: true });
    fetch('https://api.airtable.com/v0/app4NnG5rlaf1gAnk/form', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })
      .then(() => alert('Form Sent!'))
      .catch((error) => {
        setForm({ ...form, error: 'An error occurred while trying to submit this form, Please try again.' });
      })
      .finally(() => {
        setForm({ ...form, loading: false });
      });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div id="form">
      <div className="form flex items-center justify-center">
        <div className="form-group bg-dark py-20 px-20 min-w-1/3   rounded-xl">
          <form action="POST">
            <h2 className="text-center text-5xl mb-20 gradient-text">Get early access</h2>
            <div className="form-group mb-10 grid grid-cols-2 gap-10">
              <Input placeholder="First name" type="text" name="firstName" onChange={handleChange} />
              <Input placeholder="Last name" type="text" name="lastName" onChange={handleChange} />
            </div>
            <div className="mb-10">
              <Input placeholder="Email address" type="text" name="email" onChange={handleChange} />
            </div>
            <div className="mb-10">
              {/* <Input placeholder="Country" type="text" name="country" onChange={handleChange} /> */}
              <ReactFlagsSelect
                selected={form.country}
                countryCode="NG"
                searchable
                className="menu-flags"
                selectButtonClassName="text-white"
                onSelect={(code) => {
                  setForm({ ...form, country: code });
                }}
              />
            </div>

            <div className="flex justify-center">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Get early access
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
