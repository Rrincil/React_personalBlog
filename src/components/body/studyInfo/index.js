import React from 'react';
import Markdown from 'react-markdown';
import md from './studyFiles/README.md';
import md2 from './studyFiles/Jquery.md'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
class index extends React.PureComponent {
  state = {
    markdown: ''
  }
 
  componentDidMount() {
    fetch(md2)
      .then(res => res.text())
      .then(text => {
        this.setState({ markdown: text })
      });
  }
 
  render() {
    const { markdown } = this.state;
    const a = JSON.stringify(this.props)
    console.log(a);
    // console.log(markdown);
    return (
      <>
      {/* <Markdown source={markdown} /> 被废弃了 */}
      {/* Markdown source------<Markdown>{markdown}</Markdown> */}
      Markdown source------<Markdown children={markdown}
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

      </>
    );
  }
}
 
export default index;