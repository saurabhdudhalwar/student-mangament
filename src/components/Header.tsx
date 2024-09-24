import '../App.css';
import Logo from "../Logo.jpeg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="app-name">Student Management Application</span>
      </div>
    </header>
  );
};

export default Header;
