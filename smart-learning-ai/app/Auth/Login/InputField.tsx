interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register?: any;
}

export default function InputField({
  label,
  type,
  placeholder,
  error,
  register,
}: InputFieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{
        fontSize: 11, fontWeight: 700, color: "#64748b",
        letterSpacing: "0.06em", textTransform: "uppercase",
      }}>
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...(register || {})}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.09)"}`,
          borderRadius: 12,
          padding: "12px 16px",
          color: "#f1f5f9",
          fontSize: 14,
          fontFamily: "inherit",
          outline: "none",
          width: "100%",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = error
            ? "rgba(239,68,68,0.6)"
            : "rgba(99,102,241,0.55)";
          e.currentTarget.style.boxShadow = error
            ? "0 0 0 3px rgba(239,68,68,0.1)"
            : "0 0 0 3px rgba(99,102,241,0.12)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "rgba(239,68,68,0.5)"
            : "rgba(255,255,255,0.09)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />

      {error && (
        <span style={{
          fontSize: 11, color: "#f87171",
          display: "flex", alignItems: "center", gap: 5,
        }}>
          <span style={{
            width: 4, height: 4, borderRadius: "50%",
            background: "#f87171", display: "inline-block", flexShrink: 0,
          }} />
          {error}
        </span>
      )}
    </div>
  );
}