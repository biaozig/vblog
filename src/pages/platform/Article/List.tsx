import React, { useState, useEffect } from 'react';
import { Layout, Pagination } from 'antd';
import * as articleApis from '../../../models/article';

import ArticleItem from '../../../components/ArticleItem';
import RecomUser from '../../../components/RecomUser';
import './List.scss' 

const { Content, Sider, Footer } = Layout;

function ArticleList() {
    // 跳转
    // const history = useHistory();
    // const historyPush = (path: string) => {
    //     history.push(path)
    // }
    const [dataList, setDataList] = useState([]);

    const getRequest = async () => {
        let data:any = await articleApis.getArticleList();

        console.log(data)
        setDataList(data)
    }

    useEffect(() => {
        getRequest();

    }, [])

    return (
        <div className='app-article_list'>
            <Layout className='container'>
                <Content>
                    {dataList.map((item:any) => (<ArticleItem key={item.id} data={item} />))}

                    {/* 一页20 */}
                    <Pagination 
                        total={dataList.length} 
                        pageSize={20} 
                        defaultCurrent={1}
                        showSizeChanger={false}
                        style={{marginTop:15}} />
                </Content>
                <Sider width={300} style={{ background: '#fff' }}>
                    <div className='aside'>
                        <img src="https://oimagea7.ydstatic.com/image?id=-3791438509904319618&product=adpublish&w=520&h=347" alt=""/>
                        <RecomUser />
                    </div>
                </Sider>
            </Layout>
        </div>
    )
}

export default ArticleList