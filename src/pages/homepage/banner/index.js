// 首页 Banner 组件: src/pages/homePage/banner/index.js
import React from "react";
import {connect} from "react-redux";

 class Banner extends React.Component {
    render() {
        const {token} = this.props
        return (
            <>
                {
                    token ? null : (
                        <div className="banner">
                            <div className="container">
                                <h1 className="logo-font">conduit</h1>
                                <p>A place to share your knowledge.</p>
                            </div>
                        </div>
                    )
                }

            </>

        );
    }
}

export default connect((state) => ({
    token:state.userReducer.user.token,
    username:state.userReducer.user.username
}))(Banner)