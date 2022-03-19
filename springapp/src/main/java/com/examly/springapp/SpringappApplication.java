package com.examly.springapp;
import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Services.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class SpringappApplication implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;
	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("program is running");
		// UserModel userModel =new UserModel();
		// userModel.setActive(true);
		// userModel.setEmail("abc@gmail.com");
		// userModel.setId(001);
		// userModel.setMobileNumber("092831098");
		// userModel.setPassword("029380");
		// userModel.setRole("Emp");
		// userModel.setUsername("user1");
		// System.out.println(this.signupService.addUser(userModel));
		// UserModel user=this.employeeService.getEmployee("user3");
		// System.out.print(user.getMobileNumber());

	}

}
