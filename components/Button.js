const Button = ({ variant, children, className, href, ...rest }) => {
  const classes =
    variant === 'primary'
      ? `px-8 py-4 bg-blue text-white rounded-md text-base  inline-flex pointer outline-none 
      hover:border-none hover:outline-none flex  items-center btn ${className}`
      : `${className}`;
  return (
    <>
      {!href ? (
        <button type="button" className={classes} {...rest}>
          {children}
        </button>
      ) : (
        <a href={href} className={classes}>
          {children}
        </a>
      )}
    </>
  );
};

export default Button;
