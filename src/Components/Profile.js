import React from 'react';
import { Typography } from "@material-tailwind/react";
import profileImage from './images/profile.png';

export default function Profile(props) {
  return (
        <div className={`w-full py-4 profile-body mt-6 bg-[${props.bgColor}]`}>
          <figure className="relative w-full">
		  <div className="relative">
		  <img className="w-full rounded-3xl object-cover object-center" src={profileImage} alt="Profile"/>
			<div className={`absolute bottom-0 inset-x-4 h-8 bg-gradient-to-b from-transparent to-blue-${props.mode? '200':'100'}`}/>
			</div>
            <figcaption className="relative bottom-8 items-center justify-between  left-2/4 flex flex-col w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h2" className="items-center justify-between text-[1.8rem]" color="blue-gray">
                  Saurabh Kumar
                </Typography>
              </div>
            </figcaption>
            <div className="relative items-center justify-center text-center bottom-5 text-[#1b2252] flex flex-wrap">
                <span className="bg-[#9eaaf7] text-base font-semibold me-2 px-2.5 py-0.5 rounded inline-block mb-2">CEH</span>
                <span className="bg-[#9eaaf7] text-base font-semibold me-2 px-2.5 py-0.5 rounded inline-block mb-2">Ethical Hacker</span>
                <span className="bg-[#9eaaf7] text-base font-semibold me-2 px-2.5 py-0.5 rounded inline-block mb-2">Penetration Tester</span>
            </div>
			<div className={`relative items-center justify-center text-center  bottom-5 p-2 font-medium`}>
				<p>I am a skilled and certified Ethical Hacker & Penetration Tester with a remarkable history of evaluating countless Websites, APIs, Networks, Mobile, and Cloud setups.</p>
			</div>
			</figure>
			<div className="px-5 flex flex-col contact-info">
				<div className="flex flex-col">
					<label htmlFor="floating_filled" className="text-xs dark:text-gray-700">Email</label>
					<div className="flex items-center px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
						</svg>
						<a href="mailto:saurabh.kumar.off@gmail.com" className="px-1 font-bold text-sm hover:text-[#0688b8]">
							saurabh.kumar.off@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="floating_filled" className="text-xs dark:text-gray-700 mt-2">GitHub:</label>
					<div className="flex items-center px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-6">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
						</svg>
					<a href="https://github.com/Geni-Wazir" className="px-1 font-bold text-sm hover:text-[#0688b8]" rel="noreferrer" target="_blank">
					Geni-Wazir
					</a>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="floating_filled" className="text-xs dark:text-gray-700 mt-2">LinkedIn:</label>
					<div className="flex items-center px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-6">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" />
						</svg>
					<a href="https://www.linkedin.com/in/saurabh-kumar-5780b4203" className="px-1 font-bold text-sm hover:text-[#0688b8]" rel="noreferrer" target="_blank">
						Saurabh Kumar
					</a>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="floating_filled" className="text-xs dark:text-gray-700 mt-2">Medium</label>
					<div className="flex items-center px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6">
							<path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"/>
						</svg>
					<a href="https://medium.com/@crazycoolbrother" className="px-1 font-bold text-sm hover:text-[#0688b8]" rel="noreferrer" target="_blank">
					Geni_Wazir
					</a>
					</div>
				</div>
			</div>

        </div>
  );
}