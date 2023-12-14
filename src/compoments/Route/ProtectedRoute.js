import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
   isAuthenticated,
   user,
   children,
   adminRoute,
   isAdmin,
   redirect = "/login",
    }) => {
      

      
    if(isAuthenticated===false){
      return <Navigate to={redirect} />
    }

    if(isAdmin === true && user.role !=="admin"  ){
      return <Navigate to={redirect}/>;
    }



    return children ? children : <Outlet/>;
   

    }

export default ProtectedRoute;
