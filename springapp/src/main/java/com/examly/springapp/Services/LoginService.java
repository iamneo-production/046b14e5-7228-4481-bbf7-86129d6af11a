package com.examly.springapp.Services;

import javax.transaction.Transactional;

import com.examly.springapp.Models.LoginModel;
import com.examly.springapp.Repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class LoginService {
    
    @Autowired
    private LoginRepository loginRepository;
    // public LoginService(LoginRepository loginRepository)
    // {
    //     this.loginRepository=loginRepository;
    // }
    public Boolean check(LoginModel login)
    {
        LoginModel local=this.loginRepository.findByEmail(login.getEmail());
        if(local.getPassword().equals(login.getPassword()))
        return true;
        return false;
    }
    public void add(LoginModel login)
    {
        this.loginRepository.save(login);
    }
}
