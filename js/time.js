$(function(){
	//获取div窗口
		$('#cmbTime').click(function(){
			$('#my_time_panel').toggle();
		});
		
		$('#mark2').click(function(){
			$('#my_time_panel').toggle();
		});
		
		$('#sure').click(function(){
			var options = $("#time_panel_top select option:selected");//获取选中的选项
			var options2=$('#time_panel_bottom select option:selected')
				//alert(options.val()); //获得选中项的值
				//alert(options.text()); //获得选中项的文本
				
				$('#cmbTime').text(options.text() + '-' + options2.text());
				$('#my_time_panel').hide();
				$('#mark2').animate({left:'140px'});	
		});
		
		$('#hide').click(function(){
			$('#my_time_panel').hide();
		});
	
	
	
})
