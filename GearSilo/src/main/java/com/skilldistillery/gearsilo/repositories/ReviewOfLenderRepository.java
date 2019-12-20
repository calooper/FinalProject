package com.skilldistillery.gearsilo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gearsilo.entities.Reservation;
import com.skilldistillery.gearsilo.entities.ReviewOfLender;

public interface ReviewOfLenderRepository extends JpaRepository<ReviewOfLender, Integer> {


//	public Optional<ReviewOfLender> findByUser_UsernameAndId(String username, int reviewOfLenderId);
}