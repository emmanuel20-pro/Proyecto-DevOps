import React from "react";

const BrandsProductsModal = ({ marca, productos, onClose }) => {
  if (!marca) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          minWidth: 340,
          minHeight: 180,
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          position: "relative",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "transparent",
            border: "none",
            fontSize: 22,
            cursor: "pointer"
          }}
          aria-label="Cerrar"
        >×</button>
        <h3 style={{ marginBottom: 16 }}>{marca}</h3>
        <ul style={{ paddingLeft: 0, listStyle: "none" }}>
          {(productos && productos.length > 0
            ? productos
            : [{ nombre: "No hay productos", precio: "", descripcion: "" }]
          ).map((prod, i) => (
            <li key={i} style={{ marginBottom: 18, borderBottom: "1px solid #eee", paddingBottom: 10 }}>
              <div style={{ fontWeight: 500, fontSize: 16 }}>{prod.nombre}</div>
              {prod.precio && <div style={{ color: "#222", fontWeight: 400 }}>{prod.precio}</div>}
              {prod.descripcion && (
                <div style={{ fontSize: 14, color: "#555", marginTop: 2 }}>{prod.descripcion}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const productosNike = [
  {
    nombre: "Nike Air Force 1 '07",
    precio: "$2,599 MXN",
    descripcion: "Zapatilla icónica con parte superior de cuero, suela de goma y amortiguación Nike Air. Ideal para uso diario y estilo urbano."
  },
  {
    nombre: "Nike Air Max 90 (blanco y gris)",
    precio: "$2,099.30 MXN",
    descripcion: "Diseño clásico con combinación de colores neutros, suela tipo waffle y unidad Air visible. Comodidad retro con toques modernos."
  },
  {
    nombre: "Nike Air Max 90 (negro y naranja)",
    precio: "$2,099.30 MXN",
    descripcion: "Estilo llamativo con mezcla de materiales (piel, malla, gamuza), ideal para quienes buscan un look diferente con amortiguación visible."
  },
  {
    nombre: "Nike Air Max 90 (rosa con beige)",
    precio: "$1,499.50 MXN",
    descripcion: "Diseño único con detalles rosados y tonos tierra. Hecho con gamuza y malla para un acabado suave y transpirable."
  },
  {
    nombre: "Nike Air Max 90 (gris y vino)",
    precio: "$2,099.30 MXN",
    descripcion: "Look juvenil y casual, mezcla de materiales suaves con suela duradera, ideal para outfits modernos."
  },
  {
    nombre: "Nike Air Max 90 (negro/blanco)",
    precio: "$1,959.30 MXN",
    descripcion: "Diseño tradicional con buena amortiguación y gran durabilidad. Combina con cualquier estilo casual."
  },
  {
    nombre: "Nike Air Max 90 (blanco puro)",
    precio: "$1,799.40 MXN",
    descripcion: "Zapatilla blanca con amortiguación Max Air, suela tipo waffle y materiales resistentes. Muy combinable y cómoda."
  },
  {
    nombre: "Nike Air Max 90 (negro mujer)",
    precio: "$2,099.30 MXN",
    descripcion: "Diseño elegante en color negro para mujer, con amortiguación visible y suela de goma, perfecta para comodidad todo el día."
  }
];

export default BrandsProductsModal;