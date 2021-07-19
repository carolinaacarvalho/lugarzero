import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Passivos_Opcoes from "./component/nav/opcoes";
import Passivos_Inicio from "./component/passivos/inicio";
import Passivos_Condicoes from "./component/passivos/condicoes";
import Passivos_Mitos from "./component/passivos/mitos";
import Passivos_Vantagens from "./component/passivos/vantagens";
import Nav from "./component/nav/nav";
import Sobre from "./component/paginas/sobre";
import Piloto from "./component/paginas/edificio-piloto";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { Link } from "react-scroll";

import { ParallaxProvider, Parallax } from "react-skrollr";
import $ from "jquery";
import Inicio from "./component/passivos/inicio";

class App extends React.Component {
	dateTime;
	date;
	today;
	time;
	season;
	sky;
	color_i;
	color_array;
	lastScrollV;
	lastScrollM;
	lastScrollC;
	order;

	orderChapterV;
	orderChapterM;
	orderChapterC;

	constructor() {
		super();
		//text id
		this.orderMenu = 0;
		this.clicked1 = true;
		this.clicked2 = true;
		this.clicked3 = true;

		this.season = "Inverno";
		this.sky = "Manhã";
		this.color_array = [
			"#10EBE7",
			"#0FD1CE",
			"#23AFFB",
			"#1584FB",
			"#0A3F78",
			"#001719",
		];
		this.lastScroll = 0; //scroll positions for each chapter

		this.state = {
			city: undefined, // city name
			country: undefined, //country name
			main: undefined, //type of weather

			description: "", //type of weather description
			error: false,
			latI: undefined, //coordinates latitude
			lonG: undefined, //coordinates longitude

			//textos ordem array
			textArray: [],
			id: "",
			type: "",
			func: "",
		};

		this.getPos();
	}

	//------------------------------------------------------------update
	loadingTimer = setInterval(this.getPos.bind(this), 10000);

	render() {
		return (
			<ParallaxProvider
				init={{
					smoothScrollingDuration: 500,
					smoothScrolling: true,
					forceHeight: false,
				}}
			>
				<Switch>
					<>
						<div className="App">
							<Nav season={this.season} sky={this.sky}></Nav>
							{/*EDIFICIOS PASSIVOS*/}
							<Route
								path="/edificiospassivos"
								render={() => (
									<Fragment>
										<div>
											<div id="scrollIcons" style={{ zIndex: 100 }}>
												<div className="px-4 position-static side" id="i1">
													<Link
														to="introducao"
														style={{ textDecoration: "none" }}
														activeClass="active"
														spy={true}
														smooth={true}
														offset={-70}
														duration={500}
														onMouseOver={this.changeColorI1}
														onMouseOut={this.changeColorI2}
													>
														Introdução
													</Link>

													<div class="progress-container">
														<div class="progress-bar" id="myBar"></div>
													</div>
												</div>
												{/**	<div className="px-4 position-static side" id="i2">
													<Link
														to="opcoes"
														style={{ textDecoration: "none" }}
														activeClass="active"
														spy={true}
														smooth={true}
														offset={-70}
														duration={500}
													>
														Opções
													</Link>

													<div class="progress-container">
														<div class="progress-bar" id="myBar"></div>
													</div>
												</div> */}
												<div className="px-4 position-static side" id="i4">
													<Link
														to="vantagens"
														className="checkV"
														style={{ textDecoration: "none" }}
														activeClass="active"
														spy={true}
														smooth={true}
														offset={-70}
														duration={500}
														onMouseOver={this.changeColorV1}
														onMouseOut={this.changeColorV2}
													>
														Vantagens
													</Link>
													<div class="progress-container">
														<div class="progress-bar" id="myBar2"></div>
													</div>
												</div>
												<br></br>

												<div className="px-4 position-static" id="i5">
													<Link
														to="mitos"
														className="checkM"
														style={{ textDecoration: "none" }}
														activeClass="active"
														spy={true}
														smooth={true}
														offset={-70}
														duration={500}
														onMouseOver={this.changeColorM1}
														onMouseOut={this.changeColorM2}
													>
														Mitos
													</Link>
													<div class="progress-container">
														<div class="progress-bar" id="myBar3"></div>
													</div>
												</div>
												<br></br>

												<div className="px-4 position-static" id="i6">
													<Link
														to="condicoes"
														className="checkC"
														style={{ textDecoration: "none" }}
														activeClass="active"
														spy={true}
														smooth={true}
														offset={-70}
														duration={500}
														onMouseOver={this.changeColorC1}
														onMouseOut={this.changeColorC2}
													>
														Condições
													</Link>
													<div class="progress-container">
														<div class="progress-bar" id="myBar4"></div>
													</div>
												</div>
												{this.fontSize()}
												{this.colorBar()}
											</div>{" "}
											<div className="inicio">
												<Passivos_Inicio season={this.season} sky={this.sky} />
											</div>
											<div
												data--290p-top="opacity: 1; position:fixed; bottom:0; left:50%"
												data--310p-top="opacity:0;  position:fixed; bottom:0;  left:50%"
												data-anchor-target="#ecoeficiencia"
											>
												<a href="#nextIntro">
													<i
														class="fa fa-angle-double-down"
														aria-hidden="true"
														style={{ fontSize: "40px", color: "white" }}
													></i>
												</a>
											</div>
											<div className="row">
												{/*menu scroll*/}
												<div
													style={{ zIndex: 100 }}
													className=" opcoesBtn py-5"
													data-bottom-top="opacity:0;top:100%; left:5%; position: relative;"
													data--3260p-top="opacity:0;top:100%; left:5%; position: fixed;"
													data--3300p-top="opacity:1;top:25%; left:5%;  position: fixed;"
													data--3500p-top="opacity:1;top:25%; left:5%;  position: fixed; pointer-events: auto;"
													data--3550p-top="opacity:0;top:0%; left:5%; position: fixed; pointer-events: none;"
													data-anchor-target="#ecoeficiencia"
												>
													{" "}
													{/*storytelling btns*/}
													<button
														onClick={this.addPost1}
														className="my-5 buttonV"
														id="V"
													></button>
													<button
														onClick={this.addPost2}
														className="my-5  buttonM"
														id="M"
													></button>
													<button
														onClick={this.addPost3}
														className="my-5  buttonC"
														id="C"
													></button>
												</div>
											</div>
											{/*depending on btns clicked call function - vantagens, mitos, condições*/}
											{this.state.textArray.map((t) => {
												return (
													<Parallax>
														<Passivos_Opcoes
															key={t.id}
															id={t.id}
															type={t.type}
															func={t.func}
														/>
													</Parallax>
												);
											})}
											<div
												data--3550p-top="opacity: 0; position:fixed; bottom:5%; right:4.4%"
												data--3600p-top="opacity:1;  position:fixed; bottom:5%;  right:4.4%"
												data-anchor-target="#ecoeficiencia"
											>
												<a href="#opcoesIntro">
													<i
														class="fa fa-angle-up"
														aria-hidden="true"
														style={{ fontSize: "20px", color: "white" }}
													></i>
												</a>
											</div>
										</div>
									</Fragment>
								)}
							/>
							{/*EDIFICIO PILOTO*/}
							<Route
								activeClass="active"
								path="/edificiopiloto"
								render={() => <Piloto season={this.season} sky={this.sky} />}
							></Route>
							{/*PORTFOLIO*/}
							{/** 	<Route
								activeClass="active"
								path="/portfolio"
								exact
								component={Portfolio}
							></Route>
							{/*SOBRE — APAGAR TEXTO*/}
							<Route
								activeClass="active"
								path="/inicio"
								onClick={() => this.grid3}
								render={() => <Sobre season={this.season} sky={this.sky} />}
							/>
						</div>
					</>
				</Switch>
			</ParallaxProvider>
		);
	}

	//------------------------------------------------------------get coordinates
	getPos() {
		navigator.geolocation.getCurrentPosition(this.showPosition);
	}

	//set values

	showPosition = async (position) => {
		this.latI = position.coords.latitude;
		this.lonG = position.coords.longitude;

		//------------------------------------------------------------get date and time

		this.today = new Date();
		this.date =
			this.today.getFullYear() +
			"-" +
			(this.today.getMonth() + 1) +
			"-" +
			this.today.getDate();
		this.time =
			this.today.getHours() +
			":" +
			this.today.getMinutes() +
			":" +
			this.today.getSeconds();
		this.dateTime = this.date + " " + this.time;

		//------------------------------------------------------------get season out of date
		//	rgb(221, 101, 91);

		if (
			(this.today.getMonth() === 11 && this.today.getDate() > 21) ||
			this.today.getMonth() === 0 ||
			this.today.getMonth() === 1 ||
			(this.today.getMonth() === 2 && this.today.getDate() < 20)
		) {
			if (this.latI > 0) {
				this.season = "Inverno";
				this.color_array = [
					"#10EBE7",
					"#0FD1CE",
					"#23AFFB",
					"#1584FB",
					"#0A3F78",
					"#001719",
				];
			} else {
				this.season = "Verão";
				this.color_array = [
					"#DDFF4D",
					"#DBEF22",
					"#CFD100",
					"#CCB600",
					"#9E9400",
					"#302300",
				];
			}
		} else if (
			(this.today.getMonth() === 5 && this.today.getDate() < 21) ||
			this.today.getMonth() === 3 ||
			this.today.getMonth() === 4 ||
			(this.today.getMonth() === 2 && this.today.getDate() >= 20)
		) {
			if (this.latI > 0) {
				this.season = "Primavera";
				this.color_array = [
					"#7CFC9A",
					"#1DF650",
					"#23CC4A",
					"#00BD2C",
					"#4E8A00",
					"#182800",
				];
			} else {
				this.season = "Outono";
				this.color_array = [
					"#FFC18F",
					"#FFAC47",
					"#FA9515",
					"#FB6115",
					"#9B0000",
					"#350000" /*******asddd */,
				];
			}
		} else if (
			(this.today.getMonth() === 8 && this.today.getDate() > 22) ||
			this.today.getMonth() === 7 ||
			this.today.getMonth() === 6 ||
			(this.today.getMonth() === 5 && this.today.getDate() >= 21)
		) {
			if (this.latI > 0) {
				this.season = "Verão"; /**substituir aqui */
				this.color_array = [
					"#DDFF4D",
					"#DBEF22",
					"#CFD100",
					"#CCB600",
					"#9E9400",
					"#302300",
				];
			} else {
				this.season = "Inverno";
				this.color_array = [
					"#10EBE7",
					"#0FD1CE",
					"#23AFFB",
					"#1584FB",
					"#0A3F78",
					"#001719",
				];
			}
		} else if (
			(this.today.getMonth() === 11 && this.today.getDate() > 21) ||
			this.today.getMonth() === 10 ||
			this.today.getMonth() === 9 ||
			(this.today.getMonth() === 8 && this.today.getDate() >= 22)
		) {
			if (this.latI > 0) {
				this.season = "Outono";
				this.color_array = [
					"#FFC18F",
					"#FFAC47",
					"#FA9515",
					"#FB6115",
					"#9B0000",
					"#350000",
				];
			} else {
				this.season = "Primavera";
				this.color_array = [
					"#7CFC9A",
					"#1DF650",
					"#23CC4A",
					"#00BD2C",
					"#4E8A00",
					"#182800",
				];
			}
		} else {
			this.season = "Inverno";
			this.color_array = [
				"#10EBE7",
				"#0FD1CE",
				"#23AFFB",
				"#1584FB",
				"#0A3F78",
				"#001719",
			];
			this.sky = "Manhã";
		}
		//	console.log(this.today.getHours());

		//------------------------------------------------------------get sun position from time + season
		const favicon = document.getElementById("icon");

		if (this.season === "Primavera" || this.season === "Verão") {
			if (this.today.getHours() >= 7 && this.today.getHours() < 13) {
				this.sky = "Manhã"; //mudar manha noite
				favicon.href = "icon/Ativo 3.ico";

				//				document.body.style.backgroundColor = "rgb(100,100,100)";
			} else if (this.today.getHours() >= 13 && this.today.getHours() < 19) {
				this.sky = "Tarde";
				console.log(this.today.getHours());
				favicon.href = "icon/Ativo 4.ico";

				//				document.body.style.backgroundColor = "rgb(80,80,80)";
			} else if (this.today.getHours() >= 19 && this.today.getHours() < 21) {
				this.sky = "Fim da Tarde";
				favicon.href = "icon/Ativo 5.ico";

				//				document.body.style.backgroundColor = "rgb(50,50,50)";
			} else if (
				(this.today.getHours() >= 19 && this.today.getHours() <= 23) ||
				(this.today.getHours() >= 0 && this.today.getHours() < 7)
			) {
				this.sky = "Noite";
				favicon.href = "icon/Ativo 6.ico";

				//				document.body.style.backgroundColor = "rgb(10,10,10)";
				if (this.today.getHours() >= 0 && this.today.getHours() < 7) {
					this.sky = "Base";
					favicon.href = "icon/Ativo 7.ico";
				}
			}
		} else if (this.season === "Inverno" || this.season === "Outono") {
			if (this.today.getHours() >= 5 && this.today.getHours() < 11) {
				this.sky = "Manhã";
				favicon.href = "icon/Ativo 3.ico";

				//				document.body.style.backgroundColor = "rgb(100,100,100)";
			} else if (this.today.getHours() >= 11 && this.today.getHours() < 17) {
				this.sky = "Tarde";
				favicon.href = "icon/Ativo 4.ico";

				//				document.body.style.backgroundColor = "rgb(80,80,80)";
			} else if (this.today.getHours() >= 17 && this.today.getHours() < 19) {
				this.sky = "Fim da Tarde";
				favicon.href = "icon/Ativo 5.ico";

				//				document.body.style.backgroundColor = "rgb(50,50,50)";
			} else if (
				(this.today.getHours() >= 19 && this.today.getHours() <= 23) ||
				(this.today.getHours() >= 0 && this.today.getHours() < 7)
			) {
				this.sky = "Noite";
				favicon.href = "icon/Ativo 6.ico";

				if (this.today.getHours() >= 0 && this.today.getHours() < 7) {
					this.sky = "Base";
					favicon.href = "icon/Ativo 7.ico";
				}
				//				document.body.style.backgroundColor = "rgb(10,10,10)";
			}
		} else {
			this.sky = "Manhã";
		}
		//------------------------------------------------------------get weather from coordinates
		const api_call = await fetch(
			"https://api.openweathermap.org/data/2.5/weather?lang=pt&lat=" +
				this.latI +
				"&lon=" +
				this.lonG +
				"&appid=35c00043bfe5a75fc9c93c1ac8edb98e"
		);

		const response = await api_call.json();

		console.log(response);

		//------------------------------------------------------------get data from coordinates
		this.setState({
			city: response.name,
			country: response.sys.country,
			main: response.weather[0].main,

			description: response.weather[0].description,
		});
	};

	changeColorI1 = () => {
		if (this.season != null) {
			if (this.sky === "Noite" || this.sky === "Base") {
				document.querySelector("#i1 a").style.color = this.color_array[3];
			} else {
				document.querySelector("#i1 a").style.color = this.color_array[0];
			}
		}
	};

	changeColorI2 = () => {
		if (this.sky === "Noite" || this.sky === "Base") {
			document.querySelector("#i1 a").style.color = this.color_array[0];
		} else {
			document.querySelector("#i1 a").style.color = this.color_array[3];
		}
	};

	changeColorV1 = () => {
		if (this.season != null) {
			if (this.sky === "Noite" || this.sky === "Base") {
				document.querySelector("#i4 a").style.color = this.color_array[3];
			} else {
				document.querySelector("#i4 a").style.color = this.color_array[0];
			}
		}
	};

	changeColorV2 = () => {
		if (this.sky === "Noite" || this.sky === "Base") {
			document.querySelector("#i4 a").style.color = this.color_array[0];
		} else {
			document.querySelector("#i4 a").style.color = this.color_array[3];
		}
	};

	changeColorM1 = () => {
		if (this.season != null) {
			if (this.sky === "Noite" || this.sky === "Base") {
				document.querySelector("#i5 a").style.color = this.color_array[3];
			} else {
				document.querySelector("#i5 a").style.color = this.color_array[0];
			}
		}
	};

	changeColorM2 = () => {
		if (this.sky === "Noite" || this.sky === "Base") {
			document.querySelector("#i5 a").style.color = this.color_array[0];
		} else {
			document.querySelector("#i5 a").style.color = this.color_array[3];
		}
	};

	changeColorC1 = () => {
		if (this.season != null) {
			if (this.sky === "Noite" || this.sky === "Base") {
				document.querySelector("#i6 a").style.color = this.color_array[3];
			} else {
				document.querySelector("#i6 a").style.color = this.color_array[0];
			}
		}
	};

	changeColorC2 = () => {
		if (this.sky === "Noite" || this.sky === "Base") {
			document.querySelector("#i6 a").style.color = this.color_array[0];
		} else {
			document.querySelector("#i6 a").style.color = this.color_array[3];
		}
	};
	colorBar = () => {
		var bar = document.querySelector("#myBar");
		var bar2 = document.querySelector("#myBar2");
		var bar3 = document.querySelector("#myBar3");
		var bar4 = document.querySelector("#myBar4");
		if (this.season != null) {
			if (bar != null)
				if (this.sky === "Noite" || this.sky === "Base") {
					bar.style.background = this.color_array[0];
					bar2.style.background = this.color_array[0];
					bar3.style.background = this.color_array[0];
					bar4.style.background = this.color_array[0];
				} else {
					bar.style.background = this.color_array[3];
					bar2.style.background = this.color_array[3];
					bar3.style.background = this.color_array[3];
					bar4.style.background = this.color_array[3];
				}
			var check_i1 = document.querySelector("#i1 a");
			var check_i2 = document.querySelector("#i4 a");
			var check_i3 = document.querySelector("#i5 a");
			var check_i4 = document.querySelector("#i6 a");
			if (check_i1 != null)
				if (this.sky === "Noite" || this.sky === "Base") {
					check_i1.style.color = this.color_array[0];

					check_i2.style.color = this.color_array[0];

					check_i3.style.color = this.color_array[0];

					check_i4.style.color = this.color_array[0];
				} else {
					check_i1.style.color = this.color_array[3];

					check_i2.style.color = this.color_array[3];

					check_i3.style.color = this.color_array[3];

					check_i4.style.color = this.color_array[3];
				}
		}
	};

	//------------------------------------------------------------change font size depending on scroll position
	fontSize = () => {
		{
			var check_i1 = document.querySelector("#i1 a");
			var vant = this.lastScrollV;
			var mito = this.lastScrollM;
			var cond = this.lastScrollC;
			//------------------------------------------------------------inicio
			$(window).on("scroll", function () {
				if (check_i1 != null) {
					var winScroll =
						document.body.scrollTop || document.documentElement.scrollTop;
					var heightInicio = $(".inicio").height();
					var scrolled1 = (winScroll / heightInicio) * 100;
					if (winScroll < heightInicio) {
						document.getElementById("myBar2").style.width = 0 + "%";
						document.getElementById("myBar3").style.width = 0 + "%";
						document.getElementById("myBar4").style.width = 0 + "%";
						document.getElementById("myBar").style.width = scrolled1 + "%";
					}
					//------------------------------------------------------------check chapter order for heights
					if (vant === 1) {
						this.heightVantagens = heightInicio + $(".vantagem").height();

						this.scrolledV =
							((winScroll - heightInicio) /
								(this.heightVantagens - heightInicio)) *
							100;
						if (mito === 2) {
							this.heightMitos = this.heightVantagens + $(".mitos").height();
							this.heightCondicoes =
								this.heightMitos + $(".condicoes").height();

							this.scrolledM =
								((winScroll - this.heightVantagens) /
									(this.heightMitos - this.heightVantagens)) *
								100;
							this.scrolledC =
								((winScroll - this.heightMitos) /
									(this.heightCondicoes - this.heightMitos)) *
								100;
						} else {
							this.heightCondicoes =
								this.heightVantagens + $(".condicoes").height();
							this.heightMitos = this.heightCondicoes + $(".mitos").height();

							this.scrolledC =
								((winScroll - this.heightVantagens) /
									(this.heightCondicoes - this.heightVantagens)) *
								100;
							this.scrolledM =
								((winScroll - this.heightCondicoes) /
									(this.heightMitos - this.heightCondicoes)) *
								100;
						}
					} else if (mito === 1) {
						this.heightMitos = heightInicio + $(".mitos").height();

						this.scrolledM =
							((winScroll - heightInicio) / (this.heightMitos - heightInicio)) *
							100;

						if (vant === 2) {
							this.heightVantagens = this.heightMitos + $(".vantagem").height();
							this.heightCondicoes =
								this.heightVantagens + $(".condicoes").height();

							this.scrolledV =
								((winScroll - this.heightMitos) /
									(this.heightVantagens - this.heightMitos)) *
								100;
							this.scrolledC =
								((winScroll - this.heightVantagens) /
									(this.heightCondicoes - this.heightVantagens)) *
								100;
						} else {
							this.heightCondicoes =
								this.heightMitos + $(".condicoes").height();
							this.heightVantagens =
								this.heightCondicoes + $(".vantagem").height();

							this.scrolledC =
								((winScroll - this.heightMitos) /
									(this.heightCondicoes - this.heightMitos)) *
								100;
							this.scrolledV =
								((winScroll - this.heightCondicoes) /
									(this.heightVantagens - this.heightCondicoes)) *
								100;
						}
					} else if (cond === 1) {
						this.heightCondicoes = heightInicio + $(".condicoes").height();

						this.scrolledC =
							((winScroll - heightInicio) /
								(this.heightCondicoes - heightInicio)) *
							100;

						if (vant === 2) {
							this.heightVantagens =
								this.heightCondicoes + $(".vantagem").height();
							this.heightMitos = this.heightVantagens + $(".mitos").height();

							this.scrolledV =
								((winScroll - this.heightCondicoes) /
									(this.heightVantagens - this.heightCondicoes)) *
								100;
							this.scrolledM =
								((winScroll - this.heightVantagens) /
									(this.heightMitos - this.heightVantagens)) *
								100;
						} else {
							this.heightMitos = this.heightCondicoes + $(".mitos").height();
							this.heightVantagens = this.heightMitos + $(".vantagem").height();

							this.scrolledM =
								((winScroll - this.heightCondicoes) /
									(this.heightMitos - this.heightCondicoes)) *
								100;
							this.scrolledV =
								((winScroll - this.heightMitos) /
									(this.heightVantagens - this.heightMitos)) *
								100;
						}
					}

					//------------------------------------------------------------get ammount of chapter scrolled based on heights
					if ($(".checkV").hasClass("active")) {
						document.getElementById("myBar").style.width = 0 + "%";
						document.getElementById("myBar3").style.width = 0 + "%";
						document.getElementById("myBar4").style.width = 0 + "%";
						document.getElementById("myBar2").style.width =
							this.scrolledV + "%";
					}
					if ($(".checkM").hasClass("active")) {
						document.getElementById("myBar").style.width = 0 + "%";
						document.getElementById("myBar4").style.width = 0 + "%";
						document.getElementById("myBar2").style.width = 0 + "%";
						document.getElementById("myBar3").style.width =
							this.scrolledM + "%";
					}
					if ($(".checkC").hasClass("active")) {
						document.getElementById("myBar").style.width = 0 + "%";
						document.getElementById("myBar2").style.width = 0 + "%";
						document.getElementById("myBar3").style.width = 0 + "%";
						document.getElementById("myBar4").style.width =
							this.scrolledC + "%";
					}
				}
			});
		}
	};

	//------------------------------------------------------------add vantagens

	addPost1 = () => {
		if (this.clicked1 === true) {
			//add id
			this.orderMenu = this.orderMenu + 1;
			this.orderChapterV = 3;

			if (this.orderMenu === 1) {
				this.lastScrollV = 1;
			} else if (this.orderMenu === 2) {
				this.lastScrollV = 2;
			} else if (this.orderMenu === 3) {
				this.lastScrollV = 3;
			}

			for (var i = 0; i < this.state.textArray.length; i++) {
				if (this.orderMenu === 3) {
					if (
						this.state.textArray[i].type === "Mitos" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="mitos">
								<Passivos_Mitos
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Mitos>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Condicoes" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="condicoes">
								<Passivos_Condicoes
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Condicoes>
							</div>
						);
					}
				} else {
					if (
						this.state.textArray[i].type === "Mitos" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="mitos">
								<Passivos_Mitos
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Mitos>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Condicoes" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="condicoes">
								<Passivos_Condicoes
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Condicoes>
							</div>
						);
					}
				}
				if (
					this.state.textArray[i].type === "Mitos" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="mitos">
							<Passivos_Mitos
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Mitos>
						</div>
					);
				}
				if (
					this.state.textArray[i].type === "Condicoes" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="condicoes">
							<Passivos_Condicoes
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Condicoes>
						</div>
					);
				}
			}

			const copyTextArray = Object.assign([], this.state.textArray);

			copyTextArray.push({
				//call func
				id: this.orderMenu,
				type: "Vantagens",
				func: (
					<div className="vantagem">
						<Passivos_Vantagens
							season={this.season}
							sky={this.sky}
							order={this.orderChapterV}
						></Passivos_Vantagens>
					</div>
				),
			});

			this.setState({
				textArray: copyTextArray,
			});

			console.log(copyTextArray);

			document.getElementById("i4").style.visibility = "visible"; //make component visible
			document.getElementById("i4").style.textShadow = "2px 2px 25px gray";

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "2px 2px 20px gray";
			}, 500);

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "2px 2px 15px gray";
			}, 1000);

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "2px 2px 9px gray";
			}, 1500);

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "2px 2px 7px gray";
			}, 2000);

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "2px 2px 5px gray";
			}, 2500);

			window.setTimeout(function () {
				document.getElementById("i4").style.textShadow = "none";
			}, 3000);

			if (this.orderMenu === 1)
				//change scroll menu order depending on click order
				document.querySelector("#scrollIcons > #i4").style.order = 4;
			else if (this.orderMenu === 2)
				document.querySelector("#scrollIcons > #i4").style.order = 5;
			else if (this.orderMenu === 3)
				document.querySelector("#scrollIcons > #i4").style.order = 6;
			this.clicked1 = false;
		}
		console.log(this.clicked1 + " " + this.clicked2 + " " + this.clicked3);
		console.log(this.state.textArray);
	};

	//------------------------------------------------------------add mitos

	addPost2 = () => {
		if (this.clicked2 === true) {
			this.orderMenu = this.orderMenu + 1; //add id
			this.orderChapterM = 3;

			if (this.orderMenu === 1) {
				this.lastScrollM = 1;
			} else if (this.orderMenu === 2) {
				this.lastScrollM = 2;
			} else if (this.orderMenu === 3) {
				this.lastScrollM = 3;
			}

			for (var i = 0; i < this.state.textArray.length; i++) {
				if (this.orderMenu === 3) {
					if (
						this.state.textArray[i].type === "Vantagens" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="vantagem">
								<Passivos_Vantagens
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Vantagens>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Condicoes" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="condicoes">
								<Passivos_Condicoes
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Condicoes>
							</div>
						);
					}
				} else {
					if (
						this.state.textArray[i].type === "Vantagens" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="vantagem">
								<Passivos_Vantagens
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Vantagens>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Condicoes" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="condicoes">
								<Passivos_Condicoes
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Condicoes>
							</div>
						);
					}
				}
				if (
					this.state.textArray[i].type === "Vantagens" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="vantagem">
							<Passivos_Vantagens
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Vantagens>
						</div>
					);
				}
				if (
					this.state.textArray[i].type === "Condicoes" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="condicoes">
							<Passivos_Condicoes
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Condicoes>
						</div>
					);
				}
			}
			const copyTextArray = Object.assign([], this.state.textArray);
			copyTextArray.push({
				//call func
				id: this.orderMenu,
				type: "Mitos",
				func: (
					<div className="mitos">
						<Passivos_Mitos
							season={this.season}
							sky={this.sky}
							order={this.orderChapterM}
						></Passivos_Mitos>
					</div>
				),
			});
			this.setState({
				textArray: copyTextArray,
			});
			console.log(copyTextArray);

			document.getElementById("i5").style.visibility = "visible"; //make component visible
			document.getElementById("i5").style.textShadow = "2px 2px 25px gray";

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "2px 2px 20px gray";
			}, 500);

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "2px 2px 15px gray";
			}, 1000);

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "2px 2px 9px gray";
			}, 1500);

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "2px 2px 7px gray";
			}, 2000);

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "2px 2px 5px gray";
			}, 2500);

			window.setTimeout(function () {
				document.getElementById("i5").style.textShadow = "none";
			}, 3000);
			//change scroll menu order depending on click order
			if (this.orderMenu === 1)
				document.querySelector("#scrollIcons > #i5").style.order = 4;
			else if (this.orderMenu === 2)
				document.querySelector("#scrollIcons > #i5").style.order = 5;
			else if (this.orderMenu === 3)
				document.querySelector("#scrollIcons > #i5").style.order = 6;

			this.clicked2 = false;
		}

		console.log(this.clicked1 + " " + this.clicked2 + " " + this.clicked3);
	};

	//------------------------------------------------------------add condicoes

	addPost3 = () => {
		if (this.clicked3 === true) {
			//add id
			this.orderMenu = this.orderMenu + 1;
			this.orderChapterC = 3;

			if (this.orderMenu === 1) {
				this.lastScrollC = 1;
			} else if (this.orderMenu === 2) {
				this.lastScrollC = 2;
			} else if (this.orderMenu === 3) {
				this.lastScrollC = 3;
			}

			console.log(this.lastScrollV);

			for (var i = 0; i < this.state.textArray.length; i++) {
				if (this.orderMenu === 3) {
					if (
						this.state.textArray[i].type === "Vantagens" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="vantagem">
								<Passivos_Vantagens
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Vantagens>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Mitos" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="mitos">
								<Passivos_Mitos
									season={this.season}
									sky={this.sky}
									order={1}
								></Passivos_Mitos>
							</div>
						);
					}
				} else {
					if (
						this.state.textArray[i].type === "Vantagens" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="vantagem">
								<Passivos_Vantagens
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Vantagens>
							</div>
						);
					}
					if (
						this.state.textArray[i].type === "Mitos" &&
						this.state.textArray[i].id === 1
					) {
						this.state.textArray[i].func = (
							<div className="mitos">
								<Passivos_Mitos
									season={this.season}
									sky={this.sky}
									order={2}
								></Passivos_Mitos>
							</div>
						);
					}
				}
				if (
					this.state.textArray[i].type === "Vantagens" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="vantagem">
							<Passivos_Vantagens
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Vantagens>
						</div>
					);
				}
				if (
					this.state.textArray[i].type === "Mitos" &&
					this.state.textArray[i].id === 2
				) {
					this.state.textArray[i].func = (
						<div className="mitos">
							<Passivos_Mitos
								season={this.season}
								sky={this.sky}
								order={2}
							></Passivos_Mitos>
						</div>
					);
				}
			}
			const copyTextArray = Object.assign([], this.state.textArray); //call func
			copyTextArray.push({
				id: this.orderMenu,
				type: "Condicoes",
				func: (
					<div className="condicoes">
						<Passivos_Condicoes
							season={this.season}
							sky={this.sky}
							order={this.orderChapterC}
						></Passivos_Condicoes>
					</div>
				),
			});
			this.setState({
				textArray: copyTextArray,
			});
			document.getElementById("i6").style.visibility = "visible"; //make component visible
			document.getElementById("i6").style.visibility = "visible"; //make component visible
			document.getElementById("i6").style.textShadow = "2px 2px 25px gray";

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "2px 2px 20px gray";
			}, 500);

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "2px 2px 15px gray";
			}, 1000);

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "2px 2px 9px gray";
			}, 1500);

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "2px 2px 7px gray";
			}, 2000);

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "2px 2px 5px gray";
			}, 2500);

			window.setTimeout(function () {
				document.getElementById("i6").style.textShadow = "none";
			}, 3000);
			//change scroll menu order depending on click order
			if (this.orderMenu === 1)
				document.querySelector("#scrollIcons > #i6").style.order = 4;
			else if (this.orderMenu === 2)
				document.querySelector("#scrollIcons > #i6").style.order = 5;
			else if (this.orderMenu === 3)
				document.querySelector("#scrollIcons > #i6").style.order = 6;

			this.clicked3 = false;
		}
		console.log(this.clicked1 + " " + this.clicked2 + " " + this.clicked3);
	};
}
export default App;
