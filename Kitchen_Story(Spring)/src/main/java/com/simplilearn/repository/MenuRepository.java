package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Menu;


@Repository
public interface MenuRepository extends CrudRepository<Menu, Integer>{

  public List<Menu> findByMenuId(int menuId);


}
