import  { Component } from 'react';
import { Button} from 'antd'
import { connect } from 'dva';

@connect(({user}) => ({
  ...user,
}))
export default class User extends Component {

  componentDidMount = () => {

  };

  render() {
    return (
      <div>
        <Button primary>User</Button>
      </div>
    )
  }
}
