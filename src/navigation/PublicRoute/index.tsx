import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'
import { GLOBAL_STATE } from '../../commun/utils/globalState'
import { LIST_ROUTES } from '../../commun/utils/routes'

export const PublicRoute = (props: any) => {
    const { component: Component, restricted, ...rest } = props

    return (
        <Route
            {...rest}

            render={(routeProps: any) => {
                if (GLOBAL_STATE.isLogged && restricted) {
                    return (
                        <Redirect to={LIST_ROUTES.backOffice} />
                    )
                }
                return (
                    <Component {...routeProps} />
                )
            }
            }
        />
    )
}

PublicRoute.propTypes = {
    restricted: PropTypes.bool,
    component: PropTypes.any,
    path:PropTypes.string,
    exact: PropTypes.bool,
}


