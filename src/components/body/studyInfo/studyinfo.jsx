import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Markdown from 'react-markdown';
import Jquery from './studyFiles/Jquery.md'
import MarkdownLearn from './studyFiles/Markdown.md'
import ReactLearn from './studyFiles/React.md'
import Vue from './studyFiles/Vue.md'
import NodeJsLearn from './studyFiles/NodeJs.md'
import './index.less'
// import axios from 'axios';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from 'react-bootstrap'
//import { unmountComponentAtNode } from 'react-dom';

export default function Studyinfo() {
  const [markdown,usemarkdown] = useState('')
  const [toshow,usetoshow] = useState('block')
  const [toshowtwo,usetoshowtwo] = useState('none')
  const {state:{name}} = useLocation();
  console.log(name);
  if(name==='Jquery'){
    fetch(Jquery)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }else if(name === 'Markdown'){
    fetch(MarkdownLearn)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }else if(name === 'Vue'){
    fetch(Vue)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }else if(name === 'React'){
    fetch(ReactLearn)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }else if(name === 'NodeJs'){
    fetch(NodeJsLearn)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }else{
    // const text = `Here is some JavaScript code:
    // # 没有任何内容
    // `    
    // usemarkdown(markdown=>markdown=text)
    fetch(ReactLearn)
    .then(res => res.text())
    .then(text => {
      // console.log(text);
      usemarkdown(markdown=>markdown=text)
    });     
  }
  
  // axios.post(`api/UploadStudys/geturl`,{}).then(res=>{

  // })
  function toshowContent(){
    usetoshow('none')
    usetoshowtwo('block')

  }
  function toshowContent2(){
    usetoshowtwo('none')
    usetoshow('block')
  }  

  return (
    <div className="studyinfo">
      <div className="TableContents">
        {/* {console.log(name)} */}
        <p className='posiontype' style={{position: "relative",float: "left",color: "brown",paddingTop: "0px",display:toshow}}>
        <Button variant="primary" >目录</Button>
        </p>
        <p style={{position: "relative",float: "left",color: "brown",paddingTop: "10px",display:toshow}} onClick={toshowContent}>
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
        </p>
        <p style={{position: "relative",float: "left",color: "brown",paddingTop: "10px",display:toshowtwo}} onClick={toshowContent2}>
        <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </p>
      </div>      
      {/* <Markdown source={markdown} /> 被废弃了 */}
      {/* Markdown source------<Markdown>{markdown}</Markdown> */}
      <h1 className='studyname'>{name}</h1>
      <Markdown children={markdown}
              components={{
              code({node, inline, className, children, ...props}) {
                return !inline &&  (children[0].length > 40 || /\.\/|\//.test(children[0])) ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={atomDark}
                    PreTag="div"
                    {...props}
                  />
                ): (
                  <code className={className} {...props}>
                    {children} 
                  </code>
                )
              }
            }}     
        />          
    </div>
  )
}
