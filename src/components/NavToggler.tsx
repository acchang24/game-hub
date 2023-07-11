import "./NavToggler.css";

const NavToggler = () => {
  return (
    <label className="toggle">
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch"></div>
      <span className="toggle-label">Dark mode</span>
    </label>
  );
};

export default NavToggler;
