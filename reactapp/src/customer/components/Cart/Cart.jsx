import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    const fixedDiscount = 0;
    return fixedDiscount;
  };

  const calculateDeliveryCharges = () => {
    const totalPrice = calculateTotalPrice();
    const deliveryCharges = totalPrice > 0 && totalPrice < 500 ? 100 : 0;
    return deliveryCharges;
  };

  const calculateTotalAmount = () => {
    const totalPrice = calculateTotalPrice();
    const discount = calculateDiscount();
    const deliveryCharges = calculateDeliveryCharges();
    return totalPrice - discount + deliveryCharges;
  };

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 shadow-lg rounded-md">
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>{calculateTotalPrice()}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹{calculateDiscount()}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">
                  ₹{calculateDeliveryCharges()}
                </span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{calculateTotalAmount()}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              disabled={calculateTotalPrice() === 0}
              sx={{
                px: "2.5rem",
                py: "1rem",
                bgcolor: "#9155fd",
                "&:hover": { backgroundColor: "##9155fd" },
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
