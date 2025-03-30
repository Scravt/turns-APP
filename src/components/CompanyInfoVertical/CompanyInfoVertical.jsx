const CompanyInfoVertical = () => {
	return (
		<div className=" w-1/2 h-full loginBg flex flex-col items-center relative justify-center">
			<div className="flex flex-col items-center relative justify-center overflow-hidden h-screen w-full mt-12">
				{/* Círculo blanco sólido */}
				<div className="bg-white w-[67vw] h-[138vh] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
				{/* Círculo con borde */}
				<div className="bg-transparent border-8 border-white w-[75vw] h-[158vh] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
			</div>

			<div className="index-2 absolute w-full h-screen flex flex-col justify-center 	items-center">
				<div className="  w-full h-1/6 flex justify-center items-center	">
					<img
						src="\images\Logo Atender.png"
						alt="Logo Atender"
						className="w-1/3 h-2/4"
					/>
				</div>
				<div className=" w-full  flex flex-col justify-center items-center grow">
					<img
						src="\images\icon-calendar.svg"
						alt="Icono Calendario"
						className="w-[4vw]"
					/>
					<p className="pt-4 w-3/6 font-inter font-extralight	text-center text-xl">
						Sistema de Gestión y Reserva de Turnos para la Atención
						Ciudadana
					</p>
				</div>

				<img
					src="\images\Logo Gobierno de Entre Rios.svg"
					alt="Logo Gobierno de Entre Ríos"
					className="w-3/6 pb-2"
				/>
			</div>
		</div>
	);
};

export default CompanyInfoVertical;
