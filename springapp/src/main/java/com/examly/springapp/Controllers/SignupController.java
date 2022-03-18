package com.examly.springapp.Controllers;
import com.examly.springapp.Models.LoginModel;
import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Services.LoginService;
import com.examly.springapp.Services.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class SignupController {
    
    @Autowired
    private SignupService signupService;
    @Autowired
    private LoginService loginService;

    @PostMapping("/signup")
    public ResponseEntity<Boolean> saveUser(@RequestBody UserModel user)
    {
        LoginModel login = new LoginModel(user.getEmail(),user.getPassword(),user.getRole());
        this.loginService.add(login);
       return new ResponseEntity<>(this.signupService.addUser(user),HttpStatus.OK);


    }
}
