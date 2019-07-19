import { Component } from 'react';
import { connect } from 'dva';

@connect(({cart}) => ({
  ...cart,
}))
export default class Cart extends Component {

  componentDidMount = () => {

  };

  render() {
    return (
      <div>
        cart
      </div>
    )
  }
}
