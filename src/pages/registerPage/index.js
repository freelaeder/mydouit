// src/pages/registerPage/index.js
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {userCreator} from "@store/creator/usercreator";
import {registerRequest} from "@requests/auth";
import {toast} from "react-toastify";

const RegisterPage = (props) => {
    const [user, setUser] = useState({username: '', email: '', password: ''})
    // 记录注册请求状态
    const [registerRequestStatus,setRegisterRequestStatus] = useState('idle')
    // 记录注册请求错误信息
    const [registerRequestError,setRegisterRequestError] = useState(null)
    // 路由
    const navigate = useNavigate()

    const registerAuth = async (e) => {
        e.preventDefault()
        if (registerRequestStatus === 'padding') return;
        setRegisterRequestStatus('padding')
        setRegisterRequestError(null)
        try {
            // send
            const data = await registerRequest(user)
            // change status
            setRegisterRequestStatus('success')
            setRegisterRequestError(null)
            // tip
            toast.success('🦄 注册成功!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // redux
            const {userCreator} =props
            userCreator(data.user)
            // 跳转
            navigate('/',{replace:true})
        } catch (error) {
            console.log('error',error)
            setRegisterRequestStatus('error')
            setRegisterRequestError(error)
        }

    }
    // 更新表单状态
    const updateFormState = (event) => {
        // 将表单状态更新为用户在表单项中输入的内容
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    const {username, email, password} = user
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>
                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>
                        <form onSubmit={registerAuth}>
                            <fieldset className="form-group">
                                <input
                                    name={'username'}
                                    value={username}
                                    onChange={updateFormState}
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Your Name"
                                    autoComplete='on'
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    name={'email'}
                                    value={email}
                                    onChange={updateFormState}
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    autoComplete='on'
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    name={'password'}
                                    value={password}
                                    onChange={updateFormState}
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete='on'
                                />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                {
                                    registerRequestStatus === 'idle' ? 'Sign up' : registerRequestStatus === 'padding' ? 'padding' : 'success'
                                }

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(undefined,{
    userCreator
})(RegisterPage)