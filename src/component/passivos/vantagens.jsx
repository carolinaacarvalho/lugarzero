import React from "react";
import * as d3 from "d3";

import svgGrid1 from "../svgs/grid1.svg";
import svg40 from "../svgs/v0.svg";
import svg41 from "../svgs/v1.svg";
import svg42 from "../svgs/v2.svg";
import svg43 from "../svgs/v3.svg";
import svg44 from "../svgs/v4.svg";
import svg45 from "../svgs/v5.svg";
import svg46 from "../svgs/v6.svg";
import svg47 from "../svgs/v7.svg";
import svg48 from "../svgs/v8.svg";
import svg49 from "../svgs/v9.svg";
import svg410 from "../svgs/v10.svg";

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

const Vantagens = (props) => {
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
		//------------------------------------------------------------call 3 svgs + fill with color

		d3.xml(svgGrid1).then((data) => {
			if ($(".grid01").html() == "") {
				d3.select(".grid01").node().append(data.documentElement);
			}
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#background1 #ceu1").style("fill", "black");
			} else {
				d3.select("#background1 #ceu1").style("fill", "white");
			}

			console.log(props.season);
			if (props.order === 1) {
				d3.select("#background1 #grid11").style("opacity", "0.6");
				d3.select("#background1 #grid11").style("fill", "transparent");
				d3.select("#background1 #grid11").style("stroke", frente);
				d3.select("#background1 #grid11").style("width", "100px");
				d3.select("#background1 #grid11").style("stroke-width", "0.1px");
				d3.select("#background1 #grid12").style("opacity", "0");
				d3.select("#background1 #grid13").style("opacity", "0");
			} else if (props.order === 2) {
				d3.select("#background1 #grid12").style("opacity", "0.6");
				d3.select("#background1 #grid12").style("fill", "transparent");
				d3.select("#background1 #grid12").style("stroke", frente);
				d3.select("#background1 #grid12").style("width", "100px");
				d3.select("#background1 #grid12").style("stroke-width", "0.1px");
				d3.select("#background1 #grid11").style("opacity", "0");
				d3.select("#background1 #grid13").style("opacity", "0");
			} else if (props.order === 3) {
				d3.select("#background1 #grid13").style("opacity", "0.6");
				d3.select("#background1 #grid13").style("fill", "transparent");
				d3.select("#background1 #grid13").style("stroke", frente);
				d3.select("#background1 #grid13").style("width", "100px");
				d3.select("#background1 #grid13").style("stroke-width", "0.1px");
				d3.select("#background1 #grid11").style("opacity", "0");
				d3.select("#background1 #grid12").style("opacity", "0");
			}
		});
		d3.xml(svg40).then((data) => {
			if ($(".zz0").html() == "") {
				d3.select(".zz0").node().append(data.documentElement);
			}

			d3.select("#v40 #chao").style("fill", chao);
			d3.select("#v40 line").style("fill", "transparent");
			d3.select("#v40 line").style("stroke", chao);
			d3.select("#v40 line").style("stroke-width", "5px");
			d3.select("#v40 #line2").style("fill", "transparent");
			d3.select("#v40 #line2").style("stroke", chao);
			d3.select("#v40 #line2").style("stroke-width", "5px");

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v40 #texto").style("fill", "white");
			} else {
				d3.select("#v40 #texto").style("fill", "black");
			}

			console.log(props.season);
		});
		d3.xml(svg41).then((data) => {
			if ($(".aaaa").html() == "") {
				d3.select(".aaaa").node().append(data.documentElement);
			}
			d3.select("#v41 #plantas").style("fill", cima);
			d3.select("#v41 #arvore").style("fill", arvore);
			d3.select("#v41 #painel").style("fill", cFrente1);
			d3.select("#v41 #painel2").style("fill", arvore);
			d3.select("#v41 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v41 #frente").style("fill", colorArray[orderFrente]);
			if (props.sky === "Noite" || props.sky === "Base")
				d3.select("#v41 #janela").style("fill", "black");
			else d3.select("#v41 #janela").style("fill", "white");

			d3.select("#v41 #grid").style("stroke", frente);
			d3.select("#v41 #grid").style("stroke-width", "0.5px");
			d3.select("#v41 #grid").style("fill", "transparent");
			d3.select("#v41 #linha").style("stroke", frente);
			d3.select("#v41 #linha").style("fill", "transparent");
			d3.select("#v41 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v41 #chao").style("fill", chao);
			d3.select("#v41 #troncosPO").style("fill", arvore);
			d3.select("#v41 #plantaPO").style("fill", janela);
			d3.select("#v41 #plantaV").style("fill", janela);
			d3.select("#v41 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#v41 #parede").style("fill", neutroDentro);
			d3.select("#v41 #parede2").style("fill", neutroDentro);
			d3.select("#v41 #dentro").style("fill", neutroLado);
			d3.select("#v41 #piso").style("fill", neutroPiso);
			d3.select("#v41 #piso2").style("fill", neutroPiso);
			d3.select("#v41 #piso-2").style("fill", neutroDentro);
			d3.select("#v41 #piso-3").style("fill", neutroPiso);
			d3.select("#v41 #escuro").style("fill", neutroExtra);

			if (props.season === "Verão") {
				d3.select("#v41 #plantaV").style("opacity", "1");
				d3.select("#v41 #plantaPO").style("opacity", "0");
				d3.select("#v41 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v41 #plantaV").style("opacity", "0");
				d3.select("#v41 #plantaPO").style("opacity", "1");
				d3.select("#v41 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v41 #plantaV").style("opacity", "0");
				d3.select("#v41 #plantaPO").style("opacity", "0");
				d3.select("#v41 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg42).then((data) => {
			if ($(".o").html() == "") {
				d3.select(".o").node().append(data.documentElement);
			}

			d3.select("#v42 #troncosPO").style("fill", arvore);
			d3.select("#v42 #plantaPO").style("fill", janela);
			d3.select("#v42 #plantaV").style("fill", janela);
			d3.select("#v42 #chao").style("fill", chao);
			d3.select("#v42 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v42 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v42 #nborda").style("fill", colorArray[orderCFrente1]);
			d3.select("#v42 #nfrente").style("fill", roxoDentro);
			d3.select("#v42 #ndentro").style("fill", roxoLado);
			d3.select("#v42 #dentro").style("fill", neutroLado);
			d3.select("#v42 #nfrente2").style("fill", roxoDentro);
			d3.select("#v42 #piso").style("fill", roxoPiso);
			d3.select("#v42 #piso2").style("fill", roxoPiso);
			d3.select("#v42 #piso2-2").style("fill", neutroPiso);
			d3.select("#v42 #piso-2").style("fill", neutroPiso);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v42 #janela").style("fill", "black");
				d3.select("#v42 #janela-2").style("fill", "black");
			} else {
				d3.select("#v42 #janela").style("fill", "white");
				d3.select("#v42 #janela-2").style("fill", "white");
			}

			d3.select("#v42 #grid").style("stroke", frente);
			d3.select("#v42 #grid").style("stroke-width", "0.5px");
			d3.select("#v42 #grid").style("fill", "transparent");
			d3.select("#v42 #grid-2").style("stroke", frente);
			d3.select("#v42 #grid-2").style("stroke-width", "0.5px");
			d3.select("#v42 #grid-2").style("fill", "transparent");
			d3.select("#v42 #plantas").style("fill", cima);
			d3.select("#v42 #plantas-2").style("fill", cima);
			d3.select("#v42 #plantas-3").style("fill", cima);
			d3.select("#v42 #escuro").style("fill", roxoExtra);
			d3.select("#v42 #escuro-2").style("fill", neutroExtra);
			d3.select("#v42 #linha").style("fill", "transparent");
			d3.select("#v42 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v42 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v42 #frente2").style("fill", neutroDentro);
			d3.select("#v42 #frente-2").style("fill", neutroDentro);
			d3.select("#v42 #parede").style("fill", neutroDentro);
			d3.select("#v42 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v42 #lado-2").style("fill", neutroLado);
			d3.select("#v42 #arvore").style("fill", arvore);

			if (props.season === "Verão") {
				d3.select("#v42 #plantaV").style("opacity", "1");
				d3.select("#v42 #plantaPO").style("opacity", "0");
				d3.select("#v42 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v42 #plantaV").style("opacity", "0");
				d3.select("#v42 #plantaPO").style("opacity", "1");
				d3.select("#v42 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v42 #plantaV").style("opacity", "0");
				d3.select("#v42 #plantaPO").style("opacity", "0");
				d3.select("#v42 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg43).then((data) => {
			if ($(".p").html() == "") {
				d3.select(".p").node().append(data.documentElement);
			}
			d3.select("#v43 #troncosPO").style("fill", arvore);
			d3.select("#v43 #plantaPO").style("fill", janela);
			d3.select("#v43 #plantaV").style("fill", janela);
			d3.select("#v43 #nchao").style("fill", chao);
			d3.select("#v43 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v43 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v43 #nborda").style("fill", colorArray[orderCFrente1]);
			d3.select("#v43 #nfrente").style("fill", roxoDentro);
			d3.select("#v43 #ndentro").style("fill", roxoLado);
			d3.select("#v43 #dentro").style("fill", neutroLado);
			d3.select("#v43 #nfrente2").style("fill", roxoDentro);
			d3.select("#v43 #piso").style("fill", roxoPiso);
			d3.select("#v43 #piso2").style("fill", roxoPiso);
			d3.select("#v43 #piso2-2").style("fill", neutroPiso);
			d3.select("#v43 #piso-2").style("fill", neutroPiso);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v43 #janela").style("fill", "black");
				d3.select("#v43 #janela-2").style("fill", "black");
			} else {
				d3.select("#v43 #janela").style("fill", "white");
				d3.select("#v43 #janela-2").style("fill", "white");
			}
			d3.select("#v43 #grid").style("stroke", frente);
			d3.select("#v43 #grid").style("stroke-width", "0.5px");
			d3.select("#v43 #grid").style("fill", "transparent");
			d3.select("#v43 #grid-2").style("stroke", frente);
			d3.select("#v43 #grid-2").style("stroke-width", "0.5px");
			d3.select("#v43 #grid-2").style("fill", "transparent");
			d3.select("#v43 #plantas").style("fill", cima);
			d3.select("#v43 #plantas-2").style("fill", cima);
			d3.select("#v43 #plantas-3").style("fill", cima);
			d3.select("#v43 #escuro").style("fill", roxoExtra);
			d3.select("#v43 #escuro-2").style("fill", neutroExtra);
			d3.select("#v43 #linha").style("fill", "transparent");
			d3.select("#v43 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v43 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v43 #frente2").style("fill", neutroDentro);
			d3.select("#v43 #frente-2").style("fill", neutroDentro);
			d3.select("#v43 #parede").style("fill", neutroDentro);
			d3.select("#v43 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v43 #lado-2").style("fill", neutroLado);
			d3.select("#v43 #arvore").style("fill", arvore);
			d3.select("#v43 #estrago").style("stroke", roxoExtra);
			d3.select("#v43 #estrago").style("fill", "none");
			d3.select("#v43 #estrago").style("stroke-width", "0.5px");

			if (props.season === "Verão") {
				d3.select("#v43 #plantaV").style("opacity", "1");
				d3.select("#v43 #plantaPO").style("opacity", "0");
				d3.select("#v43 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v43 #plantaV").style("opacity", "0");
				d3.select("#v43 #plantaPO").style("opacity", "1");
				d3.select("#v43 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v43 #plantaV").style("opacity", "0");
				d3.select("#v43 #plantaPO").style("opacity", "0");
				d3.select("#v43 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg44).then((data) => {
			if ($(".q").html() == "")
				d3.select(".q").node().append(data.documentElement);

			d3.select("#v44 #troncosPO").style("fill", arvore);
			d3.select("#v44 #plantaPO").style("fill", janela);
			d3.select("#v44 #plantaV").style("fill", janela);
			d3.select("#v44 #nchao").style("fill", chao);
			d3.select("#v44 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v44 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v44 #nborda").style("fill", colorArray[orderCFrente1]);
			d3.select("#v44 #nfrente").style("fill", roxoDentro);
			d3.select("#v44 #ndentro").style("fill", roxoLado);
			d3.select("#v44 #dentro").style("fill", neutroLado);
			d3.select("#v44 #nfrente2").style("fill", roxoDentro);
			d3.select("#v44 #npiso").style("fill", roxoPiso);
			d3.select("#v44 #npiso2").style("fill", roxoPiso);
			d3.select("#v44 #piso").style("fill", neutroPiso);
			d3.select("#v44 #piso2").style("fill", neutroPiso);
			d3.select("#v44 #piso2-2").style("fill", neutroPiso);
			d3.select("#v44 #piso-2").style("fill", neutroPiso);
			d3.select("#v44 #janela").style("fill", roxoExtra);

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v44 #janela-2").style("fill", "black");
			} else {
				d3.select("#v44 #janela-2").style("fill", "white");
			}
			d3.select("#v44 #grid").style("stroke", frente);
			d3.select("#v44 #grid").style("stroke-width", "0.5px");
			d3.select("#v44 #grid").style("fill", "transparent");
			d3.select("#v44 #grid-2").style("stroke", frente);
			d3.select("#v44 #grid-2").style("stroke-width", "0.5px");
			d3.select("#v44 #grid-2").style("fill", "transparent");
			d3.select("#v44 #plantas").style("fill", cima);
			d3.select("#v44 #plantas-2").style("fill", cima);
			d3.select("#v44 #plantas-3").style("fill", cima);
			d3.select("#v44 #nescuro").style("fill", roxoExtra);
			d3.select("#v44 #escuro").style("fill", neutroExtra);
			d3.select("#v44 #escuro-2").style("fill", neutroExtra);
			d3.select("#v44 #linha").style("fill", "transparent");
			d3.select("#v44 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v44 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v44 #frente2").style("fill", neutroDentro);
			d3.select("#v44 #frente-2").style("fill", neutroDentro);
			d3.select("#v44 #parede").style("fill", neutroDentro);
			d3.select("#v44 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v44 #lado-2").style("fill", neutroLado);
			d3.select("#v44 #arvore").style("fill", arvore);
			d3.select("#v44 #som").style("fill", roxoExtra);

			if (props.season === "Verão") {
				d3.select("#v44 #plantaV").style("opacity", "1");
				d3.select("#v44 #plantaPO").style("opacity", "0");
				d3.select("#v44 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v44 #plantaV").style("opacity", "0");
				d3.select("#v44 #plantaPO").style("opacity", "1");
				d3.select("#v44 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v44 #plantaV").style("opacity", "0");
				d3.select("#v44 #plantaPO").style("opacity", "0");
				d3.select("#v44 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg45).then((data) => {
			if ($(".r").html() == "")
				d3.select(".r").node().append(data.documentElement);
			d3.select("#v45 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v45 #chao").style("fill", chao);
			d3.select("#v45 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v45 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v45 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v45 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#v45 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v45 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#v45 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#v45 #troncosPO").style("fill", arvore);
			d3.select("#v45 #plantaPO").style("fill", janela);
			d3.select("#v45 #plantaV").style("fill", janela);
			d3.select("#v45 #arvore").style("fill", arvore);

			if (props.season === "Verão") {
				d3.select("#v45 #plantaV").style("opacity", "1");
				d3.select("#v45 #plantaPO").style("opacity", "0");
				d3.select("#v45 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v45 #plantaV").style("opacity", "0");
				d3.select("#v45 #plantaPO").style("opacity", "1");
				d3.select("#v45 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v45 #plantaV").style("opacity", "0");
				d3.select("#v45 #plantaPO").style("opacity", "0");
				d3.select("#v45 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg46).then((data) => {
			if ($(".s").html() == "")
				d3.select(".s").node().append(data.documentElement);
			d3.select("#v46 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v46 #chao").style("fill", chao);
			d3.select("#v46 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v46 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v46 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v46 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#v46 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v46 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#v46 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#v46 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#v46 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#v46 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#v46 #troncosPO").style("fill", arvore);
			d3.select("#v46 #plantaPO").style("fill", janela);
			d3.select("#v46 #plantaV").style("fill", janela);
			d3.select("#v46 #arvore").style("fill", arvore);
			d3.select("#v46 #arvore").style("fill", arvore);

			d3.select("#v46 #tabela").style("font-size", "10px");
			d3.select("#m46 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m46 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#v46 #plantas").style("fill", cima);

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v46 #tabela").style("color", "white");
				d3.select("#v46 #tabela line").style("stroke", "white");
			} else {
				d3.select("#v46 #tabela").style("color", "black");
				d3.select("#v46 #tabela line").style("stroke", "black");
			}
			if (props.season === "Verão") {
				d3.select("#v46 #plantaV").style("opacity", "1");
				d3.select("#v46 #plantaPO").style("opacity", "0");
				d3.select("#v46 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v46 #plantaV").style("opacity", "0");
				d3.select("#v46 #plantaPO").style("opacity", "1");
				d3.select("#v46 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v46 #plantaV").style("opacity", "0");
				d3.select("#v46 #plantaPO").style("opacity", "0");
				d3.select("#v46 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg47).then((data) => {
			if ($(".t").html() == "")
				d3.select(".t").node().append(data.documentElement);
			d3.select("#v47 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v47 #chao").style("fill", chao);
			d3.select("#v47 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v47 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v47 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v47 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#v47 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v47 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#v47 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#v47 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#v47 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#v47 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#v47 #troncosPO").style("fill", arvore);
			d3.select("#v47 #plantaPO").style("fill", janela);
			d3.select("#v47 #plantaV").style("fill", janela);
			d3.select("#v47 #arvore").style("fill", arvore);
			d3.select("#v47 #arvore").style("fill", arvore);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v47 #tabela").style("color", "white");
				d3.select("#v47 #tabela line").style("stroke", "white");
			} else {
				d3.select("#v47 #tabela").style("color", "black");
				d3.select("#v47 #tabela line").style("stroke", "black");
			}
			d3.select("#v47 #tabela text").style("stroke", "black");
			d3.select("#v47 #tabela text").style("font-weight", "10px");
			d3.select("#v47 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#v47 #linha2").style("stroke", colorArray[orderRoxoExtra]);

			d3.select("#v47 #plantas").style("fill", cima);

			if (props.season === "Verão") {
				d3.select("#v47 #plantaV").style("opacity", "1");
				d3.select("#v47 #plantaPO").style("opacity", "0");
				d3.select("#v47 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v47 #plantaV").style("opacity", "0");
				d3.select("#v47 #plantaPO").style("opacity", "1");
				d3.select("#v47 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v47 #plantaV").style("opacity", "0");
				d3.select("#v47 #plantaPO").style("opacity", "0");
				d3.select("#v47 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg48).then((data) => {
			if ($(".u").html() == "")
				d3.select(".u").node().append(data.documentElement);
			d3.select("#v48 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v48 #chao").style("fill", chao);
			d3.select("#v48 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v48 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v48 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v48 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#v48 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v48 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#v48 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#v48 #troncosPO").style("fill", arvore);
			d3.select("#v48 #plantaPO").style("fill", janela);
			d3.select("#v48 #plantaV").style("fill", janela);
			d3.select("#v48 #arvore").style("fill", arvore);
			d3.select("#v48 #arvore").style("fill", arvore);
			d3.select("#v48 #plantas").style("fill", cima);
			d3.select("#v48 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#v48 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v48 #tabela path").style("fill", "white");
				d3.select("#v48 #tabela line").style("stroke", "white");
			} else {
				d3.select("#v48 #tabela path").style("fill", "black");
				d3.select("#v48 #tabela line").style("stroke", "black");
			}
			d3.select("#v48 #tabela text").style("font-weight", "20px");

			if (props.season === "Verão") {
				d3.select("#v48 #plantaV").style("opacity", "1");
				d3.select("#v48 #plantaPO").style("opacity", "0");
				d3.select("#v48 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v48 #plantaV").style("opacity", "0");
				d3.select("#v48 #plantaPO").style("opacity", "1");
				d3.select("#v48 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v48 #plantaV").style("opacity", "0");
				d3.select("#v48 #plantaPO").style("opacity", "0");
				d3.select("#v48 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg49).then((data) => {
			if ($(".n").html() == "") {
				d3.select(".n").node().append(data.documentElement);
			}
			d3.select("#v49 #plantas").style("fill", cima);
			d3.select("#v49 #arvore").style("fill", arvore);
			d3.select("#v49 #painel").style("fill", cFrente1);
			d3.select("#v49 #painel2").style("fill", arvore);
			d3.select("#v49 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v49 #frente").style("fill", colorArray[orderFrente]);
			if (props.sky === "Noite" || props.sky === "Base")
				d3.select("#v49 #janela").style("fill", "black");
			else d3.select("#v49 #janela").style("fill", "white");

			d3.select("#v49 #grid").style("stroke", frente);
			d3.select("#v49 #grid").style("stroke-width", "0.5px");
			d3.select("#v49 #grid").style("fill", "transparent");
			d3.select("#v49 #linha").style("stroke", frente);
			d3.select("#v49 #linha").style("fill", "transparent");
			d3.select("#v49 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v49 #chao").style("fill", chao);
			d3.select("#v49 #troncosPO").style("fill", arvore);
			d3.select("#v49 #plantaPO").style("fill", janela);
			d3.select("#v49 #plantaV").style("fill", janela);
			d3.select("#v49 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#v49 #parede").style("fill", neutroDentro);
			d3.select("#v49 #parede2").style("fill", neutroDentro);
			d3.select("#v49 #dentro").style("fill", neutroLado);
			d3.select("#v49 #piso").style("fill", neutroPiso);
			d3.select("#v49 #piso2").style("fill", neutroPiso);
			d3.select("#v49 #piso-2").style("fill", neutroDentro);
			d3.select("#v49 #piso-3").style("fill", neutroPiso);
			d3.select("#v49 #escuro").style("fill", neutroExtra);
			d3.select("#v49 #energia").style("stroke", janela);
			d3.select("#v49 #energia").style("fill", "transparent");
			d3.select("#v49 #energia").style("stroke-width", "0.5px");
			if (props.season === "Verão") {
				d3.select("#v49 #plantaV").style("opacity", "1");
				d3.select("#v49 #plantaPO").style("opacity", "0");
				d3.select("#v49 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v49 #plantaV").style("opacity", "0");
				d3.select("#v49 #plantaPO").style("opacity", "1");
				d3.select("#v49 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v49 #plantaV").style("opacity", "0");
				d3.select("#v49 #plantaPO").style("opacity", "0");
				d3.select("#v49 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg410).then((data) => {
			if ($(".uz").html() == "")
				d3.select(".uz").node().append(data.documentElement);
			d3.select("#v410 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#v410 #chao").style("fill", chao);
			d3.select("#v410 #lado").style("fill", colorArray[orderLado]);
			d3.select("#v410 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#v410 #cima").style("fill", colorArray[orderCima]);
			d3.select("#v410 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#v410 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#v410 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#v410 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#v410 #troncosPO").style("fill", arvore);
			d3.select("#v410 #plantaPO").style("fill", janela);
			d3.select("#v410 #plantaV").style("fill", janela);
			d3.select("#v410 #arvore").style("fill", arvore);
			d3.select("#v410 #arvore").style("fill", arvore);
			d3.select("#v410 #plantas").style("fill", cima);
			d3.select("#v410 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#v410 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#v410 #estrago").style("stroke", roxoExtra);
			d3.select("#v410 #estrago").style("fill", "none");
			d3.select("#v410 #estrago").style("stroke-width", "0.6px");
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#v410 #tabela path").style("fill", "white");
				d3.select("#v410 #tabela line").style("stroke", "white");
			} else {
				d3.select("#v410 #tabela path").style("fill", "black");
				d3.select("#v410 #tabela line").style("stroke", "black");
			}
			d3.select("#v410 #tabela text").style("font-weight", "20px");

			if (props.season === "Verão") {
				d3.select("#v410 #plantaV").style("opacity", "1");
				d3.select("#v410 #plantaPO").style("opacity", "0");
				d3.select("#v410 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#v410 #plantaV").style("opacity", "0");
				d3.select("#v410 #plantaPO").style("opacity", "1");
				d3.select("#v410 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#v410 #plantaV").style("opacity", "0");
				d3.select("#v410 #plantaPO").style("opacity", "0");
				d3.select("#v410 #troncosPO").style("opacity", "0");
			}
		});
	}

	return (
		<div id="skrollr-body">
			<div
				className="container vantagens justify-content-start"
				style={{
					margin: 0,
					padding: 0,
				}}
			>
				{" "}
				<section className="childV d-flex flex-row-reverse mx-4">
					<h2 className="py-5 d-flex justify-content-start" id="vant"></h2>
					<div
						className="grid01 d-flex justify-content-end"
						data-bottom-top="opacity: 0;"
						data--0p-top="opacity: 1; position:fixed;  top:0;"
						data--2699p-top="opacity: 1;  position:fixed;  top:0;"
						data--2700p-top="opacity: 0;  position:fixed;  top:0;"
						data-anchor-target="#vant"
					></div>
				</section>
				<section>
					<div
						className="col-12 zz0"
						data-bottom-top="opacity: 0;"
						data--0p-top="opacity: 1; position:fixed; bottom:0;"
						data--490p-top="opacity: 1; position:fixed; bottom:0;"
						data--510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>
				</section>
				<section className="childV">
					<div
						className="col-12 n"
						data-bottom-top="opacity: 0;"
						data--450p-top="opacity: 0; position:fixed; bottom:0;"
						data--500p-top="opacity: 1; position:fixed; bottom:0;"
						data--690p-top="opacity: 1; position:fixed; bottom:0;"
						data--710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								{" "}
								1. Elevada eficiência energética.
							</b>
							<br></br>
							Devido ao rigor construtivo, um edifício Passive House pode gerar
							facilmente 75% de poupanças energéticas, em construção nova
							corrente, e atingir 90%, em edifícios com 20 ou 30 anos de
							utilização. Esta poupança inclui a energia consumida em
							electrodomésticos e iluminação, contabilizada no balanço
							energético do edifício. Assim, com a produção local de energia
							renovável, é possível atingir o balanço energético quase nulo
							(nZEB) mais facilmente.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 aaaa"
						data-bottom-top="opacity: 0;"
						data--650p-top="opacity: 0; position:fixed; bottom:0;"
						data--700p-top="opacity: 1; position:fixed; bottom:0;"
						data--890p-top="opacity: 1; position:fixed; bottom:0;"
						data--910p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							<b style={{ color: janela }}> 2. Elevado conforto térmico.</b>
							<br></br>
							Os critérios de conforto térmico são fundamentais numa construção
							Passive House. A temperatura interior, ao longo de todo o ano, tem
							de se situar entre os 20 e 25ºC, sem grandes variações térmicas
							diárias. Mesmo durante os picos de frio, no Inverno, ou de calor,
							no Verão. Também as superfícies no interior edifício (paredes,
							portas e janelas) cumprem com uma temperatura mínima que assegura
							esse conforto.{" "}
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 o img"
						data-bottom-top="opacity: 0;"
						data--850p-top="opacity: 0; position:fixed; bottom:0;"
						data--900p-top="opacity: 1; position:fixed; bottom:0;"
						data--1290p-top="opacity: 1; position:fixed; bottom:0;"
						data--1310p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1100p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>3. Garantia de qualidade.</b>
							<br></br>
							Ao longo de todo o processo, as ferramentas de projecto (o
							software de planeamento Passive House — PHPP), a documentação e
							verificação dos materiais e dos processos construtivos, e os
							testes realizados em obra (o blower door test, por exemplo)
							garantem que os requisitos técnicos são cumpridos.
						</div>
					</p>
				</section>
				<section className="childV">
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Assim, a passagem destes requisitos da teoria para a obra é
							certificada por uma entidade independente, que garante a
							necessária a qualidade do projecto e da construção. Este rigor
							traduz-se obras com menor improvisação e menos derrapagens
							temporais ou orçamentais.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 p img"
						data-bottom-top="opacity: 0;"
						data--1250p-top="opacity: 0; position:fixed; bottom:0;"
						data--1300p-top="opacity: 1; position:fixed; bottom:0;"
						data--1690p-top="opacity: 1; position:fixed; bottom:0;"
						data--1710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1500p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>4. Ambiente interior saudável.</b>
							<br></br>
							Uma Passive House implica a renovação do ar interior de modo
							controlado. Geralmente assegurada por um sistema de ventilação
							mecânica com recuperação de calor, eficiente (mais de 90%) e
							silencioso (baixa velocidade), esta renovação garante uma baixa
							concentração de CO2 e de partículas poluentes.
						</div>
					</p>
				</section>
				<section className="childV">
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							De igual modo, a selecção criteriosa dos materiais aplicados, a
							qualidade construtiva e a estabilidade térmica evitam a formação
							de condensações e o aparecimento de patologias (sobretudo
							bolores), contribuindo para a promoção de um ambiente interior
							saudável.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 q img"
						data-bottom-top="opacity: 0;"
						data--1650p-top="opacity: 0; position:fixed; bottom:0;"
						data--1700p-top="opacity: 1; position:fixed; bottom:0;"
						data--1890p-top="opacity: 1; position:fixed; bottom:0;"
						data--1910p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>5. Conforto acústico acrescido.</b>
							<br></br>
							Apesar de não se medir nem requerer um particular desempenho
							acústico, a arquitectura ecoeficiente é caracterizada por um maior
							isolamento acústico, devido às maiores necessidades de isolamento
							térmico. Tal desempenho proporciona um acrescido conforto ao
							ambiente interior, particularmente em ambiente urbano mais
							ruidoso.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 s img"
						data-bottom-top="opacity: 0;"
						data--1850p-top="opacity: 0; position:fixed; bottom:0;"
						data--1900p-top="opacity: 1; position:fixed; bottom:0;"
						data--2090p-top="opacity: 1; position:fixed; bottom:0;"
						data--2110p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2100p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								6. Acessibilidade económica e poupanças significativas.
							</b>
							<br></br>A construção ecoeficiente não requere sempre um maior
							investimento. O acréscimo das necessidades de isolamento térmico,
							em paredes e tectos ou em portas e janelas, pode ser compensado,
							por exemplo, por poupanças num sistema de climatização mais
							económico ou ausente.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 t img"
						data-bottom-top="opacity: 0;"
						data--2050p-top="opacity: 0; position:fixed; bottom:0;"
						data--2100p-top="opacity: 1; position:fixed; bottom:0;"
						data--2290p-top="opacity: 1; position:fixed; bottom:0;"
						data--2310p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Mas, se considerarmos a garantia de custos operacionais
							substancialmente mais baixos, em comparação com um edifício
							convencional, a construção passiva é claramente a escolha mais
							económica. Consumos inferiores de 75% a 90% facilmente significam
							poupanças entre 500€ e 700€ por ano, as quais se traduzem em
							poupanças de 16 500€ a 23 100 €, ao longo dos cerca de 33 anos que
							levamos a pagar as nossas casas.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 uz img"
						data-bottom-top="opacity: 0;"
						data--2250p-top="opacity: 0; position:fixed; bottom:0;"
						data--2300p-top="opacity: 1; position:fixed; bottom:0;"
						data--2490p-top="opacity: 1; position:fixed; bottom:0;"
						data--2510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2500p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>7. Durabilidade.</b>
							<br></br>O rigor colocado no projecto e na construção promove a
							durabilidade acrescida dos edifícios, ficando livres de algumas
							das patologias mais comuns na construção corrente. De igual modo,
							a utilização de sistemas de climatização mais simples e menos
							potentes requerem menos operações manutenção do que os sistemas
							habituais.
						</div>
					</p>
				</section>
				<section className="childV">
					<div
						className="col-12 u img"
						data-bottom-top="opacity: 0;"
						data--2450p-top="opacity: 0; position:fixed; bottom:0;"
						data--2500p-top="opacity: 1; position:fixed; bottom:0;"
						data--2690p-top="opacity: 1; position:fixed; bottom:0;"
						data--2710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#vant"
					></div>

					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#vant"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								8. Facilidade de utilização quotidiana.
							</b>
							<br></br>Uma Passive House ou uma construção ecoeficiente não
							requerem nem dependem de alterações drásticas ao comportamento
							quotidiano. As principais mudanças são invisíveis e foram tratadas
							em projecto e em obra. A utilização responsável de qualquer
							edifício mantém-se como requisito, com algumas vantagens
							adicionais. Nomeadamente, autonomia dos sistemas de ventilação e
							de climatização, com menores necessidades de manutenção.
						</div>
					</p>
				</section>
			</div>
		</div>
	);
};

export default Vantagens;
