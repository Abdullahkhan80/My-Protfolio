import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
		let ticking = false;

		const updatePosition = () => {
			const newScroll = window.pageYOffset;

			blobRefs.current.forEach((blob, index) => {
				if (!blob) return;
				const initialPos = initialPositions[index];

				// Calculating movement in both X and Y direction
				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340; // Horizontal movement
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;  // Vertical movement

				const x = initialPos.x + xOffset;
				const y = initialPos.y + yOffset;

				// Apply transformation with smooth transition
				blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
				blob.style.transition = "transform 1.4s ease-out";
			});

			ticking = false;
		};

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(updatePosition);
				ticking = true;
			}
		};

		// Run once on mount to position items correctly
		updatePosition();

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [])

	return (
		<div className="fixed inset-0 ">
			<div className="absolute inset-0">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[140px] opacity-25 md:opacity-15 "></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-96 h-96 bg-[#e6c078] rounded-full mix-blend-screen filter blur-[150px] opacity-20 md:opacity-[0.12] hidden sm:block"></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[140px] opacity-25 md:opacity-15 "></div>
					<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-96 h-96 bg-[#1D7C7C] rounded-full mix-blend-screen filter blur-[150px] opacity-20 md:opacity-[0.12] hidden sm:block"></div>
			</div>
			{/* Fine luxe grid, faded toward the edges */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#e6c0780a_1px,transparent_1px),linear-gradient(to_bottom,#e6c0780a_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
		</div>
	)
}

export default AnimatedBackground

