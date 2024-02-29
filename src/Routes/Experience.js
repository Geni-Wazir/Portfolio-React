import React from 'react'
import ProfileComponent from '../Components/Profile'
import ExperienceComponent from '../Components/Experience'

export default function Experience(props) {
  return (
	<div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
		<div className="w-full flex flex-col lg:flex-row lg:justify-betwee main-container">
			<ProfileComponent mode={props.mode} bgColor={props.bgColor}/>
			<ExperienceComponent mode={props.mode} bgColor={props.bgColor}/>
		</div>
	</div>
  )
}
