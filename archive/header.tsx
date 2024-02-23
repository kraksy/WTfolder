import React from 'react';

const Header = () => {
  return (
    <header className="blacktext" style={{ backgroundColor: 'transparent', border: '1px solid white', padding: '20px' }}>
      <h1 className="blacktext" style={{ textAlign: 'center', color: 'white' }}>Simple Planet WebSite</h1>
      <nav className="blacktext" style={{ display: 'flex', justifyContent: 'center' }}>
        <a className="blacktext" href="/" style={{ marginRight: '20px' }}>Home</a>
        <a className="blacktext" href="/planets" style={{ marginLeft: '20px' }}>Planets</a>
      </nav>
    </header>
  );
};

export default Header;