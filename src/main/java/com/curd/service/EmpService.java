package com.curd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.curd.entities.Employee;
import com.curd.exceptions.ResourceNotFoundException;
import com.curd.repository.EmpRepository;

@Service
public class EmpService {

	@Autowired
	EmpRepository empRepository;
	
	public List<Employee> getAll() {
		List<Employee> employees = empRepository.findAll();
		return employees;
	}

	public Employee emp() {
		return null;
		
	}

	public Employee emp(Employee employee) {
		return empRepository.save(employee);
	}

	public  Employee getEmp(Integer id) {
		return empRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Emp not exist with id : " + id ));
	}

	public ResponseEntity<Employee> updateEmp(Integer id, Employee employee) {
		Employee emp =	empRepository.findById(id).orElse(null);
		if(emp!=null) {
			
			emp.setFirstName(employee.getFirstName());
			emp.setLastName(employee.getLastName());
			emp.setEmailId(employee.getEmailId());
			
			Employee updateEmp = empRepository.save(emp);
			return ResponseEntity.ok(updateEmp);
		}
		else
			throw new ResourceNotFoundException("Employee not found :" + id);
	}
	
}