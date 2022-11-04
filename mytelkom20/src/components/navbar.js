
function Navbar() {
  return (
    <nav class="sticky navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="https://firmansyah2308.files.wordpress.com/2009/04/telkom.jpg?w=594"
        height="28"
        width="200"
        ></img>
        
        <a role="button" 
        class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="#lab301" class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>
          <a href="#about" class="navbar-item">
            About Developer
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar