import { useTranslation } from "react-i18next";

const OutlinedInput = ({
  label,
  id,
  type,
  name,
  placeholder = "",
  onChange, error
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative mt-6">
      <input
        id={id}
        type={type}
        name={name}
        placeholder={t(placeholder)}
        onChange={onChange}
        className="peer w-[547px] py-[18.5px] px-[14px] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
      />
      <label
        htmlFor={id}
        className="absolute font-bold left-3 -top-3 bg-white px-1 text-sm
                   peer-focus:text-blue-700 transition-all"
      >
        {t(label)}
      </label>
      {{ error } && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export { OutlinedInput };
