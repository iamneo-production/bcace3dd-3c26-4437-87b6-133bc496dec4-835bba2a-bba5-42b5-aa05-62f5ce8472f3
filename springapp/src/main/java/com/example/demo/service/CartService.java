package com.example.demo.service;

import com.example.demo.exception.ProductException;
import com.example.demo.modal.Cart;
import com.example.demo.modal.CartItem;
import com.example.demo.modal.User;
import com.example.demo.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
