
$(document).ready(function() {

	var currentPageInput = $("#currentPage").val();
	RestPost(currentPageInput, 7);
	var totalCnt = $("#totalCnt").val();	
	var pagePerPage = $("#pagePerPage").val();
	wPagePlugin(totalCnt, pagePerPage);
	$().addclass("_wPaginate_link_active");
});
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
        async: false,
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
	
	
	$("#totalCnt").val(tot);
	$("#currentPage").val(currentPage);
	$("#pagePerPage").val(pagePer);
	
};
var wPagePlugin = function(totalCnt, pagePerPage){
	$('#wPaginate7').wPaginate({

		theme:'black', 
		
		total:totalCnt, 
		index:0,
		limit:pagePerPage, 
		
		ajax: true,
		spread: 1,
		url : function(page){
			RestPost(page, pagePerPage);
			$("#wPaginate8_contents").html('Yay, you have reached page ' + page + ', and index ' + page*this.settings.limit);
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