package com.example.cafe.controller;
import com.example.cafe.model.User;
import com.example.cafe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        Optional<User> user = userService.login(username, password);
        return user.isPresent() ? "Login Successful!" : "Invalid Credentials";
    }
    @PostMapping("/signUp")
    public String signUp(@RequestParam String name,
                         @RequestParam String email,
                         @RequestParam String username,
                         @RequestParam String password){
        boolean success = userService.signUp(name, email, username, password);
        return success ? "Signup Successful!" : "Username already exists!";
    }
}