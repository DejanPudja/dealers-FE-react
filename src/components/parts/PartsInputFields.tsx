interface Props {
  label: string;
  className: 'field-long';
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: any;
}
export default function PartsInputFields({
  label,
  type,
  value,
  className,
  onChange,
}: Props) {
  return (
    <li>
      <label>{label}</label>
      <input
        type={type}
        name={type}
        value={value}
        className={className}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      />
    </li>
  );
}
