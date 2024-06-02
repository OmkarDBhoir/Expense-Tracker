package com.expense_tracker.service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.expense_tracker.model.Income;
import com.expense_tracker.repository.IncomeRepo;

@Service
public class IncomeServiceImpl implements IncomeService{
	@Autowired
	private IncomeRepo incomeRepo;

	@Override
	public List<Income> getIncomes() {
		List<Income> income = null;
		
		try {
			income = incomeRepo.findAll();
		} catch (Exception e) {
			System.err.println("Error: " +  e.getMessage());
		}
		return income;
	}

	@Override
	public ResponseEntity<?> addIncome(Income income) {
		try {
			if(income.getTitle() != null && income.getAmount() != null && income.getCategory() != null && income.getDescription() != null && income.getDate() != null) {
				if(income.getAmount() <= 0) {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Amount must be a positive number!");
				}
				
				income.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
				incomeRepo.save(income);
				return ResponseEntity.status(HttpStatus.ACCEPTED).body("Success: Income added!");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required!");
			}
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@Override
	public ResponseEntity<?> deleteIncome(Long id) {
		
		try {
			incomeRepo.deleteById(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Success: Income deleted!");
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

}
