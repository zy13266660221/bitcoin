/**
 * Created by zy on 2017/11/25.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../components/common/header/index';

import { ACTION_FUNCS } from '../../actions/trade/index';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return (<div className="bt-layout-page">
            <Header></Header>
            content
        </div>)
    }
}

App.PropTypes = {
}


function mapStateToProps(state) {
    return {
    }
}

const mapActionCreators = {
}


export default connect(mapStateToProps, mapActionCreators)(App);
