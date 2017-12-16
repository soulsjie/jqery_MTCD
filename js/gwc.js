$(function() {
	//实现购物车功能
	$(".jian").click(function(){
		var getnumber=parseInt($("#goods_number").html());
		var num=parseInt($("#NUM").html());
		var sum=parseFloat($("#goods_price").html());
		if(getnumber!=0){
			var new_number=getnumber-1;
			var new_num=num-1;
			sum=sum*new_num;
			$("#goods_number").html(new_number);
			$("#NUM").html(new_num);
			$(".shuliang").html(new_num);
			$("#SUM").html(sum);
		}
	});
	$(".jia").click(function(){
		var getnumber=parseInt($("#goods_number").html());
		var num=parseInt($("#NUM").html());
		var sum=parseFloat($("#goods_price").html());
		var new_number=getnumber+1;
		var new_num=num+1;
		sum=sum*new_num;
		$("#goods_number").html(new_number);
		$("#NUM").html(new_num);
		$(".shuliang").html(new_num);
		$("#SUM").html(sum);
	});

}); 