import React, { Component }  from 'react'
import {
  Provider,
  initialState
} from './'

// provider Actions
class RootProvider extends Component {
  constructor (props) { 
    super(props);
    this.state = initialState;
    this.state.actions = {
      // actionsHere: _actionsHere
    }
  } 

  // _actionsHere = () => {
  // }

  // shouldComponentUpdate
  // componentDidUpdate
  // componentWillReceiveProps

  render () {
    return (
      <Provider value={this.state}>
        {/* actions here, 
          in the value//, its update this Provider
          should be wrapperd 
        */}
        {this.props.children}
      </Provider>
    )
  }
}

export default RootProvider;
