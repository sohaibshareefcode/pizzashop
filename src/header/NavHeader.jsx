
import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

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

function NavHeader() {
    return (
      <div >
        <Disclosure as="nav" className="pt:5">
            <div className="container  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                       
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#fc0100] hover:text-white ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://res.cloudinary.com/dh3rxo5xv/image/upload/v1728973897/imglogo_pra4dz.png"
                                className="h-10 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href} 
                                        className={classNames(
                                            item.current ? 'bg-[#fc0100] text-white' : 'text-white hover:bg-[#fc0100]  hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full  p-1 text-white hover:text-[#fc0100] ">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Facebook</span>
                            <FaFacebookF className="h-6 w-6" />
                        </button>
                        <button type="button" className="relative rounded-full  p-1 text-white hover:text-[#fc0100] ">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </button>
                        <button type="button" className="relative rounded-full p-1 text-white hover:[#fc0100]">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="h-6 w-6" />
                        </button>
                        <button type="button" className="relative rounded-full p-1 text-white hover:text-[#fc0100] ">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Search</span>
                            <CiSearch className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link} 
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
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

export default NavHeader;
