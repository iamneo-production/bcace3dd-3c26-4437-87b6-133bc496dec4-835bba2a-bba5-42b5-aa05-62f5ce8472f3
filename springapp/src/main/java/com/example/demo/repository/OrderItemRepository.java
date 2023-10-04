package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
