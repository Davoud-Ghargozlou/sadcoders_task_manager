const Button = ({ children, variant,size, ...props }) => {
  const variants = {
    fill: "bg-orange-500 py-2 px-4 hover:bg-slate-400 rounded-md m-2",
    outline: "",
  };
  const sizes = {
    sm: "p-2",
    md: "p-10 bg-red-500",
  };
  return (
    <button className={`ml-4  rounded-md ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
