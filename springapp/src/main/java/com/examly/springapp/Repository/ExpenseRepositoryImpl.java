package com.examly.springapp.Repository;

import javax.persistence.*;

import com.examly.springapp.Models.ExpenseModel;

import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class ExpenseRepositoryImpl {

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unused")
    public Long findCurrentMonthExpenses(int id) {
        String hql = "select sum(e.billCost) from ExpenseModel e where month(e.datedOn)=month(current_timestamp) and e.empId=:id";
        TypedQuery<Long> query = entityManager.createQuery(hql,Long.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }
    public List <ExpenseModel> getCurrentMonthExpenses(int id) {
        String hql = "select e from ExpenseModel e where month(e.datedOn)=month(current_timestamp) and e.empId=:id";
        TypedQuery <ExpenseModel> query = entityManager.createQuery(hql,ExpenseModel.class);
        query.setParameter("id", id);
        return query.getResultList();
    }
}
