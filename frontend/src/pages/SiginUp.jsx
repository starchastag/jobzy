import { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

const SiginUp = () => {
    const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
        confirmPassword:"",
        gender:""
	});
    const onSumbitHandler = (e) => {
        e.preventDefault();
        console.log(user)
    }
	
    return (
        <form onSubmit={onSumbitHandler}>
            <div className="h-full bg-gray-400 dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")' }} />
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                First Name
                                            </label>
                                            <input value={user.firstName} onChange={(e)=>setUser(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <input value={user.lastName} onChange={(e)=>setUser(e.target.value)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input 
                                        value={user.email} onChange={(e)=>setUser(e.target.value)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                                Password
                                            </label>
                                            <input value={user.password} onChange={(e)=>setUser(e.target.value)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                            <p className="text-xs italic text-red-500">Please choose a password.</p>
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                                                Confirm Password
                                            </label>
                                            <input value={user.confirmPassword} onChange={(e)=>setUser(e.target.value)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************" />
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                                                Gender
                                            </label>
                                           <div className='flex items-center my-4'>
                                            <p>Male</p>
                                            <input onChange={(e)=>setUser(e.target.value)} type="checkbox" defaultChecked className='checkbox mx-2' />
                                           </div>
                                           <div className='flex items-center my-4'>
                                            <p>Female</p>
                                            <input onChange={(e)=>setUser(e.target.value)} type="checkbox"  className='checkbox mx-2' />
                                           </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <input className="w-full px-4 py-2 font-bold text-black bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline" type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default SiginUp
