import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GLOBAL_STATE } from '../../commun/utils/globalState'
import { LIST_ROUTES } from '../../commun/utils/routes'

export const PrivateRoute = (props: any) => {
    const { component: Component, ...rest } = props
    return (
        <Route
            {...rest}
            render={(propsRender: any) => {
                if (GLOBAL_STATE.isLogged) {
                    <Component {...propsRender} />
                }
                return (
                    <Redirect to={LIST_ROUTES.signIn} />
                )
            }
            }
        />
    )

}

PrivateRoute.propTypes = {
    component: PropTypes.any,
    path:PropTypes.string,
    exact: PropTypes.bool,
}