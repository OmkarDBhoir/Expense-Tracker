package com.expense_tracker.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.expense_tracker.model.Expense;

@Service
public interface ExpenseService {
	public List<Expense> getExpenses();
	
	public ResponseEntity<?> addExpenses(Expense expense);
	
	public ResponseEntity<?> deleteExpenses(Long id);
}
