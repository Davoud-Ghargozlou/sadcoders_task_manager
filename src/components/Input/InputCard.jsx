import PropType from "prop-types";
import { useId, useState } from "react";
import eyeIconUrl from "@/assets/images/icons/eye.svg";
import eyeSlashIconUrl from "@/assets/images/icons/eye-slash.svg";

function InputCard({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  name,
  error,
}) {
  const localId = useId();
  const [localType, setLocalType] = useState(type);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={localId}
          className="inline-block font-medium text-left text-gray-900 pb-2.5"
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          id={localId}
          name={name}
          type={localType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full outline-none bg-white py-3 px-4 rounded-md flex-grow border focus:border-gray-900 ${
            error ? "border-red-500" : "border-transparent"
          }`}
        />
        {type === "password" && (
          <button
            type="button"
            className="bg-none outline-none absolute h-full w-12 right-0 top-0 flex items-center justify-center"
            onClick={() =>
              setLocalType((s) => (s === "password" ? "text" : "password"))
            }
          >
            <img
              src={localType === "password" ? eyeSlashIconUrl : eyeIconUrl}
            />
          </button>
        )}
      </div>

      {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
    </div>
  );
}

InputCard.propTypes = {
  error: PropType.string,
  name: PropType.string,
  label: PropType.node,
  value: PropType.string,
  type: PropType.string,
  onChange: PropType.func,
  placeholder: PropType.string,
};

export default InputCard;
