package com.example.cafe.repository;
import com.example.cafe.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MenuRepository extends JpaRepository<MenuItem, Long> {}
