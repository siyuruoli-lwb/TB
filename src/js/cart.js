$('h2').html('欢迎你'+localStorage.getItem('un'));

//增加商品

// $('.addToCart').click(function(){
//     $.ajax({
//         url:'../php/interface/addwq.php',
//         dataType:'json',
//         data:{
//             id:'222222',
//             name:'茶杯',
//             img:'./img/chabei.jpg',
//             num:100,
//             price:1
//         },
//         success:function(res){
//             if(res.code){
//                 alert('商品加入成功');
//             }else{
//                 alert('商品加入失败');
//             }
//         }
//     })
// })

// //查询并显示购物车
// function showCart(){
//     $.ajax({
//     url:'./interface/showlist.php',
//     dataType:'json',
//     success:function(res){
//         $('ul').html("");
//         $.each(res.data,function(index,item){
//             $('ul').append(`
//             <li>
//                 <p>${item.product_id}</p>          
//                 <p>
//                     <img src="${item.product_img}" alt="">
//                 </p>          
//                 <p>${item.product_name}</p>          
//                 <p>${item.product_num}</p>          
//                 <p>${item.product_price}</p>    
//                 <button class="delProduct">删除该商品</button>
//             </li>
//             `)
//         })
//     }
//     })
// }

function showCart(){
    $.ajax({
        url:'../php/interface/showlist.php',
        dataType:'json',
        success:function(res){
            $('ul').html("");
            $.each(res.data,function(index,item){
                $('ul').append(`
                <li>
                    <table>
                        <thead>
                            <td>商品图片</td>
                            <td>商品id</td>
                            <td>商品名</td>
                            <td>商品单价</td>
                            <td>商品数量</td>
                            <td>商品总价</td>
                            <td>结算</td>
                            <td>删除此商品</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="${item.product_img}" alt=""></img></td>
                                <td>${item.product_id}</td>
                                <td>${item.product_name}</td>
                                <td>${item.product_price}</td>
                                <td><button class="addNum">+</button><span>${item.product_num}</span><button class="cutNum">-</button></td>
                                <td>${item.product_price*item.product_num}</td>
                                <td>
                                    <input type="checkbox" class="checked">
                                </td>
                                <td>
                                    <input type="button" value="删除">
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </li>
                `)
            })
        }
    })
}
$('.showCart').click(function(){showCart()});


//删除商品
// $('ul').on('click','.delProduct',function(){
//     var id = $(this).parent().children().eq(0).html();
//     $.ajax({
//         url:"./interface/delwq.php",
//         data:{
//             id:id
//         },
//         dataType:'json',
//         success:function(res){
//             if(res.code){
//                 showCart()
//             }
//         }
//     })
    
// })
$('ul').on('click','.delProduct',function(){
    var id = $(this).parent().parent().children().eq(1).html();
    $.ajax({
        url:'../php/interface/delwq.php',
        dataType:'json',
        data:{
            id:id
        },
        success:function(res){
            if(res.code){
                showCart();
            }
        }
    })
})
//增加商品
$('ul').on('click','.addNum',function(){
    var id = $(this).parent().parent().children().eq(1).html();
    var $data = $(this);
    $.ajax({
        url:"../php/interface/updatewq.php",
        dataType:'json',
        data:{
            type:'add',
            id:id
        },
        success:function(res){
            if(res.code){
                $data.next().html(res.data.product_num);
                $data.parent().next().html(res.data.product_price*res.data.product_num)
            }
        }
    })
})
//减少商品
$('ul').on('click','.cutNum',function(){
    var id = $(this).parent().parent().children().eq(1).html();
    var $data = $(this);
    $.ajax({
        url:'../php/interface/updatewq.php',
        dataType:'json',
        data:{
            type:'',
            id:id
        },
        success:function(res){
            if(res.code){
                $data.prev().html(res.data.product_num);
                $data.parent().next().html(res.data.product_price*res.data.product_num)
            }
        }
    })
})

function Check(){
    $('ul').on('click',function(){
        // console.log($(this));
        // var id = $(this).parent().parent().children().eq(1).html();
        // showCart();
        var $num = 0;
        for(var i=0;i<$('ul').children().size();i++){
            console.log($('ul').children().eq(i).children().eq(0));
            var $bool = $('ul').children().eq(i).children().children().eq(1).children().children().eq(6).children().prop('checked');
            $num += parseInt(($('ul').children().eq(i).children().children().eq(1).children().children().eq(5).html()))*$bool;
            // console.log($('ul').children().eq(i).find('tbody').children().eq(5).children())
        }
        // var $money = $(this).parent().prev()

        $('.payment').children().eq(0).children().eq(0).html($num)
        console.log($num);
        // if($(this).prop('checked')){
        //     // for(var i=0;i<$('ul').children().size();i++){
        //     // var $num = 0;
        //     // $num += $('ul').children().eq(i).children().children().eq(1).children().children().eq(5).children().html();
        // // }




        // }else{

        // }
        console.log($(this).prop('checked'));
    })
}
Check();
