package com.skilldistillery.gearsilo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ReservationMessage {

	// F I E L D S
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String message;

	@Column(name = "message_date")
	private String messageDate;

	@Column(name = "reservation_id")
	private String reservationId;

	@Column(name = "shopper_user_id")
	private String shopperUserId;

	// C O N S T R U C T O R S

	public ReservationMessage(int id, String message, String messageDate, String reservationId, String shopperUserId) {
		super();
		this.id = id;
		this.message = message;
		this.messageDate = messageDate;
		this.reservationId = reservationId;
		this.shopperUserId = shopperUserId;
	}

	public ReservationMessage() {
		super();
	}

	// G E T T E R S __ A N D __ S E T T E R S

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessageDate() {
		return messageDate;
	}

	public void setMessageDate(String messageDate) {
		this.messageDate = messageDate;
	}

	public String getReservationId() {
		return reservationId;
	}

	public void setReservationId(String reservationId) {
		this.reservationId = reservationId;
	}

	public String getShopperUserId() {
		return shopperUserId;
	}

	public void setShopperUserId(String shopperUserId) {
		this.shopperUserId = shopperUserId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((messageDate == null) ? 0 : messageDate.hashCode());
		result = prime * result + ((reservationId == null) ? 0 : reservationId.hashCode());
		result = prime * result + ((shopperUserId == null) ? 0 : shopperUserId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ReservationMessage other = (ReservationMessage) obj;
		if (id != other.id)
			return false;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (messageDate == null) {
			if (other.messageDate != null)
				return false;
		} else if (!messageDate.equals(other.messageDate))
			return false;
		if (reservationId == null) {
			if (other.reservationId != null)
				return false;
		} else if (!reservationId.equals(other.reservationId))
			return false;
		if (shopperUserId == null) {
			if (other.shopperUserId != null)
				return false;
		} else if (!shopperUserId.equals(other.shopperUserId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ReservationMessage [id=" + id + ", message=" + message + ", messageDate=" + messageDate
				+ ", reservationId=" + reservationId + ", shopperUserId=" + shopperUserId + "]";
	}

}