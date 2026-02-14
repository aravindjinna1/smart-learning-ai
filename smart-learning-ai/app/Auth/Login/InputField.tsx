interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

export default function InputField({
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        
        placeholder={placeholder}
        className="bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}
