package com.example.cafe.controller;
import com.example.cafe.model.Booking;
import com.example.cafe.model.MenuItem;
import com.example.cafe.model.User;
import com.example.cafe.service.BookingService;
import com.example.cafe.service.MenuService;
import com.example.cafe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping("/makeReservation")
    public String makeReservation(@RequestParam String name,
                                  @RequestParam String phoneNumber,
                                  @RequestParam String email,
                                  @RequestParam String date,
                                  @RequestParam String time,
                                  @RequestParam int seats,
                                  @RequestParam(required = false) String specialInstructions) {

        Booking booking = new Booking();
        booking.setName(name);
        booking.setPhoneNumber(phoneNumber);
        booking.setEmail(email);
        booking.setDate(LocalDate.parse(date));  // e.g., "2025-04-12"
        booking.setTime(LocalTime.parse(time));  // e.g., "19:00"
        booking.setSeats(seats);
        booking.setSpecialInstructions(specialInstructions);

        bookingService.bookTable(booking);
        return "Reservation Successful!";
    }
}