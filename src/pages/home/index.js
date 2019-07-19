import  { Component } from 'react';
import { connect } from 'dva';

@connect(({home}) => ({
  ...home,
}))
export default class Index extends Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
      // fixme : 这些参数随便怎么写都可以，之后能取到就行
      payload:{a:111,b:222}
    });
  };

  render() {
    return (
      <div>
        首页
        {this.props.title}
      </div>
    )
  }
}

