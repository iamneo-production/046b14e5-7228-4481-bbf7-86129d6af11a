package com.examly.springapp.Services;

import com.examly.springapp.Models.ExpenseModel;
import com.examly.springapp.Repository.ExpenseRepository;
import org.springframework.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ExpenseService {
    
    @Autowired
    private ExpenseRepository expenseRepository;
    public List<ExpenseModel> findAll(){
        return this.expenseRepository.findAll();
    }
    public ExpenseModel[] findById(int id)
    {
        return this.expenseRepository.findAllExpenseByEmpId(id);
    }
    public String deleteExpense(String id)
    {
        if(this.expenseRepository.existsById((id)))
        {
            this.expenseRepository.deleteById(id);
            return "Expense Deleted";
        }
        return "File doesn't exist";
        
    }
    public String updateExpense(ExpenseModel expense)
    {
        this.expenseRepository.save(expense);
        return "Expense Updated";
    }
    public void addExpense(ExpenseModel expense,MultipartFile file) throws IOException
    {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        expense.setBillImage(file.getBytes());
        expense.setFile_name(fileName);
        this.expenseRepository.save(expense);
    }
    public Long getSumOfExpenses(int id)
    {
        return this.expenseRepository.findCurrentMonthExpenses(id);
    }
    public List <ExpenseModel> getCurrentExpense(int id)
    {
        return this.expenseRepository.getCurrentMonthExpenses(id);
    }
}
