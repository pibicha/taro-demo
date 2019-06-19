import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';

@connect(({home}) => ({
  ...home,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
      // fixme : 这些参数随便怎么写都可以，之后能取到就行
      payload:{a:111,b:222}
    });
  };

  render() {
    return (
      <View>
        首页
        {this.props.title}
      </View>
    )
  }
}

