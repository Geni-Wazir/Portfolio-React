import React from 'react'
import cehImage from './images/ceh.jpg';
import ociImage from './images/oci.png';
import disneyiImage from './images/walt_disney.png';
import ciscoiImage from './images/cisco.png';
import workshop1Image from './images/workshop1.png';
import vitBhopalImage from './images/vit_bhopal.png';
import workshop2Image from './images/workshop2.png';
import vitImage from './images/vit.png';
import ceh from './Certificates/ceh.pdf';
import oci from './Certificates/oci.pdf';

export default function Achievements(props) {
  return (
	<div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
			<svg className="h-10 w-10" viewBox="0 0 16 16" strokeWidth="0.8" stroke="none" fill="url(#gradient)" strokeLinecap="round" strokeLinejoin="round">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
					</svg>

				<h2 className="text-4xl font-extrabold px-2">Achievements</h2>
			</div>
			<div className="items-center justify-center mt-5 overflow-y-scroll h-[44rem] pl-2 font-medium py-5">
				<div className="flex flex-col grid-cols-9 mx-auto md:grid pr-5">
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<img className="h-[10rem] rounded-t-lg object-center px-4 pt-2 mix-blend-multiply mx-auto" src={cehImage} alt="CEH"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={ceh} target='_blank' rel='noreferrer'>
										CEH Certified
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Sept 2022
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									The CEH Practical certification denotes practical experience in cybersecurity defence against developing digital threats and demonstrates a thorough understanding of ethical hacking techniques performed in real-world circumstances.
								</p>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300 rounded-t-full from-fuchsia-400 to-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<img className="h-[10rem] rounded-t-lg object-fit object-center px-4 pt-2 mix-blend-multiply mx-auto" src={ociImage} alt="OCI"/>
							<div className='px-2 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={oci} target='_blank' rel='noreferrer'>
										OCI Foundations Associate
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Aug 2023
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									The OCI Foundations Associate certification signifies practical expertise in cloud infrastructure management and reflects a comprehensive understanding of foundational cloud computing techniques applied in real-world scenarios.
								</p>
							</div>
						</div>
					</div>
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<img className="h-[10rem] rounded-t-lg object-cover object-center px-4 pt-2 mix-blend-multiply mx-auto" src={disneyiImage} alt="Walt Disney"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									Workshop for Walt Disney
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Nov 2021
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									Leading a workshop for the Walt Disney Singapore branch was an esteemed privilege I truly valued. The session focused on fostering cyber awareness and sharing optimal security practices for employees.
								</p>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300 rounded-t-full from-fuchsia-400 to-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
					</div>


					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<img className="w-full h-[8rem] rounded-t-lg object-fit object-center px-4 pt-4 mix-blend-multiply " src={ciscoiImage} alt="Cisco"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									Cisco Net Academy Courses
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Oct 2022
								</p>
								<p className="mt-2 leading-6 flex font-bold">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<a href='https://www.credly.com/badges/638b000b-095e-4904-9382-b45567b3ba62' target='_blank' rel='noreferrer'>
									Introduction to Cybersecurity
									</a>
								</p>
								<p className="mt-2 leading-6 flex font-bold">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<a href='https://www.credly.com/badges/e272b9ec-2220-4f9b-ba60-2954f4f64af6' target='_blank' rel='noreferrer'>
										Cybersecurity Essentials
									</a>
								</p>
								<p className="mt-2 leading-6 flex font-bold">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									<a href='https://www.credly.com/badges/1d2c5b6f-cc5b-49a8-add0-b35fe1b895cf' target='_blank' rel='noreferrer'>
										Networking Essentials
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<img className="h-[10rem] rounded-t-lg object-fit object-center px-4 pt-2 mix-blend-multiply mx-auto" src={workshop1Image} alt="Shah & Anchor Kutchhi Engineering College"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={ceh} target='_blank' rel='noreferrer'>
										Guest Speaker
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Jan 2022
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									I had the honor of being invited as a guest speaker to SHAH & ANCHOR KUTCHHI ENGINEERING COLLEGE, where I conducted a workshop for students focusing on cybersecurity and fostering cyber awareness.
								</p>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300 rounded-t-full from-fuchsia-400 to-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
						<img className="h-[12rem] rounded-t-lg object-fit object-center px-4 pt-2 mix-blend-multiply mx-auto" src={vitBhopalImage} alt="VIT Bhopal"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={ceh} target='_blank' rel='noreferrer'>
										Career Guidance Workshop
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Mar 2023
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									I had the privilege of being invited as a guest speaker for a workshop at VIT Bhopal, where I had the opportunity to discuss the future of cybersecurity and career prospects in the field, and also provided guidance to final year students on placement tips in this domain.
								</p>
							</div>
						</div>
					</div>
					<div className="flex md:contents flex-row-reverse">
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto`}>
							<img className="h-[12rem] rounded-t-lg object-fit object-center px-4 pt-2 mix-blend-multiply mx-auto" src={workshop2Image} alt="S.N.D.T Women's University"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={ceh} target='_blank' rel='noreferrer'>
										Workshop on Cyber Crimes and Security
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Dec 2021
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									I had the honor of being invited as a guest speaker for the International e-Webinar hosted by the Tarangan Alumni Association, in collaboration with L.T College of Nursing and S.N.D.T Women's University.
								</p>
							</div>
						</div>
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300 rounded-t-full from-fuchsia-400 to-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
					</div>
					<div className="flex md:contents">
						<div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
							<div className="flex items-center justify-center w-6 h-full">
								<div className="w-1 h-full bg-fuchsia-300"/>
							</div>
							<div className="absolute w-6 h-6 -mt-3 bg-fuchsia-500 border-4 border-fuchsia-300 rounded-full top-1/2"/>
						</div>
						<div className={`relative my-3 text-gray-800 bg-fuchsia-${props.mode ? '50': '50'} rounded-xl col-start-6 col-end-10 mr-auto`}>
							<img className="w-full h-[8rem] rounded-t-lg object-cover object-center px-4 pt-4 mix-blend-multiply " src={vitImage} alt="Vidyalankar Institute of Technology"/>
							<div className='px-4 py-4'>
								<h3 className="text-2xl font-bold">
									<a className='flex' href={ceh} target='_blank' rel='noreferrer'>
										Workshop on future of Cybersecurity and career
									</a>
								</h3>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									Sept 2021
								</p>
								<p className="mt-2 leading-6 flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#d846ef" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#d846ef" className="w-6 h-6 px-1 flex-none">
										<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
									</svg>
									I was privileged to receive an invitation as a guest speaker at the Workshop, where I discussed the future of Cybersecurity and career opportunities at Vidyalankar Institute of Technology.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
  )
}
