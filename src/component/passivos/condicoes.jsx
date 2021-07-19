import React from "react";
import * as d3 from "d3";

import svgGrid3 from "../svgs/grid3.svg";
import svg60 from "../svgs/c0.svg";
import svg61 from "../svgs/c1.svg";
import svg62 from "../svgs/c2.svg";
import svg63 from "../svgs/c3.svg";
import svg64 from "../svgs/c4.svg";
import svg65 from "../svgs/c5.svg";
import svg66 from "../svgs/c6.svg";
import $ from "jquery";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ delay: 120 });

var chao, arvore, janela, cima, lado, frente; //variables natural
var neutroDentro, neutroExtra, neutroLado, neutroPiso;
var cJanela, cCima, cLado, cFrente1, cFrente2; //variables normal houses
var roxoDentro, roxoExtra, roxoLado, roxoPiso;

var orderJanela,
	orderCima,
	orderLado,
	orderFrente,
	orderCJanela,
	orderCLado,
	orderCCima,
	orderCFrente1,
	orderCFrente2,
	orderRoxoExtra,
	orderRoxoPiso,
	orderRoxoLado,
	orderRoxoDentro;
const Condicoes = (props) => {
	{
		//------------------------------------------------------------change color palette depending on season

		if (props.season === "Inverno") {
			chao = "#001719";
			arvore = "#0A3F78";
			janela = "#1584FB";
			cima = "#23AFFB";
			lado = "#0FD1CE";
			frente = "#10EBE7";
		} else if (props.season === "Primavera") {
			chao = "#182800";
			arvore = "#4E8A00";
			janela = "#00BD2C";
			cima = "#23CC4A";
			lado = "#1DF650";
			frente = "#7CFC9A";
		} else if (props.season === "Verão") {
			chao = "#302300";
			arvore = "#9E9400";
			janela = "#CCB600";
			cima = "#CFD100";
			lado = "#DBEF22";
			frente = "#DDFF4D";
		} else if (props.season === "Outono") {
			chao = "#350000";
			arvore = "#9B0000";
			janela = "#FB6115";
			cima = "#FA9515";
			lado = "#FFAC47";
			frente = "#FFC18F";
		}
		//------------------------------------------------------------color palette for normal houses
		cJanela = "#4E4E4D";
		cLado = "#777777";
		cCima = "#9D9D9C";
		cFrente1 = "#E0E0E0";
		cFrente2 = "#C0C0BF";

		//------------------------------------------------------------color palette inside ph
		neutroDentro = "#F4E5D9";
		neutroPiso = "#DCBFAA";
		neutroLado = "#EFD6C5";
		neutroExtra = "#BAA17F";

		//------------------------------------------------------------color palette inside normal houses
		roxoDentro = "#CA64FF";
		roxoPiso = "#7F04CC";
		roxoLado = "#B200FF";
		roxoExtra = "#620280";

		//------------------------------------------------------------color order for day light
		var colorArray = [
			chao,
			arvore,
			janela,
			cima,
			lado,
			frente,
			cJanela,
			cCima,
			cLado,
			cFrente1,
			cFrente2,
			roxoExtra,
			roxoLado,
			roxoPiso,
			roxoDentro,
		];

		//------------------------------------------------------------change color order depending on time
		console.log(props.sky);

		if (props.sky === "Manhã") {
			orderCima = 3;
			orderLado = 4;
			orderFrente = 5;
			orderJanela = 2;

			orderCJanela = 6;
			orderCCima = 7;
			orderCLado = 8;
			orderCFrente1 = 9;
			orderCFrente2 = 10;

			orderRoxoDentro = 14;
			orderRoxoLado = 13;
			orderRoxoPiso = 12;
			orderRoxoExtra = 11;
		} else if (props.sky === "Tarde") {
			orderCima = 5;
			orderLado = 3;
			orderFrente = 4;
			orderJanela = 2;

			orderCJanela = 6;
			orderCCima = 10;
			orderCLado = 7;
			orderCFrente1 = 8;
			orderCFrente2 = 9;

			orderRoxoDentro = 13;
			orderRoxoLado = 12;
			orderRoxoPiso = 14;
			orderRoxoExtra = 11;
		} else if (props.sky === "Fim da Tarde") {
			orderCima = 3;
			orderLado = 5;
			orderFrente = 2;
			orderJanela = 4;

			orderCJanela = 9;
			orderCCima = 8;
			orderCLado = 10;
			orderCFrente1 = 6;
			orderCFrente2 = 7;

			orderRoxoDentro = 11;
			orderRoxoLado = 14;
			orderRoxoPiso = 12;
			orderRoxoExtra = 13;
		} else if (props.sky === "Noite" || props.sky === "Base") {
			orderCima = 3;
			orderLado = 4;
			orderFrente = 2;
			orderJanela = 5;

			orderCJanela = 10;
			orderCCima = 8;
			orderCLado = 9;
			orderCFrente1 = 6;
			orderCFrente2 = 7;

			orderRoxoDentro = 11;
			orderRoxoLado = 13;
			orderRoxoPiso = 12;
			orderRoxoExtra = 14;
		}

		d3.xml(svgGrid3).then((data) => {
			if ($(".grid03").html() == "") {
				d3.select(".grid03").node().append(data.documentElement);
			}
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#background3 #ceu3").style("fill", "black");
			} else {
				d3.select("#background3 #ceu3").style("fill", "white");
			}

			console.log(props.season);
			if (props.order === 1) {
				d3.select("#background3 #grid31").style("opacity", "0.6");
				d3.select("#background3 #grid31").style("fill", "transparent");
				d3.select("#background3 #grid31").style("stroke", frente);
				d3.select("#background3 #grid31").style("width", "100px");
				d3.select("#background3 #grid31").style("stroke-width", "0.1px");
				d3.select("#background3 #grid32").style("opacity", "0");
				d3.select("#background3 #grid33").style("opacity", "0");
			} else if (props.order === 2) {
				d3.select("#background3 #grid32").style("opacity", "0.6");
				d3.select("#background3 #grid32").style("fill", "transparent");
				d3.select("#background3 #grid32").style("stroke", frente);
				d3.select("#background3 #grid32").style("width", "100px");
				d3.select("#background3 #grid32").style("stroke-width", "0.1px");
				d3.select("#background3 #grid31").style("opacity", "0");
				d3.select("#background3 #grid33").style("opacity", "0");
			} else if (props.order === 3) {
				d3.select("#background3 #grid33").style("opacity", "0.6");
				d3.select("#background3 #grid33").style("fill", "transparent");
				d3.select("#background3 #grid33").style("stroke", frente);
				d3.select("#background3 #grid33").style("width", "100px");
				d3.select("#background3 #grid33").style("stroke-width", "0.1px");
				d3.select("#background3 #grid31").style("opacity", "0");
				d3.select("#background3 #grid32").style("opacity", "0");
			}
		});
		d3.xml(svg60).then((data) => {
			if ($(".zz2").html() == "") {
				d3.select(".zz2").node().append(data.documentElement);
			}

			d3.select("#c60 #chao").style("fill", chao);
			d3.select("#c60 line").style("fill", "transparent");
			d3.select("#c60 line").style("stroke", chao);
			d3.select("#c60 line").style("stroke-width", "5px");
			d3.select("#c60 #line2").style("fill", "transparent");
			d3.select("#c60 #line2").style("stroke", chao);
			d3.select("#c60 #line2").style("stroke-width", "5px");

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#c60 #texto").style("fill", "white");
			} else {
				d3.select("#c60 #texto").style("fill", "black");
			}

			console.log(props.season);
		});

		d3.xml(svg61).then((data) => {
			if ($(".al").html() == "") {
				d3.select(".al").node().append(data.documentElement);
			}

			d3.select("#c61 #plantas").style("fill", cima);
			d3.select("#c61 #arvore").style("fill", arvore);

			d3.select("#c61 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c61 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c61 #janela").style("fill", colorArray[orderJanela]);

			d3.select("#c61 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c61 #chao").style("fill", chao);
			d3.select("#c61 #troncosPO").style("fill", arvore);
			d3.select("#c61 #plantasPO").style("fill", janela);
			d3.select("#c61 #plantasV").style("fill", janela);

			d3.select("#c61 #parede").style("fill", neutroDentro);

			d3.select("#c61 #dentro").style("fill", neutroLado);

			d3.select("#c61 #escuro").style("fill", neutroExtra);

			if (props.season === "Verão") {
				d3.select("#c61 #plantasV").style("opacity", "1");
				d3.select("#c61 #plantasPO").style("opacity", "0");
				d3.select("#c61 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#c61 #plantasV").style("opacity", "0");
				d3.select("#c61 #plantasPO").style("opacity", "1");
				d3.select("#c61 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#c61 #plantasV").style("opacity", "0");
				d3.select("#c61 #plantasPO").style("opacity", "0");
				d3.select("#c61 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg62).then((data) => {
			if ($(".am").html() == "") {
				d3.select(".am").node().append(data.documentElement);
			}

			d3.select("#c62 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c62 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c62 #borda").style("fill", frente);
			d3.select("#c62 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#c62 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c62 #chao").style("fill", chao);
			d3.select("#c62 #parede").style("fill", neutroDentro);
			d3.select("#c62 #dentro").style("fill", neutroLado);
			d3.select("#c62 #escuro").style("fill", neutroExtra);
			d3.select("#c62 #chao-2").style("fill", neutroPiso);
			d3.select("#c62 #janeladentro").style("fill", "white");

			d3.select("#c62 #janeladentro-2").style("fill", "white");
		});

		d3.xml(svg63).then((data) => {
			if ($(".an").html() == "") {
				d3.select(".an").node().append(data.documentElement);
			}

			d3.select("#c63 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c63 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c63 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#c63 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#c63 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c63 #chao").style("fill", chao);
			d3.select("#c63 #parede").style("fill", neutroDentro);
			d3.select("#c63 #dentro").style("fill", neutroLado);
			d3.select("#c63 #escuro").style("fill", neutroExtra);
			d3.select("#c63 #ventoinha").style("fill", frente);
			d3.select("#c63 #chao-2").style("fill", neutroPiso);
			d3.select("#c63 #janeladentro").style("fill", "white");

			d3.select("#c63 #janeladentro-2").style("fill", "white");

			d3.select("#c63 #bordas").style("fill", "transparent");
			d3.select("#c63 #bordas").style("stroke", frente);
			d3.select("#c63 #bordas").style("stroke-width", "5px");
		});

		d3.xml(svg64).then((data) => {
			if ($(".ao").html() == "") {
				d3.select(".ao").node().append(data.documentElement);
			}

			d3.select("#c64 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c64 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c64 #bord").style("fill", colorArray[orderFrente]);
			d3.select("#c64 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#c64 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c64 #chao").style("fill", chao);
			d3.select("#c64 #parede").style("fill", neutroDentro);
			d3.select("#c64 #dentro").style("fill", neutroLado);
			d3.select("#c64 #escuro").style("fill", neutroExtra);
			d3.select("#c64 #ventoinha").style("fill", frente);
			d3.select("#c64 #chao-2").style("fill", neutroPiso);
			d3.select("#c64 #janeladentro").style("fill", "white");

			d3.select("#c64 #janeladentro-2").style("fill", "white");
			d3.select("#c64 #borda").style("fill", "transparent");
			d3.select("#c64 #borda").style("stroke", colorArray[orderFrente]);
			d3.select("#c64 #borda").style("stroke-width", "5px");

			d3.select("#c64 #borda2").style("fill", "transparent");
			d3.select("#c64 #borda2").style("stroke", colorArray[orderCima]);
			d3.select("#c64 #borda2").style("stroke-width", "1px");
		});

		d3.xml(svg65).then((data) => {
			if ($(".ap").html() == "") {
				d3.select(".ap").node().append(data.documentElement);
			}

			d3.select("#c65 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c65 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c65 #bord").style("fill", colorArray[orderFrente]);
			d3.select("#c65 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#c65 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c65 #chao").style("fill", chao);
			d3.select("#c65 #parede").style("fill", neutroDentro);
			d3.select("#c65 #dentro").style("fill", neutroLado);
			d3.select("#c65 #escuro").style("fill", neutroExtra);
			d3.select("#c65 #ventoinha").style("fill", frente);
			d3.select("#c65 #chao-2").style("fill", neutroPiso);
			d3.select("#c65 #janeladentro").style("fill", "white");

			d3.select("#c65 #janeladentro-2").style("fill", "white");

			d3.select("#c65 #borda").style("fill", "transparent");
			d3.select("#c65 #borda").style("stroke", colorArray[orderFrente]);
			d3.select("#c65 #borda").style("stroke-width", "5px");

			d3.select("#c65 #borda2").style("fill", "transparent");
			d3.select("#c65 #borda2").style("stroke", colorArray[orderCima]);
			d3.select("#c65 #borda2").style("stroke-width", "1px");

			d3.select("#c65 #borda3").style("fill", "transparent");
			d3.select("#c65 #borda3").style("stroke", colorArray[orderCima]);
			d3.select("#c65 #borda3").style("stroke-width", "1px");
		});

		d3.xml(svg66).then((data) => {
			if ($(".aq").html() == "") {
				d3.select(".aq").node().append(data.documentElement);
			}

			d3.select("#c66 #cima").style("fill", colorArray[orderCima]);
			d3.select("#c66 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#c66 #bord").style("fill", colorArray[orderFrente]);
			d3.select("#c66 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#c66 #lado").style("fill", colorArray[orderLado]);
			d3.select("#c66 #chao").style("fill", chao);
			d3.select("#c66 #parede").style("fill", neutroDentro);
			d3.select("#c66 #dentro").style("fill", neutroLado);
			d3.select("#c66 #escuro").style("fill", neutroExtra);
			d3.select("#c66 #ventoinha").style("fill", frente);
			d3.select("#c66 #chao-2").style("fill", neutroPiso);
			d3.select("#c66 #janeladentro").style("fill", "white");

			d3.select("#c66 #janeladentro-2").style("fill", "white");

			d3.select("#c66 #borda").style("fill", "transparent");
			d3.select("#c66 #borda").style("stroke", colorArray[orderFrente]);
			d3.select("#c66 #borda").style("stroke-width", "5px");

			d3.select("#c66 #inside1").style("fill", "transparent");
			d3.select("#c66 #inside1").style("stroke", neutroExtra);
			d3.select("#c66 #inside1").style("stroke-width", "1px");

			d3.select("#c66 #outside1").style("fill", "transparent");
			d3.select("#c66 #outside1").style("stroke", roxoExtra);
			d3.select("#c66 #outside1").style("stroke-width", "1px");

			d3.select("#c66 #inside2").style("fill", "transparent");
			d3.select("#c66 #inside2").style("stroke", neutroExtra);
			d3.select("#c66 #inside2").style("stroke-width", "1px");

			d3.select("#c66 #outside2").style("fill", "transparent");
			d3.select("#c66 #outside2").style("stroke", roxoExtra);
			d3.select("#c66 #outside2").style("stroke-width", "1px");

			d3.select("#c66 #borda2").style("fill", "transparent");
			d3.select("#c66 #borda2").style("stroke", cima);
			d3.select("#c66 #borda2").style("stroke-width", "1px");

			d3.select("#c66 #borda3").style("fill", "transparent");
			d3.select("#c66 #borda3").style("stroke", cima);
			d3.select("#c66 #borda3").style("stroke-width", "1px");
		});
		//------------------------------------------------------------call 2 svgs + fill with color
	}

	return (
		<div id="skrollr-body">
			<div
				className="container condicoes justify-content-start"
				style={{
					margin: 0,
					padding: 0,
				}}
			>
				<section className="childC d-flex flex-row-reverse mx-4">
					<h2 className="py-5 d-flex justify-content-start" id="cond"></h2>s
					<div
						className="grid03 d-flex justify-content-end"
						data-bottom-top="opacity: 0;"
						data--50p-top="opacity: 1; position:fixed; top:0;"
						data--1790p-top="opacity:1;  position:fixed; top:0;"
						data--1800p-top="opacity:0;  position:fixed; top:0;"
						data-anchor-target="#cond"
					></div>
				</section>
				<section>
					<div
						className="col-12 zz2"
						data-bottom-top="opacity: 0;"
						data--0p-top="opacity: 1; position:fixed; bottom:0;"
						data--490p-top="opacity: 1; position:fixed; bottom:0;"
						data--510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
				</section>
				<section className="childC">
					<div
						className="col-12 al"
						data-bottom-top="opacity: 0;"
						data--450p-top="opacity: 0; position:fixed; bottom:0;"
						data--500p-top="opacity: 1; position:fixed; bottom:0;"
						data--690p-top="opacity: 1; position:fixed; bottom:0;"
						data--710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							A definição de um projecto ecoeficiente, com base em Passive
							House, parte de{" "}
							<b style={{ color: janela }}>cinco princípios essenciais</b>:
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childC">
					<div
						className="col-12 am"
						data-bottom-top="opacity: 0;"
						data--650p-top="opacity: 0; position:fixed; bottom:0;"
						data--700p-top="opacity: 1; position:fixed; bottom:0;"
						data--890p-top="opacity: 1; position:fixed; bottom:0;"
						data--910p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>1.</b> Aplicação de isolamento na
							envolvente opaca do edifício com espessuras e características
							adequados às condições (climáticas) específicas do lugar;
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childC">
					<div
						className="col-12 an"
						data-bottom-top="opacity: 0;"
						data--850p-top="opacity: 0; position:fixed; bottom:0;"
						data--900p-top="opacity: 1; position:fixed; bottom:0;"
						data--1090p-top="opacity: 1; position:fixed; bottom:0;"
						data--1110p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1100p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>2.</b> Utilização, na envolvente
							transparente (portas e janelas), de sistemas com certificação
							Passive House ou com desempenho equivalente;
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childC">
					<div
						className="col-12 ao"
						data-bottom-top="opacity: 0;"
						data--1050p-top="opacity: 0; position:fixed; bottom:0;"
						data--1100p-top="opacity: 1; position:fixed; bottom:0;"
						data--1290p-top="opacity: 1; position:fixed; bottom:0;"
						data--1310p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>3.</b> Concepção de um projecto livre
							de pontes térmicas ou, quando existentes, devidamente tratadas e
							contabilizadas no balanço energético;
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childC">
					<div
						className="col-12 ap"
						data-bottom-top="opacity: 0;"
						data--1250p-top="opacity: 0; position:fixed; bottom:0;"
						data--1300p-top="opacity: 1; position:fixed; bottom:0;"
						data--1490p-top="opacity: 1; position:fixed; bottom:0;"
						data--1510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1500p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>4.</b> Construção estanque ao ar para
							evitar perdas descontroladas;
						</div>
						<br></br>
						<br></br>
						<br></br> <br></br>
					</p>
				</section>
				<section className="childC">
					<div
						className="col-12 aq"
						data-bottom-top="opacity: 0;"
						data--1450p-top="opacity: 0; position:fixed; bottom:0;"
						data--1500p-top="opacity: 1; position:fixed; bottom:0;"
						data--1690p-top="opacity: 1; position:fixed; bottom:0;"
						data--1710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#cond"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#cond"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>5.</b> Aplicação de um sistema de
							ventilação a baixa velocidade e com recuperação de calor.
						</div>
						<br></br>
						<br></br>
						<br></br> <br></br>
					</p>
				</section>
			</div>
		</div>
	);
};

export default Condicoes;
