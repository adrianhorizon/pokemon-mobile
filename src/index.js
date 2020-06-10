import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import API from './utils/api';
import TYPES from './utils/types';
import Navigator from './navigator';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.allPokemons();
    this.props.dispatch({
      type: TYPES.SET_CATEGORY_LIST,
      payload: {
        categoryList,
      },
    });
  }

  render() {
    if (this.props.selectedHotel) {
      return <Navigator />;
    }
    return (
      <Navigator />
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedHotel: state.selectedHotel,
  };
};

export default connect(mapStateToProps)(AppLayout);
