import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import { createBrowserRouter, Navigate } from "react-router-dom";
import PostJob from '../pages/PostJob';
import MyJobs from '../pages/MyJobs';
import Update from '../pages/Update';
import Login from '../pages/Login';
import ContactUs from '../pages/ContactUs';
import SiginUp from '../pages/SiginUp';
import JobDetails from '../pages/JobDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "SignUp", element: <Login />
            },
            { path: "/", element: <Home /> },
            { path: "/PostJob", element: <PostJob /> },
            { path: "/MyJobs", element: <MyJobs /> },
            { path: "/ContactUs", element: <ContactUs /> },
            { path: "/edit-job/:id", element: <Update />, loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`) },
            { path: "/Job/:id", element: <JobDetails /> }



        ],

    },
    {
        path: "SignUp", element: <SiginUp />
    }




]);

export default router;
