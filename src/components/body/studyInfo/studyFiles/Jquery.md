#Jquery
>### 一.*版本*
1.  支持老版浏览器ie678
2.  不支持老版浏览器 
3.  不支持老版浏览器   更新中
>### 二.*用法*
```javascript
$(docoment).read(function(){

});

$(function(){

});
```
>### 三.*选择器*
##### 1.基本选择器 
- id：$('#d1')
- 类：$('.d1')
- 标签名: $('li')
##### 并集与交集的使用
使用逗号
```javascript
$('.d1,.d2') //并集的使用,使用逗号
$('li.d1')//交集使用点,li下面的d1
```
##### 2.层级选择器
##### 子代与后代选择的使用
```javascript
$('li>d1') //自带选择用>符号，只选择子代
$('li d1')//后代选择用空格，包括子代和孙子代的所有后代等于$('li').find('d1')
```
- 跟css用法一样

##### 3.过滤选择器 ***
- 用于带冒号的选手 :
##### :eq(index) :odd  :even 使用
```javascript
$('li:eq(2)') //在li元素中选择索引号为2的元素，index从0开始
$('li:odd')//在li元素中选择索引号为奇数的元素
$('li:even')//在li元素中选择索引号为偶数的元素
```
- 跟css用法一样
  
##### 4.筛选选择器 ***
- 参照： ![Alt](img/xuanze.png#pic_center)
- prevAll()找到之前所有的兄弟
- nextAll()找到之后所有的兄弟
  ##### (1) 鼠标移入事件 ***
- mouseover 在鼠标选取该元素及其子元素时触发事件
- mouseenter 在鼠标选取该元素时触发事件
   ##### (2) 鼠标移出事件 ***
- mouseout 在鼠标选取该元素及其子元素时触发事件
- mouseleave 在鼠标选取该元素时触发事件
  >一般有鼠标移入移出事件用mouseenter和mouseleave即只在该元素上触发事件不在其子代上触发
   ##### (3) Jquery特性： 隐式迭代，链式编程
   - 链式编程的特点： 对于一个Jquery方法返回的是Jquery对象所以可以继续点出方法-
   - ![Alt](img/diedai.png#pic_center)
   - 通过筛选选择器孩子兄弟父母来操作DOM节点 
  ```javascript
  $('this').index()//索引出兄弟标签的序号
  $('#center>li:eq('+index+')')//字符串的拼接可以获取index的值
  $('#enter>li').eq(index)//直接点方法也可以获取index的值
  ```
  ##### (4) 添加类，移出类 ***
  ```javascript
  $('li').addclass()//添加类
  $('li').removeclass('fontsize: 30px')  //移出类
  $('li').hasclass()//判断类：判断一个元素有没有某个类，如果有就返回true反之则为false
  $('li').toggleclass('fontsize')//如果有这个类就删除这个类，反之则添加这个类
  ```
> ### 四.*动画效果*
- 1.显示show(2000,fun()) 隐藏hide(2000,fun()) 切换toggle(2000)
  ```javascript
  $('li').show(2000,function(){
    altert("动画执行完毕")//动画执行完后的回调函数
  })
  $('li').toggle(2000)//切换：如果动画显示点击切换则隐藏，反之则显示
  ```
- 2.滑入slidedown() 滑出slideup() 切换slideToggle()
  ```javascript
  $('li').sllidedown(2000,function(){
    altert("动画执行完毕")//动画执行完后的回调函数
  })
  $('li').sslidown()//默认$('li').sslidown('normal')400毫秒
  ```
- 3.淡入fadein() 淡出fadeout() 切换fadeToggle() 淡入到哪里fadeto(0.3)  用法相同
- 4.自定义动画animate()****
  ```javascript
  有四个参数：
  第1个参数：必选属性,对象 代表需要做动画的属性
  第2个参数：非必选，代表动画执行时长 2000毫秒
  第3个参数：easing非必选，linear(匀速) swing(缓动) 默认为缓动
  第4个参数：动画执行后的回调函数
  $('li').animate({
     left:800,
     opaticy:0.5
  },2000,'linear',function(){
    altert('动画执行完毕')
    //循环迭代继续执行动画
        $('li').animate({
           left:8=400,
          opaticy:0.2
         },2000,'linear',function(){
            altert('动画又执行完毕')
    
       })
  })
  ```
- 5.动画队列与终止动画stop()
  ```javascript
  有两个参数：
  第1个参数：是否清除队列
  第2个参数：是否跳转到最终效果
  $('li').stop(true,false)
  $('li').stop()//默认$('li').stop(false,false)
  ```
> ### 五.*操纵节点*
   原生js中创建节点：document.write(); innerhtml();
##### 1. 添加节点： html();创建$()与追加append()
  ```javascript
  (1)html()
  $('li').html()//默认获取到标签中所有内容
  $('li').html('我是设置的内容')//设置的内容会把原来里面的元素覆盖，能解析标签
  (2)append()添加新建元素到末尾
  var nihao=$('<p>我是创建的内容</p>')//$()只会创建在内存中不会显示
  //需要追加
  $('li').append(nihao)//追加到li中显示出来
  (3)append()添加已有元素到末尾
  var cunzai=$('ul>li')
  $('ul').append(cunzai)//效果类似剪切ul中存在的的li元素到末尾位置
  (4)prepend()添加新建元素到首行/添加已有元素到首行/
  (5)before()作为兄弟元素查到前面/
  (6)before()作为兄弟元素查到后面/
  (7)appendTo()把子元素添加到父元素的末尾
   子元素.appendTo(父元素)
  **+select选中的选项 $('li:select')
  ```
##### 2.删除(清空)节点 empty()，remove(),removechild()
- empty()：清空元素及事件
- remove()： 可以移出自己保留自身标签
##### 3.克隆节点：clone()，修改id：attr('修改前','修改后')
- clone()克隆的内容只存在与内存中，如果要显示需要追加节点append()
- clone()方法的参数有true和false不管是true还是false都会克隆到后代节点
- clone(true)会把事件事件一起克隆过去，如果是false就不会克隆事件，clone()默认为false
##### 4.设置,获取,表单的值 val()
- 原生js是通过value属性来获取或者设置表单元素的值
- Jquery是通过val()
- 通过给参数来设置值$('li').val('我是是设置的值')
> ### 六.*操作属性*
##### 1. 设置属性： attr()
>单个属性
- 有两个参数 attr('属性名','属性内容')
- 能够自定义属性或者添加属性
>多个属性：利用对象
```javasrcipt
$('li').attr({
  src:'img/1.jpg',
  aaa:"我是添加的属性内容"

})
```
##### 1. 获取属性： attr('属性名')** (checked selected,disable这类boolean类型不能被attr()获取只能用prop()方法)
- attr('属性名')返回值就是属性内容，如果没有该属性则为undefined
- 可以获取单个或者多个属性
##### 2.移除属性： removeAttr('属性名')
- 移除多属性： removeAttr('属性名1 属性名2 属性名3')
- 阻止a标签的跳转 return false
##### 3.prop()方法获取boolean类型的值
- 表格全选反选
> ### 七.*尺寸和位置操作*
##### 1.width(),height()方法获取宽高的值
- 设置或者获取高宽，不包括内边距，边框和外边距
- 获取网页可视宽高
```javasrcipt
$(window).width()
$(window).height()
```
> ##### 1.2.innerwidth(),innerheight()方法获取宽高的值inner(包括内边距pading的值)
> ##### 1.3.outerwidth(),outerheight()方法获取宽高的值inner(包括内边距和边框值)
> ##### 1.4.outerwidth(true),outerheight(true)方法获取宽高的值inner(包括内边距，边框和外边距值)

##### 2.offset()和position()
- offset()方法获取元素距离document的位置，position()方法获取元素距离有定位的父元素(offsetParent)的位置
- 父亲元素绝对定位，儿子元素相对定位
```javasrcipt
//获取元素距离document的位置，返回对象：(left:100,top:100)
$('selector').offset();
//获取元素距离有定位的父元素(offsetParent)的位置
$('selector').position();
```
##### 2.srcollLeft()和srcolltop()
- 设置或者获取垂直滚动条的位置
```javasrcipt
//获取页面被卷曲的高度
$(window).srcolltop()
//获取页面被卷曲的宽度
$(window).srcollLeft()
//设置页面被卷曲的高度
$(window).srcolltop(1000)
//设置页面被卷曲的宽度
$(window).srcollLeft(1000)
```
> ### 八.*Jquery事件机制*
- 增强了了事件处理能力
```javasrcipt
//可以执行多次
$('li').click(function(){
  altert("执行了一次")
})
$('li').click(function(){
  altert("我又执行了一次")
})
```
##### Jquery1.7之后，用on统一事件处理方法
- 1.on简单注册事件
```javasrcipt
//不支持动态注册
$('li').on('click',finction(){
  alert('我是单击事件')
})
```
- 2.on委托注册事件(委托父亲)
```javasrcipt
//支持动态注册
$('body').on('click','li'，finction(){
  alert('我是单击事件')
})
//在创建模块后可以同时注册事件
```
##### 用on注册事件用off解绑事件
- off()
```javasrcipt
//off()不给参数就是解绑所有事件
//off(’‘click)给参数就是解绑指定的事件
例子：
<button class='ul1'>绑定事件</button>
<button class='ul2'>解绑事件</button>
<li></li>
<li></li>

//绑定事件

$('.ul1').on('click',funnction(){
  //给li绑定多个事件
    $('li:eq(0)').on({
      'click':altert('我是点击事件')
      'mouseenter':altert('我是鼠标移入事件')
    })
})

//绑定事件
$('.ul2').on('click',funnction(){
  //解绑绑定所有事件
   $('li:eq(1)').off();

  //解绑绑定多个指定事件
    $('li:eq(1)').off('click','mouseenter');
})




```
##### 用tirgger()事件触发
- 1.条件方式触发事件
```javasrcipt
//点击事件
$('.ul1').on('click',funnction(){
  alert('我是点击事件');
})
 var i=0;
//触发事件
$('.ul2').on('click',funnction(){

      i++;
      //条件满足触发事件
      if(i==3)
      {
           //$('.ul1').click();
           $('.ul1').tirgger('click');
      }
})

```
- 2.触发自定义事件
```javasrcipt
//自定义wy事件
$('.ul1').on('wy',funnction(){
  alert('我是wy自定事件');
})
//触发事件
$('.ul2').on('click',funnction(){
  //confirm('')弹出询问确定窗口
      var a=confirm('请问是否要触发wy自定义事件？');
      if(a){
           //触发wy事件
           $('.ul1').tirgger('wy');
      }
})

```
> ### 九.*Jquery事件对象*
- 注册一个事件，系统就会生成一个对象来记录事件触发时按住某个键或者一些坐标信息
- Jquery中用事件参数e来获取,是对原生js事件对象的封装，处理好了兼容性
```javasrcipt
//注册事件
$('.ul1').on('wy',funnction(event){
  alert(evnt.pagex)
})


```

- 2.事件对象中常用的三个坐标
```javasrcipt
screenx screeny//屏幕的坐标(x,y)
pagex  pagey    //页面的坐标(x,y)
clientx clienty//可视区的坐标(x,y)
```

- 3.stopPropagation()： 阻止事件冒泡(事件冒泡：其父亲事件也会触发)
```javasrcipt
 <div class='ul2'>
 <button class='ul1'></button>
 </div>
//注册父事件
$('.ul2').on('wy',funnction(){
  alert('我是div的单击事件');
})
//阻止事件冒泡
$('.ul1').on('wy',funnction(e){
  alert('我是按钮触发事件');
  //阻止事件冒泡
  e.stopPropagation();  
})

```
- 4.preprentDefault()： 阻止浏览器默认行为
 ```javasrcipt
 <div class='ul2'>
 <a src="baidu.com">
 <button class='ul1'></button>
 </div>
//注册父事件
$('.ul3').on('wy',funnction(){
  alert('我是div的单击事件');
})
    //阻止事件冒泡
$('.ul1').on('wy',funnction(e){
  alert('我是按钮触发事件');
  // 阻止浏览器默认行为(a标签不会跳转)
  e.preprentDefault();  
   //即阻止浏览器默认行为又能阻止事件冒泡
   return false;

})
```
- 4.return false： 即阻止浏览器默认行为又能阻止事件冒泡
- 5.e.keycode()返回按键值

> ### 十.*Jquery链式编程*
- 如果元素调用一个方法，这个方法有返回值，且返回的是一个Jquery对象，那就可以继续点出方法
- end()方法是对象回到上一个状态
- each()遍历
```javasrcipt
 $('ul').each(function(index,element){
        //index:每一个li的索引号
        // element:dom对象
        $(element).css('opacity':index/10)
 })
})
```
> ### 十一.*多库共存*
- jquery=window.jquery=window.$
- 查看Jquery版本如图
![ALlt](img/banben.png)
- 后引入的Jquery文件会覆盖前面引入的
##### 多库共存方法 noConflict()
$.noConflict()//把$的控制权释放掉
var banben1=$.fn.jquery//查看版本
var banben2=jQuery.fn.jquery//查看版本

> ### 十二.*插件*（插件：用来做扩展功能的）
##### animate()不能改变背景色，要改变则与需要使用插件
- 需要引入颜色插件jquery.color.js
- jquery插件库 jquery22.com
##### 省市联动插件 jquery.distpicker.js
##### UI插件 jQueryui
- UI：user interface 用户界面
> ### 十三.*封装插件*
- ![Alt](img/fengzhuang.png)
