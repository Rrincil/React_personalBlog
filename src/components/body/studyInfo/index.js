import React from 'react';
import Markdown from 'react-markdown';
import md from './README.md';
 
class index extends React.PureComponent {
  state = {
    markdown: ''
  }
 
  // componentWillMount() {
  //   // fetch(md)
  //   //   .then(res => res.text())
  //   //   .then(text => this.setState({ markdown: text }));
  // }
 
  render() {
    const { markdown } = this.state;
    console.log(markdown);
    return (
      <>
      {/* <Markdown source={markdown} /> */}
      {/* <Markdown source={md} /> */}
      </>
    );
  }
}
 
export default index;