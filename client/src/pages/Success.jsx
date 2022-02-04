import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await addOrder(
          currentUser._id,
          cart.products,
          cart.total,
          data.billing_details.address
        );
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
