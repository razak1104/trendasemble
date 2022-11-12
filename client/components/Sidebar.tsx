import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import SidebarRow from './SidebarRow';


const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <img className='h-10 w-10 m-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdXudoh9rK6D215xEIfNqHXOBAgEs4rOZkQ&usqp=CAU' alt='logo' />
      <SidebarRow Icon={AiOutlineInstagram} title='Instagram Trends' />
      <SidebarRow Icon={AiOutlineTwitter} title='Twitter Trends' />
      <SidebarRow Icon={FaTiktok} title='TickTok Trends' />
      <SidebarRow Icon={FcGoogle} title='Google Most Searched' />
    </div>
  )
}

export default Sidebar
