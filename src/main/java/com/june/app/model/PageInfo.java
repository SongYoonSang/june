package com.june.app.model;


public class PageInfo {


	private long currentPage ;
	private long totalCount;
	private long pagePerCount ;
	private String searchKey;
	private String searchValue;
	
	public long getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(long currentPage) {
		this.currentPage = currentPage;
	}
	public long getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}
	public long getPagePerCount() {
		return pagePerCount;
	}
	
	public void setPagePerCount(long pagePerCount) {
		this.pagePerCount = pagePerCount;
	}
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	public String getSearchValue() {
		return searchValue;
	}
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	
	
	
	
}
