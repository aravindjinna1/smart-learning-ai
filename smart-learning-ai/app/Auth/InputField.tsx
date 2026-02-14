interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register: any;
}

export default function InputField({
  label,
  type,
  placeholder,
  error,
  register,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-300">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`bg-[#0B0F19] border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none
        ${
          error
            ? "border-red-500"
            : "border-gray-700 focus:border-indigo-500"
        }`}
      />

      {error && (
        <span className="text-sm text-red-400">{error}</span>
      )}
    </div>
  );
}
