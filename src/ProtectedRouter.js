import { Navigate, Outlet } from "react-router-dom";

export function userCheckout() {
  const user = sessionStorage.getItem("login");
  return user;
}

export function userEvent() {
  const user = sessionStorage.getItem('userId');
  return user;
}

export function ProtectedCheckout(){
  const isAuth = userCheckout();
  return (
    isAuth ? <Outlet/> : <Navigate to='/login'/>
  );
}

export function ProtectedEvent(){
  const isAuth = userEvent();
  return (
    isAuth ? <Outlet/> : <Navigate to='/'/>
  );
}

