/**
 * Created by zy on 2017/11/25.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cs from 'classnames';

import urlUtils from '../../utils/urlUtils';
import { ACTION_FUNCS } from '../../actions/user/login';
import Login from '../../components/user/login';
import Register from '../../components/user/register'
import './login.less'


const queryParams = urlUtils.getQueryParams();


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: queryParams.action === 'register' ? 'REGISTER' : 'LOGIN'
        }
        this.tagChange = this.tagChange.bind(this);
    }
    render(){
        return (<div className="bt-page-user-login">
            <div className="logo">LOGO</div>
            <div className="tag-container bt-float-clear">
                <div className={cs({
                    "panel-tag": true,
                    "active": this.state.tag === 'LOGIN'
                })}><span onClick={this.tagChange.bind(this, 'LOGIN')}>登录</span></div>
                <div className={cs({
                    "panel-tag": true,
                    "active": this.state.tag === 'REGISTER'
                })}><span onClick={this.tagChange.bind(this, 'REGISTER')}>注册</span></div>
            </div>
            {(this.state.tag === 'LOGIN')
                ? <Login onLogin={this.props.login} netstatus={this.props.loginStatus}></Login>
                : null
            }
            {(this.state.tag === 'REGISTER')
                ? <Register onRegister={this.props.register} netstatus={this.props.registerStatus}></Register>
                : null
            }
        </div>)
    }
    tagChange(tag){
        this.state.tag = tag;
        this.setState(this.state);
    }

}

App.PropTypes = {
    loginStatus: PropTypes.symbol,
    registerStatus: PropTypes.symbol
}

function mapStateToProps(state) {
    return {
        loginStatus: state.app.loginStatus,
        registerStatus: state.app.registerStatus
    }
}

// 内部ActionCreators.apply
const mapActionCreators = {
    login: (arg) => ACTION_FUNCS.login(arg),
    register: (arg) => ACTION_FUNCS.register(arg),
}


export default connect(mapStateToProps, mapActionCreators)(App);
