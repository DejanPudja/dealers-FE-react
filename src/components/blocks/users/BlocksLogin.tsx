export default function BlocksLogin() {
  return (
    <div>
      <form>
        <ul className="form-style-1">
          <li>
            <label>Email</label>
            <input type="email" name="email" className="field-long" />
          </li>
          <li>
            <label>Password</label>
            <input type="password" name="password" className="field-long" />
          </li>
          <li>
            <input type="submit" value="Login" />
          </li>
        </ul>
      </form>
    </div>
  );
}
