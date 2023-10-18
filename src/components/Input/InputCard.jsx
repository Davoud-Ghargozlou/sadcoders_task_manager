/* eslint-disable react/prop-types */

function InputCard({ text, placeholder }) {
  return (
    <div className="bg-gray-300 pb-6">
      <p className="text-base font-medium text-left text-black m-0 pb-2.5">
        {text}
      </p>
      <div className="flex justify-between items-center py-3 pr-4 pl-5 bg-white rounded-md">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border-none outline-none"
        />
        <img src="public/Group.svg" />
      </div>
    </div>
  );
}

export default InputCard;
