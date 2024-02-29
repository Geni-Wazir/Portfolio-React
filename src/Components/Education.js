import React from 'react'
import collageImage from './images/collage.jpeg';
import schoolImage from './images/school.jpg';

export default function Education(props) {
  return (
	<div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
				<svg className="h-10 w-10 flex-none" viewBox="0 0 16 16" strokeWidth="1.5" stroke="none" fill="url(#gradient)" strokeLinecap="round" strokeLinejoin="round">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path fillRule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"/>
					<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
					<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
				</svg>
				<h2 className="text-4xl font-extrabold px-2">Education</h2>
			</div>
			<div className="items-center justify-center mt-5 overflow-y-scroll h-[44rem] pl-2 font-medium py-5">
				<div className="flex flex-col grid-cols-9 mx-auto md:grid pr-5">
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-indigo-${props.mode ? '300': '200'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<img className="w-full h-[12rem] rounded-t-lg object-cover object-center" src={collageImage} alt="College"/>
							<div className='px-4 py-2'>
								<h3 className="text-lg font-bold lg:text-2xl">NIIT University</h3>
								<p className="pt-2 leading-6 text-sm">BTech. in Computer Science with Specialization in 
									<span className="mx-1 bg-red-600 text-red-200 text-xs font-medium me-2 px-1 py-0.5 rounded">Cybersecurity</span>
								</p>
								<p className="mt-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									2020-2024
								</p>
								<p className="pt-4 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Cryptography 
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Blockchain 
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Computer Networks
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Data Structures and Algorithms 
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Operating System 
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									DevOps 
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Computer Forensics 
								</p>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-indigo-300 rounded-t-full from-indigo-400 to-indigo-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-indigo-500 border-4 border-indigo-300 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-indigo-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-indigo-500 border-4 border-indigo-300 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-indigo-${props.mode ? '300': '200'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<img className="w-full h-[12rem] rounded-t-lg object-cover object-center" src={schoolImage} alt="School"/>
							<div className='px-4 py-2'>
							<h3 className="text-lg font-bold lg:text-2xl">Kendriya Vidyalaya Ballygunge</h3>
								<p className="pt-2 leading-6 text-sm">Secondary and Senior Secondary School</p>
								<p className="mt-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									2017-2020
								</p>
								<p className="pt-4 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									12th Board Marks : <b className='px-1'> 93.2% </b>
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									10th Board Marks : <b className='px-1'> 85% </b>
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Physics
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Chemistry
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Mathematics
								</p>
								<p className="pt-1 leading-6 text-sm flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#6365f1" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#6365f1" className="w-5 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Computer Science 
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
        </div>
  )
}
