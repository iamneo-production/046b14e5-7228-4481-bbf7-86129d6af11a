package com.examly.springapp.Repository;

import java.util.Optional;

import com.examly.springapp.Models.ExpenseModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<ExpenseModel,String> {

    Optional<ExpenseModel> findExpenseByExpenseId(String id);
    
}
