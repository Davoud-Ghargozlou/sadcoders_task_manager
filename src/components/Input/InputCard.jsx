/* eslint-disable react/prop-types */
import PropType from "prop-types"

function InputCard({ text, placeholder,type="text" }) {
  return (
    <div className=" pb-6">
      <p className="text-base font-medium text-left text-black m-0 pb-2.5">
        {text}
      </p>
      <div className="flex justify-between items-center py-3 pr-4 pl-5 bg-white rounded-md border border-solid border-gray-200">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border-none outline-none"
        />
        {type==="password" && <img src="public/Group.svg" />}
      </div>
    </div>
  );
}
InputCard.propTypes={
  placeholder: PropType.string,
}

export default InputCard;
