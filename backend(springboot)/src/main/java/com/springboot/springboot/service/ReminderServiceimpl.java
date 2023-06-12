package com.springboot.springboot.service;



import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.springboot.entity.Reminder;
import com.springboot.springboot.repository.ReminderRepository;
@Service
public class ReminderServiceimpl implements ReminderService{
@Autowired 
private ReminderRepository reminderRepository;

@Override
public List<Reminder> getReminder() {
	// TODO Auto-generated method stub
	return reminderRepository.findAll();
}

@Override
public Reminder updateReminder(Reminder reminder) {
	// TODO Auto-generated method stub
	 reminderRepository.save(reminder);
	return reminder;
	}

@Override
public void deleteReminder(long parseLong) {
	Reminder entity=  reminderRepository.getOne(parseLong);
	reminderRepository.delete(entity);
	
}

@Override
public Reminder getReminder(long reminderId) {
	// TODO Auto-generated method stub
	return reminderRepository.getOne(reminderId);
}

@Override
public Reminder addReminder(Reminder reminder) {
	reminderRepository.save(reminder);
	return reminder;
}

	

}



















