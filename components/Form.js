import { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from './Button';
import Input from './Input';
import CodeCountryNameMap from '../countries';
import Checkbox from './CheckBox';
import { EMAIL_REGEX } from '../data';

const INITIAL_STATE = {
  email: '',
  firstName: '',
  lastName: '',
  country: '',
  terms: false,
};
const Form = ({ setShowModal }) => {
  const [form, setForm] = useState(INITIAL_STATE);
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

    if (!form.terms) {
      errs.terms = 'Please agree to receive product updates';
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
    fetch(process.env.API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })
      .then(() => {
        setStatus('success');
        setForm(INITIAL_STATE);
        setShowModal(true);
      })
      .catch((error) => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === 'checkbox' ? checked : value;
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
            <div className="mb-20">
              <p />
              <Checkbox
                name="terms"
                label="I agree to receive product updates from Varsoe."
                onChange={handleChange}
                checked={form.terms}
              />
              {errors.terms && <div className="input-error">{errors.terms}</div>}
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
