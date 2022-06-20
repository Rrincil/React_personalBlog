# React全家桶
# 一.React基础 入门
## （1）.初识React
- 用于构建用户界面的js库
- 1.发送请求获取数据
- 2.处理数据(过滤，整理格式等)
- 3.<h3 style="color:red">操作Dom呈现页面</h3>
- React 英文官网 https://reactjs.org
- React 中文官网 https://reactdocschina.org
### 1.是一个将数据渲染为HTML的开源js库
### 2.由Facebook开发且开源
### 3.为什么学React
- 原生js频繁操作Dom,浏览器会进行大量的重绘重排
- 原生js没有组件化编码方案，代码复用率低
### 4.React的特点
- 采用组件化模式，声明式编码，提高开发效率及组件复用率
- 在React Native中可以使用Reavt语法进行移动端开发
- React使用了虚拟DOM+优秀Diffing算法，尽量减少与真实DOM的交互
### 5.需要用到的js基础
- 判断this的指向，class类，ES6语法规范
- npm包管理器，原型，原型链数组的常用方法
### 6.相关js库（有引入顺序）
- 1.react.developmentjs:React核心库
- 2.react-dom.js:提供操作DOMdereact扩展库
- 3.babel.min.js:解析JSX语法代码转为JS代码的库
- 4.prop-types.js
## （2）.React JSX
### 2.1.认识JSX
#### 2.1.1.JSX 简介
- 全称JavaScript XML
##### 1关于虚拟DOM
- (*)<span style="color:red">本质是object类型对象(一般对象)</span>
- 虚拟DOM属性比真实DOM属性少。因为虚拟DOM是React内部在用，所以无需真实DOM上那么多属性。
- 虚拟DOM最终会被React转换为真实DOM呈现在页面上
##### 2创建虚拟DOM(声明变量)
```babel
const element = <h1>Hello, world!</h1>;
```
- 这个标签语法既不是字符串也不是 HTML。
- 它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。
- JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。
#### 2.1.2在 JSX 中嵌入表达式
- <p style="color:red">注意语句与表达式的区别</p>
```babel
注意语句与表达式的区别
      一.表达式：一个表达式会产生一个值，可以放在任何需要值的地方
      用const = 表达式 都可以接住
         1.a
         2.a+b
         3.one(3)
         4.arr.map()
         5.function one(){}
      一.语句:没有值，控制代码走向
         1.for(){}
         2.if(){}
         3.switch(){case:xxx}
```
- <p style="color:red">(1).JSX的根标签只能有一个</p>
- <p style="color:red">(2).JSX中标签首字母小写的标签会转化为html标签同名元素，首字母大写的标签被认为是React组件</p>
- (3).声明了一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在<span style="color:red">大括号</span>中
```babel
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
//引入JSX要用大括号
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
- <p style="color:red">(4).样式的类名指定不用class要用className</p>
```babel
<head>
  <style>
    .d1{
      background-color:  green;
    }
  </style>
</head>
<body>
<script type="text/babel">
  // 1.创建虚拟DOM
    //1.2在JSX中嵌入表达式
      const name = 'Rrincil'
      const element = <p>hello {name}</p>
      //样式的类名指定不用class要用className
      const VDOM = <div className='d1'>{element}</div>
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
</script>
</body>
```
- <p style="color:red">(5).JSX内联样式的使用:style={{color:'red'}}</p>
- <p style="color:red">(6).连级用小驼峰形式：font-size写成fontSize</p>
```babel
<body>
<script type="text/babel">
  // 1.创建虚拟DOM
    //1.2在JSX中嵌入表达式
      const name = 'Rrincil'
      //JSX内联样式的使用
      const element = <p style={{color:'red',fontSize:'30px'}}>hello {name}</p>
      //样式的类名指定不用class要用className
      const VDOM = <div className='d1'>{element}</div>
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
</script>
</body>
```
- 在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。
```babel
//调用 JavaScript 函数 formatName(user) 的结果，并将结果嵌入到 <h1> 元素中。
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
#### 2.1.3.JSX 也是一个表达式
- 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
- 也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
```babel
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
#### 2.1.4.JSX 特定属性
- 你可以通过使用引号，来将属性值指定为字符串字面量：
```babel
const element = <div tabIndex="0"></div>;
```
- <h6 style="color:red">也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：</h6>
```babel
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = <img src={user.avatarUrl}></img>;
```
<h3 style="color:red">注意：

因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。onclick写成onClick, onblur写成onBlur</h3>
#### 2.1.5.JSX 标签里能够包含很多子元素:
```babel
const element = <h1>Hello, world!</h1>;
```
## （3）.JSX练习
### 3.1.Hello world
```javascript
<body>
  <div id="one"></div>
   <!-- 引入在线CDN注意引入顺序 -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
  <script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script> 
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建虚拟DOM
  const VDOM = <h1>Hello React</h1>  // 不要写引号，标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展
  // 2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('one'))
  </script>
</body>
```
### 3.2.遍历数组
```babel
<body>
  <div id="one"></div>
  <!-- 引入在线CDN注意引入顺序 -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <!-- 将jsx转成js -->
  <script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script>
  <script type="text/babel"> //type要写babel

    const a = ['小红', '小黄', '小绿']
    // 1.创建虚拟DOM
    const VDOM = (
      <div>
        <h1>一年级学生</h1>,
        <ul>
          // 在大括号中可以加表达式
          {
            a.map((item, index) => {
              return <li key='idex'>{item}</li> //每个children标签中必须有一个唯一的key值
            })
          }
        </ul>
      </div>
    );
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('one'))
  </script>
</body>
```
# 二.React 面向组件编程
- 组件：用来实现局部功能效果的代码和资源的集合
- 组件的作用:复用代码，简化项目编码，提高运行效率
## （1）.组件类别
### 1，函数式组件
- 函数式组件，适用于简单组件（(无state)
- 用函数形式定义的组件
- 函数名即组件名首字母必须大写
```babel
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建函数式组件
    function demo(user){
      return <h1>我是函数式组件，适用于简单组件
        <h3>我是{user.name}我的年龄是{user.age}</h3>
        </h1>
    }
    function Demo(user){
      return <h1>我是函数式组件
        // 此处this是undefined,因为babel编译后开启了严格模式，this不再指向window
        console.log(this); 
        <h3>我是{user.name}我的年龄是{user.age}</h3>
        </h1>
    }    
    const user = {
      name:'小红',
      age:18
    }
    const VDOM = (
      <h1>{demo(user)}</h1>
    )
  // 2.渲染虚拟DOM到页面
  // ReactDOM.render(VDOM,document.getElementById('one'))
  ReactDOM.render(<Demo/>,document.getElementById('one'))
  //执行了ReactDOM.render(<Demo/>....之后发生了
     //  1.React解析组件标签，找到了Dome组件
      // 2.发现组件是函数定义的，随后调用该函数，
       //将返回的虚拟DPM转换为真实DOM，随后呈现在页面中。
  </script>
```
### 2.类式组件
- 类式组件，适用于复杂组件（(有state)
#### 创建类式组件：
- 1.必须继承内置React.Component
- 2.可以不用写构造器，但必须写render()方法
- 3.render()方法中必须有return返回值
```babel
  <script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
      /*
        1.必须继承内置React.Component
        2.可以不用写构造器，但必须写render()方法
        3.render()方法中必须有return返回值
      */
      class MyComponent extends React.Component{
        //render()方法发放在了---------类(MyComponent)的原型对象上，供实例使用

        render(){
          console.log(this)//render中的this-------MyComponent组件实例对象
          return <h1>
            我是类式组件，适用于复杂组件
          </h1>
        }
      }
  
  // 2.渲染组件到页面
  // ReactDOM.render(VDOM,document.getElementById('one'))
  ReactDOM.render(<MyComponent/>,document.getElementById('one'))
  /*执行了ReactDOM.render(<MyComponent/>....之后发生了
      1.React解析组件标签，找到了MyComponent组件
      2.发现组件是类定义的，随后创建了MyComponent的实例对象，并通过该实例调用到原型上的render()方法
      3.将render返回的虚拟DOM转为真实DOM，渲染在页面中
  */

  </script>
```
## （2）React实例的三大核心属性

### 2.1.state
- state是组件对象最重要的属性，值是对象（可以包含多个key-value组合）
- 组件被称为状态机，通过更新state来更新对应的页面显示（重新渲染组件）
- this问题指向问题（自定义方法中的this为undefined）：
    - 解决办法1.this.newdian = this.dian.bind(this)
    - 解决办法2.所有的自定义方法-----都要用赋值语句+箭头函数的方式书写
#### 2.1.1.对state的理解
```babel
<script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
  class Weather extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        ishot:true
      }
      //把原型对象上的dian方法重新定义成新的方法newdian挂载在实例对象上
      this.newdian = this.dian.bind(this)    
    }

    render() {
      //读取状态
      // console.log(this);
      return <h1 onClick={this.newdain}>
        今天天气很{this.state.ishot ? '炎热' : '凉爽'}
      </h1>
    }
    //dian()方法发放在了---------类(Weather)的原型对象上，供实例使用
    //由于dian作为onClick的回调，所以不是通过实例调用的，是直接调用的
    //类中的方法默认开启了严格模式，所以dian中的this为undefined
    dian() {
      this.state.ishot=false
      console.log(this);
      console.log('dian');
    }

  }
  //2.渲染组件到页面
  //const w1 = new Weather()
  //w1.render()
  ReactDOM.render(<Weather />, document.getElementById('one'))
  

</script>
```
#### 2.1.2.对state按钮onClick
- 类中的方法默认开启了严格模式，所以dian中的this为undefined(dian中的this不再指向window)
- 要想使用在dian方法中使用this必须在构造器中：重新定义成新的方法newdian挂载在实例对象代替原型对象上的dian方法
- dian方法中：严重注意：状态(state)不可直接更改,要借助一个内置的API(this.setState())去更改
```babel
<script type="text/babel"> //type要写babel
  // Your ES6 code
  // 1.创建类式组件
  class Weather extends React.Component {
    constructor(props) {
      super(props) //super()操作放在this操作之前 
      this.state = {
        ishot:true
      }
      //把原型对象上的dian方法重新定义成新的方法newdian挂载在实例对象上
      this.newdian = this.dian.bind(this)    
    }
    //render()调用1+n次------1是初始化那次，n是状态更新的次数
    render() {
      //读取状态
      // console.log(this);
      return <h1 onClick={this.newdian}>
        今天天气很{this.state.ishot ? '炎热' : '凉爽'}
      </h1>
    }
    //dian()方法发放在了---------类(Weather)的原型对象上，供实例使用
    //由于dian作为onClick的回调，所以不是通过实例调用的，是直接调用的
    //类中的方法默认开启了严格模式，所以dian中的this为undefined
    dian() {
      //严重注意：状态(state)不可直接更改,要借助一个内置的API(setState)去更改
      // this.state.ishot=false-----直接更改
      const ishot = this.state.ishot
      this.setState({ishot:!ishot})
      console.log(this);
      console.log('dian');
    }

  }
  //2.渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('one'))

</script>
```
#### 2.1.3.this.setState()进行状态更新（更新是同名替换，不是全部替换）
- 状态(state)不可直接更改，要借助一个内置的API(setState)去更改
- this.setState({ishot:!ishot})
```javascript
dian() {
  //严重注意：状态(state)不可直接更改,要借助一个内置的API(setState)去更改
  // this.state.ishot=false-----直接更改
  const ishot = this.state.ishot
  this.setState({ishot:!ishot})
  console.log(this);
  console.log('dian');
}

```
#### 2.1.4.state的简写
- 去掉构造器在类中直接使用赋值语句
- 所有的自定义方法-----都要用赋值语句+箭头函数的方式书写
```javascript
class Weather extends React.Component {
  //直接赋值语句--放在创建的实例上
  state = {
    ishot:true
  }          
  render() {
    return <h1 onClick={this.dian}>
      今天天气很{this.state.ishot ? '炎热' : '凉爽'}
    </h1>
  }
  //直接赋值语句--放在创建的实例上+箭头函数-----箭头函数中的this会找外层函数的this（Weathear的实例对象）作为自身this
  dian = ()=>{
    const ishot = this.state.ishot
    this.setState({ishot:!ishot})
  }

}
//2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById('one'))
```
### 2.2.props
- 传递标签属性
- props是只读属性
#### 2.2.1.props的基本使用
- ...展开运算符---仅适用于标签属性的使用{}----{...a}
```javascript
  <!-- 模板 -->
  <div id="one"></div>
  <script type="text/babel"> //type要写babel
    // 创建类式组件
    class Person extends React.Component{

      render(){
        const {name,sex,age} = this.props
        //this.props.age = 10 不能修改props是只读属性
        //读取状态
        return (
          <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age+1}</li> //运算符 
          </ul>
        )
      }

    }const a = {name:'小红',sex:'女',age:18}
    //渲染组件到页面
    ReactDOM.render(<Person name='小明' sex='男' age={18} />,document.getElementById('one'))
    ReactDOM.render(<Person name={a.name} sex={a.sex} age={a.age} />,document.getElementById('one'))
    //...展开运算符---仅适用于标签属性的使用{}
    ReactDOM.render(<Person {...a} />,document.getElementById('one'))
  </script>
```
#### 2.2.2.对props限制propType
- 内置属性PropTypes限制:.string.isRequired,.func
- Person.defaultProps ----设置默认值
- 引入PropTypes库使用
```javascript
  <!-- 模板 -->
  <div id="one"></div>
  <div id="one2"></div>
  <div id="one3"></div>
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Person extends React.Component{

    render(){
      const {name,sex,age} = this.props
      //读取状态
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age+1}</li>
        </ul>
      )
    }

  }
  
  Person.propTypes = {
    //内置属性PropTypes
    name:PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number,
    speak:PropTypes.func
  }
  Person.defaultProps = {
    sex:'男',
    age:18
  }
  const a = {name:'小红',sex:'女',age:18}
  //渲染组件到页面
  ReactDOM.render(<Person name='小明' age={18} speak={dian} />,document.getElementById('one'))
  ReactDOM.render(<Person name={a.name} sex={a.sex} age={a.age} />,document.getElementById('one2'))
  //...展开运算符---仅适用于标签属性的使用{}
  ReactDOM.render(<Person {...a} />,document.getElementById('one3'))
  
  function dian(){
    console.log(this.name+说话了);
  }
</script>
```
#### 2.2.3.props简写方式
- 给类加属性---static 属性
```javascript
  <script type="text/babel"> //type要写babel
    // 创建类式组件
    class Person extends React.Component{
      static propTypes = {
      //内置属性PropTypes
      name:PropTypes.string.isRequired,
      sex:PropTypes.string,
      age:PropTypes.number,
      speak:PropTypes.func
      }
      static defaultProps = {
        sex:'男',
        age:18
      }
      render(){
        const {name,sex,age} = this.props
        //读取状态
        return (
          <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age+1}</li>
          </ul>
        )
      }

    }
    
    const a = {name:'小红',sex:'女',age:18}
    //渲染组件到页面
    ReactDOM.render(<Person name='小明' age={18} speak={dian} />,document.getElementById('one'))
    ReactDOM.render(<Person name={a.name} sex={a.sex} age={a.age} />,document.getElementById('one2'))
    //...展开运算符---仅适用于标签属性的使用{}
    ReactDOM.render(<Person {...a} />,document.getElementById('one3'))
    
    function dian(){
      console.log(this.name+说话了);
    }
  </script>
```
#### 2.2.4.构造器中使用props
- 构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Person extends React.Component{

    constructor(props){
      //构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
      super(props)
      console.log(this.props);
    }

    static propTypes = {
    //内置属性PropTypes
    name:PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number,
    speak:PropTypes.func
    }
    static defaultProps = {
      sex:'男',
      age:18
    }
    render(){
      const {name,sex,age} = this.props
      //读取状态
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age+1}</li>
        </ul>
      )
    }

  }
  //渲染组件到页面
  ReactDOM.render(<Person name='小明' />,document.getElementById('one'))
```
#### 2.2.5.函数式组件中使用props
- 传递参数props
- 解构props对象
```javascipt
<script type="text/babel"> //type要写babel
  // 创建函数式组件
  function Person(props){
    const {name,sex,age} = props
    console.log(props);
    return (
      <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age}</li>
    </ul>        
    )
  }
  Person.propTypes = {
    //内置属性PropTypes
    name:PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number,
    speak:PropTypes.func
  }
  Person.defaultProps = {
    sex:'男',
    age:18
  }    
  //渲染组件到页面
  ReactDOM.render(<Person name='小明' sex='男' age={19}/>,document.getElementById('one'))
</script>
```
### 2.3.refs与事件处理
- 组件内的标签可以定义ref属性来标识自己
#### 2.3.1.字符串形式的ref（存在效率问题不推荐使用 ）
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Demo extends React.Component{
    showdata = ()=>{
      console.log(this.refs.input1);
      const {input1} = this.refs
      alert(input1.value)
    }
    showdata2 = ()=>{
      console.log(this.refs.input2);
      const {input2} = this.refs
      alert(input2.value)
    }      
    render(){
      const  {data} = this.props
      //读取状态
      return (
        <div>
          <input type='text' ref='input1' placeholder='点击按钮提示'/>&nbsp;
          <button onClick={this.showdata}>提交</button>&nbsp;
          <input ref={c=>this.input2 = c}  onBlur={this.showdata2} type='text' placeholder='失去焦点提示'/>&nbsp;
        </div>
      )
    }
  }
  //渲染组件到页面
  ReactDOM.render(<Demo data='你好'/>,document.getElementById('one'))
</script>
```
#### 2.3.2.回调函数形式的ref
##### 2.3.2.1.内联式函数写法（）
- 内联式函数重新渲染页面时会调用两次ref----第二次更新之前，都做了一个初始化
- ref={current =>this.input1 = current}
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Demo extends React.Component{
    showdata = ()=>{
      console.log(this.input1);
      const {input1} = this
      alert(input1.value)
    }
    showdata2 = ()=>{
      console.log(this.input2);
      const {input2} = this
      alert(input2.value)
    }      
    render(){
      const  {data} = this.props
      //读取状态
      return (
        <div>
          <input type='text' ref={currentNode =>this.input1 = currentNode} placeholder='点击按钮提示'/>&nbsp;
          <button onClick={this.showdata}>提交</button>&nbsp;
          <input ref={c =>this.input2 = c}  onBlur={this.showdata2} type='text' placeholder='失去焦点提示'/>&nbsp;
        </div>
      )
    }
  }

  //渲染组件到页面
  ReactDOM.render(<Demo data='你好'/>,document.getElementById('one'))
</script>
```
##### 2.3.2.2.定义成class的绑定形式（推荐）
- 把函数放在实例自身-------ref={this.saveinput}
- 重新渲染页面不会多次调用ref
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Demo extends React.Component{
    showdata = ()=>{
      console.log(this.input1);
      const {input1} = this
      alert(input1.value)
    }
    showdata2 = ()=>{
      console.log(this.input2);
      const {input2} = this
      alert(input2.value)
    }      
    saveinput = (c)=>{
      this.input1 = c
    }
    saveinput2 = (c)=>{
      this.input2 = c
    }      
    render(){
      const  {data} = this.props
      //读取状态
      return (
        <div>
          <input type='text' ref={this.saveinput} placeholder='点击按钮提示'/>&nbsp;
          <button onClick={this.showdata}>提交</button>&nbsp;
          <input ref={this.saveinput2}  onBlur={this.showdata2} type='text' placeholder='失去焦点提示'/>&nbsp;
        </div>
      )
    }
  }

  //渲染组件到页面
  ReactDOM.render(<Demo data='你好'/>,document.getElementById('one'))
</script>
```
#### 2.3.3.Refs使用 React.createRef() 创建
- React.createRef()调用后可以返回一个容器，该容器可以存储被ref所标识的节点
- 该容器被一个节点所专用
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Demo extends React.Component{
    myRef = React.createRef();  
    myRef2 = React.createRef();  
    //展示输入框数据
    showdata = ()=>{
      alert(this.myRef.value)
    }
    showdata2 = ()=>{
      alert(this.myRef2.value)
    }      
    render(){
      const  {data} = this.props
      //读取状态
      return (
        <div>
          <input type='text' ref={this.myRef} placeholder='点击按钮提示'/>&nbsp
          <button onClick={this.showdata}>提交</button>&nbsp
          <input ref={this.myRef2}  onBlur={this.showdata2} type='text' placeholder='失去焦点提示'/>
        </div>
      )
    }
  }

  //渲染组件到页面
  ReactDOM.render(<Demo data='你好'/>,document.getElementById('one'))
</script>
```
## （3）React中的事件处理
### 3.1事件处理
- 勿过度使用ref----- alert(event.target.value)
- (1).通过onXxx属性指定事件处理函数如:onClick,onBlur(注意大小写，驼峰)
      - React使用的是自定义(合成)事件,而不是原生Dom事件---为了更好的兼容性
      - React中的事件是通过事件委托方式处理的(委托给组件最外层元素)
- (2).通过event.target得到发生事件的Dom元素对象
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Demo extends React.Component{
    myRef = React.createRef();  
    myRef2 = React.createRef();  
    //展示输入框数据
    showdata = ()=>{
      alert(this.myRef.value)
    }
    showdata2 = ()=>{
      alert(event.target.value)
    }      
    render(){
      const  {data} = this.props
      //读取状态
      return (
        <div>
          <input type='text' ref={this.myRef} placeholder='点击按钮提示'/>&nbsp
          <button onClick={this.showdata}>提交</button>&nbsp
          <input ref={this.myRef2}  onBlur={this.showdata2} type='text' placeholder='失去焦点提示'/>
        </div>
      )
    }
  }

  //渲染组件到页面
  ReactDOM.render(<Demo data='你好'/>,document.getElementById('one'))
</script>
```
## (4)React收集表单数据
### 4.1.非受控组件的基本使用
- 非受控（控：即state）组件：表单中的数据，在需要的时候“现用现取”（通过ref获取节点，进而访问value值）
- 现用现取的写法
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Login extends React.Component{
    constructor(props){
      super(props)
      this.handlesubmit = (event)=>{
        event.preventDefault();//阻止表单提交
        const {username,password} = this
        alert(username.value)

      }  
    }
  
    render(){
      //读取状态
      return (
        <form  onSubmit={this.handlesubmit}>
          账号：<input type="text" ref={c=>this.username=c} name='username'/>
          密码：<input type="password" ref={c=>this.password=c} name='password'/>
          <button>登陆</button>
        </form>

      )
    }
  }
  //渲染组件到页面
  ReactDOM.render(<Login/>,document.getElementById('one'))
</script>
```
### 4.2.受控组件的基本使用
- 受控组件：表单中输入类的DOM,随着用户的输入，将值收集在state中
- 现用现取的写法
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Login extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        username:'',
        password:''
      }
      this.handlesubmit = (event)=>{
        event.preventDefault();//阻止表单提交
        const {username,password} = this
        alert(username.value)

      }  
      this.demo = (event)=>{
        this.setState({username :event.target.value})
        
      }
      this.demo2 = (event)=>{
        this.setState({password :event.target.value})
        
      }
    }

    render(){
      //读取状态
      return (
        <form  onSubmit={this.handlesubmit}>
          账号：<input onChange={this.demo} type="text" ref={c=>this.username=c} name='username'/>
          密码：<input type="password" ref={c=>this.password=c} name='password'/>
          <button>登陆</button>
          //数据双向显示
          <div>{this.state.username}</div>
        </form>
      )
    }
  }
  //渲染组件到页面
  ReactDOM.render(<Login />,document.getElementById('one'))
</script>
</script>
```
## (5)高阶函数-函数柯里化
### 5.1.使用柯里化操作
- onChange={this.formdata('username')}
- 对函数进行精简提炼
- React中必须把函数作为事件的回调
- (1).高阶函数：如果一个函数符合下面两个规范中的一个，那么该函数就是高阶函数
    - 1.若A函数接收的参数是一个函数，那么A就可称为高阶函数
    - 2.若A函数调用的返回值仍是一个函数，那么A就可称为一个高阶函数
    - 常见的高阶函数：promise，setTimeout,arr.map()
- (2).函数的柯里化:通过函数调用继续返回函数的方式，实现多次接受参数，最后统一处理的函数编码形式。如下的this.formdata('username')(具体参见复习中的函数柯里化的演示.html)
```javascript
<script type="text/babel"> //type要写babel
  // 创建类式组件
  class Login extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        username:'',
        password:''
      }
      this.handlesubmit = (event)=>{
        event.preventDefault();//阻止表单提交
        const {username,password} = this
        alert(username.value)

      }  
      this.formdata = (typedata)=>{
        return (event)=>{
          console.log(typedata);
          this.setState({[typedata]:event.target.value})
        }
      }
    }
    render(){
      //读取状态
      return (
        <form  onSubmit={this.handlesubmit}>
           {/*必须把函数作为事件的回调*/}
          账号：<input onChange={this.formdata('username')} type="text" ref={c=>this.username=c} name='username'/>
          密码：<input type="password" onChange={this.formdata('password')} ref={c=>this.password=c} name='password'/>
          
          <button>登陆</button>
          <div>{this.state.username}</div>
        </form>

      )
    }
  }
  //渲染组件到页面
  ReactDOM.render(<Login />,document.getElementById('one'))
</script>
```
### 5.1.不使用柯里化操作
- onChange={event=>this.formdata('username',event)}
- 对函数进行精简提炼
- React中必须把函数作为事件的回调
```javascript
this.formdata = (typedata,event)=>{
  this.setState({[typedata]:event.target.value})
  }
}
render(){
  //读取状态
  return (
    <form  onSubmit={this.handlesubmit}>
      {/*必须把函数作为事件的回调*/}
      账号：<input onChange={event=>this.formdata('username',event)} type="text" ref={c=>this.username=c} name='username'/>
      密码：<input type="password" onChange={event=>this.formdata('password',event)} ref={c=>this.password=c} name='password'/>
      <button>登陆</button>
      <div>{this.state.username}</div>
    </form>
  )
}
```
## (6)组件的生命周期
- 生命周期<=>生命周期回调函数<=>生命周期钩子函数<=>生命周期钩子
- [Alt!](React基础学习/img/生命周期函数.png)
- 挂载：constructor->componentWillMount->componentDidMount->render->ComponentWillUnmount
- 更新：1.setState->shouldComponentUpdate(是否会更新状态，默认返回true)->ComponentWillUpdate->render
- 更新：2.forceUpdate->ComponentWillUpdate->render->componentDidUpdate
- 更新3.ComponentWillReceiveUpdate（组件即将接收新的参数）->shouldComponentUpdate(是否会更新状态，默认返回true)->ComponentWillUpdate->render->componentDidUpdate
- 卸载：ComponentWillUnmount（组件即将被卸载）
### 6.1初识组件生命周期
- 挂载组件(mount)，卸载组件(unmount)
- 1.初始化之后，状态更新之后-----开始挂载render()
- 2.组件挂载完毕-------componentDidMount()
- 3.组件将要被卸载之前-----ComponentWillUnmount()
- 清除定时器------clearInterval()
```javascript
class Life extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      optic:'从1到0慢，从0到1快',
      opacity:1,
    }
    this.kill = ()=>{
      //清除定时器
      clearInterval(this.timer);
      //卸载组件
      ReactDOM.unmountComponentAtNode(document.getElementById('one'))
    }
  }
  //组件挂载完毕
  componentDidMount(){
    this.timer = setInterval(()=>{
      let {opacity} = this.state
      opacity -= 0.1
      if (opacity<=0) opacity =1
      //设置透明度
      this.setState({opacity})
    },200);
    }
  
  //组件将要被卸载之前
  ComponentWillUnmount(){
    //清除定时器
    clearInterval(this.timer);
  }
  //初始化之后，状态更新之后
  render(){
    //读取状态
    return (
      <div>
        <div style={{opacity:this.state.opacity}}>{this.state.optic}</div>      
        <button onClick={this.kill}>干掉</button>        
      </div>

    )
  }
}
//渲染组件到页面
ReactDOM.render(<Life/>,document.getElementById('one'))
```
### 6.2挂载与setState更新
- 挂载：constructor->componentWillMount->componentDidMount->render->ComponentWillUnmount
- 更新：1.setState->shouldComponentUpdate(是否会更新状态，默认返回true)->ComponentWillUpdate->render->->componentDidUpdate
- 卸载：ComponentWillUnmount（组件即将被卸载）
### 6.3.forceUpdate强制更新（不对state数据做出更改也可更新）
- 更新：2.forceUpdate->ComponentWillUpdate->render
```javascript
// 创建类式组件
class Count extends React.Component{
  //构造器
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
    this.add = () =>{
      let {count} = this.state
      count++
      this.setState({count})
    }
    this.kill = ()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById('one'))
    }
    this.force = ()=>{

    }    
  }
  //组件将要挂载
  componentWillMount(){
  }
  //组件挂载完毕
  componentDidMount(){
  }
  //组件将要被卸载之前
  ComponentWillUnmount(){
  }
  //是否会更新状态，默认返回true----写了该函数必须写返回值，不写该函数则默认为true
  shouldComponentUpdate(){
    return true
  }
  //组件将要更新
  ComponentWillUpdate(){
  }      
  //组件跟新完毕
  ComponentDidUpdate(){
  }         
  //初始化之后，状态更新之后
  render(){
    //读取状态
    return (
      <div>
        <div>{this.state.count}</div>      
        <button onClick={this.add}>加</button>  
        <button onClick={this.kill}>卸载组件</button>   
        {/*强制更新不对状态进行修改*/}
        <button onClick={this.force}>强制更新组件</button>  
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Count/>,document.getElementById('one'))
```
### 6.4.组件将要接收新的（第二次）props
- 更新3.ComponentWillReceiveUpdate（组件即将接收新的参数）->shouldComponentUpdate(是否会更新状态，默认返回true)->ComponentWillUpdate->render
```javascript
<script type="text/babel"> //type要写babel
  // 创建父组件A
  class A extends React.Component{
    //构造器
    constructor(props){
      super(props)
      this.state = {
        name:'小花'
      }
      this.kill = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('one'))
      }
      this.change = ()=>{
        let name = this.state.name
        name = '小草'
        this.setState({name})
      }
    }
    
    //组件将要更新
    ComponentWillUpdate(){
    }      
    //组件跟新完毕
    ComponentDidUpdate(){
    }         
    //初始化之后，状态更新之后
    render(){
      //读取状态
      return (
        <div>
          <div>{this.state.count}</div>      
          <button onClick={this.change}>改变姓名</button>  
          <button onClick={this.kill}>卸载组件</button>  
          {/*传递props参数*/}
          <B name = {this.state.name}/>    
        </div>
      )
    }
  }

  //创建子组件B
  class B extends React.Component{
    //组件将要接收新的props的钩子---可传递参数props
    ComponentWillReceiveUpdate(props){
      console.log(props);
    }
    //是否会更新状态，默认返回true----写了该函数必须写返回值，不写该函数则默认为true
    shouldComponentUpdate(){
      return true
    }
    //组件将要更新
    ComponentWillUpdate(){
    }      
    //组件跟新完毕
    ComponentDidUpdate(){
    }               
    render(){
      return (
        <div>
          我是B组件，我接受的参数是：{this.props.name}
        </div>
      )
    }
  }

  //渲染A组件到页面
  ReactDOM.render(<A/>,document.getElementById('one'))
```
## (7)组件的生命周期（新）
- 加UNSAFE_前缀表示在使用这些生命周期代码在未来的react版本中会出现bug,尤其是在使用异步函数时
- UNSAFE_ComponentWillUpdate()
- UNSAFE_componentWillMount()
- UNSAFE_ComponentWillReceiveUpdate
- 不推荐使用未来会弃用
- 挂载：constructor->getDerivedStateFromProps->componentDidMount->render->ComponentWillUnmount
- 更新：ComponentWillReceiveUpdate（组件即将接收新的参数）->getDerivedStateFromProps->shouldComponentUpdate(是否会更新状态，默认返回true)->render->getSnapshotBeforeUpdate->componentDidUpdate
- 卸载：ComponentWillUnmount（组件即将被卸载）
### 7.1.getDerivedStateFromProps（从props中获得衍生的状态）
- 作为静态方法使用，返回状态对象或者null
- state的值完全取决于props时使用
- 派生状态会导致代码冗余，组件难以维护
```javascript
class Count extends React.Component{
  //构造器
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
    this.add = () =>{
      let {count} = this.state
      count++
      this.setState({count})
    }
    this.kill = ()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById('one'))
    }
    this.force = ()=>{

    }
  }
  //从props中获得衍生的状态
  //作为静态方法使用，返回状态对象或者null
  static getDerivedStateFromProps(props,state){
    console.log(props);
    console.log(state);
    //return null
    // return {count:100}
    return props //把props当状态对象返回
  }
  //组件挂载完毕
  componentDidMount(){
  }
  //组件跟新完毕
  ComponentDidUpdate(){
  }       
  //组件将要被卸载之前
  ComponentWillUnmount(){
  }        
  //初始化之后，状态更新之后
  render(){
    //读取状态
    return (
      <div>
        <div>{this.state.count}</div>      
        <button onClick={this.add}>加</button>  
        <button onClick={this.kill}>卸载组件</button>   
        {/*强制更新不对状态进行修改*/}
        <button onClick={this.force}>强制更新组件</button>  
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Count count={100}/>,document.getElementById('one'))
```
### 7.2.getSnapshotBeforeUpdate
- 在更新之前获取快照
- Snapshot(快照)
- 返回一个快照值(任何值都可作为快照值)(a Snapshot value)或者null
- 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()
```javascript
//从props中获得衍生的状态
//作为静态方法使用，返回状态对象或者null
static getDerivedStateFromProps(props,state){
  console.log(props);
  console.log(state);
  //return null
  // return {count:100}
  return props //把props当状态对象返回
}
//在最后渲染之前调用
//返回一个快照值(任何值都可作为快照值)(a Snapshot value)或者null
getSnapshotBeforeUpdate(){
  return null
}
//组件挂载完毕
componentDidMount(){
}
//组件跟新完毕
ComponentDidUpdate(){
}       
//组件将要被卸载之前------之前的状态值和之前的props值和快照值
ComponentWillUnmount(preprops,prestate,snapshot){
  console.log(preprops);
  console.log(prestate,snapshot);
}        
//初始化之后，状态更新之后
render(){
  //读取状态
  return (
    <div>
      <div>{this.state.count}</div>      
      <button onClick={this.add}>加</button>  
      <button onClick={this.kill}>卸载组件</button>   
      {/*强制更新不对状态进行修改*/}
      <button onClick={this.force}>强制更新组件</button>  
    </div>
  )
}
}
//渲染组件到页面
ReactDOM.render(<Count count={100}/>,document.getElementById('one'))
```
### 7.3.getSnapshotBeforeUpdate实例
### 7.4.生命周期常用函数
- render------初始化渲染或者更新渲染调用
- componentDidMount(挂载完毕)----开启监听，发送ajax请求
- ComponentWillUnmount(卸载之前)-----做一些收尾工作，如清理定时器
## (8)Dom的diffing算法
### 8.1.验证diffing算法
```javascript
<script type="text/babel"> //type要写babel
  // 创建父组件A
  class Time extends React.Component{
    //构造器
    constructor(props){
      super(props)
      this.state = {
        data:new Date()
      }
    }
    //组件跟新完毕
    componentDidMount(){
      setInterval(()=>{
        this.setState({
          data:new Date()
        })
      },1000)
    }         
    //初始化之后，状态更新之后
    render(){
      //读取状态
      return (
        <div>
          <input type="text"/>
          <span>
            现在是：{this.state.data.toTimeString()}   {/*逐层对比，最小力度是标签---这里只会把现在是：{this.state.data.toTimeString()} 重新渲染*/}
            <input type="text"/>
          </span>  
        </div>
      )
    }
  }
  //渲染A组件到页面
  ReactDOM.render(<Time/>,document.getElementById('one'))
```
### 8.2.key的作用
```javascript
经典面试问题：
  1.key的作用（key的内部原理是什么）
  2.为什么遍历列表时，key最好不用index
理解：
  1.虚拟Dom中的key的作用：
    (1).简单来说key是虚拟Dom对象的标识，在更新显示时起着非常重要的作用
    (2).详细来说：当状态数据发生变化时，react会根据【新数据】生成【新虚拟Dom】 
        随后react进行【新虚拟Dom】与【旧虚拟Dom】的diff(不同S)比较，比较规则如下
           a.【旧虚拟Dom】找到与【新虚拟Dom】相同的key:
              1.若虚拟Dom内容不变，直接使用之前的真实Dom
              2.若虚拟Dom内容变了，则生成新的【真实Dom】，随后替换掉页面之前的真实Dom
           b.【旧虚拟Dom】未找到与【新虚拟Dom】相同的key:
              1.根据数据创建新的【真实Dom】，随后渲染到页面
  2.用index作为key会引发的问题：
    (1).若对数据进行：逆序添加，逆序删除等破坏顺序操作：
           会产生没有必要的【真实Dom】更新==>界面效果没问题，但是效率低。
    (2).如果结构中还包含输入类的Dom（有input输入值会发生值的错乱）:
           会产生错误的Dom更新==>界面有问题
    (3).注意！如果不存在对数据进行：逆序添加，逆序删除等破坏顺序操作，
           仅用于渲染列表的展示，使用index作为key是没有问题的。
  3.开发中如何选择key？:
    (1).做好使用每条数据的唯一标识作为key，如id,手机号，身份证号，学号等唯一值。
    (2).如果只是简单的展示数据，用index也是可以的。
```
```javascript
<script type="text/babel"> //type要写babel
  // 创建父组件A
  class Person extends React.Component{
    //构造器
    constructor(props){
      super(props)
      this.state = {
        student:[
          {id:1,name:'小花',age:18},
          {id:2,name:'小草',age:23}
        ]
      }
      this.add = ()=>{
        const {student} = this.state
        const s = {id:student.length.id+1,name:'小明',age:25}
        this.setState({student:[s,...student]})
      }     
    }
    //组件跟新完毕
    componentDidMount(){
      
    }         
    //初始化之后，状态更新之后
    render(){
      //读取状态
      return (
        <div>
          <ul>
            <p>使用index作为key</p>
            {/*把新增的数据放在前方(进行逆序添加)，打乱了索引的顺序，会把所有标签重新渲染，增加input不变导致值发生错乱*/}
            <button onClick={this.add}>增加一个人</button>
            {
              this.state.student.map((obj,index)=>{     
                return <li key={index}>{obj.name}---{obj.age} <input type="text"/> </li>
              })
            }
          </ul> 
          <hr/>
          <ul>
            <p>使用唯一标识id作为key</p>
            {/*原来有的数据继续复用，减少不必要的渲染，提高效率，增加input不变值也不会错乱*/}
            {
              this.state.student.map((obj)=>{     
                return <li key={obj.id}>{obj.name}---{obj.age}<input type="text"/> </li>
              })
            }
          </ul>             
        </div>
      )
    }
  }
  //渲染A组件到页面
  ReactDOM.render(<Person/>,document.getElementById('one'))
```
# 三.React应用(基于React脚手架)
- create-react-app创建react应用
## (1)搭建脚手架 创建项目
- 1.1全局安装:npm install -g create-react-app
- 1.2初始化项目：create-react-app 项目名字
- 1.3启动项目: npm start
- npm eject 显示webpack配置，并且不可逆
## (2).父子组件间的传值
- 用state存储在父组件中，用props在父子组件之间传值
- 父组件传递出去： <Header todolist={this.state.todolist}/>
- 子组件拿到父组件传递的值：this.props.todolist
```jsx
<!-- 父组件 -->
class index extends Component {
  state = {todolist:[
    {id:'01',name:'首页',done:'true'}
  ]}
  render() {
    return (
      <div className='d1'>
        <!-- 传递值到子组件 -->
        <Header todolist={this.state.todolist}/>
        <Content todolist={this.state.todolist}/>
        <Footer/>
      </div>
    );
  }
} 
<!-- 子组件 -->
export default class index extends Component {
  add = ()=>{
    <!-- 拿到子组件传递的值 -->
    console.log(this.props.todolist);
  }
  render() {
    return (
      <div>
        <input type="text" ref={c=>this.input1=c} />
        <span><button onClick = {this.add}>留言</button></span>
      </div>
    )
  }
}
```
## (3).组件中函数传值
- bind关键字，this关键字
- <button onClick={this.函数名.bind(this,传递的值)}>删除</button>
## (4).随机id用的库
- UUID ---npm i uuid  迷你版：nanoid ---npm i nanoid  
- 使用 nanoid()
## (5).脚手架文件分析
- 建议yarn start (yarn react 都是facebook出品)
- yarn.lock (package.josn)缓存记录包，包版本
- .eslintcache(语法检查缓存文件)
### （5.1）src中文件
```jsx
//引入react核心库
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// reportWebVitals.js用于记录页面性能
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 17.0版本之后增加<React.StrictMode>（jsx写法） 在严格模式下检查是否代码合理
  // 开启检查之后，很多不能用，会爆红
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
- reportWebVitals.js中： web-vitals:进行页面性能分析的包
- setupTests.js：//用于做单元测试的
### （5.2）public 中的文件
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL%代表public文件夹路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口，用于做移动端的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏颜色(仅支持安卓手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <!--content中内容 能被网路爬虫抓取的关键词 -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 用于指定网页添加到手机主屏后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳时的配置文件 manifest.json-->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 向不支持js的浏览器发出引导 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```
### 加壳的概念
- 原生开发（oc,Java）
- 用前端的语言  编写ios/Andriod应用 经过翻译生成原生应用（ReactNative,uiapp）
- 加壳（在外层加apk,或者ios，内里还是网页）
### robots.txt #爬虫协议（规则）文件（规定哪些可以爬取）
## （6）暴露配置并且不可逆--(一般不暴露修改)
- 命令： yarn eject (npm run ject)
- 命令 rcc 快速构建react
## (7)唯一标识id 插件 UUID
- yarn add uuid
## （8）父子组件，兄弟组件之间传值
### (8.1)兄弟传值----状态提升 （消息订阅）
- (1)兄弟组件要用的，放在共同的父组件中
- (2)PubsubJs 消息订阅----（可适用于任意组件通信）
     - 安装yarn add pubsub-js
     - A组件发布消息  pubsub.publish()
     - B组件接受消息   pubsub.subscribeOnce('消息名',(接受的数据,名字)=>{})
     - 取消订阅

```jsx
-------A组件发布消息  pubsub.publish()
const pubsub = new PubSub('消息名',发布的数据);

pubsub.publish('user_add', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com'
});

-------B组件接受消息   pubsub.subscribeOnce('消息名',(接受的数据,名字)=>{})
const pubsub = new PubSub();

const onUserAdd = pubsub.subscribeOnce('user_add', (data, topic) => {
  console.log('User added');
  console.log('user data:', data);
});

-------B 中取消ding'yu
const pubsub = new PubSub();

// Unsubscribe using the topic's name.
pubsub.unsubscribe('user_add');
```
### （8.2）父子传值
- 父传子   props <son todolist={通过props向子组件传递的值} liuyan1={this.liuyan}/>
- 子传父   1.父组件先通过props向子组件传递一个函数，2.子组件通过props拿到该函数，再通过该函数向父组件传值
1. <father liuyan1={父组件的函数}/>---<father liuyan1={this.liuyan}/>
2. 子组件通过props拿到该函数并向父组件传值---this.props.liuyan1(data)
```jsx
class index extends Component {
  state = {todolist:[
    {id:'01',name:'吃饭',done:false},
    {id:'02',name:'睡觉',done:true},
  ]}
  //父组件先通过props向子组件传递一个函数
  liuyan = (data)=>{
    // console.log(data);
    //父组件拿到子组件传递的data并且做处理
    this.setState({
      todolist:data
    })
  }
  render() {
    
    return (
      <div className='d1'>
        <Header todolist={this.state.todolist} liuyan1={this.liuyan}/>
      </div>
    );
  }
} 


//子组件通过函数向父组件传值
export default class index extends Component {
  delete = (item)=>{
    console.log(item);
    const {todolist}  = this.props
    const todolist1 = todolist.splice(item,1)
    console.log(todolist1)
    //子组件通过函数向父组件传值
    this.props.liuyan1(todolist1)
  }
  render() { 
    return  this.props.todolist.map((obj,index)=>{
        return(
          <Item key={obj.id} todolist={obj} delete= {this.delete}/>
        )
      })
    
  }
}
```
# 四、React ajax(fetch)
## 4.1 react脚手架配置跨域问题
### 4.1.1 什么是跨域问题
- 在网络请求示：所处位置和目标位置不同源（域）
### 4.1.2 解决跨域
#### (1)方法1 增加代理服务器 （优先匹配前端资源（3000），只能配置一个代理）
-  客户端3000---》代理服务器3000---》服务器5000
- 在pack.json中增加
```js
    "proxy":"http://localhost:8000"
```
- 理解： Ajax发送的请求先获取本地端口资源，若没有则发送至配置的代理服务器，配置的代理服务器也会先找本地端口的
#### (2)方法二 配置代理
- 创建setupProxy.js
- npm 官网中搜索react-create-app  在github官网中查看react仓库中的usergide 查看官方文档配置
```js
const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(
    proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:8080/api', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:8080/api', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    })        
  )
}
```
## 4.2 fetch
- 未优化fetch（未统一处理错误）
```jsx
fetch(``).then(res=>{
  consol.log("联系服务器成功")
  return res.json()  // 返回一个promise实例 作为.then()promise实例使用 
                     //如果返回的是一个非promise值 则.then()返回的状态就为成功，值就为这个非promise的值
},err=>{
  consol.log("联系服务器失败")
}
).then(res=>{
  consol.log("获取数据成功")
  consol.log(res)   // 传递的pentch数据
},err=>{
  consol.log("获取数据失败")
})
```
- 优化版fetch（统一处理错误.catch()）
```jsx
fetch(``).then(res=>{
  consol.log("联系服务器成功")
  return res.json()  // 返回一个promise实例 作为.then()promise实例使用 
                     //如果返回的是一个非promise值 则.then()返回的状态就为成功，值就为这个非promise的值
}).then(res=>{
  consol.log("获取数据成功")
  consol.log(res)   // 传递的pentch数据
}).catch(err=>{
  consol.log(err)
})
```
# 五、React路由
## 5.1 路由理解
- 原理：监听BOM中history记录 栈的结构
### 5.1.1 SPA的理解
- 单页面web应用（single page web application SPA）
- 整个页面只有一个完整的页面
- 点击页面链接不会刷新页面，只会做页面的局部更新
- 数据都需要通过ajax请求，在前端页面展现
```jsx
```
## 5.2 react-router-dom  第5版本使用
- yarn add react-router-dom@5
### 5.2.1基本使用
#### 1. 创建引入路由
```jsx
import { BrowserRouter } from 'react-router-dom';
< BrowserRouter>
  <App />
</BrowserRouter>
```
#### 2. link to跳转
- （1）React中靠路由链接实现切换组件----编写路由链接
- Link渲染成a 标签
```jsx
import { Link } from 'react-router-dom'
<Link to='/Home'>
  Home
</Link>
```
#### 3. 路由注册
```jsx
import { Route } from 'react-router-dom'
import Home from '../Home'
 <Route path='/Home' component={Home} />
```
### 5.2.2 路由组件和一般组件的区别
- 1.写法不同
  - 一般组件：<Demo>
  - 路由组件：<Route path='/Demo' component={Demo} />
- 2.存放为止
  - 一般组件：components
  - 路由组件：pages
- 3.props接收的参数不同
  - 一般组件：{一般组件传递的参数}
  - 路由组件：接收到三个固定属性 History Location Watch
### 5.2.3 NavLink 的使用
#### 1. link to跳转
- React中靠路由链接实现切换组件----编写路由链接
- NavLink给a 标签增加一个 active 样式类名（<Link active to='/Home'> Home</Link>）
```jsx
import { Link } from 'react-router-dom'
<NavLink to='/Home'>
  Home
</NavLink>
```
- 自己设置样式
```html
<style>
  .demo{
    backgroud-color:red !important;
  }
</style>
<body>
  <NavLink activeclassName='demo' to='/Home'>
  Home
</NavLink>
</body>

```
### 5.2.4 关于Mynavlink 的封装
- 用一般组件来封装自定义属性的NavLink
- 标签体中的内容即是 标签属性childern(通过this.props.children可以获取标签体中的内容)
```jsx
//Mynavlink/index.js
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      // 封装自定义样式的 NavLink
      <NavLink activeclassName='demo' {...this.props}/>
    )
  }
}

```
- 使用自定义属性的NavLink
```js
<Mynavlink to='/home'>Home</Mynavlink>
```
### 5.2.5 Switch 组件的使用
- 一个路径对应一个组件
```jsx
- （2）路由注册
import { Route } from 'react-router-dom'
import Home from '../Home'
 <Switch>
  <Route path='/Home' component={Home} />
  <Route path='/Home' component={Ha} /> //使用Switch之后不再执行
 </Switch>

```
### 5.2.6 二级路径找不到样式问题
- 写绝对路径 %PUBLIC_URL%/css/
- 改为Hash路由 #后面的属于前端资源不带给服务器
### 5.2.7 路由的模糊匹配和精准匹配
- 模糊匹配--前缀匹配 -- 匹配前一个匹配上再往上走了
```jsx
<NavLink to='/Home/a/b'>
  Home
</NavLink>
  <Route path='/Home' component={Home} />
  <Route path='/Home' component={Ha} /> //使用Switch之后不再执行
```
- 精准匹配--exact={true}
```jsx
  <Route exact={true} path='/Home' component={Home} />
```
### 5.2.8 路由重定向
```jsx
  <Route exact={true} path='/Home' component={Home} />
  <Redirect to='/home'/>
```
### 5.2.9 嵌套路由
- 一级二级路由不要丢
```jsx
<NavLink to='/Home/a/b'>
  Home
</NavLink>
// Home下a下的b
  <Route path='/Home/a/b' component={Home} />
```
### 5.2.10 路由传参之传递params参数
- 1.在路径中传递参数
- 2.在注册路由是申明接收
- 3.在props.match中接收参数---this.props.match.params
```jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
export default class index extends Component {
  state=()=>{
    a:[
      {id:0,name:hello1},
      {id:0,name:hello1},
      {id:0,name:hello1}
    ]
  }
  render() {
    const {a} = this.state;
    return (
      <div>
        {
          a.map(item=>{
            // 传递params参数
            <Link to={`/Home/${item.id}`} ></Link>
          })
        }
        {/*注册组件 展示组件*/}
        {/* 接收参数id :id */}
        <Route path='/home/:id' component={home}/>
      </div>
    )
  }
}


// Home组件中
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class index extends Component {
  render() {
    // 接收参数
    const {id} = this.props.match.params
    return (
      <ul>
      {        
        <li>{id}</li>
      }
      </ul>
    )
  }
}
```
### 5.2.11 路由传参之传递search参数
- 1.传递search参数 （类似query参数）
- 2.this.props.location.search接收参数，但是参数是query类型，需要用到一个React中querystring
下载（npm install query-string ）引入（import qs from 'querystring'）使用（qs.stringfy(x).slice(1)）
```jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
export default class index extends Component {
  state=()=>{
    a:[
      {id:0,name:hello1},
      {id:0,name:hello1},
      {id:0,name:hello1}
    ]
  }
  render() {
    const {a} = this.state;
    return (
      <div>
        {
          a.map(item=>{
            // 传递search参数
            <Link to={`/Home/?id=${item.id}&name=${item.name}`} ></Link>
          })
        }
        {/*注册组件 展示组件*/}
        {/* 无需接收参数，正常注册路由*/}
        <Route path='/home' component={home}/>
      </div>
    )
  }
}


// Home组件中
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import qs from 'querystring'
export default class index extends Component {
  render() {
    // 接收search参数
    const {id} = qs.stringfy(this.props.location.search).slice(1)
    return (
      <ul>
      {        
        <li>{id}</li>
      }
      </ul>
    )
  }
}
```
### 5.2.12 路由传参之传递state参数(地址栏参数不可见)
- 1.传递state参数 （传递为一个对象类型）{对象}对象中pathname为路径，state为传递的参数
- 2.接收state参数 const {id} = this.props.location.state
- 注意 <span style="color:red">加一个||{}防止浏览器清除缓存时在undifined上取值报错</span>
```jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
export default class index extends Component {
  state=()=>{
    a:[
      {id:0,name:hello1},
      {id:0,name:hello1},
      {id:0,name:hello1}
    ]
  }
  render() {
    const {a} = this.state;
    return (
      <div>
        {
          a.map(item=>{
            // 传递state参数{对象}---js表达式中包含对象
            <Link to={{pathname:'/home',state:{id:item.id,name:item.name}}} ></Link>
          })
        }
        {/*注册组件 展示组件*/}
        {/* state参数无需接收参数，正常注册路由*/}
        <Route path='/home' component={home}/>
      </div>
    )
  }
}

// Home组件中
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import qs from 'querystring'
export default class index extends Component {
  render() {
    // 接收state参数 加一个||{}防止浏览器清除缓存时在undifined上取值报错
    const {id} = this.props.location.state||{}
    return (
      <ul>
      {        
        <li>{id}</li>
      }
      </ul>
    )
  }
}
```
### 5.2.13 浏览器的路由跳转的两种模式
- 1.push 模式 方式为栈
- 2.replace模式 方式为栈(栈顶模式，不留痕迹)
```jsx
//  <Link replace={true} to={{pathname:'/home',state:{id:item.id,name:item.name}}} ></Link>
  <Link replace to={{pathname:'/home',state:{id:item.id,name:item.name}}} ></Link>
```
### 5.2.14 编程式路由跳转
- （1）this.props.history.push(path,state)
- （2）this.props.history.replace(path,state)
-  (3) 路由前进 this.props.history.goForward()
-  (4) 路由后退 this.props.history.goBack()
-  (5) 路由前进后退步数 this.props.history.go(n) (n为正整数为前进的步数,n为负整数为后退的步数)
```jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import qs from 'querystring'
export default class index extends Component {
  state=()=>{
    a:[
      {id:0,name:hello1},
      {id:0,name:hello1},
      {id:0,name:hello1}
    ]
  }
  replaceto = (id,name)=>{
    // 传递params参数
    this.props.history.replace(`/home/${id}/${name}`)
    // 传递search参数
    this.props.history.replace(`/home/?id=${id}$name=${name}`)
  }
  pushto = (id,name)=>{
    // 传递params参数
    this.props.history.push(`/home/${id}/${name}`)
    // 传递search参数
    this.props.history.replace(`/home/?id=${id}&name=${name}`)    
  }
  stateto = (id,name)=>{
    // 传递state参数
    this.props.history.push(`/home`,{id,name})
  }
  foward =()=>{
    this.props.history.goForward()
  }
  back =()=>{
    this.props.history.goBack()
  }
  go = (n)=>{
    // 前进n步
    this.props.history.go(n)
    // 后退n步
    this.props.history.go(-n)    
  }
  render() {
    const {a} = this.state;
    return (
      <div>
        {
          a.map(item=>{
            // 传递state参数{对象}---js表达式中包含对象
            <Link to={{pathname:'/home',state:{id:item.id,name:item.name}}} ></Link>
            <button onClick={()=>{this.replaceto(item.id,item.name)}}>replace传参</button>
            <button onClick={()=>{this.pushto(item.id,item.name)}}>push传参</button>
            <button onClick={()=>{this.stateto(item.id,item.name)}}>state传参</button>
          })
        }
        {/*注册组件 展示组件*/}
        {/*注册params 参数*/}
         <Route path='/home/:id/:name'>
        {/*search参数无需接收参数，正常注册路由*/}    
        {/* state参数无需接收参数，正常注册路由*/}
        <Route path='/home' component={home}/>

        {/*路由 前进后退*/}
        <button onClick={this.foward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={()=>{this.go(n)}}>步数</button>
      </div>
    )
  }
}

// Home组件中

import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import qs from 'querystring'
export default class index extends Component {
  render() {
    // 接收params参数
    const {id} = this.props.match.params
    // 接收search参数
    const {id} = qs.stringfy(this.props.location.search).slice(1)      
    // 接收state参数 加一个||{}防止浏览器清除缓存时在undifined上取值报错
    const {id} = this.props.location.state||{}
    return (
      <ul>
      {        
        <li>{id}</li>
      }
      </ul>
    )
  }
}
```


### 5.2.15 一般组件使用路由组件的API (withRouter函数)
- withRouter的返回值是一个新组建
```jsx
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class home extends Component {
  render() {
    // 接收search参数
    const {id} = qs.stringfy(this.props.location.search).slice(1)
    return (
      <ul>
      {        
        <li>{id}</li>
      }
      </ul>
    )
  }
}
export default withRouter(home)
```
## 5.3 react-router-dom  第6版本使用
- 与5相比改变了
  - 1.内置组件的变化：移除<Switch> ,新增<Routes>（必须使用）等。
  - 2.语法变化： component={About} 变为element={<About/>}等
  - 3.新增多个hook:useParams useNavigate useMatch 等
  - 4.官网推荐函数式组件
```jsx

```
### 5.3.1 新增的Routes必须包裹使用
- 移除了5的Switch,用Routes代替
- Routes 和Route要配合使用，使用Route必须被Routes包裹
- <Route caseSensitive>属性默认用于指定，匹配时不区分大小写。
```jsx
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
             <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes> 
            // 路由注册
            {/*<Outlet/>*/}
          </div>
        </div>
      </div>
    )
  }

```
### 5.3.2 新增的Navigate使用(重定向)
- 只要渲染就会引起重定向 默认push模式浏览器会留下痕迹， 
```jsx
<Routes>
  <Route path='/home' element={<Home/>} />
  // 重定向的使用
  <Route path='/' element={<Navigate to='home'/>} />
</Routes> 

```
### 5.3.3 路由表使用
- 只要渲染就会引起重定向 默认push模式浏览器会留下痕迹， 
```jsx
// router.js
import {Navigate } from "react-router-dom";
import Home from '../components/body/Home'
const routes = [
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/',
    element:<Navigate to="/"/>
  }
]
export default routes

//APP.js使用 
import { useRoutes } from 'react-router-dom';
import routes from './routes'
function App() {
  const element = useRoutes(routes)
  return (
      <div className="App">
        {element}
      </div>
  );
}

export default App;

//路由使用及注册
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
          // 路由使用
            <Link to="/home">Home</Link>
----------------------------------------------
             {/*<Routes>
              <Route path='/home' element={<Home/>} />
            </Routes> */}
            // 路由注册
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
```
### 5.3.4 函数式组件Link 跳转传值（借助Hook钩子）
#### 5.3.4.1 params传值
- 在函数式组件中接收params参数（const {id} = useParams()）或者用useMatch(完整路径加参数).parms
```jsx
//传递参数
{/* params传值 */}
 <Link to={`study/${id}`}>Study</Link>

//注册路由
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        // 接收params参数
        path:'study/:id',
        element:<Study/>
      }
    ]
  },
]
export default routes

// 在study.jsx中接收params参数
import { useParams } from 'react-router-dom'
export default function Index() {
  const {id} = useParams()
  // const {id} = useMatch('/home/study/:id').params
  return (
    <div>study
      {id}
    </div>
  )
}
```
#### 5.3.4.2 search参数传值
-  const [接收的参数,更新参数] = useSearchParams() (或者使用useLacation钩子)
- const [search,setsearch] = useSearchParams() 
- 接收参数search.get('id')
- 更新参数setsearch('id="我变了"')
```jsx
//传递参数
{/* search传值 */}
  <Link to={`study/?id=${id}`}>Study</Link>

//注册路由
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        // 不用接收Sreach参数
        path:'study',
        element:<Study/>
      }
    ]
  },
]
import React from 'react'
import qs from 'querystring'
import {useSearchParams,useLocation} from 'react-router-dom'
export default function Index() {
  const [search,setsearch] = useSearchParams()
  const id = search.get('id');
  const {id} = qs.stringfy(this.props.location.search).slice(1)
  return (
    <div>
      <button onClick={()=>setsearch('id="我变了"')}>改变Search参数</button>
      study
      {id}
    </div>
  )
}

```
#### 5.3.4.3 state参数传值
- 使用useLacation钩子
- const {state:{id}} = useLocation();
```jsx
//传递参数
{/* state传值 */}
<Link 
  to='study' 
  state={{
    id:id
  }}>Study</Link>

//注册路由
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        // 不用接收state参数
        path:'study',
        element:<Study/>
      }
    ]
  },
]

import React from 'react'
import { useLocation} from 'react-router-dom'
export default function Index() {
  // 连续解构
  const {state:{id}} = useLocation();
  return (
    <div>
      study
      {id}
    </div>
  )
}


```
### 5.3.5 函数式组件编程式路由跳转(useNavigate)
- const naviage = useNavigate()
- navigate('路径',{
  replace:false, //默认为false
  state:{
    id:"我是传递的参数"
  }
})
- navigate(n) 前进或者后退
```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function index() {
  const navigate = useNavigate()
  function topath(){
    navigate('/home',{
      replace:false,
      state:{
        id:'你好'
      }
    })
  }
  return (
    <div>
      <button onClick={topath}>点击回首页</button>
    </div>
  )
}
```
### 5.3.6 判断是否在路由上下文中
- useInRouterContext
### 5.3.7 查询路由方式
- useNavigationType 返回值（pop ,push,replace）
- pop 指在浏览器中直接打开了这个组件（刷新页面）
### 5.3.9 呈现当前组件中渲染的嵌套路由
- consol.log(useOutlet())
- 如果嵌套路由未挂载---输出null
- 如果嵌套路由挂载---输出嵌套路由对象
### 5.3.10 解析路径
- useResolvedPath('/home?id=1121&name=ksk#que')
- 给定一个URL值，解析其中path,search,hash值
# 六、redux与react-redux的使用
- yarn add  redux
- - ![redux](./image//redux.png)
## 6.0 未使用redux加减案例
```jsx
import React, { Component } from 'react'
import store from '../../../redux/store'
export default class index extends Component {
  state = {
    count:0
  }
  increment = ()=>{
    const {value} = this.selected
    this.setState({count:this.state.count+value*1})
  }
  decrement = ()=>{
    const {value} = this.selected
    this.setState({count:this.state.count-value*1})

  }
  incrementIfOdd = ()=>{
    const {value} = this.selected
    if(this.state.count%2!=0){
      this.setState({count:this.state.count+value*1})
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selected
    setInterval(() => {
      this.setState({count:this.state.count+value*1})
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>当求和为{this.state.count}</p>
        <select ref={c=>this.selected = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
```
## 6.1 redux的基本使用
- 1.创建store
- 2.创建处理器reducer
- 3.获取predata(store.getState())
- 4.使用store来dispatch(path,data)来告诉reducer处理类型及data
- 5.检测store变化store.subscribe()
### 6.1.1 创建store
```jsx
import { createStore } from "redux";
import count from './count_reducer'
export default createStore(count)
```
### 6.1.2 创建处理器reducer
```jsx
const initstate = 0
// 形参默认值初始化 prestate的值
export default function countreducer(prestate=initstate,action){
  // 初始化
  // if(prestate === undefined) prestate = 0
  const {type,data} = action
  switch(type){
    case 'increment':
      return prestate+data
    case 'decrement':
    return prestate+data
      case 'incrementIfOdd':
    return prestate+data
    default :
    return prestate
  }
}
```
### 6.1.3 使用store来dispatch(path,data)来告诉reducer处理类型及data
- 
```jsx
import React, { Component } from 'react'
import store from '../../../redux/store'
export default class index extends Component {
  componentDidMount(){
    // 检测redux中的状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  increment = ()=>{
    const {value} = this.selected
    // 分发 告诉reducer处理类型及data
    store.dispatch({type:'increment',data:value*1})
  }
  decrement = ()=>{
    const {value} = this.selected
    store.dispatch({type:'decrement',data:value*1})

  }
  render() {
    return (
      <div>
       {/* 获取store中初始值 */}
        <p>当求和为{store.getState()}</p>
        <select ref={c=>this.selected = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

```
### 6.1.4 检测redux中的状态的变化，只要变化，就调用render
- 在index中
```jsx
// count.js
  componentDidMount(){
    // 检测redux中的状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
//检测redux中状态的改变，若改变就重新渲染App组件
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
})
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

```
### 6.1.5 创建使用action
```jsx
//count_action.js

// 为count生成action对象
// const createDecrement = ()=>({type:'increment',data})
// function createIncrement(data){
//   return {type:'increment',data}
// }
const createIncrement = data=>({type:'increment',data})
const createDecrement = data=>({type:'increment',data})

//count.js
import React, { Component } from 'react'
import store from '../../../redux/store'
// 引入ationCreator 专门用于创建acion对象
import {createDecrement,createIncrement} from '../../../redux/count_action'
export default class index extends Component {
  componentDidMount(){
    // 检测redux中的状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  
  increment = ()=>{
    const {value} = this.selected
    store.dispatch(createIncrement)
  }
  decrement = ()=>{
    const {value} = this.selected
    store.dispatch(createDecrement)
  }
}

```
### 6.1.6 常量模块的使用
- 增加 常量模块的使用(用于定义action对象中常量的使用)<span style="color:red">一般用大写定义 防止写错</span>
```jsx
//constant.js
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

//count_action.js
import { INCREMENT,DECREMENT } from "./constant"
export const createIncrement = data=>({type:INCREMENT,data})
export const createDecrement = data=>({type:DECREMENT,data})
```
### 6.1.6 异步action的使用
- 使用中间件 npm i redux-thunk（thunk形实转换函数） 处理使得store认得函数
- 同步acytion指返回action的值为Object类型的一般对象
- 异步acytion指返回action的值为函数
```JSX
//store.js
//引入执行中间件帮助使用thunk applyMiddleware(thunk)
import { createStore,applyMiddleware } from "redux";
import count from './count_reducer'
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
export default createStore(count,applyMiddleware(thunk))

//count_action.js
import { INCREMENT,DECREMENT,INCREMENTIFODD,INCREMENTASYNC } from "./constant"
import store from "./store"
export const createIncrement = data=>({type:INCREMENT,data})
export const createDecrement = data=>({type:DECREMENT,data})
export const createIncrementOFIdd = data =>({type:INCREMENTIFODD,data})
// 返回异步action 
export const createIncrementAsync = (data,time) =>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch({type:INCREMENT,data})
    // store.setState(createIncrement(data))
    },time)
  }
}
//count.js
import React, { Component } from 'react'
import store from '../../../redux/store'
// 引入ationCreator 专门用于创建acion对象
import {createIncrementAsync} from '../../../redux/count_action'
export default class index extends Component {
  componentDidMount(){
    // 检测redux中的状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  // 异步action
  incrementAsync = ()=>{
    const {value} = this.selected
    this.setState(createIncrementAsync(value*1,500))
  }
}
```
## 6.2 react-redux的基本使用
- npm i react-redux
- !Alt[react-redux](./image/react-redux.png)
### 6.2.1 react-redux基本使用
- 使用react-redux 不必再监听redux状态变化
- 1.所有UI组件必须包裹一个容器组件，为父子关系
- 2.容器组件中使用redux的api 而UI组件中不能使用
- 3.容器组件会传给UI组件：(1):redux中所保存的状态，(2):用于操作状态的方法 ----（均通过props传递）
#### (1)容器组件连接UI组件
- 创建连接 connect(function,function)(CountUI)
```jsx
// 引入UI容器
import CountUI from '../../components/body/counter/count2'
//引入connect 链接UI组件与redux
import { connect } from 'react-redux'
export default CountCountainer = connect()(CountUI)

```
#### (2)UI组件连接redux
- <Count store={store}/>通过props连接store
```jsx

import React, { Component } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'
import Count from './counter/count2'
import store from '../../redux/store'
export default class index extends Component {
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
            <Count store={store}/>
            {/* <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes> */}
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
}

```
#### (3)容器组件向UI组件传值（props）(传递1.状态 2.操作状态得方法)
-  connect(mapStateToprops(),mapDispathToprops())(CountUI)
```jsx
// 引入UI容器
import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement,createDecrement } from '../../redux/count_action';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'
//返回的对象中的key作为传递给UI组件的key,value作为传递的---状态
function mapStateToprops(state){
  return {count:state};
}
//返回的对象中的key作为传递给UI组件的key,value作为传递UI组件---操作状态的方法
function mapDispathToprops(dispatch){
  return {
    jia:number=>dispatch(createIncrement(number)),
    jian:number=>dispatch(createDecrement(number)) 
  };
}
export default CountCountainer = connect(mapStateToprops,mapDispathToprops)(CountUI)

//UI组件中接收props
import React, { Component } from 'react'
export default class count2 extends Component {
  increment = ()=>{
    const {value} = this.selected
    console.log(this.props.count);
    //使用容器组件传递过来的jia方法
    this.props.jia(value*1)
  }
}
```
### 6.2.2 优化1--mapDispathToProps()简写---action自动分发
- react-redux帮助action自动分发，自动调用dispatch()
```jsx
// 引入UI容器
import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement,createDecrement } from '../../redux/count_action';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'
export default connect(
  state => ({count:state}),
  // dispatch=>({
  //   jia:number=>dispatch(createIncrement(number)),
  //   jian:number=>dispatch(createDecrement(number)) 
  // })
  // action自动分发，自动调用dispatch()
  {
    jia:createIncrement,//返回一个action对象
    jian:createDecrement
  }
)(CountUI)
```
### 6.2.3 优化2--UI组件连接redux(连接store)---provider的使用帮助组件传递store
```jsx
// body.js
import React, { Component } from 'react'
import './index.less'
import { Outlet } from 'react-router-dom'
import Count from './counter/count2'
export default class index extends Component {
  render() {
    return ( 
      <div className='body'>
        <div className="container">
          <div className="row">
            {/* <Count store={store}/>*/}
            <Count/>
            {/* <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes> */}
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
}

//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
// 使用react-redux不必再监听redux变化
//检测redux中状态的改变，若改变就重新渲染App组件
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.getElementById('root'));
// })
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

```
### 6.2.4 整合UI和容器组件(整合成一个文件)
```jsx
//count2.jsx
// 引入UI容器
// import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement,createDecrement } from '../../redux/count_action';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
class count extends Component {
  
  increment = ()=>{
    const {value} = this.selected
    console.log(this.props.count);
    //使用容器组件传递过来的jia方法
    this.props.jia(value*1)
  }
  decrement = ()=>{
    const {value} = this.selected

  }
  incrementIfOdd = ()=>{
    const {value} = this.selected
  }
  incrementAsync = ()=>{
    const {value} = this.selected
  }
  render() {
    return (
      <div>
        <p>当求和为{}</p>
        <select ref={c=>this.selected = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}


export default connect(
  state => ({count:state}),
  // action自动分发，自动调用dispatch()
  {
    jia:createIncrement,//返回一个action对象
    jian:createDecrement
  }
)(count)
```
### 6.2.5 reducers合并 
- 使用combineReducers合并reducer
```jsx
//store.js

//引入执行中间件帮助使用thunk applyMiddleware(thunk)
import { createStore,applyMiddleware,combineReducers } from "redux";
import count from './reducers/count'
import person from "./reducers/person";
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
//reducers的合并
const Allreducer = combineReducers({
  count,
  person
})
export default createStore(Allreducer,applyMiddleware(thunk))

// 容器中使用 count2.js person.js
export default connect(
  state => ({count:state.count}),
  // action自动分发，自动调用dispatch()
  {
    jia:createIncrement,//返回一个action对象
    jian:createDecrement
  }
)(count)
export default connect(
  state => ({persons:state.person}),
  // action自动分发，自动调用dispatch()
  {
    personInto:createInsertperson
  }
)(person)



```
### 6.2.6 再count组件中使用person的信息（一个组件和另一个组件通信）
- 需要在count组件中 connect state中暴露出来
```jsx
export default connect(
  state => ({ 
    count: state.count,
    persons: state.person
   }),
  // action自动分发，自动调用dispatch()
  {
    jia: createIncrement,//返回一个action对象
    jian: createDecrement
  }
)(count)
```
- count.jsx完整代码
```jsx
// 引入UI容器
// import CountUI from '../../components/body/counter/count2'
// 引入createIncrement
import { createIncrement, createDecrement } from '../redux/actions/count';
//引入connect 连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
class count extends Component {

  increment = () => {
    const { value } = this.selected
    console.log(this.props);
    //使用容器组件传递过来的jia方法
    this.props.jia(value * 1)
  }
  decrement = () => {
    const { value } = this.selected
    this.props.jian(value * 1)


  }
  incrementIfOdd = () => {
    const { value } = this.selected
  }
  incrementAsync = () => {
    const { value } = this.selected
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>person组件中的person为{this.props.persons.map(item => {
          return <li key={item.id}>{item.name}-----{item.age}</li>
        })}</p>
        <p>当求和为{this.props.count}</p>
        <select ref={c => this.selected = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}


export default connect(
  state => ({ 
    count: state.count,
    persons: state.person
   }),
  // action自动分发，自动调用dispatch()
  {
    jia: createIncrement,//返回一个action对象
    jian: createDecrement
  }
)(count)
```
### 6.2.7 关于纯函数的概念（redux的reducer函数必须是一个纯函数）
- 1.输入相同的实参，将得到同样的输出
- 2.不许遵守以下约束
  - 1).不得改写参数数据
  - 2).不会产生任何副作用（例如网络请求，输入输出设备）
  - 3).不能调用Data.now()或者Math.random()等不纯的方法
```jsx
//  reducer/person.js中
import { INSERTPERSON } from "../constant";
const initstate = [{id:'001',name:'tom',age:19}]
export default function personreducer(prestate=initstate,action){
  const {data,type} = action
  switch (type) {
    case INSERTPERSON:
      // prestate.unshift(data)----- 参数改变了使得函数不纯
      return [data,...prestate]
    default:
      return prestate
  }
}
```
### 6.2.8 react-redux工具的使用（redux-devtools-extension）
- 1.浏览器安装扩展
- 2.npm i redux-devtools-extension 代码配置
- 3.引入redux-devtools-extension 使用composeWithDevTools
```jsx
//store.js
//引入执行中间件帮助使用thunk applyMiddleware(thunk)
import { createStore,applyMiddleware,combineReducers } from "redux";
import count from './reducers/count'
import person from "./reducers/person";
//引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
//引入redux-devtools-extension 使用composeWithDevTools
import { composeWithDevTools } from "redux-devtools-extension";
//reducers的合并
const Allreducer = combineReducers({
  count,
  person
})
export default createStore(Allreducer,composeWithDevTools(applyMiddleware(thunk)))

```
# 七、serve扩展的使用
- 可以快速开展一个本地服务器
- npm i serve -g
- 命令： serve 文件夹名（在该文件夹下开启一个服务器）
# 八、antd的使用
- ant-design(蚂蚁金服)
## 8.1 antd的基本使用
# 九、React扩展的使用
- 
## 9.1 setState()的使用
- 使用原则：
  - 1.如果新状态不依赖原状态===>使用对象式
  - 2.如果新状态依赖原状态===>使用函数式
  - 3.如果需要在setState()执行之后获取最新状态数据，要在第二个callbcak回调函数中执行
### 9.1.1 setState({},callback) 对象式调用
- 是函数式调用的语法糖
- setState({},callback) 在回调函数中更新
```jsx
import React, { Component } from 'react'
export default class app extends Component {
  state = {
    count:0
  }
  add = ()=>{
    const {count} = this.props.state
    count++
    // 在回调中显示
    this.setState({count},()=>{
      console.log(this.props.state.count);
    })
  }
  render() {
    const {count} = thid.props.state
    return (

      <div>
        <h1>app</h1>
        <p>{count}</p>
        <button onClick={this.add}>加</button>
      </div>
    )
  }
}

```
### 9.1.2 setState((state,props)=>{},callback) 函数式调用
- setState((state,props)=>{},callback)
```jsx
import React, { Component } from 'react'

export default class app extends Component {
  state = {
    count:0
  }
  add = ()=>{
    const {count} = this.props.state
    count++
    this.setState({count},()=>{
      console.log(this.props.state.count);
    })
  }
  // 函数式调用---直接改变state中的值
  add2 = ()=>{
    this.setState((state,props)=>{
      return {count:state.count+1}
    })
  }
  // add2=()=>{this.setState(state=>({count:state.count+1}))}
  render() {
    const {count} = thid.props.state
    return (

      <div>
        <h1>app</h1>
        <p>{count}</p>
        <button onClick={this.add}>加</button>
        <button onClick={this.add2}>函数式加</button>
      </div>
    )
  }
}

```
## 9.2 函数式组件Hooks的使用
### 9.2.1 lazyLoad的使用
- 组件的懒加载
- 导入import {lazy} from 'react'
- 使用：const Home = lazy(()=>import( '../components/Home'))
- 使用<Suspense fallback={<h1>Loading</h1>}></Suspense>
```jsx
// router/index.js
import { lazy } from "react";
import {Navigate } from "react-router-dom";
// 路由懒加载
const Home = lazy(()=>import( '../components/Home'))
const Study = lazy(()=>import('../components/body/study'))
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element: <Home/>,
    children:[
      {
        path:'study',
        element:<Study/>
      }
    ]
  },
]
export default routes

//App.js
import { Suspense } from 'react';
import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
function App() {
  const elements =  useRoutes(routes);
  return (
      <div className="App">
      {/* 未加载出来时  显示正在加载 */}
        <Suspense fallback={<h1>Loading</h1>}>
          {elements}
        </Suspense>
      </div>
  );
}

export default App;
```
### 9.2.2 stateHook的使用
- 函数式组件使用state------useState
- const [count,usecount] = React.useState(initstate初始值)
```jsx
import React,{ useState } from 'react'
export default function index() {
  const [count,usecount] = React.useState(0)
  function add(){
    //第一种写法
    usecount(count+1)
    //第二种写法
    usecount(count=>count+1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>加</button>
    </div>
  )
}

```
### 9.2.3 EffectHook的使用
- React.useEffect(callback,[检测值])---检测值变化一次回调执行一次
- React.useEffect(callback,[])---谁也不检测，回调函数只执行一次
- React.useEffect(callback)---检测所有值，只要有值变化便执行一次 
- callback中的回调函数的返回值相当于componentWillunmount
```jsx
import React,{ReactDOM, useState,useEffect } from 'react'
export default function index() {
  const [count,usecount] = React.useState(0)
  //加1
  const add=()=>{
    //第一种写法
    usecount(count+1)
    //第二种写法
    usecount(count=>count+1)
  }
  //加1
  function useEffectADD(){
    let timer = useEffect(()=>{
      setInterval(()=>{ 
        usecount(count+1)
      },500)
      return ()=>{     //返回的函数相当于componentWillunmount
        clearInterval(timer) // 清除定时器
      }
    },[])
  }
  //卸载组件
  function didmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  // 卸载之前清空定时器
  React.componentWill
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={add}>加</button> */}
      <button onClick={useEffectADD}>加</button>
      <button onClick={didmount}>卸载组件</button>
    </div>
  )
}

```
### 9.2.4 RefHook的使用
#### (1)类式组件中使用ref---const myref = React.createRef()
```jsx
import React, { Component } from 'react'
export default class hooks extends Component {
  myref = React.createRef()
  showref = ()=>{
    alert(this.myref.current.value)
  }  
  render() {
    return (
      <div>
        <input type="text" ref={this.myref}/>
        <button onClick={showref}>显示数据</button>
      </div>
    )
  }
}
```
#### (2)函数式组件中使用ref----const myref = useRef()
```jsx
import React,{ReactDOM, useState,useEffect,useRef } from 'react'
export default function Index() {
  const myref = useRef()
  function showref(){
    console.log(myref.current.value);
  }  
  return (
    <div>
      <input type="text" ref={myref}/>
      <button onClick={showref}>显示数据</button>
    </div>
  )
}

```
### 9.2.5 Framgment的使用
- 去除外面多余包裹的div---使用Framgment可以加key属性(只能加key属性用于遍历)（使用成空标签也可以）
```jsx
import React, { Component, Fragment } from 'react'
import Head from '../head/head'
import Body from '../body'
import Foot from '../foot'
export default class index extends Component {
  render() {
    return (
      // 使用成空标签也可以
      // <>
      //   <Head></Head>
      //   <Body></Body>
      //   <Foot></Foot>
      // </>      
      <Fragment key={1}>
        <Head></Head>
        <Body></Body>
        <Foot></Foot>
      </Fragment>
    )
  }
}

```
### 9.2.5 Context的使用
- 多用于祖孙组件传值使用(跳过父组件传递)
#### 9.2.5.1 类式组件中Context的使用
- 1.创建一个Mycontext------const Mycontext = createContext()
- 2.使用Mycontext
  - (1).使用Mycontext.Provider包裹子组件
  - (2).在Provider中的value属性传递值<Provider value={name}>此时被包裹的子组件以及孙组件都可以接收到值
- 后代组件接收context
  - (1).申明接收context (static  contextType = Mycontext)
  - (2).在组件实例的context属性上收（this.context）
```jsx



```
#### 9.2.5.2 函数式组件通用Context写法
- 1.创建一个Mycontext------const Mycontext = createContext()
- 2.使用Consumer <Consumer>{value=>{ console.log(value); }}</Consumer>
```jsx

```
### 9.2.5 组件优化PureComponent的使用
- 1.只要执行了setState(),即便不改变状态数据，组件也会重新render()
- 2.只要当前组件重新render(),就会自动重新render子组件，纵使子组件未更新数据（没有用到父组件任何数据）====》此时效率低
- <span style="color:red">只有当组件的state或者props数据发生改变时才重新render()</span>
- 原因：Componenet中的shouldComponentUpdata(nextPorops,nextState)总是返回true
#### (1).解决原理
```jsx


```
#### (2).PureComponent使用优化
- <span style="color:red">注意：只做浅对比：State或者Props改变没</span>
```jsx


```
### 9.2.5 renderProps的使用
- 
```jsx


```
### 9.2.5  ErrorBoundary 的使用
- 
```jsx


```



