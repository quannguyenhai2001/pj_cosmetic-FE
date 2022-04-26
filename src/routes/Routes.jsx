import DefaultLayout from "layouts/DefaultLayout/DefaultLayout"
import ProfileLayout from "layouts/ProfileLayout/ProfileLayout";
import React from "react";
import { useSelector } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import HomeAdminScreen from "screens/Admin/HomeAdminScreen/HomeAdminScreen";
import SignInAdminScreen from "screens/Admin/SignInAdminScreen/SignInAdminScreen";
import ChangeInforUserScreen from "screens/User/ChangeInforUserScreen/ChangeInforUserScreen";
import HomeUserScreen from "screens/User/HomeUserScreen/HomeUserScreen";
import InforUserScreen from "screens/User/InforUserScreen/InforUserScreen";
import ProductDetailScreen from "screens/User/ProductDetailScreen/ProductDetailScreen";
import ProductsScreen from "screens/User/ProductsScreen/ProductsScreen";
import PaymentScreen from "screens/User/PaymentScreen/PaymentScreen";
import SignInUserScreen from "screens/User/SignInUserScreen/SignInUserScreen";
import SignUpUserScreen from "screens/User/SignUpUserScreen/SignUpUserScreen";
import TestScreen from "screens/User/TestScreen/TestScreen";
import SearchScreen from "screens/User/SearchScreen/SearchScreen";



const RouteConfigs = [
    {
        path: "/",
        element: HomeUserScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,

    },
    {
        path: "/test",
        element: TestScreen,
        isPrivate: false,
        layout: React.Fragment,
        isScreenAdmin: false,

    },
    {
        path: "/sign-up",
        element: SignUpUserScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,

    },
    {
        path: "/sign-in",
        element: SignInUserScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,
    },
    {
        path: "/user/:id",
        element: InforUserScreen,
        isPrivate: true,
        layout: ProfileLayout,
        isScreenAdmin: false,
    },
    {
        path: "/user/:id/change-infor",
        element: ChangeInforUserScreen,
        isPrivate: true,
        layout: ProfileLayout,
        isScreenAdmin: false,
    },
    //list product by child cate
    {
        path: "/products/:categoryId",
        element: ProductsScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,
    },
    //detail product
    {
        path: "/products/detail/:id",
        element: ProductDetailScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,
    },
    //payment
    {
        path: "/user/:id/payment",
        element: PaymentScreen,
        isPrivate: true,
        layout: DefaultLayout,
        isScreenAdmin: false,

    },
    //search
    {
        path: "/search",
        element: SearchScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: false,

    },
    // {
    //     path: "/bill",
    //     element: BillUserScreen,
    //     isPrivate: true,
    //     layout: DefaultLayout,
    //     isScreenAdmin: false,
    // },

    //admin
    {
        path: "/admin",
        element: SignInAdminScreen,
        isPrivate: false,
        layout: DefaultLayout,
        isScreenAdmin: true,
    },
    {
        path: "/admin/home",
        element: HomeAdminScreen,
        isPrivate: true,
        layout: DefaultLayout,
        isScreenAdmin: true,
    },
    // {
    //     path: "/admin",
    //     element: "admin",
    //     isPrivate: false,
    //     layout: <DefaultLayout />,
    //     isScreenAdmin: true,
    // },
    // {
    //     path: "/admin/quanly",
    //     element: "quanly",
    //     isPrivate: true,
    //     layout: <DefaultLayout />,
    //     isScreenAdmin: true,
    // },

]
function PrivateRouter() {
    const userType = useSelector(state => state.user.userDetail.role);
    const jwtToken = localStorage.getItem("token");
    return RouteConfigs.map((route, index) => {
        if ((!route.isPrivate || (route.isPrivate && jwtToken && route.isScreenAdmin === false && userType === "user")) || (route.isPrivate && jwtToken && route.isScreenAdmin === true && userType === "admin")) {
            return <Route key={index} path={route.path} element={(() => {
                return (<route.layout>
                    <route.element />
                </route.layout>)
            })()}
            />
        }
        else if (route.isPrivate && !jwtToken && route.isScreenAdmin === false) {
            return <Route key={index} path={route.path} element={<Navigate to="/sign-in" />} />
        } else if (route.isPrivate && !jwtToken && route.isScreenAdmin === true) {
            return <Route key={index} path={route.path} element={<Navigate to="/admin" />} />
        }
        else {
            return <Route key={index} path={route.path} element={<Navigate to="/" />} />
        }
    })
}

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                {PrivateRouter()}
            </Routes>
        </BrowserRouter>
    )
}