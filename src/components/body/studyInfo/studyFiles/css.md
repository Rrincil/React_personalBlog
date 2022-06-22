
# 一、css动画
## 1.1 css属性变化transition-property
- 父标签----transition-property: font-size（all全部属性）;（变化属性）transition-duration: 1s;（变化时长） 延迟时间(transition-delay)：在动作和变换开始之间等待多久，通常用秒来表示(比如,
.1s)。时间函数(transition-timing-function)：
```css
ease：逐渐慢下来，函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
linear：线性过度,函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
ease-in：由慢到快,函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
ease-out：由快到慢, 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
ease-in-out:由慢到快在到慢, 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
cubic-bezier：特定的cubic-bezier曲线。 (x1, y1, x2, y2)四个值特定于曲线上点P1和点P2。所有值需在[0, 1]区域内，否则无效。
```
- 子标签:hover上定义变化之后的属性----font-size: 30px;
```less
    .one{
      width: 100%;
      height: auto;
      /* // margin: 10px; */
      border-radius: 10px;
      background-color: none;
      box-shadow: 0px 0px 20px 10px  rgb(11, 61, 65) ;
      /* 在父标签定义动画方法及时间 */
      -webkit-transition: -webkit-transform 1s;
      transition: transform 1s;      
      transition-property: font-size;
      transition-duration: 1s;       
      a{
        text-decoration: none;
        color: crimson;
      }
      .webimg{
        width: 100%;
        height: auto;
      }
      &:hover{
        // width: 120%;
        // height: 120%;
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        /* 子标签中属性变化之后的值 */
        font-size: 30px;
      }      
    }
```
## 1.2 css transform的定义
- -moz-transition:height 2s; /* Firefox 4 */
- -webkit-transition:height 2s; /* Safari and Chrome */
- -o-transition:width 2s; /* Opera */
### 1.2.1 -webkit-transition和-webkit-transform 的含义
- -webkit-transition：CSS属性(none|all|属性)  持续时间  时间函数  延迟时间
- -webkit 是表示针对 safari 浏览器支持，-ms表示针对 IE 浏览器支持。-webkit-transform：translate(50px,100px)如下表示的是在 X` 轴向右移动 50px, Y 轴向下移动 100px
## 1.3 transfrom使用
- transform: rotate() | scale | skew | translate |matrix;
- 可多个函数使用用空格分隔 transfrom: rotate() scale
### （1）rotate(30deg) （旋转） 
- rotate() ：通过指定的角度参数对原元素指定一个2D rotation（2D 旋转）要先有transform-origin属性的定义。transform-origin定义的是旋转的基点，其中angle是指旋转角度，如果设置的值为正数表示顺时针旋转，如果设置的值为负数，则表示逆时针旋转。如：transform:rotate(30deg)：顺时针旋转30度
```css
div{
  transform:rotate(30deg)  /* //顺时针旋转30度 */
}
```
### （2）translate(X,Y) （移动）
#### translate(x,y) 指定x,y方向上平移
```css
div{
  -webkit-transform：translate(50px,100px);
  transform:translate(50px,100px) /*  //右50px 下100px */
}
```
#### translateX(50px) 指定X方向上平移50px(向右)
```less
div{
  -webkit-transform：translateX(50px);
  transform:translateX(50px)  /* //右50px */
}
```
#### translateY(50px) 指定Y方向上平移50px（向下）
```less
div{
  -webkit-transform：translateY(50px);
  transform:translate(50px)  /* //下100px */
}
```
### （3）scale(X,Y) （缩放）
- X表示水平方向缩放的倍数，Y表示垂直方向的缩放倍数，而Y是一个可选参数，如果没有设置Y值，则表示X，Y两个方向的缩放倍数是一样的。并以X为准。如：transform:scale(2,1.5):
```less
div{
  transform:scale(2)  /* X和Y方向2倍 */
  transform:scale(2,1.5) /*  X方向放大2被 Y方向1.5倍 */
}
```
#### scaleX(50px)
- 基点一样是在元素的中心位置transform:scaleX(2):
```less
div{
  transform:scaleX(2)  /* X方向2倍 */
}
```
#### scaleY(50px)
- 基点一样是在元素的中心位置transform:scaleY(2):
```less
div{
  transform:scaleY(2)  /* Y方向2倍 */
}
```
#### scale()案例
```less
.one{
  width: 100%;
  height: auto;
  /* 在父标签定义动画方法及时间 */
  -webkit-transition: -webkit-transform 1s;
  transition: transform 1s;      
  transition-property: font-size;
  transition-duration: 1s;     
  &:hover{
    -webkit-transform: scale(1.05); //适配safari
    -ms-transform: scale(1.05); //适配IE
    transform: scale(1.05);
    /* 子标签中属性变化之后的值 */
    font-size: 30px;
  }      
}
```
### （4）skew(X,Y) 扭曲
- X轴Y轴上的skew transformation（斜切变换）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则值为0.以元素中心为基点transform:skew(30deg,10deg)水平方向变换和垂直方向变换
```less
div{
  -webket-transfrom:skew(30deg,10deg)/* 水平方向变换和垂直方向变换 */
}
```
#### skewX(30deg) X轴方向
```less
div{
  -webket-transfrom:skewX(30deg)/* 水平方向变换和垂直方向变换 */
}
```
#### skewY(30deg) Y轴方向
```less
div{
  -webket-transfrom:skewY(30deg)/* 水平方向变换和垂直方向变换 */
}
```
# 二、css伪类选择器
- ---------:link （未访问的链接）
- ---------:visited （访问过的链接）
- ---------:hover（鼠标悬停）
- ---------:active（鼠标点击）
- ---------:focus （元素选中）
# 三、box-shadow的5个属性
- box-shadow: 0px 0px 20px 10px  rgb(11, 61, 65) insert（默认是out向外）;
- 5个属性分别是:(1)x方向（为正向右）,(2)y方向（为正向右）,(3)模糊（值为正，负数默认为0）,(4)模糊的值大小（为正）,(5)模糊方向（默认向外，insert向内）
# 四、div 文本垂直剧中
```less
div{
  line-height: 200px;
  vertical-align: middle;
}
```