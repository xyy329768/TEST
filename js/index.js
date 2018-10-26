
//点击菜单 动画弹出效果
    var flag=true;
    $('.menu .imgCont').click(function () {
    	if(flag){
        	$('#nav .nav-left').css('top','100%')
    		flag=false;
    	}else{
    		 $('#nav .nav-left').css('top','-1000px')
    		 $('.subnav').removeClass('subActive')
    		 flag=true;
    		 
    	}
		setTimeout(a,'600')
    })

var a=(function(){
    var srcList=[]
    for(let i=0;i<4;i++){
        srcList.push($('.imgDiv>img').eq(i).attr('src'))
    }

$('.nav-left>ul>li').mouseenter(function () {
    var index=$(this).index();
    
    for(var i=0;i<srcList.length;i++){
    	$('.menu .imgCont').click(function(){
		 for(let i=0;i<4;i++){
        $('.nav-left>ul>li').find("img").eq(i).attr('src',srcList[i])
    }
})
        if(!$('.nav-left>ul>li').hasClass("subActive")){
        
        $('.nav-left>ul>li').find("img").eq(i).attr('src','icons/'+`${i+1}`+'normal.png')
        }
        
}
    
 $(this).find('.subnav').addClass('subActive').parent().siblings().find('.subnav').removeClass('subActive')
    $('.nav-left>ul>li img').eq(index).attr("src",'icons/'+`${index+1}`+'hover.png')
    })

	

    $('.tab').click(function(){
        $(this).addClass('tabActive').siblings().removeClass('tabActive')
        for(let i=0;i<$('.tab').length;i++){
            $('.tab').eq(i).find('i').remove();
            if($('.tab').eq(i).hasClass('tabActive')){
                mark($('.tab').eq(i))
            }
        }
    })
    
    //:标记
    function mark(ele){
        ele.find('i').remove();
        var i=document.createElement('i');
       i.setAttribute('class','mark')
        ele.append(i)
        return ele;
    }
  
})


