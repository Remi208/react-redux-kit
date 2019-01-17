import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {action} from '../../store/app/actions'
import './styles.scss';

const putStateToProps = (state) => {
  return {
    property: state.property,
  }
}

const putActionsToProps = (dispatch) => {
  return {
    action: bindActionCreators(action, dispatch),
  }
}

class App extends React.Component{
  render(){
    const {action, property} = this.props;
    return(
      <div className="app">{property}</div>
    )
  }
}

export default connect(putStateToProps, putActionsToProps)(App)
