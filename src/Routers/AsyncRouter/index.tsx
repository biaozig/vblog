import React, { useState, useEffect } from 'react';
 
// 动态加载组件
function AsyncRouter (importComponent:any){
    const [component, setComponent] = useState(null);

    useEffect(() => {
        importComponent().then((cmp:any) => {
            setComponent(cmp.default)
        })
    }, [])
    
    // return component ? <component /> : null;
    return null;
}
 
export default AsyncRouter;