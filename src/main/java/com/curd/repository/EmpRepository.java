package com.curd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curd.entities.Employee;

@Repository
public interface EmpRepository extends JpaRepository<Employee, Integer>{

	
}
