package com.expense_tracker.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

import com.expense_tracker.service.UsrDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	UsrDetailsService usrDetailsService;

	@Autowired
	private CorsFilter corsFilter;

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.csrf(httpSecurityCsrfConfigurer -> httpSecurityCsrfConfigurer.disable())
				.addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
				.authorizeHttpRequests(auth -> {
					auth.requestMatchers("/home", "/register/**", "/public/**").permitAll();
					auth.requestMatchers("/admin/**").hasRole("ADMIN");
					auth.requestMatchers("/user/**").hasRole("USER");
					auth.anyRequest().authenticated();
				}).formLogin(AbstractAuthenticationFilterConfigurer::permitAll).build();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		return usrDetailsService;
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(usrDetailsService);
		provider.setPasswordEncoder(passwordEncoder());
		return provider;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
