/* eslint-disable react/prop-types */
import PropType from "prop-types"

function InputCard({ text, placeholder,type="text" }) {
  return (
    <div className="bg-gray-300 pb-[20px]">
      <p className="text-[16px] font-medium text-left text-[#111928] m-0 pb-[10px]">{text}</p>
      <div className="flex justify-between items-center py-3 pr-4 pl-5 bg-white rounded-md">
        <input type={type} placeholder={placeholder} className="w-[400px] border-none outline-none" />
        {type==="password" && <img src="public/Group.svg" />}
      </div>
    </div>
  );
}
InputCard.propTypes={
  placeholder: PropType.string,
}

export default InputCard;
