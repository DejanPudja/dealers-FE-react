export default function PartsInputField({ captions }: any) {
  return (
    <li>
      <label>{captions}</label>
      <input type="text" name={captions} className="field-long" />
    </li>
  );
}
