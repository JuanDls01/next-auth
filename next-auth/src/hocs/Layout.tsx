import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React, { ReactNode } from 'react';


import { Footer } from "../components/navigation/Footer";
import Navbar from '../components/navigation/Navbar'

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;