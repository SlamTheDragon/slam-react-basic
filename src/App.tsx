import { useState, useEffect } from "react";
import { imageFiles } from "./utils/imagesFiles";
import { soundEffectFiles } from "./utils/sfxFiles";
import { videoFiles } from "./utils/videoFiles";
import Interface from "./components/Interface/Interface";


function App() {
	/****/  // You can setup this asset preloaders if needed. Removed if you want all assets to lazy-load
	/****/  const [isLoading, setIsLoading] = useState(true); // use isLoading if you want to hide the interface at start
	/****/  const [totalLoaded, setLoadedAssets] = useState(0);
	/****/ 
	/****/ 
	/****/  useEffect(() => {
	/****/ 		const images = Object.values(imageFiles)
	/****/ 		const sounds = Object.values(soundEffectFiles);
	/****/ 		const videos = Object.values(videoFiles)
	/****/ 
	/****/ 		const totalAssets = images.length + sounds.length + videos.length;
	/****/ 		let loadedAssets = 0;
	/****/ 
	/****/ 		const assetLoaded = () => {
	/****/ 			loadedAssets++;
	/****/ 			setLoadedAssets(loadedAssets)
	/****/ 
	/****/ 			if (loadedAssets === totalAssets) {
	/****/ 				setIsLoading(false); // All assets are loaded
	/****/ 			}
	/****/ 		};
	/****/ 
	/****/ 		const preloadImage = (url: string) => {
	/****/ 			const img = new Image();
	/****/ 			img.onload = assetLoaded;
	/****/ 			img.src = url;
	/****/ 		};
	/****/ 
	/****/ 		const preloadSound = (url: string) => {
	/****/ 			const audio = new Audio();
	/****/ 			audio.oncanplaythrough = assetLoaded;
	/****/ 			audio.src = url;
	/****/ 		};
	/****/ 
	/****/ 		const preloadVideo = (url: string) => {
	/****/ 			const video = document.createElement('video');
	/****/ 			video.oncanplaythrough = assetLoaded;
	/****/ 			video.src = url;
	/****/ 		};
	/****/ 
	/****/ 		// Preload images
	/****/ 		images.forEach(preloadImage);
	/****/ 
	/****/ 		// Preload sounds
	/****/ 		// sounds.forEach(preloadSound);
	/****/ 
	/****/ 		// Preload videos
	/****/ 		// videos.forEach(preloadVideo);
	/****/ 	}, []);

	
	return (
		<Interface/>
	);
}

export default App;
