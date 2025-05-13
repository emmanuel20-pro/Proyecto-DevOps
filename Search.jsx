import React, { useState } from "react";

const Search = ({ brands, products }) => {
  const [query, setQuery] = useState("");

  const filteredBrands = brands.filter((brand) =>
    brand.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container" style={{ padding: "24px" }}>
      <h2>Buscar</h2>
      <input
        type="text"
        placeholder="Buscar marcas o productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "16px",
        }}
      />
      <div>
        <h3>Marcas</h3>
        {filteredBrands.length > 0 ? (
          <ul>
            {filteredBrands.map((brand, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <img
                  src={brand.logo}
                  alt={brand.nombre}
                  style={{ width: "40px", marginRight: "8px" }}
                />
                {brand.nombre}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay marcas que coincidan con la búsqueda.</p>
        )}
        <h3>Productos</h3>
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  style={{ width: "40px", marginRight: "8px" }}
                />
                {product.nombre} - {product.precio}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
