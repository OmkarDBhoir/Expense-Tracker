package com.expense_tracker.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.model.Income;

@RestController
@RequestMapping("/income")
public class IncomeController {
	
	@GetMapping
	public List<Income> getIncome() {
		List<Income> incomes = null;
		
		return incomes;
	}
}
