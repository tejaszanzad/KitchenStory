package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Menu;
import com.simplilearn.entity.MenuDTO;
import com.simplilearn.repository.MenuRepository;

@Service
public class MenuService {

	@Autowired
	MenuRepository menurepository;
	
	public List<Menu> getAllMenu() {
		List<Menu> menu = new ArrayList<>();
		 Iterable<Menu> brs = menurepository.findAll();
		 brs.forEach((br) -> {
	            System.out.println(br.getMenuName());
	            menu.add(br);
	        });
		return menu;
	}

	public void delete(int MenuId) {
		menurepository.deleteById(MenuId);
	}

	public int getMenuId() {
		// TODO Auto-generated method stub
		return 0;
	}

	public void saveMenu(MenuDTO menuDTO) {
		Menu menu = new Menu();
		menu.setMenuId(menuDTO.getMenuId());
		menu.setMenuName(menuDTO.getMenuName());
     
		menurepository.save(menu);
		
	}
 
	public Menu updateMenu(MenuDTO menuDTO) {
		List<Menu> b = menurepository.findByMenuId(menuDTO.getMenuId());
		if(b != null && b.size()>0) {
			Menu br = (b.get(0));
			br.setMenuName(menuDTO.getMenuName());
			menurepository.save(br);
			return br;
		}
		return null;
		}
	
}
