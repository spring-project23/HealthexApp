package com.springboot.springboot.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medications")
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String dosage;

    @Column(nullable = false)
    private LocalDateTime schedule;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public LocalDateTime getSchedule() {
		return schedule;
	}

	public void setSchedule(LocalDateTime schedule) {
		this.schedule = schedule;
	}

	public Reminder(Long id, String name, String dosage, LocalDateTime schedule) {
		super();
		this.id = id;
		this.name = name;
		this.dosage = dosage;
		this.schedule = schedule;
	}

	public Reminder() {
		
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Reminder [id=" + id + ", name=" + name + ", dosage=" + dosage + ", schedule=" + schedule + "]";
	}

    // Getters and setters, constructors
}