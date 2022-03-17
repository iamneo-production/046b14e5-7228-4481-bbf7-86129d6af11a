package com.examly.springapp.Repository;

import com.examly.springapp.Models.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel,Integer> {

    UserModel findEmployeeById(int id);

    UserModel findEmployeeByEmail(String email);
    
}
