import React, { useState } from "react";
import { FaShoppingBag, FaRegTimesCircle } from "react-icons/fa";
import "./css/Cart.css";
import ejemploa from "../img/1681531893321.png";
import ejemplob from "../img/1681531893294.png";
import ejemploC from "../img/1681343616178.png";
import ejemploD from "../img/1685503919521.png";
import ejemploE from "../img/a_2.png";
import ejemploF from "../img/IMG_20230606_072826.jpg";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [showSupport, setShowSupport] = useState(false);

  const availableProducts = [
    {
      id: 1,
      title: "Dibujos animados personalizados",
      image: ejemploa,
      price: 100,
      time: "por minuto de animación.",
    },
    {
      id: 2,
      title: "Animación 2D",
      image: ejemplob,
      price: 50,
      time: "por segundo de animación.",
    },
    {
      id: 3,
      title: "Ilustraciones para libros infantiles",
      image: ejemploC,
      price: 200,
      time: "por ilustración.",
    },
    {
      id: 4,
      title: "Diseño de personajes",
      image: ejemploD,
      price: 150,
      time: "por personaje.",
    },
    {
      id: 5,
      title: "Animación de logotipos",
      image: ejemploE,
      price: 80,
      time: "por segundo de animación.",
    },
    {
      id: 6,
      title: "Modelado y texturizado 3D",
      image: ejemploF,
      time: "Varía según la complejidad del proyecto (cotización personalizada).",
    },
  ];

  const addToCart = (product) => {
    setProducts([...products, product]);
  };

  const removeFromCart = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
    setPaymentMessage("");
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  const processPayment = () => {
    if (products.length > 0) {
      // Aquí se simularía el proceso de pago, por ejemplo, haciendo una llamada a una API de pago.
      // En este caso, simplemente se establece un mensaje de pago exitoso después de 2 segundos.
      setPaymentMessage("Procesando pago...");
      setTimeout(() => {
        setPaymentMessage("Pago exitoso");
        setProducts([]);
      }, 2000);
    } else {
      setPaymentMessage("No hay productos en el carrito");
    }
  };

  const handleSupportToggle = () => {
    setShowSupport(!showSupport);
  };

  return (
    <div>
      {showCart && (
        <div className="cart">
          <div className="cat-content">
            <div className="title">
              <button className="close-button" onClick={handleCartToggle}>
                <FaRegTimesCircle style={{ color: "red" }} />
              </button>
              <h2>Carrito de compras</h2>
            </div>
            {products.length > 0 ? (
              <ul className="list-order">
                {products.map((product) => (
                  <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <div className="order-text">
                      <span className="item-name">{product.title}</span>
                      <div className="item-details">
                        <span className="item-price">{product.price} USD</span>
                        <div className="quantity">
                          <button
                            className="quantity-button"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            -
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            className="quantity-button"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay productos en el carrito</p>
            )}
            <div className="total-price">
              <span>Total: {calculateTotalPrice()} USD</span>
            </div>
            <button className="checkout-button" onClick={processPayment}>
              Pagar
            </button>
            {paymentMessage && <p>{paymentMessage}</p>}
            <button className="checkout-button" onClick={handleSupportToggle}>
              Soporte
            </button>
          </div>
        </div>
      )}
      {showSupport && (
        <div className="cart">
          <div className="cat-content">
            <div className="title">
              <button className="close-button" onClick={handleSupportToggle}>
                <FaRegTimesCircle style={{ color: "red" }} />
              </button>
              <h2>Soporte</h2>
            </div>
            <p>
              Si necesitas ayuda o tienes alguna pregunta, contáctanos.
            </p>
          </div>
        </div>
      )}
      <div className="product-list">
        <div className="titlee">
          <h2>Productos disponibles</h2>
          <h2 className="res">
            <button className="close-buttonn" onClick={handleCartToggle}>
              <FaShoppingBag style={{ color: "green" }} />
            </button>
          </h2>
        </div>

        <ul>
          {availableProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} className="img" />
              <span>{product.title}</span>
              <span>{product.price} USD</span>
              <span>{product.time} </span>
              <button onClick={() => addToCart({ ...product, quantity: 1 })}>
                Agregar al carrito
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
