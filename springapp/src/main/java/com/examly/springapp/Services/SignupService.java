package com.examly.springapp.Services;

import java.util.Optional;

import com.examly.springapp.Models.UserModel;
import com.examly.springapp.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    
    private final UserRepository userRepository;

    @Autowired
    public SignupService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }
    
    public Boolean addUser(UserModel user)
    {
        Optional<UserModel> local=this.userRepository.findById(user.getId());
        if(local!=null)
        {
            return false; 
        }
        this.userRepository.save(user);
        return true;
        
    }
}
