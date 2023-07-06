import React from "react";
import MyNav from './components/main/MyNav';
import LatestRelease from './components/main/LatestRelease';
import Welcome from './components/main/Welcome';
import MyFooter from './components/main/MyFooter';

const Homepage = () => {
    return (
        <>
        <MyNav />
        <Welcome />
        <LatestRelease query={this.state.query} />
        <MyFooter />
        </>
    );
};

export default Homepage; 