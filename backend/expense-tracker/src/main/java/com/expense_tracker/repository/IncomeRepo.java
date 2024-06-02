package com.expense_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense_tracker.model.Income;

@Repository
public interface IncomeRepo extends JpaRepository<Income, Long>{
}
