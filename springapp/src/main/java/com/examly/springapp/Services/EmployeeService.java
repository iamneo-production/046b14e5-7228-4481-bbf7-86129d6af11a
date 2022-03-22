package com.examly.springapp.Services;

import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Repository.ExpenseRepository;
import com.examly.springapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class EmployeeService {
    @Autowired
    private ExpenseRepository expenseRepository;
    @Autowired
    private UserRepository userRepository;
    public UserModel getEmployee(String email)
    {
        // System.out.println(this.userRepository.findEmployeeByEmail(email).getUsername());
        // System.out.println("Heeelo");
        return this.userRepository.findEmployeeByEmail(email);
    }
    public List<UserModel> getAllEmployees()
    {
        return this.userRepository.findAll();
    }
    public String updateEmployee(UserModel user){
       this.userRepository.save(user);
       return "Updated";
    }
    public String deleteEmployee(int id){
        this.expenseRepository.deleteExpenseByEmpId(id);
        this.userRepository.deleteById(id);
        return "Employee Deleted";
    }
    public UserModel getEmpById(int id){
        return this.userRepository.findEmployeeById(id);
    }
    public String addEmployee(UserModel user)
    {
        this.userRepository.save(user);
        return "Employee Added";
    }
}
