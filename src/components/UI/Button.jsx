import PropTypes from "prop-types";

const Button = ({ children, variant, size, ...props }) => {
  const variants = {
    fill: "rounded-md text-blue-200 border border-blue-200 ",
    outline: "rounded-md text-white bg-blue-200",
  };
  const sizes = {
    sm: "py-3 px-7",
    md: "py-3 px-7 ",
  };
  return (
    <button
      className={`ml-4  rounded-md ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

export default Button;
