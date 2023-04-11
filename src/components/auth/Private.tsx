/* Tutorial - 18 - Component Prop */

import { Login } from "./Login";
import { ProfileProps } from './Profile'
type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn , component : ThisComponent }: PrivateProps) => {
    if (isLoggedIn) {
        return <ThisComponent name="kywleon"/>
    } else {
        return <Login />
    }
}
;