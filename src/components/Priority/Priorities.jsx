import SinglePriority from "@/components/Priority/SinglePriority";

const Priorities = () => {
  return (
    <div className="flex gap-2">
      <SinglePriority color="blue" />
      <SinglePriority color="purple" />
      <SinglePriority color="green" />
      <SinglePriority color="red" />
    </div>
  );
};

export default Priorities;
