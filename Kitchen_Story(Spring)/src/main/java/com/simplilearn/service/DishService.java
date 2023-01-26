package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Menu;
import com.simplilearn.entity.MenuDTO;
import com.simplilearn.entity.Dish;
import com.simplilearn.entity.DishDTO;
import com.simplilearn.repository.MenuRepository;
import com.simplilearn.repository.DishRepository;

@Service
public class DishService {

    @Autowired
	DishRepository dishrepository;
    
    @Autowired
  	MenuRepository menuRepository;
    
    public List<Dish> getAllDishes() {
		List<Dish> dishes = new ArrayList<>();
		Iterable<Dish> ps =  dishrepository.findAll();
		ps.forEach((p) -> {
            System.out.println(p.getDishName());
            dishes.add(p);
        });
		return dishes;
	}
    
    public List<String> getDishByMenuName(String MenuName) {
		List<String> DishNames = new ArrayList<>();
		List<Dish> dishes = dishrepository.findDishByMenuName(MenuName);

		if (dishes != null && dishes.size() > 0) {
			dishes.forEach(m -> DishNames.add(m.getDishName()));
		}
		return DishNames;	
	}
    
    public void saveDish(DishDTO dishDTO) {
    	Dish dish = new Dish();
    	dish.setDishName(dishDTO.getDishName());
    	dish.setPrice(dishDTO.getPrice());
    	
	List<Menu> listOfMenu = menuRepository.findByMenuId(dishDTO.getMenuId());
		if(listOfMenu  != null && listOfMenu.size() > 0) {
    		dish.setMenu(listOfMenu.get(0));
        };
     
		dishrepository.save(dish);
	}

	public void delete(int DishId) {
		dishrepository.deleteById(DishId);
	}

	public int getDishId() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	public Dish updateDish(DishDTO dishDTO) {
		List<Dish> p = dishrepository.findByDishId(dishDTO.getDishId());
		if(p != null && p.size()>0) {
			Dish pr = (p.get(0));
			pr.setDishName(dishDTO.getDishName());
			pr.setPrice(dishDTO.getPrice());
			List<Menu> b = menuRepository.findByMenuId(dishDTO.getMenuId());
			if(b != null && b.size() > 0) {
				pr.setMenu(b.get(0));
			}
			dishrepository.save(pr);
			return pr;
		}
		return null;
		
	}

}
