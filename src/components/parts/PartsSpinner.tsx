interface SpinnerType {
  className: 'spinner-form' | 'spinner-table';
}
export default function PartsSpinner({ className }: SpinnerType) {
  return (
    <tr>
      <td>
        <img src="images/spinner.gif" alt="spinner" className={className} />
      </td>
    </tr>
  );
}
