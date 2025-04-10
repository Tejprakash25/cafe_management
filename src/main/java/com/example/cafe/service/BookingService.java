package com.example.cafe.service;
import com.example.cafe.model.Booking;
import com.example.cafe.model.User;
import com.example.cafe.repository.UserRepository;
import com.example.cafe.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking bookTable(Booking booking) {
        return bookingRepository.save(booking);
    }
}