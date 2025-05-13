import React, { useState } from "react";

const Cart = ({ cartItems, onUpdateCart, onRemoveItem }) => {
  // Calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="cart-container" style={{ padding: "24px" }}>
      <h2>🛒 Tu Carrito</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{ width: "50px", marginRight: "16px", borderRadius: "8px" }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 }}>{item.nombre}</h3>
                <p style={{ margin: "4px 0" }}>Precio: ${item.precio}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    onClick={() => onUpdateCart(item.id, item.cantidad - 1)}
                    disabled={item.cantidad <= 1}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#f0f0f0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <span>{item.cantidad}</span>
                  <button
                    onClick={() => onUpdateCart(item.id, item.cantidad + 1)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#f0f0f0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                style={{
                  padding: "8px",
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío. ¡Agrega algunos productos!</p>
      )}
      <div style={{ marginTop: "24px", textAlign: "right" }}>
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Cart;
