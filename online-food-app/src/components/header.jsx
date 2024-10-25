import Logo from '../../public/assets/1.png';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid col-1">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" style={{ width: 120, height: 'auto' }} />
          </a>

          {/* Nama Aplikasi untuk layar kecil */}
          <span className="navbar-text text-white fs-4 d-lg-none">Restaurant</span> {/* Hanya tampil saat collapse */}

          {/* Tombol Toggle */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span
              id='togglerButton'
              className="navbar-toggler-icon"
              style={{
                marginLeft: '25px',
                backgroundColor: 'transparent', 
                border: '2px solid gray',       
                borderRadius: '5px',            
                padding: '5px',              
                width: '35px',                  
                height: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                cursor: 'pointer',      
              }}
            >
              {/* Garis-garis toggle */}
              <span style={{ backgroundColor: 'white', height: '3px', width: '100%', borderRadius: '2px' }}></span>
              <span style={{ backgroundColor: 'white', height: '3px', width: '100%', borderRadius: '2px' }}></span>
              <span style={{ backgroundColor: 'white', height: '3px', width: '100%', borderRadius: '2px' }}></span>
            </span>
          </button>
        </div>

        {/* Collapse Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white mx-2 fs-5" aria-current="page" href="#order-food">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white mx-2 fs-5" aria-current="page" href="#">Promotion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white mx-2 fs-5" aria-current="page" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white mx-2 fs-5" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white mx-2 fs-5" href="#">Register</a>
            </li>
          </ul>

          {/* Tombol Cart */}
          <button className="btn btn-outline-light position-relative d-flex align-items-center" style={{ padding: '5px 15px', borderRadius: '30px' }}>
            <span style={{ marginRight: '10px', fontSize: '20px' }}>
              <i className="fas fa-shopping-cart"></i>
            </span>
            Cart
          </button>
        </div>

        {/* Nama Aplikasi untuk layar besar */}
        <span className="navbar-text text-white fs-4 d-none d-lg-block mx-3">Restaurant</span> {/* Hanya tampil di layar besar */}
      </nav>
    </>
  );
}

export default Header;
