package com.examly.springapp.Services;

import com.examly.springapp.Models.ExpenseModel;
import com.examly.springapp.Repository.ExpenseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {
    
    @Autowired
    private ExpenseRepository expenseRepository;
    // public ExpenseService(ExpenseRepository expenseRepository)
    // {
    //     this.expenseRepository=expenseRepository;
    // }

    public List<ExpenseModel> findAll(){
        return this.expenseRepository.findAll();
    }
    public ExpenseModel findById(String id)
    {
        // return this.expenseRepository.findExpenseById(id).orElseThrow(new ExpenseNotFoundException("Expense with id "+id+" was not found"));
        return this.expenseRepository.findExpenseByExpenseId(id);
    }
    public void deleteExpense(String id)
    {
        this.expenseRepository.deleteById(id);
    }
    public String updateExpense(ExpenseModel expense)
    {
        this.expenseRepository.save(expense);
        return "Updated";
    }
    public String addExpense(ExpenseModel expense)
    {
        this.expenseRepository.save(expense);
        return "Expense Added";
    }
}
