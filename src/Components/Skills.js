import React from 'react'
import burpImage from './images/skills/burp.png';
import nmapImage from './images/skills/nmap.png';
import wiresharkImage from './images/skills/wireshark.png';
import nessusImage from './images/skills/nessus.png';
import linuxImage from './images/skills/linux.png';
import nucleiImage from './images/skills/nuclei.png';
import metasploitImage from './images/skills/metasploit.png';
import niktoImage from './images/skills/nikto.png';
import scoutsuiteImage from './images/skills/scoutsuite.png';
import acunetixImage from './images/skills/acunetix.png';
import nexposeImage from './images/skills/nexpose.png';
import pythonImage from './images/skills/python.png';
import javaImage from './images/skills/java.png';
import jsImage from './images/skills/js.png';
import bashImage from './images/skills/bash.png';
import rustImage from './images/skills/rust.png';
import mernImage from './images/skills/mern.png';
import flaskImage from './images/skills/flask.png';
import djangoImage from './images/skills/django.png';
import dockerImage from './images/skills/docker.png';
import kuberImage from './images/skills/kuber.png';
import jenkinsImage from './images/skills/jenkins.png';
import gitImage from './images/skills/git.png';
import postmanImage from './images/skills/postman.png';
import githubImage from './images/skills/github.png';
import htmlImage from './images/skills/html.png';
import cssImage from './images/skills/css.png';
import bootstrapImage from './images/skills/bootstrap.png';
import reactImage from './images/skills/react.png';
import swaggerImage from './images/skills/swagger.png';
import mysqlImage from './images/skills/mysql.png';
import sqliteImage from './images/skills/sqlite.png';
import postgresqlImage from './images/skills/postgresql.png';
import mongodbImage from './images/skills/mongodb.png';
import mariadbImage from './images/skills/mariadb.png';
import tailwindImage from './images/skills/tailwind.png';

export default function Skills(props) {
  return (
	<div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
				<svg className="h-10 w-10 flex-none" viewBox="0 0 16 16" strokeWidth="0.8" stroke="none" fill="url(#gradient)" strokeLinecap="round" strokeLinejoin="round">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
					<path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
				</svg>
				<h2 className="text-4xl font-extrabold px-2">Skills</h2>
			</div>
			<div className="items-center justify-center mt-5 h-[44rem] overflow-x-auto font-medium px-2 py-4 mix-blend-multiply">
				<div className='mb-3'>
					<h5 className='text-xl font-bold'>Security</h5>
					<div className='px-4 pt-2 pb-4 text-base flex-wrap flex w-fit'>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={burpImage} alt="skill"/>
								Burp
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={nmapImage} alt="skill"/>
								Nmap
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={wiresharkImage} alt="skill"/>
								Wireshark
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1 mix-blend-multiply' src={nessusImage} alt="skill"/>
								Nessus
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={linuxImage} alt="skill"/>
								Linux
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1 mix-blend-multiply' src={nucleiImage} alt="skill"/>
								Nuclei
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={metasploitImage} alt="skill"/>
								Metasploit
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={niktoImage} alt="skill"/>
								Nikto
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={acunetixImage} alt="skill"/>
								Acunetix
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={scoutsuiteImage} alt="skill"/>
								Scout Suite
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={nexposeImage} alt="skill"/>
								Nexpose
							</p>
					</div>
				</div>
				<div className='mb-3'>
					<h5 className='text-xl font-bold'>Programming Languages</h5>
					<div className='px-4 pt-2 pb-4 text-base flex-wrap flex w-fit'>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={pythonImage} alt="skill"/>
								Python
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={bashImage} alt="skill"/>
								Bash
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={javaImage} alt="skill"/>
								Java
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={jsImage} alt="skill"/>
								Javascript
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1 mix-blend-multiply' src={rustImage} alt="skill"/>
								Rust
							</p>
					</div>
				</div>
				<div className='mb-3'>
					<h5 className='text-xl font-bold'>Frameworks</h5>
					<div className='px-4 pt-2 pb-4 text-base flex-wrap flex w-fit'>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={mernImage} alt="skill"/>
								MERN Stack
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={flaskImage} alt="skill"/>
								Flask
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={djangoImage} alt="skill"/>
								Django
							</p>
					</div>
				</div>
				<div className='mb-3'>
					<h5 className='text-xl font-bold'>DevOps</h5>
					<div className='px-4 pt-2 pb-4 text-base flex-wrap flex w-fit'>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={dockerImage} alt="skill"/>
								Docker
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={kuberImage} alt="skill"/>
								Kubernetes
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={jenkinsImage} alt="skill"/>
								Jenkins
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={gitImage} alt="skill"/>
								Git
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={postmanImage} alt="skill"/>
								Postman
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={githubImage} alt="skill"/>
								GitHub
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={htmlImage} alt="skill"/>
								HTML
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={cssImage} alt="skill"/>
								CSS
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={bootstrapImage} alt="skill"/>
								Bootstrap
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1 mix-blend-multiply' src={reactImage} alt="skill"/>
								React
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={swaggerImage} alt="skill"/>
								Swagger
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={tailwindImage} alt="skill"/>
								Tailwind
							</p>
					</div>
				</div>
				<div className='mb-3'>
					<h5 className='text-xl font-bold'>Databases</h5>
					<div className='px-4 pt-2 pb-4 text-base flex-wrap flex w-fit'>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={mysqlImage} alt="skill"/>
								MySQL
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={sqliteImage} alt="skill"/>
								SQLite
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={postgresqlImage} alt="skill"/>
								PostgreSQL
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={mongodbImage} alt="skill"/>
								MongoDB
							</p>
							<p className='w-fit rounded-lg flex border bg-[#82818113] border-slate-500 px-1 py-1 mx-[0.4rem] my-[0.4rem]'>
								<img className='img-fluid max-h-6 px-1' src={mariadbImage} alt="skill"/>
								MariaDB
							</p>
					</div>
				</div>
			</div>
        </div>
  )
}
