import React, { useState } from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Camisa Blanca',
    precio: '$350',
    imagen: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['#ffffff', '#000000', '#1976d2'], // blanco, negro, azul
    descripcion: 'Camisa fresca de algodón ideal para verano.',
  },
  {
    id: 2,
    nombre: 'Vestido Rojo',
    precio: '$500',
    imagen: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    nombre: 'Pantalón Negro',
    precio: '$420',
    imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAIDBAYHAQX/xABHEAACAQIDBAUGCAsJAQAAAAAAAQIDBAUGEQcSITETQVFxgSIykaKywRQjMzZhcrGzRVJTYnR1gpKho9FDVGRlg5PC0+EI/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAERQQL/2gAMAwEAAhEDEQA/AO4gAAAAAAAHzMVzDg2DShDFsUs7Oc1vRjXrRg5LtSb4n0pyjGLlJqMUtW2+SIs51x6eY8y3uJKXxM59HbrspR4R9PGX7QEgJbQsoRfzgspfUnvfYUPaNlBfhy38IzfuI0R480KcoKqt+DlHR8EwJMraHlF/hy28VL+hk2edcr3tSNO2x7Dp1JcIw+ERUn4Mi/w7EU668P8AwCYINc2fY28fyjh97UaddQ6Kvp+Uh5Mn46a+JsYAAAWbuqre3q12tVTg5tLr0WprEs21qcPjbCO9BSdSUK2sY6Q3+Hk6vg+w2yUVJNSWqa0aMSGFYdTpKlTsbaNNJrcjRilo+fDT6Wa5mNSbxg22YbWvdW9vGlXUriU4wk4pryet6PgmfYT4GNTwywpVY1adlbwqRlKcZxpRUlKXnNPTm+vtMrQk1hFvQARQAAAABqu0/E54TkbFa9GTjWqU1Qptc06jUdfBNvwI0JJJaLqO8beKsoZRtqa82pewUvCMn7jg/UAPNPL8AzyT8oCs8S4g9QHY9gF/OVDGcOlJuNOdOvBPq3k4y9helnXThuwWo45jxGmuU7RN+El/U7kAAAAAAAAAAAAAAAABzjbtS38nUamnyd7Tb8VJe84KuRIvbJQ6bZ/iEuulOjUX+5FfYyOi5AeMs1J7tSP0l58WXlh1WeG1MVXGlQuIW0lp1zjKWvqJeIFhalaKVo+RUgOmbB1rme+fZZ/8kd0OI7A6beN4tU6o2sI698n/AEO3AAAAAAAAAAAAAAAAAaxtMp9JkHHVpru2c5/u8fcRlXIlVm+2V3lTGLdrVVbKtHh9MGRVjyA8b0OgYFg7uti2YrhR1mrxXMH9FLc1/gpHP58jvmzLD41dkqoyjvfDKd02n16ynFfYgOAQeumhdjyMe1bdODfNxRkrkB2H/wCf6HxWOXHbOjTT7lNv2kdeOabB7bosq3lwudxeyfohGPuOlgAAAAAAAAAAAAAAAAWbyj8ItK9D8pTlD0rQiLuOnKVOXCUXutdjRMAiVjKSx3FFDTdV7XS07OkkBhT5EmtmNHotn2AwfXZwl+9x95GSt5rJUZIpqjk/BKUeUbGivUQEWatB2t5cW0lo6FadJ/sya9xUuRn5mpqnmvGoR5K/r/eMwOoCRmyC2+D5Aw59dZ1Kj8Zy9yRuZreziKjkLANFzsaT8XHU2QAAAAAAAAAAAAAAAAARBuKnSX1xUf8AaVpzfjJv3kvJvSEn9BD5ta6geVvNfcSuykt3K+ELss6XsIijWesH3EsMr/NrCv0Sl7KAjHmmW9m3Gmv7/X9tmAZWPy3szYw+3ELj72RiASf2ex3ciZfX+XUH6iNhPgZA+YuXv1bb/dxPvgAAAAAAHjaS1fBHoAAAAAAAAFu4elvVfZB/YQ/WkocCXmIS3LC5l+LSk/4MiDTacI9yAVX5D7iWOVfmzhP6HS9lETK/mPuJZ5U+bGE/odL2EBFfEJ9JjGIT/Gu6z9eRak9Iso3+lrVan485S9LbPZPjoBKTZ+9ci5f/AFdQ9hGwGubOZb2Qsvv/AAFFeqjYwAAAAAC3X+Rn3Fa5IouFrRno9HuviVrkgPQAAAAAAAYGPzVLAsRqPlG1qP1WRGo+TTguyKJWZ5rOhkzHK0ecLCtJfuMimupAK3mS7iWGW5bmU8Mn+LY036iInVX5Eu4lbgkt3JdjLsw6D/lgRRtpawi+1F1cW2Y9q/iofVRkJ6ICTey2W9s+wP8ANt930Nr3G1GnbIZ7+zzCfzVVj6KkjcQAAAAAC3cfIz7mVrkii4+Rn3Fa5LgB6AAAAAAADVtqNXodn+Oy1861lBd8mo+8jA/oJHbaqzpbPMQiudWrQh/Ni/cRwb4AUVpaU5N9jJW4brDIttrwccMj92RQr8aU/qslmkqeTN3XzcN5/wCmBEy24UofVRfb1LFv8jD6qLq1b06wJIbF5qez2w/NqVl/Mkbyc72F1d/I3Rt/JXdWPpevvOiAAAAAAFu416GbXPQrXJFu5TdCaWmrXWXFyQHoAAAAAAAPj5my/YZnwuWG4oqjt3NT+KnuyTXLictxfZXgdrUboXmJRWvm9JTaXphqABdwXZNgF3KPwm6xKpBvRwdWCT9EEzrNTD6FTDJYbLf+Duh0L0l5W7u7vPt0PAByDF9leB2t1KFvd4lCn1Q6WDS9MNTy12VYLWhrLEMUXdUpf9YAHS8l5ZsMq4TO1w2VeUK1Tpakq81JuWij1JdUUbEAAAAAAAW7j5Gf1WVrkgAP/9k=',
  },
  {
    id: 4,
    nombre: 'Falda Plisada',
    precio: '$390',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eWGYQa50OKhesvtYLbiGI3sQzc-DW4lr0Q&s',
  },
  {
    id: 5,
    nombre: 'Chaqueta Denim',
    precio: '$650',
    imagen: 'https://m.media-amazon.com/images/I/41w33htGknL._AC_.jpg',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['#ffffff', '#f5f5f5', '#2196f3'], 
    descripcion: 'Camisa fresca de algodón ideal para verano.',

  },
  {
    id: 6,
    nombre: 'Suéter Beige',
    precio: '$320',
    imagen: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    nombre: 'Blusa Azul',
    precio: '$280',
    imagen: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    nombre: 'Short Casual',
    precio: '$210',
    imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    nombre: 'Abrigo Largo',
    precio: '$1200',
    imagen: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
  },
];

const Home = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirModal = (producto) => setProductoSeleccionado(producto);
  const cerrarModal = () => setProductoSeleccionado(null);

  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="header" style={{ position: 'relative' }}>
        <h1 className="title">Vestiére</h1>
      </header>

      {/* Imagen principal */}
      <div className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Moda principal"
          className="hero-image"
        />
      </div>

      {/* Secciones destacadas */}
      <div className="sections">
        <div className="section">
          <h2>Fresco en Verano</h2>
        </div>
        <div className="section">
          <h2>Los más comprados</h2>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="product-grid">
        {productos.map(producto => (
          <div
            key={producto.id}
            className="product-card"
            onClick={() => abrirModal(producto)}
            style={{ cursor: 'pointer' }}
          >
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Tallas: </span>
              {producto.tallas
                ? producto.tallas.map(talla => (
                    <span
                      key={talla}
                      style={{
                        margin: '0 4px',
                        padding: '2px 6px',
                        border: '1px solid #e91e63',
                        borderRadius: '6px',
                        fontSize: '12px',
                      }}
                    >
                      {talla}
                    </span>
                  ))
                : <span style={{ fontSize: '12px', color: '#888' }}>Única</span>
              }
            </div>
            <button
              className="buy-btn"
              onClick={e => { e.stopPropagation(); /* lógica de compra */ }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {productoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 12 }}
            />
            <h2>{productoSeleccionado.nombre}</h2>
            <p style={{ color: '#e91e63', fontWeight: 'bold', fontSize: 18 }}>
              {productoSeleccionado.precio}
            </p>
            <div>
              <b>Tallas:</b> {productoSeleccionado.tallas && productoSeleccionado.tallas.join(', ')}
            </div>
            <div style={{ margin: '10px 0' }}>
              <b>Colores:</b>
              <div style={{ display: 'inline-flex', gap: 8, marginLeft: 8 }}>
                {productoSeleccionado.colores && productoSeleccionado.colores.map((color, idx) => (
                  <span
                    key={color + idx}
                    style={{
                      display: 'inline-block',
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: color,
                      border: '2px solid #ccc',
                      marginRight: 4,
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ margin: '10px 0' }}>
              <b>Descripción:</b> <br />{productoSeleccionado.descripcion}
            </div>
            <button className="buy-btn" onClick={() => alert('Comprar')}>Comprar</button>
            <button style={{ marginLeft: 10 }} onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Navegación inferior */}
      <footer className="bottom-nav">
        <div className="nav-item">🏠<br />Home</div>
        <div className="nav-item">🏷️<br />Marcas</div>
        <div className="nav-item">🔍<br />Buscar</div>
        <div className="nav-item">🛒<br />Carrito</div>
        <div className="nav-item">👤<br />Cuenta</div>
      </footer>
    </div>
  );
};

export default Home;
