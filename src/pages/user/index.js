import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtButton } from 'taro-ui';
@connect(({user}) => ({
  ...user,
}))
export default class User extends Component {
  config = {
    navigationBarTitleText: 'user',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View>
        <AtButton type='primary' size='small'>User</AtButton>
      </View>
    )
  }
}
