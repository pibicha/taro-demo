import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';

@connect(({cart}) => ({
  ...cart,
}))
export default class Cart extends Component {
  config = {
    navigationBarTitleText: 'cart',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View>
        cart
      </View>
    )
  }
}
