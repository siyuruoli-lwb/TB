// function Glass(id1,id2,id3,id4,id5){
//     this.box = $(id1);
//     this.small = $(id2);
//     this.big = $(id3);
//     this.mask = $(id4);
//     this.bigImg = $(id5);
// }    
// Glass.prototype.into = function(){
//     console.log(this.samll);
//     this.small.mouseover(function(){
//         console.log(this.small);
// 		this.mask.css("display","block");
// 		this.big.css("display","block");
//     }),
//     this.small.mouseout(function(){
// 		this.mask.css("display","none");
// 		this.big.css("display","none");
//     }),
//     this.small.mousemove(function(e){
//         console.log(e.offset());
//         // var e = $(window).event||e;
// 		// var e = e || event;
// 		var x = e.offset().left - this.box.offset().left - this.mask.innerWidth()/2;
// 		var y = e.offset().left - this.box.offset().top - this.mask.innerHeight()/2;
// 		//获取mask的最大的left和top值
// 		var maxL = this.box.innerWidth() - this.mask.innerWidth()-2;
// 		var maxT = this.box.innerHeight() - this.mask.innerHeight()-2;
// 		//边界处理
// 		x = x < 0 ? 0 : (x > maxL ? maxL : x);
// 		y = y < 0 ? 0 : (y > maxT ? maxT : y);
		
// 		// this.mask.css("left",`${x}+px`);
//         // this.mask.css("top",`${y}+px`);
        
//         this.mask.position({
//             left:x,
//             top:y
//         })
// 		/*mask.style.backgroundPositionX = -x + "px";
// 		mask.style.backgroundPositionY = -y + "px";*/
//         // mask.style.backgroundPosition = -x + "px -" + y + "px"; 
        
//         var bigImgLeft = x*this.bigImg.innerWidth()/this.small.innerWidth();
// 		var bigImgTop = y*this.bigImg.innerHeight()/this.small.innerHeight();
// 		//设置大图的移动
// 		this.bigImg.style.css("left",`${-bigImgLeft}+px`);
// 		this.bigImg.style.css("top",`${-bigImgTop}+px`)

//     })
// }
// var g1 = new Glass('#box','#small','#big','#mask','#bigImg');
// g1.into();



function addToCart(){
    var $id = $('.product').children().eq(0).children().eq(0).html();
    var $name = $('.product').children().eq(1).html();
    var $img = $('#small>img').attr('src');
    var $num = $('.number').children().eq(2).html();
    var $price = $('.product').children().eq(2).children().eq(0).html();
    $('.addToCart').click(function(){
        $.ajax({
            url:'../php/interface/addwq.php',
            dataType:'json',
            data:{
                id: $id,
                name: $name,
                img: $img,
                num: $num,
                price: $price
            },
            success:function(res){
                if(res.code){
                    alert('商品加入成功');
                }else{
                    alert('商品加入失败');
                }
            }
        })
    })
}
addToCart();

