import React from 'react';
import './App.module.css';
import Header from "./Header/Header";
import Navigations from "./Navigations/Navigations";
import Monday from "./Monday/Monday";
import Tuesday from "./ Tuesday/Tuesday";
import m from "./App.module.css"
import {HashRouter, Route} from "react-router-dom";
import Loading from "./Loading/Loading";
import Wednesday from "./Wednesday/Wednesday";
import {connect} from "react-redux";
import {loading} from "./Redux/Reducers/AppReducer";


class App extends React.Component {

    componentDidMount() {
        setTimeout(this.props.loading, 2000)
    };


    render = () => {
        if (this.props.loadings === false) {
            return (
                <HashRouter>
                    <div className={m.App}>
                        <div>
                            <Header/>
                        </div>
                        <div className={m.navAndContent}>
                            <Navigations/>
                            <Route exact path="/Monday" render={() => <Monday/>}/>
                            <Route exact path="/Tuesday" render={() => <Tuesday/>}/>
                            <Route exact path="/Wednesday" render={() => <Wednesday/>}/>
                        </div>
                    </div>
                </HashRouter>
            );
        } else {
            return (
                <div className={m.loading}>
                    <Loading/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loadings: state.AppReducer.loading
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        loading: () => {
            dispatch(loading())
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
