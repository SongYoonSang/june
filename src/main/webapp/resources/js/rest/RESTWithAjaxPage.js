
var prefix = "/app";

var RestGet = function(page) {
	
    $.ajax({
        type: 'GET',
        url:  prefix + "/Rest/jobList/" + page,
        data :{"pagePerCnt":"10"},
		dataType: 'json',
        async: true,
        success: success,
        error: error,
        complete :complete
    });
    
};

var RestPost = function(page, pagePer) {
	
    $.ajax({
        type: 'POST',
        url:  prefix + "/Rest/jobList/" + page,
        data :{"pagePerCnt":pagePer},
		dataType: 'json',
        async: true,
        success: success,
        error: error,
        complete :complete
    });
    
};
var colums = ['id', 'panNumber', 'address', 'city', 'state', 'pincode' ];

var success = function(json) {
	$('#list').empty();
	var item = [];
	var tot = json.total;
	var currentPage = json.page;
	var pagePer = json.pagePerCnt;
	$.each(colums, function(key, val) {
		item.push('<td id="' +key + '">' + val + '</td>');
	});
	$('<table/>', {
		'class' : 'my-new-list',
		'id' : 'table-list'
	}).appendTo('#list');
	
	$('<tr/>', {
		'class' : 'tr-list',
		html : item.join('')
	}).appendTo('#table-list');
	
	
	$.each(json.data, function(key, val) {
		var items = [];
		
		$.each(val, function(a, b) {
			items.push('<td id="' + a + key + '">' + b + '</td>');
		});
		$('<tr/>', {
			'class' : 'tr-list',
			html : items.join('')
		}).appendTo('#table-list');
	});
	
	pageJune(currentPage, tot, pagePer);
	
};
var startPage = 1;
var pageDiv = "link";
var pageJune = function(currentPage, tot, pagePer){
	$('#paging').empty();
	if (pagePer ==null){
		pagePer = 10;
	}
	var pageSpan = "";
	
	var Span = '<span class="_wPaginate_link _wPaginate_link_first"><<</span>'+
				'<span class="_wPaginate_link _wPaginate_link_prev"><</span>'+
				'<span class="_wPaginate_link _wPaginate_link_next">></span>'+
				'<span class="_wPaginate_link _wPaginate_link_last">>></span>';
	var viewPageSpan = 5;
	var viewPage = Math.ceil(tot/pagePer);
	
	var viewPageSide = Math.floor(viewPageSpan/2);
	if (pageDiv =="link") startPage = currentPage -viewPageSide;
	if (startPage < 1) startPage =1;
	for(var i = startPage;i<(startPage +viewPageSpan);i++){
		if(i > viewPage ) break;
		var test = (i === currentPage ? 'active' : null);
		pageSpan+= '<span class="_wPaginate_link _wPaginate_link_'+test+' _wPaginate_link_pageBtn">'+i+'</span>';
	}
	$('#paging').append(Span);
	$('._wPaginate_link_prev').after(pageSpan);
	$("._wPaginate_link_pageBtn").on({
		  click: function(){
		    var id = $(this).text();
		    $("#currentPage").val(id);
		    pageDiv = "link";
		    RestPost(id, pagePer);
		    
		  }
	});
	$("._wPaginate_link_next").on({
		  click: function(){
		    var next = $(this).prev().text();
		    pageDiv = "link";
		    if( next == viewPage ) {
		    	alert("last page!!!");
		    } else {
		    var nextPage = parseInt(next) + 1;
		    startPage = startPage + parseInt(viewPageSpan);
		    $("#currentPage").val(nextPage);
		    RestPost(nextPage, pagePer);
		    }
		  }
	});
	$("._wPaginate_link_prev").on({
		  click: function(){
		    var prev = $(this).next().text();
		    //alert(prev);
		    if( prev == 1 ) {
		    	alert("first page!!!");
		    } else {
		    var prevPage = parseInt(prev) - 1;
		    startPage = prev - parseInt(viewPageSpan);
		    $("#currentPage").val(prevPage);
		    RestPost(prevPage, pagePer);
		    }
		  }
	});
	$("._wPaginate_link_first").on({
		  click: function(){
			  pageDiv = "first";
		    startPage = 1;
		    $("#currentPage").val(1);
		    RestPost(1, pagePer);
		  }
	});
	$("._wPaginate_link_last").on({
		  click: function(){
			pageDiv = "last";
		    startPage = parseInt(viewPage) -parseInt(viewPageSpan) +1;
		    $("#currentPage").val(viewPage);
		    RestPost(viewPage, pagePer);
		  }
	});
};
var error = function(jqXHR, textStatus, errorThrown) {
    alert(jqXHR.status + " " + jqXHR.responseText);
};
var complete = function(){
	$(".tr-list").on({
		  click: function(){
		    $(this).toggleClass("active");
		    var id = $(this).children(':first').text();
		    alert(id);
		  },
		  mouseenter: function(){
		    $(this).addClass("inside");
		  },
		  mouseleave: function(){
		    $(this).removeClass("inside");
		  }
	});
	
};
var RestPut = function() {
	
	var JSONObject= {
		"time": Date.now(),
		"message": "User PUT call !!!"
	};
	
    $.ajax({
        type: 'PUT',
        url:  prefix + "/MyData",
		contentType: "application/json; charset=utf-8",		
		data: JSON.stringify(JSONObject),
		dataType: 'json',
        async: true,
        success: function(result) {
			alert("At " + result.time
				+ ": " + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + " " + jqXHR.responseText);
        }
    });
    
};



var RestDelete = function() {
	
    $.ajax({
        type: 'DELETE',
        url:  prefix + "/MyData/" + Date.now(),
		dataType: 'json',
        async: true,
        success: function(result) {
			alert("At " + result.time
				+ ": " + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + " " + jqXHR.responseText);
        }
    });
    
};