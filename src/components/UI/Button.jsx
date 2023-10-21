import PropTypes from "prop-types";

const Button = ({ children, variant, size, ...props }) => {
  const variants = {
    fill: "rounded-md text-blue-200 border border-blue-200 ",
    outline: "rounded-md text-white bg-blue-200",
    one:"border border-[#3758F9] rounded flex justify-center items-center"
  };
  const sizes = {
    sm: "py-3 px-7",
    md: "py-3 px-7 ",
    lg:"w-[184px] h-[48px] py-[12px] px-[24px]"
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
  variant: PropTypes.oneOf(["fill", "outline","one"]),
  size: PropTypes.oneOf(["sm", "md","lg"]),
};

export default Button;
