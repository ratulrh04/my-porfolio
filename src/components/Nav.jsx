import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Nav = () => {
    return (
      <div>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="../../public/images/Title-logo.jpg" alt="My-Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#Skill">Skill</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#Project">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </BrowserRouter>
      </div>
    );
  };
  
  export default Nav;