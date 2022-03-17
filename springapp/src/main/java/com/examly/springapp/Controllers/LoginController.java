package com.examly.springapp.Controllers;

import com.examly.springapp.Models.LoginModel;
import com.examly.springapp.Repository.LoginRepository;
import com.examly.springapp.Services.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    
    @Autowired
    private LoginService loginService;
    @PostMapping("/login")
    public boolean checkUser(@RequestBody LoginModel login)
    {
        return this.loginService.check(login);
    }
}
