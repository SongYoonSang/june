package com.june.app.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.june.app.model.JobInfo;

/**
 * Util class, returns a Map in the format Ext JS expects
 * 
 * Sample project presented at BrazilJS
 * Brazilian JavaScript Conference
 * Fortaleza - Cear� - 13-14 May 2011
 * http://braziljs.com.br/2011
 * 
 * @author Loiane Groner
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 */
@Component
public class ExtJSReturn {

	/**
	 * Generates modelMap to return in the modelAndView
	 * @param <T>
	 * @param contacts
	 * @return
	 */
	public static <T> Map<String,Object> mapOK(List<T> domain){
		
		Map<String,Object> modelMap = new HashMap<String,Object>(3);
		modelMap.put("total", domain.size());
		modelMap.put("data", domain);
		modelMap.put("success", true);
		
		return modelMap;
	}
	public static <T> Map<String,Object> mapOK(List<T> domain, long page, long total, long pagePerCnt){
		
		Map<String,Object> modelMap = new HashMap<String,Object>(3);
		modelMap.put("total", total);
		modelMap.put("success", true);
		modelMap.put("page", page);
		modelMap.put("pagePerCnt", pagePerCnt);
		modelMap.put("data", domain);
		
		return modelMap;
	}
	/**
	 * Generates modelMap to return in the modelAndView
	 * @param <T>
	 * @param contacts
	 * @return
	 */
	public static <T> Map<String,Object> mapOK(List<T> domain, int total){
		
		Map<String,Object> modelMap = new HashMap<String,Object>(3);
		modelMap.put("total", total);
		modelMap.put("data", domain);
		modelMap.put("success", true);
		
		return modelMap;
	}
	
	/**
	 * Generates modelMap to return in the modelAndView in case
	 * of exception
	 * @param msg message
	 * @return
	 */
	public static Map<String,Object> mapError(String msg){

		Map<String,Object> modelMap = new HashMap<String,Object>(2);
		modelMap.put("message", msg);
		modelMap.put("success", false);

		return modelMap;
	}
	
}
