import {RouteObject, Outlet} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import Header from '../components/navbar/Header'
import Cart from '../pages/Cart'
import ContactPage from '../pages/ContactPage'
import Store from '../pages/Store'
import ProductDetailsPage from '../pages/ProductDetailsPage'



const router:RouteObject[] = [
    {
       element: <div>
        <Header />
        <Outlet />
       </div>,
       path: '/',
       children: [
        {
            element: <MainPage />,
            index: true
        },
        {
            element: <Cart />,
            path: '/Cart'
        },
        {
            element: <ContactPage />,
            path: '/Contact'
        },
        {
            element: <Store />,
            path: '/Store'
        },
        {
            element: <ProductDetailsPage />,
            path: '/product/:id',
        },
       
       ]
    }
]


export default router