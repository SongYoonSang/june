
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
	/*$('#paging').paging({
		current:currentPage
		,max:tot
		,onclick:function(e,page){
			//alert('going to page '+page);
			RestGet(page);
		}
	});*/
	pageJune(currentPage, tot, pagePer);
	
};
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
	var viewPageSpan = 3;
	var viewPage = Math.ceil(tot/pagePer);
	//html = viewPage;
	for(var i = 1;i<=viewPageSpan;i++){
		//html+='<a href="#">'+ i +'</a>';
		//html+= '<input type="button" value="'+i+'" style="cursor:pointer">';
		/*html+= '<div class="pageBnt _wPaginate_blue _wPaginate_link" style="cursor:pointer;width:20px;float:left;">'+i+'</div>';*/
		var test = (i === currentPage ? 'active' : null);
		pageSpan+= '<span class="_wPaginate_link _wPaginate_link_'+test+' _wPaginate_link_pageBtn">'+i+'</span>';
		
	}
	$('#paging').append(Span);
	$('._wPaginate_link_prev').after(pageSpan);
	$("._wPaginate_link_pageBtn").on({
		  click: function(){
		    //$(this).toggleClass("_wPaginate_link_active");
		    var id = $(this).text();
		    /*if (id == ">"){
		    	var before = $(this).before().text();
		    	alert(before);
		    }*/
		    //else {
		    $("#currentPage").val(id);
		    RestPost(id, pagePer);
		    //}
		    
		  }/*,
		  mouseenter: function(){
		    $(this).addClass("_wPaginate_link_active");
		  },
		  mouseleave: function(){
		    $(this).removeClass("_wPaginate_link_active");
		  }*/
	});
	$("._wPaginate_link_pageBtn").on({
		  click: function(){
		    //$(this).toggleClass("_wPaginate_link_active");
		    var id = $(this).text();
		    /*if (id == ">"){
		    	var before = $(this).before().text();
		    	alert(before);
		    }*/
		    //else {
		    $("#currentPage").val(id);
		    RestPost(id, pagePer);
		    //}
		    
		  }/*,
		  mouseenter: function(){
		    $(this).addClass("_wPaginate_link_active");
		  },
		  mouseleave: function(){
		    $(this).removeClass("_wPaginate_link_active");
		  }*/
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