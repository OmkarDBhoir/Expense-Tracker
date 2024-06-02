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

import com.expense_tracker.model.Income;
import com.expense_tracker.service.IncomeService;

@RestController
@RequestMapping("/income")
public class IncomeController {
	
	@Autowired
	private IncomeService incomeService;
	
	@GetMapping("/getIncomes")
	public List<Income> getIncome() {
		return incomeService.getIncomes();
	}
	
	@PostMapping("/addIncomes")
	public ResponseEntity<?> addIncome(@RequestBody Income income) {
		return incomeService.addIncome(income);
	}
	
	@PostMapping("/deleteIncome")
	public ResponseEntity<?> deleteIncome(@RequestBody Map<String, Long> body){
		System.out.println(body.get("id"));
		return incomeService.deleteIncome(body.get("id"));
	}
	
}
