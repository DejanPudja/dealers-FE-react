export default class Spinner {
  static formSpinner() {
    return (
      <div>
        <img src="images/spinner.gif" alt="spinner" className="spinner-form" />
      </div>
    );
  }
  static tableSpinner() {
    return (
      <tr>
        <td>
          <img
            src="images/spinner.gif"
            alt="spinner"
            className="spinner-table"
          />
        </td>
      </tr>
    );
  }
}
