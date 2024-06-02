package com.expense_tracker.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


@Entity
@Table(name = "Income")
public class Income {
	
	@Id
	@GeneratedValue(generator = "income_seq_generator")
	@SequenceGenerator(name = "income_seq_generator", sequenceName = "income_seq_id", allocationSize = 1)
	private Long id;
	
	@Column(name="title", nullable = false, length = 50)
	private String title;
	
	@Column(name="amount", nullable = false, length = 20)
	private String amount;
	
	@Column(name = "type")
	private String type="Expense";
	
	@Column(name = "date")
	private Timestamp date;
	
	@Column(name = "category", nullable = false)
	private String category;
	
	@Column(name = "description", nullable = false, length = 20)
	private String description;
	
	@Column(name = "crtd_on")
	private Timestamp createdOn;
	
	public Income() {
		// TODO Auto-generated constructor stub
	}

	public Income(Long id, String title, String amount, String type, Timestamp date, String category,
			String description, Timestamp createdOn) {
		super();
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.type = type;
		this.date = date;
		this.category = category;
		this.description = description;
		this.createdOn = createdOn;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}
}
