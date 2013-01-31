package com.june.app.model;

import java.io.Serializable;

public class JobInfo implements Serializable {

	private static final long serialVersionUID = 2957535872556713891L;

	private String id;
	private String panNumber;
	private String address;
	private String city;
	private String state;
	private long pincode;
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPanNumber() {
		return panNumber;
	}
	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	} 
}
