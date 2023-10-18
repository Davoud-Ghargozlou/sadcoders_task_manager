const Priorities = ({ color }) => {
  const colors = {
    blue: "bg-blue-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
  };
  return (
    <div className="flex gap-2">
      <div className={`w-[60px] h-2 rounded ${colors[color]}`}></div>
      <div className={`w-[60px] h-2 rounded ${colors[color]}`}></div>
      <div className={`w-[60px] h-2 rounded ${colors[color]}`}></div>
      <div className={`w-[60px] h-2 rounded ${colors[color]}`}></div>
    </div>
  );
};

export default Priorities;
