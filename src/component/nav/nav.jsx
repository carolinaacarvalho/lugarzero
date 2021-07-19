import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import * as d3 from "d3";
import { Link } from "react-router-dom";
import $ from "jquery";

import logo from "../svgs/logo.svg";
import { color } from "d3";

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".logo") != null) {
		d3.xml(logo).then((data) => {
			d3.select(".logo").node().append(data.documentElement);
			d3.select("#logo #manha").style("opacity", "1");
			d3.select("#logo #tarde").style("opacity", "0");
			d3.select("#logo #fimtarde").style("opacity", "0");
			d3.select("#logo #noite").style("opacity", "0");
			d3.select("#logo #base").style("opacity", "0");

			d3.select("#logo #solM circle").style("fill", "yellow");
			d3.select("#logo #solM line").style("fill", "transparent");
			d3.select("#logo #solM line").style("stroke", "yellow");
			d3.select("#logo #solM line").style("stroke-width", "5px");
			d3.select("#logo #janelaM").style("fill", cLado);
			d3.select("#logo #ladoM").style("fill", cLado);
			d3.select("#logo #cimaM").style("fill", cCima);
			d3.select("#logo #frenteM").style("fill", cFrente1);
		});
	}
});
var cLado, cCima, cLado, cFrente1; //variables normal houses
var janela, frente;
const Nav = (props) => {
	//------------------------------------------------------------change color palette depending on season
	cLado = "#4E4E4D";
	cLado = "#777777";
	cCima = "#9D9D9C";
	cFrente1 = "#E0E0E0";

	if (props.season === "Inverno") {
		janela = "#1584FB";
		frente = "#10EBE7";
	} else if (props.season === "Primavera") {
		janela = "#00BD2C";
		frente = "#7CFC9A";
	} else if (props.season === "Verão") {
		janela = "#CCB600";
		frente = "#DDFF4D";
	} else if (props.season === "Outono") {
		janela = "#FB6115";
		frente = "#FFC18F";
	}

	if (document.querySelector(".link") != null)
		if (props.sky === "Noite" || props.sky === "Base") {
			document.querySelector(".link").style.color = cLado;
			document.querySelector(".link2").style.color = cLado;
			document.querySelector(".link3").style.color = cLado;
			document.querySelector(".icon").style.color = cLado;
		}
	$(".link1").mouseover(function () {
		if (props.sky === "Noite" || props.sky === "Base")
			document.querySelector(".link1").style.color = janela;
		else document.querySelector(".link1").style.color = frente;
	});
	$(".link2").mouseover(function () {
		if (props.sky === "Noite" || props.sky === "Base")
			document.querySelector(".link2").style.color = janela;
		else document.querySelector(".link2").style.color = frente;
	});
	$(".link3").mouseover(function () {
		if (props.sky === "Noite" || props.sky === "Base")
			document.querySelector(".link3").style.color = janela;
		else document.querySelector(".link3").style.color = frente;
	});
	$(".link1").mouseleave(function () {
		if (window.location.pathname === "/inicio")
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link1").style.color = frente;
			else document.querySelector(".link1").style.color = janela;
		else {
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link1").style.color = cLado;
			else document.querySelector(".link1").style.color = cLado;
		}
	});
	$(".link2").mouseleave(function () {
		if (window.location.pathname === "/edificiospassivos")
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link2").style.color = frente;
			else document.querySelector(".link2").style.color = janela;
		else {
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link2").style.color = cLado;
			else document.querySelector(".link2").style.color = cLado;
		}
	});
	$(".link3").mouseleave(function () {
		if (window.location.pathname === "/edificiopiloto")
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link3").style.color = frente;
			else document.querySelector(".link3").style.color = janela;
		else {
			if (props.sky === "Noite" || props.sky === "Base")
				document.querySelector(".link3").style.color = cLado;
			else document.querySelector(".link3").style.color = cLado;
		}
	});
	if (document.querySelector(".link1") != null)
		if (window.location.pathname === "/inicio") {
			if (props.sky === "Noite" || props.sky === "Base") {
				document.querySelector(".link1").style.color = frente;
				{
					/**		document.querySelector(".link1").style.backgroundColor = "black";
				document.querySelector(".link1").style.border = "40px solid black"; */
				}
			} else {
				document.querySelector(".link1").style.color = janela;
				{
					/**document.querySelector(".link1").style.backgroundColor = "white";
			document.querySelector(".link1").style.border = "40px solid white";*/
				}
			}
		}

	if (document.querySelector(".link2") != null) {
		if (window.location.pathname === "/edificiospassivos") {
			if (props.sky === "Noite" || props.sky === "Base") {
				document.querySelector(".link2").style.color = frente;
				{
					/**		document.querySelector(".link2").style.backgroundColor = "black";
				document.querySelector(".link2").style.border = "40px solid black"; */
				}
			} else {
				document.querySelector(".link2").style.color = janela;
				{
					/**document.querySelector(".link2").style.backgroundColor = "white";
			document.querySelector(".link2").style.border = "40px solid white";*/
				}
			}
		}
	}
	if (document.querySelector(".link3") != null) {
		if (window.location.pathname === "/edificiopiloto") {
			if (props.sky === "Noite" || props.sky === "Base") {
				document.querySelector(".link3").style.color = frente;
				{
					/**		document.querySelector(".link3").style.backgroundColor = "black";
				document.querySelector(".link3").style.border = "40px solid black"; */
				}
			} else {
				document.querySelector(".link3").style.color = janela;
				{
					/**document.querySelector(".link3").style.backgroundColor = "white";
			document.querySelector(".link3").style.border = "40px solid white";*/
				}
			}
		}
	}

	//------------------------------------------------------------color palette for normal houses

	d3.xml(logo).then(() => {
		d3.select("#logo #janelaB").style("fill", cLado);
		d3.select("#logo #ladoB").style("fill", cLado);
		d3.select("#logo #cimaB").style("fill", cLado);
		d3.select("#logo #frenteB").style("fill", cLado);

		d3.select("#logo #solM circle").style("fill", "yellow");
		d3.select("#logo #solM line").style("fill", "transparent");
		d3.select("#logo #solM line").style("stroke", "yellow");
		d3.select("#logo #solM line").style("stroke-width", "5px");
		d3.select("#logo #janelaM").style("fill", cLado);
		d3.select("#logo #ladoM").style("fill", cLado);
		d3.select("#logo #cimaM").style("fill", cCima);
		d3.select("#logo #frenteM").style("fill", cFrente1);

		d3.select("#logo #solT circle").style("fill", "yellow");
		d3.select("#logo #solT line").style("fill", "transparent");
		d3.select("#logo #solT line").style("stroke", "yellow");
		d3.select("#logo #solT line").style("stroke-width", "5px");
		d3.select("#logo #ladoT").style("fill", cCima);
		d3.select("#logo #cimaT").style("fill", cFrente1);
		d3.select("#logo #frenteT").style("fill", cLado);
		d3.select("#logo #janelaT").style("fill", cLado);

		d3.select("#logo #solFT circle").style("fill", "yellow");
		d3.select("#logo #solFT line").style("fill", "transparent");
		d3.select("#logo #solFT line").style("stroke", "yellow");
		d3.select("#logo #solFT line").style("stroke-width", "5px");
		d3.select("#logo #ladoFT").style("fill", cFrente1);
		d3.select("#logo #cimaFT").style("fill", cLado);
		d3.select("#logo #frenteFT").style("fill", cLado);
		d3.select("#logo #janelaFT").style("fill", cCima);

		d3.select("#logo #solN circle").style("fill", "yellow");
		d3.select("#logo #solN line").style("fill", "transparent");
		d3.select("#logo #solN line").style("stroke", "yellow");
		d3.select("#logo #solN line").style("stroke-width", "5px");
		d3.select("#logo #ladoN").style("fill", cLado);
		d3.select("#logo #cimaN").style("fill", cCima);
		d3.select("#logo #frenteN").style("fill", cLado);
		d3.select("#logo #janelaN").style("fill", cFrente1);

		if (props.sky === "Manhã") {
			d3.select("#logo #manha").style("opacity", "1");
			d3.select("#logo #tarde").style("opacity", "0");
			d3.select("#logo #fimtarde").style("opacity", "0");
			d3.select("#logo #noite").style("opacity", "0");
			d3.select("#logo #base").style("opacity", "0");
		} else if (props.sky === "Tarde") {
			d3.select("#logo #manha").style("opacity", "0");
			d3.select("#logo #tarde").style("opacity", "1");
			d3.select("#logo #fimtarde").style("opacity", "0");
			d3.select("#logo #noite").style("opacity", "0");
			d3.select("#logo #base").style("opacity", "0");
		} else if (props.sky === "Fim da Tarde") {
			d3.select("#logo #manha").style("opacity", "0");
			d3.select("#logo #tarde").style("opacity", "0");
			d3.select("#logo #fimtarde").style("opacity", "1");
			d3.select("#logo #noite").style("opacity", "0");
			d3.select("#logo #base").style("opacity", "0");
		} else if (props.sky === "Noite") {
			d3.select("#logo #manha").style("opacity", "0");
			d3.select("#logo #tarde").style("opacity", "0");
			d3.select("#logo #fimtarde").style("opacity", "0");
			d3.select("#logo #noite").style("opacity", "1");
			d3.select("#logo #base").style("opacity", "0");
		} else if (props.sky === "Base") {
			d3.select("#logo #manha").style("opacity", "0");
			d3.select("#logo #tarde").style("opacity", "0");
			d3.select("#logo #fimtarde").style("opacity", "0");
			d3.select("#logo #noite").style("opacity", "0");
			d3.select("#logo #base").style("opacity", "1");
		}
		document.addEventListener("DOMContentLoaded", function () {
			var listItem = document.querySelector(".logo");
			if (listItem != null)
				listItem.addEventListener("mouseenter", function () {
					setTimeout(function () {
						d3.select("#logo #manha").style("opacity", "1");
						d3.select("#logo #tarde").style("opacity", "0");
						d3.select("#logo #fimtarde").style("opacity", "0");
						d3.select("#logo #noite").style("opacity", "0");
						d3.select("#logo #base").style("opacity", "0");
					}, 500);

					setTimeout(function () {
						d3.select("#logo #manha").style("opacity", "0");
						d3.select("#logo #tarde").style("opacity", "1");
						d3.select("#logo #fimtarde").style("opacity", "0");
						d3.select("#logo #noite").style("opacity", "0");
						d3.select("#logo #base").style("opacity", "0");
					}, 1000);
					setTimeout(function () {
						d3.select("#logo #manha").style("opacity", "0");
						d3.select("#logo #tarde").style("opacity", "0");
						d3.select("#logo #fimtarde").style("opacity", "1");
						d3.select("#logo #noite").style("opacity", "0");
						d3.select("#logo #base").style("opacity", "0");
					}, 1500);
					setTimeout(function () {
						d3.select("#logo #manha").style("opacity", "0");
						d3.select("#logo #tarde").style("opacity", "0");
						d3.select("#logo #fimtarde").style("opacity", "0");
						d3.select("#logo #noite").style("opacity", "1");
						d3.select("#logo #base").style("opacity", "0");
					}, 2000);
					setTimeout(function () {
						d3.select("#logo #manha").style("opacity", "0");
						d3.select("#logo #tarde").style("opacity", "0");
						d3.select("#logo #fimtarde").style("opacity", "0");
						d3.select("#logo #noite").style("opacity", "0");
						d3.select("#logo #base").style("opacity", "1");
					}, 2500);
					setTimeout(function () {
						clearTimeout(setTimeout);
						if (props.sky === "Manhã") {
							d3.select("#logo #manha").style("opacity", "1");
							d3.select("#logo #tarde").style("opacity", "0");
							d3.select("#logo #fimtarde").style("opacity", "0");
							d3.select("#logo #noite").style("opacity", "0");
							d3.select("#logo #base").style("opacity", "0");
						} else if (props.sky === "Tarde") {
							d3.select("#logo #manha").style("opacity", "0");
							d3.select("#logo #tarde").style("opacity", "1");
							d3.select("#logo #fimtarde").style("opacity", "0");
							d3.select("#logo #noite").style("opacity", "0");
							d3.select("#logo #base").style("opacity", "0");
						} else if (props.sky === "Fim da Tarde") {
							d3.select("#logo #manha").style("opacity", "0");
							d3.select("#logo #tarde").style("opacity", "0");
							d3.select("#logo #fimtarde").style("opacity", "1");
							d3.select("#logo #noite").style("opacity", "0");
							d3.select("#logo #base").style("opacity", "0");
						} else if (props.sky === "Noite") {
							d3.select("#logo #manha").style("opacity", "0");
							d3.select("#logo #tarde").style("opacity", "0");
							d3.select("#logo #fimtarde").style("opacity", "0");
							d3.select("#logo #noite").style("opacity", "1");
							d3.select("#logo #base").style("opacity", "0");
						} else if (props.sky === "Base") {
							d3.select("#logo #manha").style("opacity", "0");
							d3.select("#logo #tarde").style("opacity", "0");
							d3.select("#logo #fimtarde").style("opacity", "0");
							d3.select("#logo #noite").style("opacity", "0");
							d3.select("#logo #base").style("opacity", "1");
						} else {
							d3.select("#logo #manha").style("opacity", "1");
							d3.select("#logo #tarde").style("opacity", "0");
							d3.select("#logo #fimtarde").style("opacity", "0");
							d3.select("#logo #noite").style("opacity", "0");
							d3.select("#logo #base").style("opacity", "0");
						}
					}, 3000);
				});
		});
	});
	document.addEventListener("DOMContentLoaded", function () {
		if (document.querySelector(".icon") != null)
			document.querySelector(".icon").addEventListener("click", function () {
				var x = document.getElementById("myTopnav");
				if (x.className === "topnav") {
					x.className += " responsive";
				} else {
					x.className = "topnav";
				}
			});
	});
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	var time = hours + ":" + minutes;

	$(document).ready(function () {
		function refresh() {
			var div = $("#time"),
				divHtml = div.html();

			div.html(divHtml);
		}

		setInterval(function () {
			refresh();
		}, 1000); //300000 is 5minutes in ms
	});

	return (
		<nav
			className="d-flex justify-content-start py-4 px-1"
			style={{ zIndex: 100 }}
		>
			<ul>
				<li>
					<div
						id="time"
						count={1}
						style={{
							position: "absolute",
							marginTop: 100,
							marginLeft: 50,
							fontSize: 11,
							color: cLado,
						}}
					>
						{time}
					</div>
				</li>
			</ul>
			<ul className="topnav" id="myTopnav">
				<li href={{ javascript: void 0 }} class="icon">
					<i class="fa fa-bars" style={{ color: "grey", fontSize: "20px" }}></i>
				</li>
				<li className="logo"></li>

				<li className="px-4">
					<Link
						count={2}
						to="inicio"
						className="link link1"
						activeClass="active"
						style={{ textDecoration: "none" }}
					>
						Início
					</Link>
				</li>
				<li className="px-4" id="o2">
					<Link
						count={3}
						to="edificiospassivos"
						activeClass="active"
						style={{ textDecoration: "none" }}
						className="link link2"
					>
						Edifícios Passivos
					</Link>
				</li>

				<li className="px-4">
					<Link
						count={4}
						to="edificiopiloto"
						className="link link3"
						activeClass="active"
						style={{ textDecoration: "none" }}
					>
						Edifício-Piloto
					</Link>
				</li>

				{/** 		<li className="px-4">
					<Link
						to="portfolio"
						className="link link4"
						style={{ textDecoration: "none" }}
					>
						Portfólio
					</Link>
				</li>*/}
			</ul>
		</nav>
	);
};

export default Nav;
