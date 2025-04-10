package com.example.cafe;

import com.example.cafe.model.MenuItem;
import com.example.cafe.repository.MenuRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CafeManagementApplication {
    public static void main(String[] args) {
        SpringApplication.run(CafeManagementApplication.class, args);
    }

    @Bean
    CommandLineRunner loadData(MenuRepository menuRepository) {
        return args -> {
            if (menuRepository.count() == 0) {
                menuRepository.saveAll(List.of(
                        new MenuItem(null, "Sandwich", 5.99),
                        new MenuItem(null, "Fries", 2.99),
                        new MenuItem(null, "Coke", 1.49),
                        new MenuItem(null, "Cake", 4.99),
                        new MenuItem(null, "Vegetable Curry", 7.99),
                        new MenuItem(null, "Bread", 1.99)
                ));
            }
        };
    }
}
