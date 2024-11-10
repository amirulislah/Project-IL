import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa"
const Footer = () => {
    return (
        <footer className='bg-green-800 px-4 md:px-16 lg:px-28 py-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>
                    HidroAkuaponik
                    </h2>
                    
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>Link</h2>
                    <ul>
                        <li><a href="" className='hover:underline text-gray-300'>Beranda</a></li>
                        <li><a href="" className='hover:underline text-gray-300'>Produk</a></li>
                        <li><a href="" className='hover:underline text-gray-300'>Solusi</a></li>
                        <li><a href="" className='hover:underline text-gray-300'>Pertanyaan</a></li>
                        <li><a href="" className='hover:underline text-gray-300'>Tentang Kami</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'>Follow Us</h2>
                    <ul className='flex space-x-4'>
                        <li><FaFacebook className="text-white" />{""}
                            <a href="" className='hover:underline text-gray-300'>
                                Facebook
                            </a>
                        </li>
                    
                        <li>
                            <FaTwitter className='text-white' />
                            <a href="" className='hover:underline text-gray-300'>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <FaInstagram className='text-white' />
                            <a href="" className='hover:underline text-gray-300'>Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=' border-t border-white pt-6 text-gray-300 text-center mt-6'>
                <p>
                    @ 2024 All Right Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;
