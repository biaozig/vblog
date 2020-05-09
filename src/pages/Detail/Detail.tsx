import React from 'react'
import BasicIndex from '../../layouts/BasicIndex'
import './Detail.scss'


function Detail () {

    return (
        <div className='app-article-detail'>
            <BasicIndex>
                <div className="site-layout-content">
                    <div dangerouslySetInnerHTML={{__html:`vue后台管理系统实践方案总结——简易电商后管: https://www.jianshu.com/p/13025364c1a8`}}></div>
                </div>
            </BasicIndex>
        </div>
    )
}

export default Detail