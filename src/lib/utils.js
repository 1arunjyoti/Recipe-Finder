const COLORS = {
	green: {
		bg: "bg-[#E5DDC5]",
		badge: "bg-[]",
	},
	/* orange: {
		bg: "bg-[#ECCA9C]",
		badge: "bg-[#DBA979]",
	},
	red: {
		bg: "bg-[#FFB4C2]",
		badge: "bg-[#DA7297]",
	},
	violet:{
		bg: "bg-[#A6E3E9]",
		badge: "bg-[#71C9CE]",
	} */
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};