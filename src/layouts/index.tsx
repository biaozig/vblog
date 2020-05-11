import React from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'
import Routes from '../Routers/routes'

function BasicLayout(props: any) {
    const history = useHistory();
    const historyPush = (path: string) => {
        history.push(path)
    }

    return (
        <div className='app-basiclayouts'>
            <Switch>
                {Routes.map((ele: any) => (
                    <Route
                        key={ele.mode}
                        render={() => <ele.mode />}
                        // path={ele.path}
                        exact
                    />
                ))}

            </Switch>
        </div>
    )
}

export default BasicLayout;