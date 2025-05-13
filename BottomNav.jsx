import React from 'react';

const BottomNav = ({ setVista }) => (
  <footer className="bottom-nav">
    <div className="nav-item" onClick={() => setVista('home')}>🏠<br />Home</div>
    <div className="nav-item" onClick={() => setVista('brands')}>🏷️<br />Marcas</div>
    <div className="nav-item">🔍<br />Buscar</div>
    <div className="nav-item">🛒<br />Carrito</div>
    <div className="nav-item">👤<br />Cuenta</div>
  </footer>
);

export default BottomNav;