package com.springboot.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springboot.entity.Reminder;
import com.springboot.springboot.repository.ReminderRepository;
@RestController
@CrossOrigin("*")  
public class ReminderController {
	@Autowired
	    private ReminderRepository reminderRepository;

	    // Endpoint to retrieve all medications
	    @GetMapping("/medications")
	    public List<Reminder> getAllMedications() {
	        return reminderRepository.findAll();
	    }

	    // Endpoint to create a new medication
	    @PostMapping("/medications")
	    public Reminder createMedication(@RequestBody Reminder reminder) {
	        return reminderRepository.save(reminder);
	    }
//
//	     Endpoint to update an existing medication
//	    @PutMapping("/{id}")
//	    public Reminder updateMedication(@PathVariable Long id, @RequestBody Reminder medicationDetails) {
//	    	Reminder reminder = reminderRepository.findById(id)
//	              //  .orElseThrow(() -> new ResourceNotFoundException("Medication not found with id: " + id));
//	        
//	    	reminder.setName(medicationDetails.getName());
//	    	reminder.setDosage(medicationDetails.getDosage());
//	    	reminder.setSchedule(medicationDetails.getSchedule());
//
//	        return reminderRepository.save(reminder);
//	    }

	    // Endpoint to delete a medication
//	    @DeleteMapping("/{id}")
//	    public ResponseEntity<?> deleteMedication(@PathVariable Long id) {
//	    	Reminder reminder = reminderRepository.findById(id);
//	              //  .orElseThrow(() -> new ResourceNotFoundException("Medication not found with id: " + id));
//
//	    			reminderRepository.delete(reminder);
//
//	        return ResponseEntity.ok().build();
//	    }
	}