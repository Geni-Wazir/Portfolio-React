import React from 'react'
import astra from './Certificates/astra_jan_sept.pdf';
import astra2 from './Certificates/astra_apr_dec.pdf';
import digisec360 from './Certificates/digisec360.pdf';
import mahentech from './Certificates/mahentech.pdf';

export default function Experience(props) {
  return (
	<div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-12 h-12 flex-none">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#gradient)" />
				</svg>
				<h2 className="text-4xl font-extrabold px-2">Work Experience</h2>
			</div>
			<div className="items-center justify-center mt-5 overflow-y-scroll h-[44rem] pl-2 font-medium pt-5">
				<div className="flex flex-col grid-cols-9 mx-auto md:grid pr-5">
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-lime-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<span className='flex items-center justify-between'>
										<a className='flex' href='https://www.getastra.com' target='_blank' rel='noreferrer'>
											Astra Security
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 px-1 flex-none">
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
											</svg>
										</a>
										<a className='flex' href='https://my.getastra.com/researchers/saurabh' target='_blank' rel='noreferrer'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 flex-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
											</svg>
										</a>
									</span>
								</h3>

								<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded">Information Security Analyst </span>
								<span className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Jan 2024 - Present
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Conduct regression testing on the web application, cloud services, APIs, and mobile applications.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Work in close partnership with clients to address identified vulnerabilities, resulting in enhanced security for their systems and software.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<p>
									Secured over<b className='px-1'>250+</b>websites, mobiles, cloud and APIs
									</p>
								</span>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-lime-500 rounded-t-full from-lime-400 to-lime-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-lime-700 border-4 border-lime-500 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-lime-500"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-lime-700 border-4 border-lime-500 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-lime-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<span className='flex items-center justify-between'>
										<a className='flex' href='https://www.getastra.com/' target='_blank' rel='noreferrer'>
											Astra Security
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 px-1 flex-none">
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
											</svg>
										</a>
										<a className='flex' href={astra2} target='_blank' rel='noreferrer'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 flex-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
											</svg>
										</a>
									</span>
								</h3>

								<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded">Information Security Analyst Inter</span>
								<span className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Apr 2023 - Dec 2023
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Conducted regression testing on the web application, cloud services, APIs, and mobile applications.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Worked in close partnership with clients to address identified vulnerabilities, resulting in enhanced security for their systems and software.
								</span>
							</div>
						</div>
					</div>
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-lime-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<span className='flex items-center justify-between'>
										<a className='flex' href='https://digisec360.com' target='_blank' rel='noreferrer'>
											Digisec360
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 px-1 flex-none">
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
											</svg>
										</a>
										<a className='flex' href={digisec360} target='_blank' rel='noreferrer'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 flex-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
											</svg>
										</a>
									</span>
								</h3>
								<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded">Cyber Security Analyst Intern</span>
								<span className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Dec 2022 - Apr 2023
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Performed network-focused penetration testing to proactively identify vulnerabilities and security gaps in the organization's infrastructure and systems.								
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Structure the penetration testing report with a risk-focused summary, detailed vulnerability findings, prioritized remediation roadmap, and technical evidence to compellingly drive security improvements.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Conducted comprehensive security assessments to reveal potential vulnerabilities.								
								</span>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-lime-500 rounded-t-full from-lime-400 to-lime-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-lime-700 border-4 border-lime-500 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-lime-500"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-lime-700 border-4 border-lime-500 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-lime-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<span className='flex items-center justify-between'>
										<a className='flex' href='https://www.getastra.com/' target='_blank' rel='noreferrer noopener'>
											Astra Security
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 px-1 flex-none">
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
											</svg>
										</a>
										<a className='flex' href={astra} target='_blank' rel='noreferrer noopener'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 flex-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
											</svg>
										</a>
									</span>
								</h3>
								<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded">Information Security Analyst Inter</span>
								<span className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Jan 2022 - Sept 2022
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Conducted regression testing on the web application, cloud services, APIs, and mobile applications.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Worked in close partnership with clients to address identified vulnerabilities, resulting in enhanced security for their systems and software.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<p>
									Secured over<b className='px-1'>100+</b>websites, mobiles, cloud and APIs
									</p>
								</span>
							</div>
						</div>
					</div>
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-lime-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<span className='flex items-center justify-between'>
										<a className='flex' href='https://www.getastra.com' target='_blank' rel='noreferrer'>
											Mahen Tech.
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 px-1 flex-none">
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
											</svg>
										</a>
										<a className='flex' href={mahentech} target='_blank' rel='noreferrer'>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 flex-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
												<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
											</svg>
										</a>
									</span>
								</h3>

								<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded">Cyber Security Analyst Intern</span>
								<span className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Jul 2021 - Jan 2022
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Provided professional safety reports and insightful data analysis on security protocols to building managers
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Leveraged vigilant virus activity monitoring, strategic antivirus update timing, and sound judgment to optimize professional management of virus protection.
								</span>
								<span className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#4d7c0f" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#4d7c0f" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<p>
									Conducted enlightening sessions and extensive training programs to educate users about information security policies, protocols, and effective preparation for the
									<span className="bg-lime-700 text-lime-100 text-sm font-medium px-1 py-0.5 rounded mx-1 inline-block">CEH Exam</span> 
									</p>
								</span>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-lime-500 rounded-t-full from-lime-400 to-lime-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-lime-700 border-4 border-lime-500 rounded-full top-1/2"/>
						</div>
					</div>
				</div>
			</div>

        </div>
  )
}
