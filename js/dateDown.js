function DateSelect(SY, SM, SD) { 
		this.SY = SY; 
		this.SM = SM; 
		this.SD = SD; 
		this.SY.Group = this; 
		this.SM.Group = this; 
		// 给年份、月份下拉菜单添加处理onchange事件的函数 
		if (window.document.all != null) // IE 
		{ 
		this.SY.attachEvent("onchange", DateSelect.Onchange); 
		this.SM.attachEvent("onchange", DateSelect.Onchange); 
		} 
		else // Firefox 
		{ 
		this.SY.addEventListener("change", DateSelect.Onchange, false); 
		this.SM.addEventListener("change", DateSelect.Onchange, false); 
		} 
		if (arguments.length == 4) // 如果传入参数个数为4，最后一个参数必须为Date对象 
		this.InitSelect(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate()); 
		else if (arguments.length == 6) // 如果传入参数个数为6，最后三个参数必须为初始的年月日数值 
		this.InitSelect(arguments[3], arguments[4], arguments[5]); 
		else // 默认使用当前日期 
		{ 
		var dt = new Date(); 
		this.InitSelect(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()); 
		} 
		} 
		// 增加一个最大年份的属性 
		DateSelect.prototype.MinYear = 1980; 
		// 增加一个最大年份的属性 
		DateSelect.prototype.MaxYear = (new Date()).getFullYear(); 
		// 初始化年份 
		DateSelect.prototype.InitYearSelect = function () { 
		// 循环添加OPION元素到年份select对象中 
		for (var i = this.MaxYear; i >= this.MinYear; i--) { 
		// 新建一个OPTION对象 
		var yop = window.document.createElement("OPTION"); 
		// 设置OPTION对象的值 
		if(i<10){
			yop.value = '0'+i; 
			yop.innerHTML = '0'+i; 
		}else{
			
			yop.value = i; 
			yop.innerHTML =i;
		}
		
		// 添加到年份select对象 
		this.SY.appendChild(yop); 
		} 
		} 
		// 初始化月份 
		DateSelect.prototype.InitMonthSelect = function () { 
		// 循环添加OPION元素到月份select对象中 
		for (var i = 1; i < 13; i++) { 
		// 新建一个OPTION对象 
		var yop = window.document.createElement("OPTION"); 
		// 设置OPTION对象的值 
		if(i<10){
			yop.value = '0'+i; 
			yop.innerHTML = '0'+i; 
		}else{
			
			yop.value = i; 
			yop.innerHTML =i;
		}
		// 添加到月份select对象 
		this.SM.appendChild(yop); 
		} 
		} 
		// 根据年份与月份获取当月的天数 
		DateSelect.DaysInMonth = function (year, month) { 
		var date = new Date(year, month, 0); 
		return date.getDate(); 
		} 
		// 初始化天数 
		DateSelect.prototype.InitDaySelect = function () { 
		// 使用parseInt函数获取当前的年份和月份 
		var year = parseInt(this.SY.value); 
		var month = parseInt(this.SM.value); 
		// 获取当月的天数 
		var daysInMonth = DateSelect.DaysInMonth(year, month); 
		// 清空原有的选项 
		this.SD.options.length = 0; 
		// 循环添加OPION元素到天数select对象中 
		for (var i = 1; i <= daysInMonth; i++) { 
		// 新建一个OPTION对象 
		var yop = window.document.createElement("OPTION"); 
		// 设置OPTION对象的值 
		if(i<10){
			yop.value = '0'+i; 
			yop.innerHTML = '0'+i; 
		}else{
			
			yop.value = i; 
			yop.innerHTML =i;
		}
		// 添加到天数select对象 
		this.SD.appendChild(yop); 
		} 
		} 
		// 处理年份和月份onchange事件的方法，它获取事件来源对象（即selYear或selMonth） 
		// 并调用它的Group对象（即DateSelector实例，请见构造函数）提供的InitDaySelect方法重新初始化天数 
		// 参数e为event对象 
		DateSelect.Onchange = function (e) { 
		var select = window.document.all != null ? e.srcElement : e.target; 
		select.Group.InitDaySelect(); 
		} 
		// 根据参数初始化下拉菜单选项 
		DateSelect.prototype.InitSelect = function (year, month, day) { 
		// 由于外部是可以调用这个方法，因此我们在这里也要将selYear和selMonth的选项清空掉 
		// 另外因为InitDaySelect方法已经有清空天数下拉菜单，
		this.SY.options.length = 0; 
		this.SM.options.length = 0; 
		// 初始化年、月 
		this.InitYearSelect(); 
		this.InitMonthSelect(); 
		// 设置年、月初始值 
		this.SY.selectedIndex = this.MaxYear - year; 
		this.SM.selectedIndex = month - 1; 
		// 初始化天数 
		this.InitDaySelect(); 
		// 设置天数初始值 
		this.SD.selectedIndex = day - 1; 
		} 