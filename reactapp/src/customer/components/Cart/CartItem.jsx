// CartItem.js
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = ({ product }) => {
  const { cart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Calculate the total count of items in cart
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    // Update the local storage with the count
    localStorage.setItem("cartItemCount", totalCount.toString());
    // Set the count in the state
    setCartItemCount(totalCount);
  }, [cart]);
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  if (product.quantity === 0) {
    return null;
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={product.images[0].src}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{product.name}</p>
          <p className="opacity-70 mt-2">Seller: {product.seller}</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold"> ₹{product.price}</p>
            <p className="opacity-50 line-through">{product.oldPrice}</p>
            <p className="text-green-600 font-semibold">{product.discount}</p>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton onClick={() => decrementQuantity(product)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="px-1 py-7 border rounded-sm">
              {product.quantity}
            </span>
            <IconButton
              onClick={() => incrementQuantity(product)}
              sx={{ color: "RGB(145 85 253)" }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button
              onClick={() => removeFromCart(product)}
              sx={{ color: "RGB(145 85 253)" }}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
