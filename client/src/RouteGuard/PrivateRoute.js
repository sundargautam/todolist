import { Route,Redirect} from "react-router-dom";
export const PrivateRoute = ({component:Component,auth,...rest})=>{
    if (auth) {
        return(
            <Route component={Component} {...rest}/>
        )
    }
    return <Redirect to="/login"/>;
}