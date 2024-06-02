package com.expense_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense_tracker.model.Expense;

public interface ExpenseRepo extends JpaRepository<Expense, Long>{

}
