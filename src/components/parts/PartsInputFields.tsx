interface Props {
  label:
    | 'Title'
    | 'Address'
    | 'Latitude'
    | 'Longitude'
    | 'Name'
    | 'Email'
    | 'Password'
    | 'Confirm Password';
  className: 'field-long';
  type: 'text' | 'email' | 'password';
  value: string | number;
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
