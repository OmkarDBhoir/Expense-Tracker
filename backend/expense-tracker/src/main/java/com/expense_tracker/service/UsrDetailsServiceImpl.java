package com.expense_tracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.expense_tracker.model.UserMaster;
import com.expense_tracker.repository.UserMasterRepo;

@Service
public class UsrDetailsServiceImpl implements UsrDetailsService {
	
	@Autowired
	private UserMasterRepo userMasterRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		UserMaster user =  userMasterRepo.findByUserName(username);
		if(user != null) {
			UserDetails userDetails = User.builder().username(user.getUserName()).password(user.getPassword()).roles(user.getUserRole()).build();
			return userDetails;
		} else {
			throw new UsernameNotFoundException(username);
		}
	}
}
