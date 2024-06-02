package com.expense_tracker.Controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.expense_tracker.model.UserMaster;
import com.expense_tracker.repository.UserMasterRepo;

@RestController
@RequestMapping("/")
public class IndexController {
	
	@Autowired
	UserMasterRepo userMasterRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/")
	public String welcome() {
		return "Welcome";
	}
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@GetMapping("/admin/home")
	public String admin() {
		return "home_admin";
	}
	
	@GetMapping("/user/home")
	public String user() {
		return "home_user";
	}
	
	@PostMapping("/register/users")
	public ResponseEntity<?> register(@RequestBody UserMaster user) {
		try {
			if(userMasterRepo.findByUserNameAndUserRole(user.getUserName(), user.getUserRole()) != null) {
				return ResponseEntity.badRequest().body("Registration failed: User already exists");
			}
			
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setCreatedBy("System");
			user.setCreatedOn(Timestamp.valueOf(LocalDateTime.now()));
			userMasterRepo.save(user);
			
			return ResponseEntity.ok().body("Registreation successful!");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Registration failed" +  e.getMessage());
		}
	}
}
