package com.june.app.controller;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.june.app.model.JobInfo;
import com.june.app.service.JobService;
import com.june.app.util.ExtJSReturn;

@Controller
public class IndexController {

	private final Log log = LogFactory.getLog(this.getClass());

	@Autowired
	private JobService jobService;
	
	/*@RequestMapping(value = "/index")
	@ResponseBody
	public Map<String,? extends Object> requestIndex(@RequestParam String param, int page){
		System.out.println("===== param ======"+param);
		System.out.println("===== page  ======"+page);
		log.debug("controller is called");
		List<JobInfo> contacts = jobService.getSampleInfo();
		
		return ExtJSReturn.mapOK(contacts, page, 24); 
	}
	
	@RequestMapping(value = "/create")
	@ResponseBody
	public Map<String,? extends Object> create(@RequestBody JobInfo data){
		
		log.debug("controller is called");
		List<JobInfo> contacts = jobService.getSampleInfo();
		
		return ExtJSReturn.mapOK(contacts); 
	}*/
	
}