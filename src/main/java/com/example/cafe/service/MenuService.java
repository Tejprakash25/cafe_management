package com.example.cafe.service;
import com.example.cafe.model.MenuItem;
import com.example.cafe.model.User;
import com.example.cafe.repository.MenuRepository;
import com.example.cafe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;
    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }
}