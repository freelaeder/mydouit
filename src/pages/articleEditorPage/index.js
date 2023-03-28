// src/pages/articleEditorPage/index.js
import React from "react";
import {articleBySlugRequest, publishArticleRequest, updateArticleRequest} from "@requests/article";
import {useNavigate, useParams} from 'react-router-dom';

class ArticleEditorPage extends React.Component {
    state = {
        article: {
            title: '', description: '', body: '', tagList: ''
        }, // 记录注册请求状态
        registerRequestStatus: "idle", // 记录注册请求错误信息
        registerRequestError: null, slugs: ''

    }

    async componentDidMount() {
        if (this.props.slugs) {
            this.setState({
                slugs: this.props.slugs
            })
            const res = await articleBySlugRequest(this.props.slugs)
            res && this.setState({
                article: {
                    title: res.article.title,
                    description: res.article.description,
                    body: res.article.body,
                    tagList: res.article.tagList.join(',')
                }
            })
        }
    }

    // post Articles
    publishArticles = async (event) => {
        event.preventDefault()
        if (this.state.registerRequestStatus === 'pending') return
        this.setState({
            registerRequestStatus: 'pending', registerRequestError: null
        })
        try {
            // 即将传递到服务端的 article 请求参数
            const article = {
                ...this.state.article,
                tagList: this.state.article.tagList.split(","),
            };

            const res = await (this.state.slugs ? updateArticleRequest(this.state.slugs, article) : publishArticleRequest(article))
            this.setState({
                registerRequestStatus: 'success', registerRequestError: null
            })
            this.props.navigate(`/article/${res.article.slug}`)

        } catch (e) {
            this.setState({
                registerRequestStatus: 'error', registerRequestError: e.response?.data.errors,
            })
        }
    }

    // update Form
    updateFormData = (event) => {
        const {name, value} = event.target
        this.setState({
            article: {
                ...this.state.article, [name]: value
            }
        })
    }

    render() {
        const {title, description, body, tagList} = this.state.article
        return (<div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <form onSubmit={this.publishArticles}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        name='title'
                                        value={title}
                                        onChange={this.updateFormData}
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Article Title"
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        name='description'
                                        value={description}
                                        onChange={this.updateFormData}
                                        type="text"
                                        className="form-control"
                                        placeholder="What's this article about?"
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                    <textarea
                        name='body'
                        value={body}
                        onChange={this.updateFormData}
                        className="form-control"
                        rows="8"
                        placeholder="Write your article (in markdown)"
                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        name='tagList'
                                        value={tagList}
                                        onChange={this.updateFormData}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter tags"
                                    />
                                    <div className="tag-list"></div>
                                </fieldset>
                                <button
                                    className="btn btn-lg pull-xs-right btn-primary"
                                    type="submit"
                                >
                                    {this.state.slugs ? 'Edite Article' : this.state.registerRequestStatus === 'pending ' ? 'pending Article' : 'publish Article'

                                    }
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}


const WithArticle = () => {
    const navigate = useNavigate()
    const {slug} = useParams()
    return <ArticleEditorPage navigate={navigate} slugs={slug}/>
};


export default WithArticle