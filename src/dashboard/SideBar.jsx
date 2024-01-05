import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
// import Profile from '../assets/profile.png'
import { AuthContext } from '../contacts/AuthProvider';

const SideBar = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="User Profile" className='w-16 h-16'>
                    <p className='text-pink-900'>
                        {user?.displayName || "Demo User"}
                    </p>
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                            Welcome
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                            Upload Book
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                            Manage Books
                        </Sidebar.Item>
                        <Sidebar.Item href="/shop" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="/logout" icon={HiTable}>
                            Log Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={BiBuoy}>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SideBar


