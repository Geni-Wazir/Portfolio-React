import React, { useState } from 'react';

export default function About(props) {
    const [currentYear] = useState(new Date().getFullYear());
  return (
        <div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-12 h-12">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke="url(#gradient)" />
				</svg>
				<h2 className="text-4xl font-extrabold px-2">About</h2>
			</div>
			<div className="items-center justify-center mt-5 h-[44rem] overflow-x-auto font-medium px-10 py-5">
				<p className="py-5 relative flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="#2d86e3" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2d86e3" className="w-4 h-6 flex-none">
						<path strokeLinecap="round" stroklinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
					</svg>
					<span className="px-1">
						I'm a computer science engineer, my dedication to cybersecurity propels me, and I've gained a valuable repository of knowledge and expertise from my internships and engaging talks. My qualifications encompass holding certifications as an Ethical Hacker (on a mission to hunt more)
					</span>
				</p>
					<div className='px-20 font-bold cert'>
						<li> CEH v11 </li>
						<li> OCI Fundamental Architect </li>
					</div>
				<p className="py-5 flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="#2d86e3" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2d86e3" className="w-4 h-6 flex-none">
						<path strokeLinecap="round" stroklinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
					</svg>
					<span className="px-1">
						With a robust <b>{currentYear-2021}+ years</b> of hands-on experience, I've secured over <strong>500+ websites along with networks, mobile, APIs and cloud</strong> adding practical depth to my skills
					</span>
				</p>
				<p className="py-5 flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="#2d86e3" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2d86e3" className="w-4 h-6 flex-none">
						<path strokeLinecap="round" stroklinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
					</svg>
					<span className="px-1">
					Beyond cybersecurity, my expertise spans DevOps principles and web development intricacies. I am proficient in frameworks like <b>Flask</b>, <b>Django</b> and <b>React</b>, allowing me to create robust and dynamic web applications. This comprehensive understanding of technology provides me with a unique perspective that seamlessly integrates security and development.
					</span>
				</p>
			</div>

        </div>
  )
}
