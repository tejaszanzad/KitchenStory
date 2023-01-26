package com.simplilearn.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "dishes")
public class Dish {
	
	@Id
	@GeneratedValue
	@Column(name = "dishId")
	private int dishId;
	
	@Column(name = "dishName")
	private String dishName;
	
	@Column(name = "price")
	private int price;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn(name="menuId")
	private Menu menu;

	public int getDishId() {
		return dishId;
	}

	public void setDishId(int dishId) {
		this.dishId = dishId;
	}

	public String getDishName() {
		return dishName;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@JsonManagedReference
	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}
				
}
