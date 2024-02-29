import React from 'react'
import githubImage from './images/skills/github.png';
import ctf from './Certificates/Writeup.pdf';

export default function Projects(props) {
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
					<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
				</svg>
				<h2 className="text-4xl font-extrabold px-2">Projects</h2>
			</div>
			<div className="items-center justify-center mt-5 h-[44rem] overflow-x-auto font-medium pr-2 py-5">
				<div className='md:columns-2 lg:columns-3'>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-1 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							Vulnerability Scanner
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The project aimed to create a platform automating security research tasks, helping experts find basic web application vulnerabilities. The platform offers a user interface for initiating, running, and stopping scans with ease.
						</span>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The scanner presents all findings on the dashboard and additionally sends a copy of the report to the user via email.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
							<span className="bg-[#f79e9e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Backend</span>
							<span className="bg-[#f7d59e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Automation</span>
							<span className="bg-[#5d8dfc] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Docker</span>
							<span className="bg-[#9ef7b0] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Script</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/Rubber-ducky-digispark' target='_blank' rel='noreferrer noopener'>
								Digispark Scripts
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The objective of this project was to generate diverse scripts for Digispark, an Arduino microprocessor characterized by a USB Type-A input.
						</span>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							Utilized this code to make it function akin to a Rubber Ducky. Upon insertion into a computer, it would identify itself as a keyboard and carry out the designated keystrokes as instructed.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#9ef7b0] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Script</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/Assistant' target='_blank' rel='noreferrer noopener'>
								Python Assistant
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The aim of this project was to develop a Python program capable of receiving user instructions through voice input, and subsequently executing various actions accordingly.
						</span>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							These instructions encompass a range of tasks such as web searches, email composition, video playback, and more. The program also encompasses system processes and incorporates facial recognition functionality.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#adacac] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">OpenCV</span>
							<span className="bg-[#9ef7b0] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Script</span>
							<span className="bg-[#f7d59e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Automation</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Vishvam10/Jack-Chatbot-Plugin' target='_blank' rel='noreferrer noopener'>
								Jack - AI Chatbot Plugin
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							This is a chrome extension that provides a powerful AI chatbot to talk to. It leverages the OpenAI's Chat API ( gpt3.5-turbo ) and answers questions related to the site that you are currently at.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
							<span className="bg-[#f79e9e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Backend</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/Python-Scripts' target='_blank' rel='noreferrer noopener'>
								Python Scripts
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							Within the repository are Python scripts that I crafted during the initial stages of my journey into cybersecurity and Python programming. These scripts encompass intriguing processes, viewed from the perspective of a hacker.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#f7d59e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Automation</span>
							<span className="bg-[#9ef7b0] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Script</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/Portfolio' target='_blank' rel='noreferrer noopener'>
								Portfolio in Flask
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The aim of this project is to develop a straightforward portfolio that allows me to present my skills and accomplishments effectively.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href={ctf} target='_blank' rel='noreferrer noopener'>
								CTF for siNUsoidV5
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							<p>
							Hosted and formulated CTF questions for NIIT University's tech fest "siNUsoid v5". The inquiries span diverse categories such as
							<b className='px-1'>Cryptography, Web Application, System, Reverse Engineering, and OSINT.</b></p>
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
							<span className="bg-[#f79e9e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Backend</span>
							<span className="bg-[#9ef7b0] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Script</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/Set-Ansible' target='_blank' rel='noreferrer noopener'>
								Setup Kubernetes via Ansible
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
5d8dfc						</svg>
							The repository includes a straightforward steps and requirments to set up Kubernetes, Docker over AWS using Ansible.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#f7d59e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Automation</span>
							<span className="bg-[#5d8dfc] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Docker</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/flaskblog' target='_blank' rel='noreferrer noopener'>
								Blogging website in Flask
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The repository includes a straightforward blog website crafted using HTML, CSS, and JS within the FLask, enabling users to generate and publish their own blogs.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
							<span className="bg-[#f79e9e] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Backend</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
					<div className='w-full break-inside-avoid bg-gray-200 mb-3 pr-2 pt-4 border border-gray-500 rounded-3xl'>
						<h2 className='font-bold text-xl mb-3 px-4'>
							<a href='https://github.com/Geni-Wazir/flaskblog' target='_blank' rel='noreferrer noopener'>
								Portfolio in React
							</a>
						</h2>
						<span className="mt-2 leading-6 flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7a787a" viewBox="0 0 16 16" strokeWidth="1.5" stroke="#7a787a" className="w-5 h-6 px-1 flex-none">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>									
							</svg>
							The aim of this project is to develop a straightforward portfolio that allows me to present my skills and accomplishments effectively.
						</span>
						<div className='px-4 py-2'>
							<span className="bg-[#db9ef7] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Frontend</span>
						</div>
						<img className='img-fluid max-h-6 mx-4 mb-2' src={githubImage} alt="skill"/>
					</div>
				</div>
			</div>
        </div>
  )
}
