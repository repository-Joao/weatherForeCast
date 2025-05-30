package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {

    @GetMapping("/sign.html")
    public String showForm() {
        return "signup"; // templates/signup.html
    }

    @PostMapping("/signup")
    public String handleSignUp(@RequestParam String name,
                               @RequestParam String email,
                               @RequestParam String password,
                               Model model) {
        if (name.isBlank() || email.isBlank() || password.isBlank()) {
            model.addAttribute("error", "Todos os campos são obrigatórios.");
            return "signup";
        }
        return "redirect:/weather";
    }

    @GetMapping("/weather")
    public String weatherPage() {
        return "weather"; 
    }
}