package com.expense_tracker.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.model.Expense;
import com.expense_tracker.service.ExpenseService;

@RestController
@RequestMapping("/expense")
public class ExpenseController {
	
	@Autowired
	public ExpenseService expenseService;
	
	@GetMapping("/getExpenses")
	public List<Expense> gExpenses() {
		return expenseService.getExpenses();
	}
	
	@PostMapping("/addExpense")
	public ResponseEntity<?> addExpnese(@RequestBody Expense expense) {
		return expenseService.addExpenses(expense);
	}
	
	@PostMapping("/deleteExpense")
	public ResponseEntity<?> deleteExpense(@RequestBody Map<String, Long> body) {
		return expenseService.deleteExpenses(body.get("id"));
	}
}
