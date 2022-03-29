package com.examly.springapp.Controllers;

import com.examly.springapp.Models.ExpenseModel;
import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Services.ExpenseService;
import com.examly.springapp.Repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ManagerController {
    @Autowired
    private ExpenseService expenseService;
    private ExpenseRepository er;
    @GetMapping("/manager")
    public ResponseEntity<List<ExpenseModel>> getExpense()
    {
         List<ExpenseModel> list= this.expenseService.findAll();
         return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @PutMapping("/manager/expense/{id}")
    public ResponseEntity<String> expenseEditSave(@RequestBody ExpenseModel expense)
    {
         String result=this.expenseService.updateExpense(expense);
         return new ResponseEntity<>(result,HttpStatus.OK);
    }
    @PutMapping("/manger/expense/{id}")
    public ResponseEntity<String> expenseDelete(@RequestBody ExpenseModel expense)
    {
         this.er.delete(expense);
         return new ResponseEntity<>("Expense deleted",HttpStatus.OK);
    }
    @GetMapping("/manager/expense/{id}")
    public ResponseEntity<ExpenseModel> expenseEditData(@PathVariable String id) throws Exception
    {
         ExpenseModel expense= this.expenseService.findByExpenseId(id);
         return new ResponseEntity<>(expense,HttpStatus.OK);
    }    
}