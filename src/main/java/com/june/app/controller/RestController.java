package com.june.app.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.june.app.model.JobInfo;
import com.june.app.model.PageInfo;
import com.june.app.service.JobService;
import com.june.app.util.ExtJSReturn;
import com.june.app.util.PageUtil;

@Controller
@RequestMapping(value = "/Rest")
public class RestController {
	
	@Autowired
	private JobService jobService;

	@RequestMapping(value="/jobList/{page}", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,? extends Object> getMyData(
			@PathVariable int page, @RequestParam int pagePerCnt) {
		
		PageInfo pageInfo = PageUtil.getPage(page, pagePerCnt);
		
		List<JobInfo> contacts = jobService.getSampleInfo(pageInfo);
		long totalCount =  jobService.getTotalCount(pageInfo);
		
		return ExtJSReturn.mapOK(contacts, page, totalCount, pagePerCnt);
	}
	
	/*@RequestMapping(value="/jobList/{page}", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,? extends Object> getMyData(
			@PathVariable int page, @RequestParam int pagePerCnt) {
		
		PageInfo pageInfo = PageUtil.getPage(page, pagePerCnt);
		
		List<JobInfo> contacts = jobService.getSampleInfo(pageInfo);
		long totalCount =  jobService.getTotalCount(pageInfo);
		//long totalCount = pageInfo.getTotalCount();
		return ExtJSReturn.mapOK(contacts, page, totalCount);
	}*/
	
	/*
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody MyData putMyData(
			@RequestBody MyData md) {
		
		return md;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody MyData postMyData() {
		return new MyData(
			System.currentTimeMillis(), "REST POST Call !!!");
	}

	@RequestMapping(value="/{time}", method = RequestMethod.DELETE)
	public @ResponseBody MyData deleteMyData(
			@PathVariable long time) {
		
		return new MyData(time, "REST DELETE Call !!!");
	}*/

}