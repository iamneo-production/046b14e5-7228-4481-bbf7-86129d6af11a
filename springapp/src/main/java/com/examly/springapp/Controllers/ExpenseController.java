package com.examly.springapp.Controllers;

import com.examly.springapp.Models.ExpenseModel;
import com.examly.springapp.Services.ExpenseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;
    @GetMapping("/expense")
    public List<ExpenseModel> getExpese()
    {
        return this.expenseService.findAll();
    }
    
    @GetMapping("/expenses/{id}")
    public ExpenseModel expenseEditData(@PathVariable String id) throws Exception
    {
        return this.expenseService.findById(id);
    }

    @PostMapping("/expense")
    public String expenseSave(@RequestBody ExpenseModel expense)
    {
       return this.expenseService.addExpense(expense);
    }

    @PutMapping("/expense/{id}")
    public String expenseEditSave(@RequestBody ExpenseModel expense)
    {
        return this.expenseService.updateExpense(expense);
    }
}
