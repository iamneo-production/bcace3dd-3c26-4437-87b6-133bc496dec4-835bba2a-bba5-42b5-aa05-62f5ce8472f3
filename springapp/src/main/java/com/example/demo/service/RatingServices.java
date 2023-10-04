package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.ProductException;
import com.example.demo.modal.Rating;
import com.example.demo.modal.User;
import com.example.demo.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
