package com.expense_tracker.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.expense_tracker.model.Income;

@Service
public interface IncomeService {
	public List<Income> getIncomes();
	
	public ResponseEntity<?> addIncome(Income income);
	
	public ResponseEntity<?> deleteIncome(Long id);
}
