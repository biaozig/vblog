import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';

import MarkDown from '../../../components/MarkDown';
import { createArticle } from '../../../models/article';
import './Update.scss' 

const { Content, Sider, Footer } = Layout;

function ArticleUpdate() {
    // 跳转
    const history = useHistory();
    const [params, setParams] = useState([]);

    const getRequest = async () => {

        let res = await createArticle({});

        console.log(res)
    }

    useEffect(() => { }, [])


    // 存放数据
    const saveParams = (type:string, val:any) => {
        console.log(type)
        // params[type] = val;
        // setParams(params)
    }


    return (
        <div className='app-article_create'>
            <Layout className='container'>
                <Content>
                    <div>
                        文章标题
                    </div>
                    <div>
                        简述
                    </div>
                    {/* 文章详情 */}
                    <MarkDown onSave={(val:any)=>saveParams('desc', val)} />
                </Content>
            </Layout>
        </div>
    )
}

export default ArticleUpdate