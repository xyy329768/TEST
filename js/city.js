 <!--显示城市的模态窗口-->
<script type="text/javascript">
		//获取模态窗口
		var modal = document.getElementById("myModal");
		var myCityChoice = document.getElementById("cityChoice");
			myCityChoice.onclick = function(){
				if(modal.style.display=='none'){
					modal.style.display='block';
				}else{
					modal.style.display='none';
				}	
			}
				
		//获取span元素，设置关闭模态框按钮
		var span = document.getElementsByClassName("close")[0];
		//点击span上的x，关闭模态框
			span.onclick = function(){
				modal.style.display="none";
			}
			//替换label中的名
			$('#caption_content li').click(function(){
				$('#cmbCity').text($(this).text())
		})
</script>