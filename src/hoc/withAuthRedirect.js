import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsRedirect = (state) => {
    return {
      logged_in: state.login.logged_in
    }
  }

export const withAuthRedirect = (Component) => {
    class withRedComp extends React.Component {
        render() {
            if (!this.props.logged_in) {
                return <Redirect to={'/login'}></Redirect>
            }
            return <Component {...this.props} />
            }
        }
        let withRedWithState = connect( mapStateToPropsRedirect ) (withRedComp);
    return withRedWithState;
  }