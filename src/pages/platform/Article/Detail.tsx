import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { PageHeader } from 'antd';

import { getArticleInfo } from '../../../models/article';
import './Detail.scss'

// 文章详情
function Detail (props:any) {
    const history = useHistory();
    const [dataInfo, setDataInfo] = useState<any>({});
    const { params } = props.match;

    useEffect(() => {
        getArticleInfo(`id=${params.id}`).then((data:any) => {
            setDataInfo(data||{})
        })
    }, [])

    return (
        <div className='app-article-detail'>
            <div className="content">
                <h1>{dataInfo.title}</h1>
                <h5>{dataInfo.resume}</h5>
                <div dangerouslySetInnerHTML={{__html: (dataInfo.content)}}></div>
            </div>
        </div>
    )
}

export default Detail