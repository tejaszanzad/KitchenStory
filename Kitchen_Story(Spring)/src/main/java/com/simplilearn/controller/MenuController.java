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

import com.simplilearn.entity.Menu;
import com.simplilearn.entity.MenuDTO;
import com.simplilearn.service.MenuService;

@RestController
public class MenuController {
	
	@Autowired
	MenuService menuservice;
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/menu")
	public List<Menu> getAllMenu() {
		return menuservice.getAllMenu();
	}
    
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/menu")
	public int saveMenu(@RequestBody MenuDTO menuDTO) {
		menuservice.saveMenu(menuDTO);
		return menuservice.getMenuId();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/menu")
	public Menu updateMenu(@RequestBody MenuDTO menuDTO) {
		return menuservice.updateMenu(menuDTO);
	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/menu/{MenuId}")
	public void deleteMenu(@PathVariable("MenuId") Integer MenuId) {
		menuservice.delete(MenuId);
	}

}
