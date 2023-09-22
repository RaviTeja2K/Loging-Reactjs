package com.curd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curd.entities.Employee;
import com.curd.service.EmpService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/")
public class EmpController {
	
	@Autowired
	EmpService empService;
	
//	get all employees
	@GetMapping("/getall")
	public List<Employee> getAll(){
		List<Employee> employees =  empService.getAll();
		return employees;
	}
	
//	create employee
	@PostMapping("/add")
	public Employee emp(@RequestBody Employee employee ) {
		return empService.emp(employee);
	}
	
//	get emp by id
	
	@GetMapping("/emp/{id}")
	public Employee getEmp(@PathVariable Integer id) {
		return empService.getEmp(id);
	}
	
//	update emp
	@PutMapping("/empupdate/{id}")
	public ResponseEntity<Employee> updateEmp(@PathVariable Integer id,@RequestBody Employee employee){
	return empService.updateEmp(id,employee);	
	}
	
	
	
	
	
	
	
	
	
	
	
}
