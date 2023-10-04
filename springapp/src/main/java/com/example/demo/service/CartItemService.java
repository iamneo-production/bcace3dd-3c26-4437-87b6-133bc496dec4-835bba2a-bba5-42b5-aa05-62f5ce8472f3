package com.example.demo.service;

import com.example.demo.exception.CartItemException;
import com.example.demo.exception.UserException;
import com.example.demo.modal.Cart;
import com.example.demo.modal.CartItem;
import com.example.demo.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
