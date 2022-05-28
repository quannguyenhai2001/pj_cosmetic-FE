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
import HomeUserScreen from "screens/User/HomeUserScreen/HomeUserScreen";
import InforUserScreen from "screens/User/InforUserScreen/InforUserScreen";
import ProductDetailScreen from "screens/User/ProductDetailScreen/ProductDetailScreen";
import ProductsScreen from "screens/User/ProductsScreen/ProductsScreen";
import PaymentScreen from "screens/User/PaymentScreen/PaymentScreen";
import SignInUserScreen from "screens/User/SignInUserScreen/SignInUserScreen";
import SignUpUserScreen from "screens/User/SignUpUserScreen/SignUpUserScreen";
import TestScreen from "screens/User/TestScreen/TestScreen";
import SearchScreen from "screens/User/SearchScreen/SearchScreen";
import ChangePasswordScreen from "screens/User/ChangePasswordScreen/ChangePasswordScreen";
import OrderUserScreen from "screens/User/OrderUserScreen/OrderDetailScreen/OrderDetailUserScreen";
import DeleteAccountUserScreen from "screens/User/DeleteAccountUserScreen/DeleteAccountUserScreen";
import TestScreen1 from "screens/User/TestScreen1/TestScreen1";
import TestDialog from "screens/User/TestDialog/TestDialog";
import NotFound from "screens/NotFound/NotFound";
import OrderLayout from "layouts/OrderLayout/OrderLayout";
import AllOrderScreen from "screens/User/OrderUserScreen/AllOrderScreen/AllOrderScreen";
import DeliveryScreen from "screens/User/OrderUserScreen/DeliveryScreen/DeliveryScreen";
import DeliveredOrderScreen from "screens/User/OrderUserScreen/DeliveredOrderScreen/DeliveredOrderScreen";



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
        element: TestDialog,
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
        path: "/user/:id/change-password",
        element: ChangePasswordScreen,
        isPrivate: true,
        layout: ProfileLayout,
        isScreenAdmin: false,
    },
    {
        path: "/user/:id/order",
        element: AllOrderScreen,
        isPrivate: true,
        layout: OrderLayout,
        isScreenAdmin: false,
    },

    {
        path: "/user/:id/order/all",
        element: AllOrderScreen,
        isPrivate: true,
        layout: OrderLayout,
        isScreenAdmin: false,
    },
    {
        path: "/user/:id/order/delivering",
        element: DeliveryScreen,
        isPrivate: true,
        layout: OrderLayout,
        isScreenAdmin: false,
    },
    {
        path: "/user/:id/order/delivered",
        element: DeliveredOrderScreen,
        isPrivate: true,
        layout: OrderLayout,
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

    //not found
    {
        path: "*",
        element: NotFound,
        isPrivate: false,
        layout: React.Fragment,
        isScreenAdmin: false,
    },
]
function PrivateRouter() {
    const userType = useSelector(state => state.user.userDetail.role);
    // const [isRole, setIsRole] = React.useState(false);

    // React.useEffect(() => {
    //     if (userType) {
    //         setIsRole(true)
    //         console.log("4545")
    //     }
    // }, [userType])
    const jwtToken = localStorage.getItem("token");
    return RouteConfigs.map((route, index) => {

        if ((!route.isPrivate || (route.isPrivate && jwtToken && route.isScreenAdmin === false)) || (route.isPrivate && jwtToken && route.isScreenAdmin === true)) {
            return <Route key={index} path={route.path} element={(() => {
                return (
                    <route.layout>
                        <route.element />
                    </route.layout>
                )
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
        (<BrowserRouter>
            < Routes >
                {PrivateRouter()}
            </Routes>
        </BrowserRouter>)
    )
}