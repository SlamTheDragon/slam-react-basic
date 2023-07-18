import { useState, useEffect } from "react";
import { imageFiles } from "./utils/imagesFiles";
import { soundEffectFiles } from "./utils/sfxFiles";
import { videoFiles } from "./utils/videoFiles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "./components/slice/modalSlice";
import { readHeader } from "./components/slice/modalHeaderSlice";
import Interface from "./components/.Interface/Interface";
import Modal from "./components/common/Modal";


function App() {
	/****/  // You can setup this asset preloaders if needed. Removed if you want all assets to lazy-load
	/****/
	/****/  // Perhaps... Refactor?
	/****/
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

	
	/***************[ INITIALIZERS ]**************/

	// Redux get
	// ...
	const isModalOpen = useSelector(modalState)
	const getHeader = useSelector(readHeader)

	// Redux set
	const dispatch = useDispatch()

	// Initiate Event Listeners
	// ...
	document.addEventListener('keydown', handleEscapeKeyPress);
	

	/***************[ SURFACE FUNCTIONS ]**************/

	function handleEscapeKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			dispatch(closeModal())
		}
	}

	
	return (
		<>
			<Modal modalTitle={getHeader} isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
				WIP: Add payload ID to determine interface <br />
				<strong>TIP:</strong> use redux devtools for fun, idk (someone help me it keeps crashing) :3c
			</Modal>
			<Interface/>
		</>
	);
}

export default App;
