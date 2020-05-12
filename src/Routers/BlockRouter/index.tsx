import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { Route  } from 'react-router-dom'


/**
 *  @params 
 *    layout 模板
 *          
 **/ 
function BlockRouter (props:any) {
    useEffect(() => {
        console.log(props)
    })

    return <Route {...props} render={(rest) => { return <props.layout {...rest} /> }} />
}

export default withRouter(BlockRouter)