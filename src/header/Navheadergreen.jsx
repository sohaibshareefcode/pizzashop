

import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { CiTimer } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'PAGES', href: '/pages', current: false },
    { name: 'OUR OFFER', href: '/offer', current: false },
    { name: 'GALLERIES', href: '/galleries', current: false },
    { name: 'BLOG', href: '/blog', current: false },
    { name: 'SHOP', href: '/shop', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navheadergreen() {
    return (
        <div className="max-w-6xl mx-auto">
            
            <div className="bg-[#232323] text-white w-full">
                <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-between items-center">
                    <div className="text-sm flex items-center space-x-4 mb-2 sm:mb-0">
                        <div className="flex items-center">
                            <CiTimer className="h-6 w-6 text-[#8ec63f]" />
                            <span className="ml-1">Working Hours: Mon - Sat 8.00 - 18.00</span>
                        </div>
                        <div className="flex items-center">
                            <MdOutlineWifiCalling3 className="h-6 w-6 text-[#8ec63f]" />
                            <span className="ml-1">Call Us: (+1) 555 234-8765</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button" className="p-1 hover:text-[#8ec63f]">
                            <span className="sr-only">Facebook</span>
                            <FaFacebookF className="h-6 w-6" />
                        </button>
                        <button type="button" className="p-1 hover:text-[#8ec63f]">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </button>
                        <button type="button" className="p-1 hover:text-[#8ec63f]">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="h-6 w-6" />
                        </button>
                        <button type="button" className="p-1 hover:text-[#8ec63f]">
                            <span className="sr-only">Search</span>
                            <CiSearch className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            
       
            <Disclosure as="nav" className="bg-[#8ec63f] w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    
                        <div className="flex items-center">
                            <img
                                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1729148913/logoimg_nvn0mt.png"
                                alt="Your Company"
                                className="h-10 w-auto"
                            />
                        </div>

                       
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <DisclosureButton className="inline-flex items-center justify-center p-2 text-white hover:bg-[#fc0100]">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                            </DisclosureButton>
                        </div>

                        <div className="hidden sm:flex sm:space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current ? ' text-white' : 'text-white hover:bg-[#fc0100] hover:text-white',
                                        'px-3 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                to={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
}

export default Navheadergreen;
