import Button from './Button';
import Input from './Input';

const Form = () => (
  <div id="form">
    <div className="form flex items-center justify-center">
      <div className="form-group bg-dark py-20 px-20 min-w-1/3  rounded-xl">
        <form
          action="
        "
        >
          <h2 className="text-center text-5xl mb-20 gradient-text">Get early access</h2>
          <div className="form-group mb-10 grid grid-cols-2 gap-10">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <div className="mb-10">
            <Input placeholder="Email address" />
          </div>
          <div className="mb-10">
            <Input placeholder="Country" />
          </div>

          <div className="flex justify-center">
            <Button variant="primary">Get early access</Button>
          </div>
        </form>
      </div>
    </div>
    <div className="py-32 bg-dark" />
  </div>
);

export default Form;
