import React, { useEffect, useState } from "react";
import axios from "axios";
import mediumImage from './images/medium.png';

export default function Blogs(props) {

	const [posts, setPosts] = useState([]);
	const getPostData = () => {
	  axios
		.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@crazycoolbrother")
		.then((res) => {
		  setPosts(res.data.items);
		})
		.catch((error) => {
		  console.error("Error fetching blog posts:", error);
		});
	};
	useEffect(() => {
		getPostData();
	}, []);


	const mainImage = (text) => {
        // Regular expression pattern to match URLs
        const urlPattern = /\bhttps?:\/\/\S+\b">/;
        
        // Find the first URL
        const match = text.match(urlPattern);
        
        // Return the first URL if found, otherwise return null
        return match ? match[0] : null;
    }

  return (
	<div className={`w-full py-4 pl-4 pr-1 content-body mt-6 bg-[${props.bgColor}]`}>
			<div className="flex">
				<svg className="h-10 w-10" viewBox="0 0 16 16" strokeWidth="2" stroke="none" fill="url(#gradient)" strokeLinecap="round" strokeLinejoin="round">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#ff0000" />
							<stop offset="100%" stopColor="#0000ff" />
						</linearGradient>
					</defs>
					<path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z"/>
				</svg>
				<h2 className="text-4xl font-extrabold px-2">Blogs</h2>
			</div>
			<div className="items-center justify-center mt-5 h-[44rem] overflow-x-auto font-medium pr-2  py-5">
				<div className='md:columns-1 lg:columns-2'>
					{posts.map((post) => (
						<div className='w-full break-inside-avoid bg-[#fcf9f5] mb-3 pr-0 pt-4 border border-gray-500 rounded-3xl' key={post.guid}>
							<div className="object-fit object-center px-4 pb-2 mx-auto">
								<img className="rounded-xl" src={mainImage(post.content).slice(0,-2)} alt={post.title} />
								<h2 className="py-3 text-xl font-bold">{post.title}</h2>
								<p className="py-3 px-2 leading-6 text-sm flex text-gray-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-6 pr-2 flex-none">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
									</svg>
									{new Date(post.pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
								</p>
								<p dangerouslySetInnerHTML={{ __html: post.content.substring(post.content.indexOf("</figure>"), 920) + "..." }} />
								<p className="mt-3 ">
									<a href={post.link} target="_blank" rel="noopener noreferrer">
										<span className="bg-[#adacac] text-sm me-2 px-2.5 py-0.5 rounded inline-block mb-2">Read More</span>
									</a>
								</p>
								<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
									<img className='img-fluid max-h-10' src={mediumImage} alt="skill" />
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
    </div>
  )
}
