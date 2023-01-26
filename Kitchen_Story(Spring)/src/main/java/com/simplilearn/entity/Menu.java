package com.simplilearn.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "menu")
public class Menu {
	
	@Id
	@GeneratedValue
	@Column(name = "menuId")
	private int menuId;
	
	@Column(name = "menuName")
	private String menuName;
	
	@OneToMany(mappedBy = "menu", cascade = CascadeType.ALL)
	private List<Dish> dishes;

	

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	@JsonBackReference
	public List<Dish> getDishes() {
		return dishes;
	}

	public void setDishes(List<Dish> dishes) {
		this.dishes = dishes;
	}
	
}
	
