import { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from './Button';
import Input from './Input';
import CodeCountryNameMap from '../countries';

// eslint-disable-next-line no-control-regex
export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const PASSWORD_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;

const Form = () => {
  const [form, setForm] = useState({ country: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const isFormValid = () => {
    const errs = {};
    if (!form.firstName) {
      errs.firstName = 'Please enter your first name';
    }

    if (!form.email || !EMAIL_REGEX.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }

    if (!form.lastName) {
      errs.lastName = 'Please enter your last name';
    }

    if (!form.country) {
      errs.country = 'Please select your country';
    }

    const isValid = Object.values(errs).every((err) => err === '');
    return { isValid, errs };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errs } = isFormValid();
    setErrors(errs);
    if (!isValid) {
      return;
    }
    setForm({ ...form, error: '' });
    const fields = {
      fields: {
        'First Name': form.firstName,
        'Last Name': form.lastName,
        Country: CodeCountryNameMap[form.country],
        Email: form.email,
      },
    };
    setLoading(true);
    fetch('https://api.airtable.com/v0/app4NnG5rlaf1gAnk/form', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })
      .then(() => {
        setStatus('success');
        setForm({ email: '', firstName: '', lastName: '', country: '' });
      })
      .catch((error) => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value) {
      const errorEntries = Object.entries(errors).filter(([errorName]) => errorName !== name);
      setErrors(Object.fromEntries(errorEntries));
    }
  };

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => {
        setStatus('');
      }, 1500);
    }
  }, [status]);
  return (
    <div id="form">
      <div className="form flex items-center justify-center">
        <div className="form-group bg-dark py-20 px-10 sm:py-20 sm:px-20  rounded-xl">
          <form action="POST">
            <h2 className="text-center text-5xl mb-20 gradient-text">Get early access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 ">
              <div className="mb-20">
                <Input
                  placeholder="First name"
                  value={form.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                />
                {errors.firstName && <div className="input-error">{errors.firstName}</div>}
              </div>
              <div className="mb-20">
                <Input
                  placeholder="Last name"
                  value={form.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                />
                {errors.lastName && <div className="input-error">{errors.lastName}</div>}
              </div>
            </div>
            <div className="mb-20">
              <Input placeholder="Email address" value={form.email} type="text" name="email" onChange={handleChange} />
              {errors.email && <div className="input-error">{errors.email}</div>}
            </div>
            <div className="mb-20">
              <ReactFlagsSelect
                selected={form.country}
                countryCode="NG"
                searchable
                className="menu-flags"
                selectButtonClassName="text-white"
                onSelect={(code) => {
                  setForm({ ...form, country: code });
                  if (code) {
                    const errorEntries = Object.entries(errors).filter(([errorName]) => errorName !== 'country');
                    setErrors(Object.fromEntries(errorEntries));
                  }
                }}
              />
              {errors.country && <div className="input-error">{errors.country}</div>}
            </div>

            <div className="flex justify-center">
              <Button variant="primary" type="submit" onClick={handleSubmit} disabled={loading && status === 'success'}>
                {loading && <img src="/svgs/spinner.svg" alt="spinner" className="mr-5 w-10" />}
                {status === 'success' && <img src="/svgs/checkmark.svg" alt="check" className="mr-5 w-10" />}
                {status === 'success' ? 'Request Sent' : 'Get early access'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
