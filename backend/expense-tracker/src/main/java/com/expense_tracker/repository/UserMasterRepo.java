package com.expense_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense_tracker.model.UserMaster;

@Repository
public interface UserMasterRepo extends JpaRepository<UserMaster, Long>{
	UserMaster findByUserName(String userName);
	
	UserMaster findByUserNameAndUserRole(String userName, String userRole);
}
