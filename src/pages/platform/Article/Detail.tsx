import React from 'react'
import './Detail.scss'

// 文章详情
function Detail () {

    return (
        <div className='app-article-detail'>
            <div className="site-layout-content">
                <div dangerouslySetInnerHTML={{__html:`vue后台管理系统实践方案总结——简易电商后管: https://www.jianshu.com/p/13025364c1a8`}}></div>
            </div>
        </div>
    )
}

export default Detail