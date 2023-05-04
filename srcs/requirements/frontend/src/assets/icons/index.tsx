type IconProps = {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
	strokeW?: number;
}

const Home = ({fill = 'none', stroke = 'white', strokeW = 2} : IconProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 26 26" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path d="M13.984 1.40837L13.9842 1.40854L24.5913 12.0152L24.5913 12.0153C24.5913 12.0153 24.5913 12.0153 24.5914 12.0153L24.5914 12.0153L24.5914 12.0154C24.5914 12.0154 24.5914 12.0154 24.5914 12.0154C24.5914 12.0154 24.5915 12.0154 24.5915 12.0154C24.5915 12.0154 24.5915 12.0155 24.5915 12.0155C25.133 12.5585 25.1326 13.4433 24.5905 13.9858C24.3254 14.2505 23.9788 14.3939 23.6052 14.3939H23.2132H22.2132V15.3939V23.1989C22.2132 24.191 21.4044 25 20.4117 25H16.5006V19.1191C16.5006 17.8621 15.4796 16.8411 14.2225 16.8411H11.7751C10.5181 16.8411 9.49707 17.8621 9.49707 19.1191V25H5.58596C4.5933 25 3.78447 24.191 3.78447 23.1989V15.3939V14.3939H2.78447H2.37322L2.358 14.3924L2.33084 14.3912C1.97974 14.3761 1.65501 14.2335 1.40693 13.9853L1.40676 13.9851C0.865416 13.4438 0.864254 12.5605 1.40423 12.0174L1.41213 12.0094L1.41583 12.0056L12.0133 1.40833L12.0133 1.40832C12.2781 1.14356 12.6248 1 12.9988 1C13.3727 1 13.7194 1.14362 13.984 1.40837ZM24.5912 12.0151C24.5912 12.0151 24.5912 12.0151 24.5912 12.0151L24.5911 12.0151C24.5912 12.0151 24.5912 12.0151 24.5912 12.0151ZM1.41749 12.0039L1.41718 12.0042L1.41749 12.0039Z" stroke={stroke} strokeWidth={strokeW}/>
		</svg>
	)
}

const Chat = ({fill = 'none', stroke = 'white', strokeW = 2} : IconProps) => {
  return (
	<svg width="24" height="24" viewBox="0 0 25 25" fill={fill} xmlns="http://www.w3.org/2000/svg">
		<path d="M4.89322 4.95572C6.90277 2.94616 9.62738 1.81576 12.4693 1.8125C15.3119 1.81265 18.038 2.94192 20.048 4.95195C22.0582 6.9621 23.1875 9.68846 23.1875 12.5312C23.1875 15.374 22.0582 18.1004 20.048 20.1105C18.0379 22.1207 15.3115 23.25 12.4688 23.25H2.5876C2.36554 23.2497 2.15266 23.1614 1.99564 23.0044C1.83874 22.8475 1.75042 22.6348 1.75 22.4129V12.5318C1.75326 9.68989 2.88366 6.96528 4.89322 4.95572ZM8.25 16.8125H15.75C16.2639 16.8125 16.7567 16.6084 17.12 16.245C17.4834 15.8817 17.6875 15.3889 17.6875 14.875C17.6875 14.3611 17.4834 13.8683 17.12 13.505C16.8741 13.2591 16.569 13.0861 16.2382 13C16.569 12.9139 16.8741 12.7409 17.12 12.495C17.4834 12.1317 17.6875 11.6389 17.6875 11.125C17.6875 10.6111 17.4834 10.1183 17.12 9.75498C16.7567 9.39163 16.2639 9.1875 15.75 9.1875H8.25C7.73614 9.1875 7.24333 9.39163 6.87998 9.75498C6.51663 10.1183 6.3125 10.6111 6.3125 11.125C6.3125 11.6389 6.51663 12.1317 6.87998 12.495C7.12585 12.7409 7.431 12.9139 7.76184 13C7.431 13.0861 7.12585 13.2591 6.87998 13.505C6.51663 13.8683 6.3125 14.3611 6.3125 14.875C6.3125 15.3889 6.51663 15.8817 6.87998 16.245C7.24333 16.6084 7.73615 16.8125 8.25 16.8125Z" stroke={stroke} strokeWidth={strokeW}/>
	</svg>
  )
}


const  Game = ({fill = 'white', stroke = 'white', strokeW = 2} : IconProps) => {
	return(
		<svg width="24" height="24" viewBox="0 0 610 448" fill={fill} xmlns="http://www.w3.org/2000/svg" stroke={stroke} strokeWidth={strokeW}>
			<path d="M565.669 126.285L607.121 339.162H607.048L607.255 340.336C609.546 353.332 608.965 366.671 605.551 379.418C602.137 392.165 595.974 404.011 587.495 414.122C579.016 424.234 568.426 432.366 556.468 437.949C544.512 443.531 531.478 446.429 518.282 446.438C494.342 446.394 471.391 436.878 454.445 419.968C454.135 419.659 453.861 419.383 453.613 419.09L453.607 419.083L453.6 419.075L352.774 304.589L352.475 304.25H352.023H258.078H257.626L257.327 304.589L156.564 419.062L155.707 419.968C155.704 419.972 155.701 419.975 155.697 419.978C142.101 433.559 124.531 442.455 105.537 445.373C86.5376 448.293 67.1026 445.08 50.0533 436.203C33.004 427.326 19.228 413.245 10.7253 396.006C2.22269 378.767 -0.563968 359.266 2.76995 340.336L2.79416 340.198L2.77979 340.059C2.77584 340.021 2.77492 339.983 2.77704 339.944L44.1789 126.487L44.1806 126.479L44.1821 126.47C50.3304 91.4694 68.6228 59.7575 95.8423 36.9116C123.062 14.0657 157.465 1.54885 193.001 1.56251H193.002H416.718C452.156 1.5907 486.463 14.0371 513.676 36.7379C540.865 59.4194 559.253 90.9046 565.65 125.728V126.094V126.19L565.669 126.285ZM481.984 393.026L482.009 393.055L527.092 406.051L527.263 407.036C527.263 407.036 527.264 407.036 527.264 407.036C533.965 405.872 540.368 403.388 546.102 399.73C551.836 396.072 556.787 391.311 560.667 385.725C564.582 380.209 567.368 373.974 568.865 367.378C570.362 360.778 570.54 353.947 569.388 347.279L569.386 347.269L569.384 347.259L547.193 233.001L546.706 230.495L545.361 232.664C531.784 254.559 512.843 272.626 490.331 285.153C467.819 297.68 442.482 304.253 416.719 304.25H406.055H403.842L405.304 305.911L481.984 393.026ZM224.75 203.688V184.375H244.062C249.715 184.375 255.136 182.13 259.133 178.133C263.13 174.136 265.375 168.715 265.375 163.063C265.375 157.41 263.13 151.989 259.133 147.992C255.136 143.995 249.715 141.75 244.062 141.75H224.75V122.438C224.75 116.785 222.505 111.364 218.508 107.367C214.511 103.37 209.09 101.125 203.437 101.125C197.785 101.125 192.364 103.37 188.367 107.367C184.37 111.364 182.125 116.785 182.125 122.438V141.75H162.812C157.16 141.75 151.739 143.995 147.742 147.992C143.745 151.989 141.5 157.41 141.5 163.063C141.5 168.715 143.745 174.136 147.742 178.133C151.739 182.13 157.16 184.375 162.812 184.375H182.125V203.688C182.125 209.34 184.37 214.761 188.367 218.758C192.364 222.755 197.785 225 203.437 225C209.09 225 214.511 222.755 218.508 218.758C222.505 214.761 224.75 209.34 224.75 203.688ZM350.867 147.992C346.87 151.989 344.625 157.41 344.625 163.063C344.625 168.715 346.87 174.136 350.867 178.133C354.864 182.13 360.285 184.375 365.937 184.375H426.875C432.527 184.375 437.948 182.13 441.945 178.133C445.942 174.136 448.187 168.715 448.187 163.063C448.187 157.41 445.942 151.989 441.945 147.992C437.948 143.995 432.527 141.75 426.875 141.75H365.937C360.285 141.75 354.864 143.995 350.867 147.992Z" stroke={stroke} strokeWidth={strokeW}/>
		</svg>
	)
}

const Profile = ({fill = 'none', stroke = 'white', strokeW = 2} : IconProps) => {
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path d="M2.63474 22.25C2.63124 22.2499 2.62477 22.2495 2.61568 22.2489C2.591 22.2471 2.54921 22.2431 2.49643 22.2343C2.38614 22.2159 2.25437 22.181 2.13471 22.1212C2.01897 22.0633 1.93364 21.9922 1.87502 21.9043C1.82057 21.8226 1.75 21.6688 1.75 21.375C1.75 20.6943 2.11929 19.0762 3.56648 17.629C4.98436 16.2111 7.52339 14.875 12 14.875C16.4766 14.875 19.0156 16.2111 20.4335 17.629C21.8807 19.0762 22.25 20.6943 22.25 21.375C22.25 21.6688 22.1794 21.8226 22.125 21.9043C22.0664 21.9922 21.981 22.0633 21.8653 22.1212C21.7456 22.181 21.6139 22.2159 21.5036 22.2343C21.4508 22.2431 21.409 22.2471 21.3843 22.2489C21.3752 22.2495 21.3688 22.2499 21.3653 22.25H2.63474ZM15.2704 9.64537C14.403 10.5127 13.2266 11 12 11C10.7734 11 9.59699 10.5127 8.72963 9.64537C7.86228 8.77801 7.375 7.60163 7.375 6.375C7.375 5.14837 7.86228 3.97199 8.72963 3.10463C9.59699 2.23728 10.7734 1.75 12 1.75C13.2266 1.75 14.403 2.23728 15.2704 3.10463C16.1377 3.97199 16.625 5.14837 16.625 6.375C16.625 7.60163 16.1377 8.77801 15.2704 9.64537Z" stroke={stroke} strokeWidth={strokeW}/>
		</svg>
	)
}

const Settings = ({fill = 'none', stroke = 'white', strokeW = 2} : IconProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 28 30" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path 
				d="M10.2071 4.82153L11.1286 2.44296C11.284 2.04024 11.5574 1.69384 11.9129 1.44913C12.2685 1.20442 12.6898 1.07281 13.1214 1.07153H14.8786C15.3102 1.07281 15.7314 1.20442 16.087 1.44913C16.4426 1.69384 16.716 2.04024 16.8714 2.44296L17.7928 4.82153L20.9214 6.62153L23.45 6.23582C23.871 6.17867 24.2995 6.24798 24.6811 6.43494C25.0627 6.6219 25.38 6.91807 25.5928 7.28582L26.45 8.78582C26.6696 9.15942 26.7708 9.59085 26.7402 10.0231C26.7096 10.4555 26.5486 10.8683 26.2786 11.2072L24.7143 13.2001V16.8001L26.3214 18.793C26.5915 19.1319 26.7525 19.5448 26.7831 19.9771C26.8137 20.4094 26.7125 20.8408 26.4928 21.2144L25.6357 22.7144C25.4229 23.0821 25.1055 23.3783 24.724 23.5653C24.3424 23.7522 23.9139 23.8215 23.4928 23.7644L20.9643 23.3787L17.8357 25.1787L16.9143 27.5572C16.7589 27.96 16.4855 28.3064 16.1299 28.5511C15.7743 28.7958 15.3531 28.9274 14.9214 28.9287H13.1214C12.6898 28.9274 12.2685 28.7958 11.9129 28.5511C11.5574 28.3064 11.284 27.96 11.1286 27.5572L10.2071 25.1787L7.07856 23.3787L4.54999 23.7644C4.12895 23.8215 3.70043 23.7522 3.31888 23.5653C2.93732 23.3783 2.61996 23.0821 2.40713 22.7144L1.54999 21.2144C1.33035 20.8408 1.22915 20.4094 1.25976 19.9771C1.29036 19.5448 1.45133 19.1319 1.72141 18.793L3.2857 16.8001V13.2001L1.67856 11.2072C1.40847 10.8683 1.2475 10.4555 1.2169 10.0231C1.18629 9.59085 1.28749 9.15942 1.50713 8.78582L2.36427 7.28582C2.57711 6.91807 2.89447 6.6219 3.27602 6.43494C3.65757 6.24798 4.08609 6.17867 4.50713 6.23582L7.0357 6.62153L10.2071 4.82153ZM9.71427 15.0001C9.71427 15.8477 9.96562 16.6763 10.4365 17.3811C10.9075 18.0859 11.5768 18.6352 12.3599 18.9596C13.143 19.284 14.0047 19.3688 14.8361 19.2035C15.6674 19.0381 16.4311 18.6299 17.0304 18.0306C17.6298 17.4312 18.038 16.6676 18.2034 15.8362C18.3687 15.0049 18.2838 14.1431 17.9595 13.36C17.6351 12.5769 17.0858 11.9076 16.381 11.4367C15.6762 10.9657 14.8476 10.7144 14 10.7144C12.8633 10.7144 11.7733 11.1659 10.9695 11.9696C10.1658 12.7734 9.71427 13.8635 9.71427 15.0001Z" stroke={stroke} strokeWidth={strokeW}/>
		</svg>
		//  strokeLinecap="round" strokeLinejoin="round"
	)
}

const Logout = ({fill = 'white', stroke = 'white', strokeW = 2} : IconProps) => {
	return (
		<svg fill={fill} height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.3 490.3" ><g id="SVGRepo_bgCarrier" strokeWidth={strokeW}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={stroke} strokeWidth={strokeW}></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3 s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6 c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1 C27.9,58.95,0,86.75,0,121.05z"></path> <path d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9 c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63 C380.6,325.15,380.6,332.95,385.4,337.65z"></path> </g> </g> </g></svg>
	)
}

const Joystick = () => {
	return (
		<svg width="30" height="30" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.9972 3.25366C13.9351 2.36888 13.5393 1.5407 12.8898 0.936662C12.2403 0.332628 11.3856 -0.00216501 10.4986 1.05366e-05H3.50151C2.60431 -0.00120325 1.74094 0.342317 1.08982 0.959577C0.438705 1.57684 0.0496129 2.42065 0.00295941 3.31664C-0.000986469 3.37722 -0.000986469 3.43799 0.00295941 3.49856V8.74639C0.00110273 9.06852 0.0631801 9.38781 0.185596 9.68577C0.308011 9.98373 0.488332 10.2544 0.716112 10.4822C0.943892 10.71 1.2146 10.8903 1.51257 11.0127C1.81053 11.1352 2.12982 11.1972 2.45195 11.1954C3.45253 11.1954 4.07527 10.4537 4.68402 9.73298C4.90793 9.47409 5.13883 9.2012 5.38373 8.9633C5.70863 8.72531 6.0736 8.54757 6.46129 8.43852C6.81924 8.39653 7.18088 8.39653 7.53884 8.43852C7.92653 8.54757 8.2915 8.72531 8.6164 8.9633C8.86129 9.2012 9.0922 9.47409 9.31611 9.73298C9.92485 10.4327 10.5476 11.1954 11.5482 11.1954C11.8703 11.1972 12.1896 11.1352 12.4876 11.0127C12.7855 10.8903 13.0562 10.71 13.284 10.4822C13.5118 10.2544 13.6921 9.98373 13.8145 9.68577C13.9369 9.38781 13.999 9.06852 13.9972 8.74639V3.49856C14.0009 3.43798 14.0009 3.37722 13.9972 3.31664V3.25366ZM12.5977 8.74639C12.5977 9.02475 12.4872 9.29171 12.2903 9.48855C12.0935 9.68538 11.8265 9.79596 11.5482 9.79596C11.1983 9.79596 10.8485 9.34814 10.3867 8.83036C10.1488 8.55747 9.88287 8.2356 9.582 7.94872C9.07536 7.54056 8.48909 7.24266 7.86071 7.07408C7.29154 6.97143 6.70859 6.97143 6.13942 7.07408C5.51104 7.24266 4.92477 7.54056 4.41813 7.94872C4.11726 8.2356 3.85137 8.55747 3.61347 8.83036C3.17964 9.34814 2.8018 9.79596 2.45195 9.79596C2.17358 9.79596 1.90662 9.68538 1.70979 9.48855C1.51296 9.29171 1.40238 9.02475 1.40238 8.74639V3.49856C1.4058 3.46366 1.4058 3.42851 1.40238 3.39361C1.42933 2.85527 1.66233 2.34793 2.05311 1.97669C2.44389 1.60545 2.9625 1.39876 3.50151 1.39943H10.4986C11.023 1.39714 11.5293 1.59121 11.9177 1.94344C12.3062 2.29566 12.5488 2.78054 12.5977 3.30264V3.38661C12.5943 3.42385 12.5943 3.46133 12.5977 3.49856V8.74639Z" fill="white"/>
			<path d="M9.79895 6.29737C10.1854 6.29737 10.4987 5.9841 10.4987 5.59766C10.4987 5.21122 10.1854 4.89795 9.79895 4.89795C9.41251 4.89795 9.09924 5.21122 9.09924 5.59766C9.09924 5.9841 9.41251 6.29737 9.79895 6.29737Z" fill="white"/>
			<path d="M11.1984 4.89796C11.5848 4.89796 11.8981 4.58469 11.8981 4.19825C11.8981 3.81181 11.5848 3.49854 11.1984 3.49854C10.8119 3.49854 10.4987 3.81181 10.4987 4.19825C10.4987 4.58469 10.8119 4.89796 11.1984 4.89796Z" fill="white"/>
			<path d="M9.79895 3.49854C10.1854 3.49854 10.4987 3.18527 10.4987 2.79883C10.4987 2.41239 10.1854 2.09912 9.79895 2.09912C9.41251 2.09912 9.09924 2.41239 9.09924 2.79883C9.09924 3.18527 9.41251 3.49854 9.79895 3.49854Z" fill="white"/>
			<path d="M8.39954 4.89796C8.78598 4.89796 9.09925 4.58469 9.09925 4.19825C9.09925 3.81181 8.78598 3.49854 8.39954 3.49854C8.0131 3.49854 7.69983 3.81181 7.69983 4.19825C7.69983 4.58469 8.0131 4.89796 8.39954 4.89796Z" fill="white"/>
			<path d="M4.2013 5.59767C4.97418 5.59767 5.60072 4.97113 5.60072 4.19825C5.60072 3.42537 4.97418 2.79883 4.2013 2.79883C3.42842 2.79883 2.80188 3.42537 2.80188 4.19825C2.80188 4.97113 3.42842 5.59767 4.2013 5.59767Z" fill="white"/>
		</svg>

	)
}

export { Home, Chat, Game, Settings, Profile, Logout, Joystick }

// xmlns:xlink="http://www.w3.org/1999/xlink" 

// xml:space="preserve"