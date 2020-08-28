
//划出显示导航 
function Spread(class1,class2){
    this.rely = document.getElementsByClassName(class1)[0];
    this.kuai = document.getElementsByClassName(class2)[0];
}
Spread.prototype.expand = function(){
    var that = this;
    that.rely.onmouseenter = function(){
        var left = that.rely.offsetLeft;
        var top = that.rely.offsetTop;
        top = top + that.rely.offsetHeight;
        that.kuai.style.display = "block";
        that.kuai.style.left = left+'px';
        that.kuai.style.top = top+'px'; 
    }
    that.rely.onmouseleave = function(){
        that.kuai.style.display = 'none';
    }
    that.kuai.onmouseenter = function(){
        that.kuai.style.display = 'block';
    }

    that.kuai.onmouseleave = function(){
        that.kuai.style.display = 'none';
    }
}
var s1 = new Spread('dalu','kuai_1');
s1.expand();
var s2 = new Spread('wotao','kuai_2');
s2.expand();
var s3 = new Spread('shoucang','kuai_3');
s3.expand();
var s4 = new Spread('qianniu','kuai_4');
s4.expand();
var s5 = new Spread('kefu','kuai_5');
s5.expand();

function Daohang(class1,class2){
    this.rely = document.getElementsByClassName(class1)[0];
    this.kuai = document.getElementsByClassName(class2)[0];
}
//最大的那个划出显示导航
Daohang.prototype.expand = function(){
    var that = this;
    that.rely.onmouseenter = function(){
        var left = that.rely.parentNode.parentNode.offsetLeft;
        var top = that.rely.offsetTop;
        top = top + that.rely.offsetHeight;
        that.kuai.style.display = "block";
        that.kuai.style.left = left+'px';
        that.kuai.style.top = top+'px'; 
    }
    that.rely.onmouseleave = function(){
        that.kuai.style.display = 'none';
    }
    that.kuai.onmouseenter = function(){
        that.kuai.style.display = 'block';
        that.kuai.style.zIndex = 2;
        
    }

    that.kuai.onmouseleave = function(){
        that.kuai.style.display = 'none';
    }
}
var s6 = new Daohang('daohang','kuai_6');
s6.expand();


//轮播图
var mySwiper = new Swiper('.swiper-container', {
    // 如果需要自动轮播
    autoplay:true,

    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要小圆点
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    
    // 如果需要左右箭头
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // }
}) 
var mySwiper2 = new Swiper('.lunbo_box', {
    // 如果需要自动轮播
    autoplay:true,

    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要小圆点
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    
    // 如果需要左右箭头
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    onSlideChangeEnd:function(){
    //可以读取到当前活动的下班标
    var num=mySwiper2.activeIndex;
    console.log(num)
    }

    // console.log($actIndex);
    // $('.lunbo_title>h4').children().eq(0).html($actIndex+'/6');
}); 

// function Tab

//tab切换栏
function Tab(id,class2){
    this.container = document.getElementById(id);//tab对象的外层容器
    this.btnS = this.container.querySelectorAll('a');//所有按钮
    this.contentS = this.container.querySelectorAll(class2);//所有的内容选项卡集合
}
Tab.prototype.init = function(class1){

    //原型上的方法里面的this是实例对象,this每次函数里面都有可能发生改变
    //为了在其他函数里面,也能用到实例对象,把此时的this赋值给另一个变量,变量名随便取
    var that = this;
    for(var i=0;i<this.btnS.length;i++){
        //每个a标签都是一个对象,我可以给每个a标签对象都添加一个属性,用于记录他是第几个
        this.btnS[i].index = i;				
        this.btnS[i].onclick = function(e){
            // 点前按钮高亮
            // console.dir(this);//在事件函数中,this指的是事件源
            //干掉所有人,留下我一个
            var e = window.event||e;
            e.preventDefault?e.preventDefault():e.returnValue=false;
            for(var j=0;j<that.btnS.length;j++){
                //把所有a的类名都去掉
                that.btnS[j].className = ""
                //把所有content都设置成display:none
                that.contentS[j].style.display = 'none'
            }
            //只要当前a的类名on加上
            this.className = class1;
            //只把当前content的display设置设置成block
            that.contentS[this.index].style.display = "block"
            // console.log('当前被点击的是的第'+this.index+'个a')
        }
    }
}

var t2 = new Tab('container','.tab_box');
t2.init('on')
var t1 = new Tab('news','.content');
t1.init('light')

//service列表滑出
function Slider(class1,class2){
    this.ul = $(class1);
    this.show = $(class2);
    this.liS = this.ul.children();
}
Slider.prototype.expand = function(){
    for(i=0;i<this.liS.length;i++){
        var that = this;
        this.liS.eq(i).hover(function(){
            that.show.css('display','block');
        },
        function(){
            that.show.css('display','none');

        })
        this.show.hover(function(){
            that.show.css('display','block');
            that.liS.eq(0).addClass('highlight')
        },
        function(){
            that.show.css('display','none');
            that.liS.eq(0).removeClass('highlight')
        })
    }
}
var r1 = new Slider('.service','.show');
r1.expand();



//顶部悬浮和侧面悬浮
function Fluid(id){
    this.header = $(id);
}
Fluid.prototype.init = function(){
    $(window).scroll(()=>{
        if($(window).scrollTop()>=220){
            this.header.fadeIn();
        }else{
            this.header.fadeOut();
        }
    })
}
Fluid.prototype.goTop = function(class1){
    $(window).scroll(()=>{
        if($(window).scrollTop()>=220){
            this.header.css('top','100px');
        }else{
            this.header.css('top','310px');
        }
    })
    $(class1).click(()=>{
        $('html').animate({
            scrollTop:0
        },1000)
    })
}

var f1 = new Fluid('#header2');
f1.init();
var f2 = new Fluid('#dangling');
f2.goTop('.goTop');



//模板函数
model();
function model(){
    $.ajax({
        url:"../lib/goods-list.json",
        dataType:'json'
    })
    .then(res=>{
        //第二步:格式化数据(这是自己根据需求写的假数据,已经格式好了)
        //第三步:把数据渲染到瀑布流容器里面==>先准备好模板,然后把模板通过数据变成纯html,放到容器里
        var htmlStr = template('template',{
            'data':res
        })
        //把类名叫goods里面的div变成模板布局
        // $('.goods').html(htmlStr);
        $('#goods-list').append(htmlStr);
    })
}

model_1()
function model_1(){
    $.ajax({
        url:"../lib/main2-data.json",
        dataType:'json'
    })
    .then(res=>{
        //第二步:格式化数据(这是自己根据需求写的假数据,已经格式好了)
        //第三步:把数据渲染到瀑布流容器里面==>先准备好模板,然后把模板通过数据变成纯html,放到容器里
        var htmlStr = template('template1',{
            'data':res
        })
        //把类名叫goods里面的div变成模板布局
        // $('.goods').html(htmlStr);
        $('#likes-list').append(htmlStr);
    })
}

$(window).ajaxStart(function(){
    console.log('第一个请求要开始了');
})

$(window).ajaxSend(function(){
    console.log('ajax马上要send了')
})

$(window).ajaxSuccess(function(){
    console.log('ajax成功了')
})

$(window).ajaxError(function(){
    console.log('ajax失败了')
})

$(window).ajaxComplete(function(){
    console.log('ajax完成了')
})

$(window).ajaxStop(function(){
    console.log('ajax全部加载完成了')
})




//秒杀倒计时
function gettime(){
    var imgS = $('#div').find('img');
    var now = new Date();
    var time = new Date(2020,7,30);

    time = time.getTime()-now.getTime();

    var hour = time/(1000*60*60);
    hour = parseInt(hour)
    time = time -hour*(1000*60*60);

    var minute = time/(1000*60);
    minute = Math.floor(minute)
    time = time -minute*(1000*60);
    
    var second = Math.floor(time/(1000));
    var arr = [parseInt(hour/10),hour%10,parseInt(minute/10),minute%10,parseInt(second/10),second%10,];
    for(i=0;i<arr.length;i++){
        imgS[i].src =`../images/${arr[i]}.png`
    }
}
var timer = setInterval(function(){
    gettime()
},1000);

//登录，注册
$('.login').click(()=>{
    location.href = './login.html';
})
$('.register').click(()=>{
    location.href = './register.html';
})




// function Glass(){
// 	var box = $id("box");
// 	var small = $id("small");
// 	var big = $id("big");
// 	var mask = $id("mask");
// 	var bigImg = $id("bigImg");
// 	//鼠标移入到small区域  操作mask和big的显示和隐藏
// 	small.onmouseover = function(){
// 		mask.style.display = "block";
// 		big.style.display = "block";
// 	}
// 	small.onmouseout = function(){
// 		mask.style.display = "none";
// 		big.style.display = "none";
// 	}
// 	//鼠标在小图区移动  操作mask的移动
// 	small.onmousemove = function(e){
// 		var e = e || event;
// 		var x = e.pageX - box.offsetLeft - mask.offsetWidth/2;
// 		var y = e.pageY - box.offsetTop - mask.offsetHeight/2;
// 		//获取mask的最大的left和top值
// 		var maxL = box.offsetWidth - mask.offsetWidth-2;
// 		var maxT = box.offsetHeight - mask.offsetHeight-2;
// 		//边界处理
// 		x = x < 0 ? 0 : (x > maxL ? maxL : x);
// 		y = y < 0 ? 0 : (y > maxT ? maxT : y);
		
// 		mask.style.left = x + "px";
// 		mask.style.top = y + "px";
// 		/*mask.style.backgroundPositionX = -x + "px";
// 		mask.style.backgroundPositionY = -y + "px";*/
// 		mask.style.backgroundPosition = -x + "px -" + y + "px"; 
		
// 		//获取 大图的 left 和 top值
// 		// bigImgLeft / x = (大图的宽度-大图可视区宽度)/(小图宽度-mask的宽度) = 大图宽度/小图宽度 = 大图可视区宽度 / 小图可视区（mask）宽度
// 		//      
// 		/*var bigImgLeft = x*(bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);
// 		var bigImgTop = y*(bigImg.offsetHeight-big.offsetHeight)/(small.offsetHeight-mask.offsetHeight);*/
// 		var bigImgLeft = x*bigImg.offsetWidth/small.offsetWidth;
// 		var bigImgTop = y*bigImg.offsetHeight/small.offsetHeight;
// 		//设置大图的移动
// 		bigImg.style.left = -bigImgLeft + "px";
// 		bigImg.style.top = -bigImgTop + "px";
// 	}
// }
// Glass();
