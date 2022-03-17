package com.examly.springapp.Controllers;
import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Services.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class SignupController {
    
    @Autowired
    private SignupService signupService;

    @PostMapping("/signup")
    public boolean saveUser(@RequestBody UserModel user)
    {
       return this.signupService.addUser(user);

    }
}
