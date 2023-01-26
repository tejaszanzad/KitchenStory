package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Dish;

@Repository
public interface DishRepository extends CrudRepository<Dish, Integer> {

	@Query("select dish from Dish dish left join Menu menu on dish.menu.id = menu.id where menu.menuName = :menuName")
	public List<Dish> findDishByMenuName(String menuName);

	public List<Dish> findByDishId(int dishId);
}
