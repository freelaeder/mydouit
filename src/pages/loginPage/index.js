import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {loginRequest} from "@requests/auth";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {userCreator} from "@store/creator/usercreator";
import {AxiosError} from "axios";

const LoginPage = (props) => {
    const [userForm, setUserForm] = useState({
        email: '',
        password: ''
    })
    const [loginStatus, setLoginStatus] = useState({
        // 记录登录功能的请求状态
        loginRequestStatus: "idle",
        // 记录登录功能的请求错误信息
        loginRequestError: null,
    })

    const updateForm = (event) => {
        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        })
    }
    // 路由
    const navigate = useNavigate()
    const sendForm = async (event) => {
        event.preventDefault()
        setLoginStatus({
            ...loginStatus,
            loginRequestStatus: 'padding'
        })
        try {
            const res = await loginRequest(userForm)
            setLoginStatus({
                ...loginStatus,
                loginRequestStatus: 'success'
            })
            // tip
            toast.success('🦄 登录成功!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            //redux
            // props.userCreator(res)
            const {userCreator} = props
            userCreator(res.user)
            // 跳转
            navigate('/')

        } catch (e) {
            console.log(e, 'e')
            if (e instanceof AxiosError) {
                setLoginStatus({
                    loginRequestError: e.response.data.errors,
                    loginRequestStatus: 'error'
                })
            }
        }

    }
    return (
        <>
            {
                props.token ? <Navigate to={'/'}/> :
                    <div className="auth-page">
                        <div className="container page">
                            <div className="row">
                                <div className="col-md-6 offset-md-3 col-xs-12">
                                    <h1 className="text-xs-center">Sign in</h1>
                                    <p className="text-xs-center">
                                        <Link to="/register">Need an account?</Link>
                                    </p>
                                    <ul className="error-messages">
                                        {
                                            loginStatus.loginRequestError ? (<li>email or
                                                    password {loginStatus.loginRequestError['email or password']}</li>)

                                                : null
                                        }
                                    </ul>
                                    <form onSubmit={(event) => sendForm(event)}>
                                        <fieldset className="form-group">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                placeholder="Email"
                                                value={userForm.email}
                                                name={'email'}
                                                onChange={updateForm}
                                                autoComplete='on'
                                            />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <input
                                                className="form-control form-control-lg"
                                                type="password"
                                                placeholder="Password"
                                                name={'password'}
                                                value={userForm.password}
                                                onChange={updateForm}
                                                autoComplete='on'
                                            />
                                        </fieldset>
                                        <button className="btn btn-lg btn-primary pull-xs-right">
                                            {
                                                loginStatus.loginRequestStatus === 'idle' ? 'Sign up' : loginStatus.loginRequestStatus === 'padding' ? 'padding' : 'Sign up'
                                            }
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    );
};

export default connect((state) => ({token: state.userReducer.user.token}), {userCreator})(LoginPage);