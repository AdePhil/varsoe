const Checkbox = ({ name, label, ...rest }) => (
  <label className="checkbox" htmlFor={name}>
    <span className="checkbox__input">
      <input type="checkbox" name={name} {...rest} id={name} />
      <span className="checkbox__control">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="none" stroke="#fff" strokeWidth="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
        </svg>
      </span>
    </span>
    <span className="radio__label">{label}</span>
  </label>
);

export default Checkbox;
