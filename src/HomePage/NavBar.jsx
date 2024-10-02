import "bootstrap/dist/css/bootstrap.min.css";


function NavBar() {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">D3VCode</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Study</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Labs</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Discussion</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">Assessments</a>
                </li>
              </ul>
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign Up</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
