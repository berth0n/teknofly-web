import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { LIST_ROUTES } from '../../commun/utils/routes'
import { ContactScreen } from '../../presentation/screens/ContactScreen'
import { HomeScreen } from '../../presentation/screens/HomeScreen'
import { PublicRoute } from '../PublicRoute'

export const Navigation = (props: any) => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute component={HomeScreen} path={LIST_ROUTES.home} exact />
                <PublicRoute component={ContactScreen} path={LIST_ROUTES.home} exact />
            </Switch>
        </BrowserRouter>
    )
}