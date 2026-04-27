type InputProps = {

    label : string,
    placeholder: string
}

const InputText = ({ label, placeholder }: InputProps) => {
  return (
    <div>
      <label className="text-sm text-gray-600 block mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-14 rounded-md bg-[#f2f4fa] px-4 outline-none"
      />
    </div>
  );
}
export default InputText;