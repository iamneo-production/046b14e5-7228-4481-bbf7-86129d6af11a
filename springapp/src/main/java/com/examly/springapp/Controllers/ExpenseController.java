package com.examly.springapp.Controllers;

import com.examly.springapp.Models.ExpenseModel;
import com.examly.springapp.Services.ExpenseService;

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
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;
    @GetMapping("/expense")
    public ResponseEntity<List<ExpenseModel>> getExpese()
    {
         List<ExpenseModel> list= this.expenseService.findAll();
         return new ResponseEntity<>(list,HttpStatus.OK);
    }
    
    @GetMapping("/expense/{id}")
    public ResponseEntity<ExpenseModel[]> expenseEditData(@PathVariable int id) throws Exception
    {
         ExpenseModel[] expense= this.expenseService.findById(id);
         return new ResponseEntity<>(expense,HttpStatus.OK);
    }

    @PostMapping("/expense")
    public ResponseEntity<String> expenseSave(@RequestBody ExpenseModel expense)
    {
        String result= this.expenseService.addExpense(expense);
        return new ResponseEntity<>(result,HttpStatus.CREATED);
    }

    @PutMapping("/expense/{id}")
    public ResponseEntity<String> expenseEditSave(@RequestBody ExpenseModel expense)
    {
         String result=this.expenseService.updateExpense(expense);
         return new ResponseEntity<>(result,HttpStatus.OK);
    }
    @GetMapping("/expense/curr-month/{id}")
    public ResponseEntity<Long> currentMonthExpense(@PathVariable int id)
    {
         return new ResponseEntity<>(this.expenseService.getCurrentExpense(id),HttpStatus.OK);
    } 
}
