package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.ProductException;
import com.example.demo.modal.Review;
import com.example.demo.modal.User;
import com.example.demo.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
