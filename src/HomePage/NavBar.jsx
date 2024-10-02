import "bootstrap/dist/css/bootstrap.min.css"
function NavBar(){
 return <>
 <header className="p-3 text-bg-dark">
 <div className="container">
   <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
       <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
     </a>

     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
     <li><a href="#" className="nav-link px-2 text-white">logo</a></li>
       <li><a href="#" className="nav-link px-2 text-white">Study</a></li>
       <li><a href="#" className="nav-link px-2 text-white">Labs</a></li>
       <li><a href="#" className="nav-link px-2 text-white">Events</a></li>
       <li><a href="#" className="nav-link px-2 text-white">Discussion</a></li>
       <li><a href="#" className="nav-link px-2 text-white">Assessemts</a></li>
     </ul>
     <div className="text-end">
       <button type="button" className="btn btn-outline-light me-2">Login</button>
       <button type="button" className="btn btn-warning">Sign-up</button>
     </div>
   </div>
 </div>
</header>
</>
}

export default NavBar;