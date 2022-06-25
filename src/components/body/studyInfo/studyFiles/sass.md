# 一、sass概念 
- Sass是一种动态样式语言，由Ruby开发者设计开发，语法：属于缩排语法 <a herf="https://www.sass.hk/">Sass官网</a>
##  css预处理器是什么？
- 概念：
```txt
Css 预处理器是一种专门的编程语言，进行web网页样式设计，然后再编译成正常的CSS文件，以供项目使用。
增加了编程式特性，无需考虑浏览器兼容问题。如（sass/scss , less ,stylus）
```
!Alt[Css预处理器原理](./img/yuanli.png)
## 1.2 Sass与Scss的关系
- Sass从第三代开始放弃了缩进风格，并且完全向下兼容普通的css代码，这一带Sass也称为Scss
# 二、使用Sass
## 2.1 基础知识
### （1）Sass配置输出的四种模式
- nested(嵌套格式), expanded（展开格式）, compact（紧凑格式）, compressed（压缩格式）
- compact（紧凑格式）:输出方式比起上面两种占用的空间更少，每条 CSS 规则只占一行，包含其下的所有属性。嵌套过的选择器在输出时没有空行，不嵌套的选择器会输出空白行作为分隔符
### （2）嵌套模式
```scss
#main p {
  color: #00ff00;
  width: 97%;
  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```
### (3) 父选择器 & 
- 可以用 & 代表嵌套规则外层的父选择器。
```scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
- & 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器
```scss
#main {
  color: black;
  &-sidebar { border: 1px solid; }
}
```
### （4）属性嵌套
- font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性
```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}

//css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```
- 命名空间也可以包含自己的属性值
```scss
.funky {
  font: 20px/24px {
    family: fantasy;
    weight: bold;
  }
}
```
### （5）占位符选择器 %foo (Placeholder Selectors: %foo)
- 当占位符选择器单独使用时（未通过 @extend 调用），不会编译到 CSS 文件中。
- 只有当被继承的时候才会使用
- %选择器名
```scss
%.one{
  width:20px;
}
//css不会编译

```
```scss
%.one{
  width:20px;
}
p{
  @extend:.one;
}
//css
p{
  width:20px;
}
```
### （6）@at-root 跳出嵌套
#### 1.常规跳出嵌套
- 使用@at-root
```scss
body{
  color:red;
  @at-root .container{
    font-size:20px;
  }
}

//css
body{
  color:red; 
}
.container{
  font-size:20px;
}
```
#### 2.@media或者@support跳出嵌套
- 需要使用@at-root(with:media rule(关键字));@at-root(with:support rule(关键字))
- 4种关键字:all（表示所有）;rule（常规css）;media（表示media）;support(表示support)
```scss
body{
  color:red;
  @media screen and(max-width:800px){
    @at-root(with:media rule){
      .container{
        color:red;
      }
    }
  }
}
//css
body{
  color:red;
}
.container{
  color:red;
}
```
## 2.2 sass变量操作与继承
### （1）变量 $ 
#### 1.数据类型
```txt
数字，1, 2, 13, 10px
字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
颜色，blue, #04a3f9, rgba(255,0,0,0.5)
布尔型，true, false
空值，null
数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)
```
- 使用 #{类名} () 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名：
```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}
@include firefox-message(".header"); //字符串变成无引号，方便引用

// css
body.firefox .header:before {
  content: "Hi, Firefox users!"; }
```
#### 1.局部变量和全局变量（!global）
#### 2.变量默认值（!default）
```scss
// 变量默认值（!default）
$x:20px;
$x:12px !default;----------加了default就会先执行默语句再执行$x:20px;
// 局部变量
#main {
  $width: 5em;
  width: $width;
}
// 全局变量变量
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```
#### 3.多值变量
- nth(变量,索引)
```scss
$paddings:10px 12px 20px 13px;
body{
  padding；$paddings;
  padding-left:nth($paddings,1); // 索引
} 

```
#### 4.map()类型变量
- map-get(map数组,map中的变量)
```scss
$maps:(color:red,boderColor:blue;)
body{
  padding；$paddings;
  // map-get()索引
  background-color:map-ge($maps,color); 
} 

```
#### 5.变量的特殊用法<span style="color:red;font-weight:800;">引用样式.#{$selector}{}</span>
- 变量放在<span style="color:red;font-weight:800;">属性或者选择器上</span>
- 引用样式.#{样式变量名}{}
```scss
$className:main;
.#{$className}{
  width:auto;
}
//css
.main{
  width:auto;
}

```
- 变量中用<span style="color:red;font-weight:800;">中横线，下划线相同</span>
```scss
$text_info:lightgreen;
$text-info:red;  //会影响$text_info；中横线，下划线相同
body{
  color:$text_info; //呈现红色，
}
```
#### 6.@media的嵌套使用
- @media 的 queries 允许互相嵌套使用，编译时，Sass 自动添加 and
```scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
//css
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px; } }
```
### (2)运算
- 支持数字的加减乘除、取整等运算 (+, -, *, /, %)，相等运算 == 或 !=如果必要会在不同单位间转换值。
- 关系运算 <, >, <=, >= 也可用于数字运算
- 使用运算符要隔开<span style="color:red;font-weight:800;">空格-空格（width:$x - $y）</span>
```scss
p {
  width: 1in + 8pt;
}
.one {
  font: 10px/8px;    
  $width: 1000px;
  width: $width/2;           
  width: round(1.5)/2;       
  height: (500px/2);          
  margin-left: 5px + 8px/2px; 
  // 如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
//css
p {
  width: 1.111in; }

p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px; 
  font: 12px/30px;}

```
##### 插值语句 #{}{}
- 通过 #{} 插值语句可以在选择器或属性名中使用变量
```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
//css
p.foo {
  border-color: blue; }
```
##### **在字符串中做运算
- '#{变量}'
```scss
$x:'哈哈';
body{
  content:'你好#{$X}'
}
//css
body{
  content:'你好哈哈'}
```
##### 变量定义 !default
- 可以在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。
- <span style="color:red;font-weight:800;">变量是 null 空值时将视为未被 !default 赋值。</span>
```scss
$content: "x";
$content: "y" !default;
$new_content: "z" !default;

#main {
  content: $content;
  new-content: $new_content;
}
//css
#main {
  content: "x"; //以及赋值 !default不会改变
  new-content: "z"; }
```
#### 1.字符串的连接+
- 引号字符串（位于 + 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 + 左侧）连接有引号字符串，运算结果则没有引号。--------<span style="color:red;font-weight:800;">以第一个字符串为标准</span>
```scss
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif"; 
}
//css
p:before {
  content: "Foo Bar";
  font-family: sans-serif; }
```
### （3）样式的导入
#### 1. 部分文件的导入
- 部分文件以<span style="color:red;font-weight:800;">下划线</span>开头,只做引入使用
- 引入方式@import "文件名（不带下划线）"
```scss
//_part1.sass
body{
  color:red;
}

//index.sass
@import "part1"

```
#### 2. 嵌套导入
```scss
```
#### 3. 原生css的导入
- 1. 被导入的文件名以css结尾
- 2. 被导入文件名是一个URL地址（例如：http://xxx/a.css）
- 3. 被导入文件名是CSS的url()值
```scss
```
### （4）继承
- 关键字 @extend 类名
```scss
.d1{
  color:red;
}
.container{
  @extend .d1;
  font-size:20px;
}
```
#### 1. 多个继承
- 关键字 @extend 类名1,类名2
```scss
.d1{
  color:red;
}
.d2{
  background:red;
}
.container{
  @extend .d1, .d2;
  font-size:20px;
}
```
#### 2. 链式继承
- 关键字 @extend 类名1,类名2
```scss
.one{
  color:red;
}
.two{
  @extend .one
  background:red;
}
.three{
  @extend .two;
  font-size:20px;
}
```
#### 3.继承的交叉合并(应避免写法)
- 没有在同一父级下，会产生交叉合并的编译结果
```scss
a span{
  color:red;
}
div .container{
  @extend span;
}
//css
a span, a div .container, div a .container{
  color:red;
}
```
#### 4.继承的作用域
- 无法在@media之外的选择器上继承，需要继承必须把样式写在指令中
```scss
.one{
  color:red;
}
@media screen and (max-width:200px){
  .one2{
    color:red;
  }
  .container{
    @extend .one2  //继承必须使用定在指令内部的样式
  }
}
```
### (5)Mixin
- @mixin 函数()
- 使用minxin函数：@include:函数()
```scss
@mixin cont($color:red,$font-size:20px){ //设置默认参数
  color:$color;
  font-size: $font-size
}
$x:10px;
body{
  @include cont(#fff,$x); //传参
  // @include cont($color:#fff,$font-size:10px); //传参

}
//css
body{
  color: #fff;
  font-size:10px;
}
```
#### 1.简单示例
- @mixin 可以用 = 表示，而 @include 可以用 + 表示，所以上面的例子可以写成
```scss
=cont($color:red,$font-size:20px){ //设置默认参数
  color:$color;
  font-size: $font-size
}
$x:10px;
body{
  +cont(#fff,$x); //传参
  // @include cont($color:#fff,$font-size:10px); //传参

}
//css
body{
  color: #fff;
  font-size:10px;
}
```
#### 2.传递多值参数（参数变量）
- 不能确定混合指令需要使用多少个参数，比如一个关于 box-shadow 的混合指令不能确定有多少个 'shadow' 会被用到。这时，可以使用参数变量 … 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理
```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
//css
.shadowed {
  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}
```
#### 3.传递内容
- 响应式布局中使用 @content
```scss
@mixin style-for-iphone{
  @media only screen and(min-device-width:320px )and(max-device-width:568px){
    @content;
  }
}
//使用
@include style-for-iphone{
  font-size:20px;
}
//css编译
@media only screen and(min-device-width:320px )and(max-device-width:568px){
  font-size:20px;
}
```
## 2.3函数指令
### (1)内置函数
- 颜色函数: rgb();rgba(颜色16进制,透明度);darken(颜色,加深的度);lighten(颜色,高亮度)
- 字符串:str-length("aaaaa")（判断字符串长度）;str-index()（查找字符索引位置<span style="color:red;font-weight:800;">注意：索引从1开始</span>）
- 百分比：percentage(1%$x);
- 选择数组元素nth(数组,index)
```scss
body{
  $x:rgb(255,0,200);
  color:$x;
  background-color:rgba($x,0.5);
  p{
    color:darken($X,2);
    background-color:lighten($X,0.4);
    z-index:str-length("aaaaa");
    z-index:str-index("abcd","c");
  }
}
```
### (2)自定义函数
- @function 函数名(){@return 返回值}
```scss
$x: 40px;
$y: 10px;

@function grid-width($n) {
  @return $n * $x + ($n - 1) * $y;
}

.one{ 
  width: grid-width(5);
}
//css
#one{
  width: 240px; }
```
### (3)函数的输出
- 控制台信息的输出：@debug '';@warn '';@error '';
```scss
@debug 'this is a debug message';
@warn 'this is a warn message';
@error 'this is a error message';
```
## 2.4条件式控制
### (1) if的使用
- @if的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码：
- @if 条件 {}@else if 条件{}@else{}
- @if （三元表达式的运用）-----------if(条件，条件为真，条件为假)
```scss
$x:2;
p{
  with:if($X>1;40px;50px);
}
h1{
  @if $X > 2{
    with:20px;
  }@else if $X == 2{
    with:10px;
  }@else{
    with:0px;
  }
}
```
### (2) for的使用
- @for 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。
- 1.@for $x from 1 to 5{} 不包含5
- 2.@for $x from 1 through 5{}  包含5
```scss
@for $x form 1 to 3{
  .one#{$x}{
    width:20px;
  }
}
@for $x form 1 through 3{
  .two#{$x}{
    width:20px;
  }
}
//css
//to不包含3
.one1{
  width:20px;
}
.one2{
  width:20px;
}
//throuh包含1，2，3
.two1{
  width:20px;
}
.two2{
  width:20px;
}
.two3{
  width:20px;
}
```
### (2) while的使用
- @while 设置步长
```scss
$x:6;
@while $x > 0{
  p#{$x}{
    width:20px*$X;
  }
  $x:$x - 3;
}
//css
p6{
  width:120px;
}
p3{
  width:60px;
}
```
### (3) each的使用
- 1.常规遍历@each $x in red,blue,pink{}
```scss
$x:4;
@each $y in red,blue,pink{
  div#{$x}{
    color:$y;
  }
  $x:$X+1;
}  
//css
div1{
  color:red;
}
div2{
  color:blue;
}
div3{
  color:pink;
}
```
- 2.遍历list----@each $key,$color in (one,red),(two,blue){}
```scss
@each $key,$color in (one,red),(two,blue){
  div-#{$key}{
    color:$color;
  }
}
//css
div-one{
  color:red;
}
div-two{
  color:blue;
}
```
- 3.遍历map-----@each $key,$value in (one,red,two,blue){}
```scss
@each $key,$value in (one:red,two:blue){}
  div-#{$key}{
    color:$value;
  }
}  
//css
div-one{
  color:red;
}
div-two{
  color:blue;
}
```