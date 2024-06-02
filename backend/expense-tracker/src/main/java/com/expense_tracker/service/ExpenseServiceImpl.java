package com.expense_tracker.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.expense_tracker.model.Expense;
import com.expense_tracker.repository.ExpenseRepo;

@Service
public class ExpenseServiceImpl implements ExpenseService{
	
	@Autowired
	public ExpenseRepo expenseRepo;

	@Override
	public List<Expense> getExpenses() {
		List<Expense> Expneses = new ArrayList<Expense>();
		try {
			Expneses = expenseRepo.findAll();
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}
		
		return Expneses;
	}

	@Override
	public ResponseEntity<?> addExpenses(Expense expense) {
		try {
			if(expense.getTitle() == null || expense.getCategory() == null || expense.getAmount() == null || expense.getDescription() == null || expense.getDate() == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required!");
			}
			if(expense.getAmount() <= 0) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Amount must be positive number");
			}
			
			expense.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
			expenseRepo.save(expense);
			
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Success: Expense added");
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Override
	public ResponseEntity<?> deleteExpenses(Long id) {
		try {
			expenseRepo.deleteById(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Success: Expense deleted");
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

}
