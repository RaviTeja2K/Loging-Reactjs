package com.curd.bootloader;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.curd.entities.Employee;
import com.curd.repository.EmpRepository;

@Component
public class Bootloader implements CommandLineRunner {
	@Autowired
	EmpRepository empRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee employee = new Employee(1,"ravi","teja","ravi@gmail.com");
		Employee employee1 = new Employee();
			employee1.setId(2);
			employee1.setFirstName("ganesh");
			employee1.setLastName("reddy");
			employee1.setEmailId("gani@gmail.com");
		
	List<Employee> Emps = List.of(employee,employee1);

			
		empRepository.saveAll(Emps);
	}

}
