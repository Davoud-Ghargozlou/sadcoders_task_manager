import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "fill",
  size = "md",
  type = "button",
  ...props
}) => {
  const variants = {
    outline: "rounded-md text-blue-200 border border-blue-200 ",
    fill: "rounded-md text-white bg-blue-200",
    one: "border border-[#3758F9] rounded flex justify-center items-center",
  };
  const sizes = {
    sm: "py-3 px-7",
    md: "py-3 px-7 ",
    lg: "w-[184px] h-[48px] py-[12px] px-[24px]",
  };
  return (
    <button
      type={type}
      className={`rounded-md ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "outline", "one"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
