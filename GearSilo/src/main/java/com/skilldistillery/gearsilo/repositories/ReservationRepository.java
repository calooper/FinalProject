package com.skilldistillery.gearsilo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gearsilo.entities.Reservation;
import com.skilldistillery.gearsilo.entities.User;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

	List<Reservation> findByUserShopper_Username(String username);

//	Reservation findByGearId_User_Username(String username,  int gearId);
	Reservation findByGearId_User_UsernameAndId(String username, int id);
//
	Reservation findByUserShopper_UsernameAndId(String username, int id);

	List<Reservation> findByGearId_User_Id(int userId);

	List<Reservation> findByUserShopper(User user);

}