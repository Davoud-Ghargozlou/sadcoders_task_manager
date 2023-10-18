import PropTypes from "prop-types";

const Button = ({ children, variant = "fill", size = "md", ...props }) => {
  const variants = {
    fill: "bg-orange-500 py-2 px-4 hover:bg-slate-400 rounded-md m-2",
    outline: "",
  };
  const sizes = {
    sm: "p-2",
    md: "p-10 bg-red-500",
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
