package com.skilldistillery.gearsilo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gearsilo.repositories.ReviewOfGearRepository;

@Service
public class ReviewOfGearServiceImpl implements ReviewOfGearService {

	@Autowired
	private ReviewOfGearRepository reviewOfGearRepo;
}