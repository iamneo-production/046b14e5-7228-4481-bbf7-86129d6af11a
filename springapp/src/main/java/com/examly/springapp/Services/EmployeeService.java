package com.examly.springapp.Services;

import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    
    @Autowired
    private UserRepository userRepository;
    public UserModel getEmployee(String email)
    {
        return this.userRepository.findEmployeeByEmail(email);
    }
}
