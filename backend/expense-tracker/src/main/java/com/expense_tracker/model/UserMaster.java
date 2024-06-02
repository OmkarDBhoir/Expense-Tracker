package com.expense_tracker.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_mstr")
public class UserMaster {

	@Id
	@GeneratedValue(generator = "user_msrt_seq_generator")
	@SequenceGenerator(name = "user_msrt_seq_generator", sequenceName = "user_mstr_seq_id", allocationSize = 1)
	private Long id;

	@Column(name = "user_name", nullable = false)
	private String userName;

	@Column(name = "password", nullable = false)
	private String password;
	
	@Column(name = "user_role", nullable = false)
	private String userRole;

	@Column(name = "created_on", nullable=true)
	private Timestamp createdOn;

	@Column(name = "created_by")
	private String createdBy;
	
	public UserMaster() {
		// TODO Auto-generated constructor stub
	}

	
	public UserMaster(Long id, String userName, String password, String userRole, Timestamp createdOn,
			String createdBy) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.userRole = userRole;
		this.createdOn = createdOn;
		this.createdBy = createdBy;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
}
