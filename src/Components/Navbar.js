import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import resume from './Certificates/Resume.pdf'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(props) {
	const location = useLocation();

	let [filled, setFilled] = useState(0);
	let [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
    	if (filled < 100 && isRunning) {
      		setTimeout(() => setFilled(prev => prev += 15), 100);
    	} 
		else {
      		setIsRunning(false);
      		setFilled(0);
    	}
  	}, [filled, isRunning]);

  	const resumeDownload = () => {
      setIsRunning(true);
      const pdfUrl = resume;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Resume-Saurabh-Kumar.pdf"; // specify the filename
  
      // Add event listener for when the download finishes
      link.onload = function() {
          setIsRunning(false); // Assuming you want to stop running after download
          document.body.removeChild(link);
      };
  
      document.body.appendChild(link);
      link.click();
  };
  

  return (
    <Disclosure as="nav" className="bg-gray-800 bg-opacity-0 fixed w-full z-20 top-0 start-0 pb-3">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className={`border-2 border-[${props.mode ? '#1f94bf' : '#0688b8'}] relative flex h-16 items-center justify-between bg-[${props.mode ? '#e6f1fa' : '#1f2937'}] bg-opacity-80 navar`}>
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className={`ml-3 bg-[${props.mode ? '#e6f1fa' : '#1f2937'}] w-full relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="items-center justify-center md:justify-start">
                <div className="hidden md:ml-1 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href ? `bg-opacity-100 bg-[${props.mode ? '#4a87b5' : '#111b29'}] text-white` : `text-[${props.mode ? '#1f94bf' : '#bac2d1'}] hover:bg-[${props.mode ? '#83aac7' : '#344863'}] hover:text-white`,
                          'rounded-md px-3 py-2 text-md font-medium'
                        )}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={props.toggleMode} type="button" className="mr-4 text-white rounded-md px-1 py-1 text-md font-medium theme-mode">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${props.mode ? '#1f2937' : 'currentColor'}`} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d={`${props.mode ? 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' : 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'}`} />
                  </svg>
                </button>
				<button onClick={resumeDownload} type="button" className="inset-y-0 top-0 flex items-center md:static md:inset-auto md:ml-0 md:pr-0 resume bg-[#45abd1]">
					<div className="progressbar">
						<div style={{
						height: "100%",
						width: `${filled}%`,
						backgroundColor: filled === 100 ? "#b1f2ff" : "rgb(118, 213, 232)",
						transition: "width 0.1s"
						}}>
						</div>
					</div>
					<span className="absolute">Download Resume</span>
				</button>
              </div>
            </div>
          </div>

		  <Disclosure.Panel className="md:hidden">
  <div className={`bg-[${props.mode ? '#e1f1fd' : '#1f2937'}] bg-opacity-100 space-y-1 px-2 pb-3 pt-2`}>
    {navigation.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className={classNames(
          location.pathname === item.href ? `bg-opacity-100 bg-[${props.mode ? '#4a87b5':'#111b29'}] text-[${props.mode ? '#111b29' : 'white'}]` : `text-[${props.mode ? '#4a87b5':'#959aa3'}] hover:bg-[${props.mode ? '#83aac7' : '#344863'}] hover:text-white`,
          'block rounded-md px-3 py-2 text-base font-medium'
        )}
        aria-current={location.pathname === item.href ? 'page' : undefined}
      >
        {item.name}
      </Link>
    ))}
  </div>
</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

Navbar.propTypes = {
  mode: PropTypes.bool,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  mode: 'dark',
};
