package com.examly.springapp.Controllers;

import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Services.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    private EmployeeService employeeService;
    @GetMapping("/admin")
    public ResponseEntity<List<UserModel>> getAllUsers(){
        return new ResponseEntity<>(this.employeeService.getAllEmployees(),HttpStatus.OK);
    }
    @GetMapping("/admin/{id}")
    public ResponseEntity<UserModel> getUser(@PathVariable int id){
        return new ResponseEntity<>(this.employeeService.getEmpById(id),HttpStatus.OK);
    }
    @PutMapping("/admin/{id}")
    public ResponseEntity<String> updateUser(@RequestBody UserModel user){
        return new ResponseEntity<>(this.employeeService.updateEmployee(user),HttpStatus.OK);
    }
    @DeleteMapping ("/admin/{id}")
    public ResponseEntity<String> dUser(@PathVariable int id){
        return new ResponseEntity<>(this.employeeService.deleteEmployee(id),HttpStatus.OK);
    }
    @PostMapping("/admin")
    public ResponseEntity<String> addUser(@RequestBody UserModel user){
        return new ResponseEntity<>(this.employeeService.addEmployee(user),HttpStatus.OK);
    }
}
