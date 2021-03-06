package com.skilldistillery.gearsilo.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gearsilo.entities.ReservationMessage;
import com.skilldistillery.gearsilo.entities.ReviewOfLender;
import com.skilldistillery.gearsilo.services.ReservationMessageService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4207" })
public class ReservationMessageController {

	@Autowired
	private ReservationMessageService resMsgSvc;

	@GetMapping("users/{uid}/reservation/reservationmessages")
	public List<ReservationMessage> findReservationMessageById(@PathVariable int uid, HttpServletRequest req,
			HttpServletResponse resp, Principal principal) {

		List<ReservationMessage> resMsg = resMsgSvc.findAll(principal.getName(), uid);

		if (resMsg != null && resMsg.size() == 0) {
			resp.setStatus(204);
		}

		if (resMsg == null) {
			resp.setStatus(404);
		}

		return resMsg;
	}

	@PostMapping("users/{uid}/reservation/{rid}/reservationmessages")
	public ReservationMessage createReservationMessage(@RequestBody ReservationMessage resMsg, @PathVariable int uid,
			@PathVariable int rid, HttpServletRequest req, HttpServletResponse res, Principal principal) {
		try {
			resMsgSvc.createReservationMessage(principal.getName(), resMsg, uid, rid);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			res.addHeader("Location", url.toString());
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return resMsg;
	}

	@PutMapping("users/{uid}/reservation/{rid}/reservationmessages/{rmid}")
	public ReservationMessage updateReservationMessage(@RequestBody ReservationMessage resMsg, @PathVariable int uid,
			@PathVariable int rid, @PathVariable int rmid, HttpServletRequest req, HttpServletResponse res,
			Principal principal) {
		try {
			resMsg = resMsgSvc.updateReservationMessage(principal.getName(), resMsg, uid, rid, rmid);
			if (resMsg == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			resMsg = null;
		}
		return resMsg;
	}

}
