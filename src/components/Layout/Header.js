'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push('/auth/login');
    };

    return (
        <header className='bg-white w-full text-left text-[2rem] text-gray-200 py-4'>
            <div className='z-20 bg-white px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-16 hxl:px-28 2xl:px-64 3xl:px-96 text-[1rem] flex justify-between items-center'>
                <div className='flex gap-8'>
                    <a href='/' className='text-black'>Home</a>
                    <a href='/products' className='text-black'>Products</a>
                    <a href='/categories' className='text-black'>Categories</a>
                    <a href='/deals' className='text-black'>Deals</a>
                    <a href='/cart' className='text-black'>Cart</a>
                    <a href='/wishlist' className='text-black'>Wishlist</a>

                    {user && <a href='/my-account' className='text-black'>My Account</a>}

                    {user?.isSuperAdmin && (
                        <a href='/superadmin/dashboard' className='text-red-500'>SuperAdmin</a>
                    )}
                </div>

                {user ? (
                    <div className='flex gap-8'>
                        <h1 className='text-black'>Welcome, {user.firstName}!</h1>
                        <button className='text-black' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className='flex gap-4'>
                        <a href='/auth/login' className='text-black'>Login</a>
                        <a href='/auth/register' className='text-black'>Register</a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;