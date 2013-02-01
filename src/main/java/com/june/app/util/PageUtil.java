package com.june.app.util;


import com.june.app.model.PageInfo;

public class PageUtil {

	public static PageInfo getPage(int page, int pagePerCnt) {
		PageInfo pageInfo = new PageInfo();
		int startPage = page-1;
		int start = startPage* pagePerCnt;
		pageInfo.setCurrentPage(start);
		pageInfo.setPagePerCount(pagePerCnt);
		return pageInfo;
	}
}	