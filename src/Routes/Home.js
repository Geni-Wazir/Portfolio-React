import React from 'react'
import Profile from '../Components/Profile'
import About from '../Components/About'


export default function Home(props) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 h-full my-0">
        <div className="w-full flex flex-col lg:flex-row lg:justify-betwee main-container">
            <Profile mode={props.mode} bgColor={props.bgColor}/>
            <About  mode={props.mode} bgColor={props.bgColor}/>
        </div>
    </div>

  )
}
