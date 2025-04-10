package com.example.cafe.controller;
import com.example.cafe.model.MenuItem;
import com.example.cafe.model.User;
import com.example.cafe.service.MenuService;
import com.example.cafe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @Autowired
    private MenuService menuService;
    @GetMapping
    public List<MenuItem> getMenu() {
        return menuService.getAllMenuItems();
    }
}