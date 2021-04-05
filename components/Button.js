const Button = ({ variant, children, className, href, ...rest }) => {
  const classes =
    variant === 'primary'
      ? `px-8 py-4 bg-blue text-white rounded-md text-base ${className} inline-block pointer outline-none 
      hover:border-none hover:outline-none btn`
      : `${className}`;
  return (
    <div>
      {!href ? (
        <button type="button" className={classes} {...rest}>
          {children}
        </button>
      ) : (
        <a href={href} className={classes}>
          {children}
        </a>
      )}
    </div>
  );
};

export default Button;
