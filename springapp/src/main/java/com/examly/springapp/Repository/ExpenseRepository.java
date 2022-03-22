package com.examly.springapp.Repository;


import javax.transaction.Transactional;

import com.examly.springapp.Models.ExpenseModel;

import org.springframework.data.jpa.repository.JpaRepository;
@Transactional
public interface ExpenseRepository extends JpaRepository<ExpenseModel, String> {

    ExpenseModel[] findAllExpenseByEmpId(Integer id);
    Long findCurrentMonthExpenses(int id);
    void deleteExpenseByEmpId(int id);
}
