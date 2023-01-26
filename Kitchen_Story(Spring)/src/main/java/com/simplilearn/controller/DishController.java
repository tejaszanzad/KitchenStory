package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Dish;
import com.simplilearn.entity.DishDTO;
import com.simplilearn.service.DishService;

@RestController
public class DishController {

  @Autowired
  DishService dishservice;
  
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/dishes")
	public List<Dish> getAllDishes() {
		return dishservice.getAllDishes();
	}

  @CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/dishes")
	public int saveDish(@RequestBody DishDTO dishDTO) {
		dishservice.saveDish(dishDTO);
		return dishservice.getDishId();
	} 
	
  @CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/dishes")
	public Dish updateDish(@RequestBody DishDTO dishDTO) {
		return dishservice.updateDish(dishDTO);
	}
	
  @CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/dishes/{DishId}")
	public void deleteDish(@PathVariable("DishId") Integer DishId) {
		dishservice.delete(DishId);
	}
	
  @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/dishes/menu/{name}")
	public List<String> getDishesByMenuName(@PathVariable("name") String name) {
		return dishservice.getDishByMenuName(name);
	}
   
}
