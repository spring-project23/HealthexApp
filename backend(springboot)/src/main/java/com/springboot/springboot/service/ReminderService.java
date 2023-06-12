package com.springboot.springboot.service;


	import java.util.List;

import com.springboot.springboot.entity.Reminder;






	public interface ReminderService {


	public List<Reminder>getReminder();

	public Reminder updateReminder(Reminder reminder);

	public void deleteReminder(long parseLong);



	public Reminder getReminder(long reminderId);
	public Reminder addReminder(Reminder reminder);




}
