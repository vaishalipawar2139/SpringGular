package com.vaispa.model;

public class User {
	private String status;

	public User(String status) {
		this.status = status;
	}
	
	public User() {
		
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
