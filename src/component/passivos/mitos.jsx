import React from "react";
import * as d3 from "d3";
import $ from "jquery";

import svgGrid2 from "../svgs/grid2.svg";
import svg50 from "../svgs/m0.svg";
import svg51 from "../svgs/m1.svg";
import svg52 from "../svgs/m2.svg";
import svg53 from "../svgs/m3.svg";
import svg54 from "../svgs/m4.svg";
import svg55 from "../svgs/m5.svg";
import svg56 from "../svgs/m6.svg";
import svg57 from "../svgs/m7.svg";
import svg58 from "../svgs/m8.svg";
import svg59 from "../svgs/m9.svg";
import svg510 from "../svgs/m10.svg";
import svg511 from "../svgs/m11.svg";
import svg512 from "../svgs/m12.svg";
import svg513 from "../svgs/m13.svg";
import svg514 from "../svgs/m14.svg";
import svg515 from "../svgs/m15.svg";

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

const Mitos = (props) => {
	window.onload = function () {
		if (!window.location.hash) {
			window.location = window.location + "#loaded";
			window.location.reload();
		}
	};
	{
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
		//------------------------------------------------------------call 2 svgs + fill with color
		d3.xml(svgGrid2).then((data) => {
			if ($(".grid02").html() == "") {
				d3.select(".grid02").node().append(data.documentElement);
			}
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#background2 #ceu2").style("fill", "black");
			} else {
				d3.select("#background2 #ceu2").style("fill", "white");
			}

			console.log(props.season);
			if (props.order === 1) {
				d3.select("#background2 #grid21").style("opacity", "0.6");
				d3.select("#background2 #grid21").style("fill", "transparent");
				d3.select("#background2 #grid21").style("stroke", frente);
				d3.select("#background2 #grid21").style("width", "100px");
				d3.select("#background2 #grid21").style("stroke-width", "0.1px");
				d3.select("#background2 #grid22").style("opacity", "0");
				d3.select("#background2 #grid23").style("opacity", "0");
			} else if (props.order === 2) {
				d3.select("#background2 #grid22").style("opacity", "0.6");
				d3.select("#background2 #grid22").style("fill", "transparent");
				d3.select("#background2 #grid22").style("stroke", frente);
				d3.select("#background2 #grid22").style("width", "100px");
				d3.select("#background2 #grid22").style("stroke-width", "0.1px");
				d3.select("#background2 #grid21").style("opacity", "0");
				d3.select("#background2 #grid23").style("opacity", "0");
			} else if (props.order === 3) {
				d3.select("#background2 #grid23").style("opacity", "0.6");
				d3.select("#background2 #grid23").style("fill", "transparent");
				d3.select("#background2 #grid23").style("stroke", frente);
				d3.select("#background2 #grid23").style("width", "100px");
				d3.select("#background2 #grid23").style("stroke-width", "0.1px");
				d3.select("#background2 #grid21").style("opacity", "0");
				d3.select("#background2 #grid22").style("opacity", "0");
			}
		});
		d3.xml(svg50).then((data) => {
			if ($(".zz1").html() == "") {
				d3.select(".zz1").node().append(data.documentElement);
			}

			d3.select("#m50 #chao").style("fill", chao);
			d3.select("#m50 line").style("fill", "transparent");
			d3.select("#m50 line").style("stroke", chao);
			d3.select("#m50 line").style("stroke-width", "5px");
			d3.select("#m50 #line2").style("fill", "transparent");
			d3.select("#m50 #line2").style("stroke", chao);
			d3.select("#m50 #line2").style("stroke-width", "5px");

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#m50 #texto").style("fill", "white");
			} else {
				d3.select("#m50 #texto").style("fill", "black");
			}
		});
		d3.xml(svg51).then((data) => {
			if ($(".v").html() == "")
				d3.select(".v").node().append(data.documentElement);
			d3.select("#m51 #estrada").style("fill", "#2b2b2b");
			d3.select("#m51 #predios").style("fill", cJanela);
			d3.select("#m51 #plantas").style("fill", cima);
			d3.select("#m51 #arvore").style("fill", arvore);
			d3.select("#m51 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m51 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m51 #nfrente").style("fill", colorArray[orderFrente]);
			d3.select("#m51 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m51 #nfrente2").style("fill", colorArray[orderCFrente2]);
			d3.select("#m51 #nfrente-2").style("fill", colorArray[orderFrente]);
			d3.select("#m51 #nfrente-3").style("fill", colorArray[orderCFrente1]);
			d3.select("#m51 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m51 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m51 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m51 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m51 #chao").style("fill", chao);
			d3.select("#m51 #troncosPO").style("fill", arvore);
			d3.select("#m51 #plantasPO").style("fill", janela);
			d3.select("#m51 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#m51 #plantasV").style("opacity", "1");
				d3.select("#m51 #plantasPO").style("opacity", "0");
				d3.select("#m51 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m51 #plantasV").style("opacity", "0");
				d3.select("#m51 #plantasPO").style("opacity", "1");
				d3.select("#m51 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m51 #plantasV").style("opacity", "0");
				d3.select("#m51 #plantasPO").style("opacity", "0");
				d3.select("#m51 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg52).then((data) => {
			if ($(".x").html() == "")
				d3.select(".x").node().append(data.documentElement);
			d3.select("#m52 #estrada").style("fill", "#2b2b2b");
			d3.select("#m52 #predios").style("fill", cJanela);
			d3.select("#m52 #plantas").style("fill", cima);
			d3.select("#m52 #arvore").style("fill", arvore);
			d3.select("#m52 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m52 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m52 #scan").style("fill", "transparent");
			d3.select("#m52 #scan").style("stroke", frente);
			d3.select("#m52 #scan").style("stroke-width", "5px");

			d3.select("#m52 #nfrente").style("fill", colorArray[orderFrente]);
			d3.select("#m52 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m52 #nfrente2").style("fill", colorArray[orderCFrente2]);
			d3.select("#m52 #nfrente-2").style("fill", colorArray[orderFrente]);
			d3.select("#m52 #nfrente-3").style("fill", colorArray[orderCFrente1]);
			d3.select("#m52 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m52 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m52 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m52 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m52 #chao").style("fill", chao);
			d3.select("#m52 #troncosPO").style("fill", arvore);
			d3.select("#m52 #plantasPO").style("fill", janela);
			d3.select("#m52 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#m52 #plantasV").style("opacity", "1");
				d3.select("#m52 #plantasPO").style("opacity", "0");
				d3.select("#m52 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m52 #plantasV").style("opacity", "0");
				d3.select("#m52 #plantasPO").style("opacity", "1");
				d3.select("#m52 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m52 #plantasV").style("opacity", "0");
				d3.select("#m52 #plantasPO").style("opacity", "0");
				d3.select("#m52 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg53).then((data) => {
			if ($(".y").html() == "")
				d3.select(".y").node().append(data.documentElement);
			d3.select("#m53 #estrada").style("fill", "#2b2b2b");
			d3.select("#m53 #predios").style("fill", cJanela);
			d3.select("#m53 #plantas").style("fill", cima);
			d3.select("#m53 #arvore").style("fill", arvore);
			d3.select("#m53 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m53 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m53 #nfrente").style("fill", colorArray[orderFrente]);
			d3.select("#m53 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m53 #nfrente2").style("fill", colorArray[orderCFrente2]);
			d3.select("#m53 #nfrente-2").style("fill", colorArray[orderFrente]);
			d3.select("#m53 #nfrente-3").style("fill", colorArray[orderCFrente1]);
			d3.select("#m53 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m53 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m53 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m53 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m53 #chao").style("fill", chao);
			d3.select("#m53 #troncosPO").style("fill", arvore);
			d3.select("#m53 #plantasPO").style("fill", janela);
			d3.select("#m53 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#m53 #plantasV").style("opacity", "1");
				d3.select("#m53 #plantasPO").style("opacity", "0");
				d3.select("#m53 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m53 #plantasV").style("opacity", "0");
				d3.select("#m53 #plantasPO").style("opacity", "1");
				d3.select("#m53 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m53 #plantasV").style("opacity", "0");
				d3.select("#m53 #plantasPO").style("opacity", "0");
				d3.select("#m53 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg54).then((data) => {
			if ($(".z").html() == "")
				d3.select(".z").node().append(data.documentElement);
			d3.select("#m54 #estrada").style("fill", "#2b2b2b");
			d3.select("#m54 #predios").style("fill", cJanela);
			d3.select("#m54 #plantas").style("fill", cima);
			d3.select("#m54 #arvore").style("fill", arvore);
			d3.select("#m54 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m54 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m54 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m54 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m54 #nfrente2").style("fill", colorArray[orderCFrente1]);
			d3.select("#m54 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m54 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m54 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m54 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m54 #chao").style("fill", chao);
			d3.select("#m54 #troncosPO").style("fill", arvore);
			d3.select("#m54 #plantasPO").style("fill", janela);
			d3.select("#m54 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#m54 #plantasV").style("opacity", "1");
				d3.select("#m54 #plantasPO").style("opacity", "0");
				d3.select("#m54 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m54 #plantasV").style("opacity", "0");
				d3.select("#m54 #plantasPO").style("opacity", "1");
				d3.select("#m54 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m54 #plantasV").style("opacity", "0");
				d3.select("#m54 #plantasPO").style("opacity", "0");
				d3.select("#m54 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg55).then((data) => {
			if ($(".aa").html() == "")
				d3.select(".aa").node().append(data.documentElement);

			d3.select("#m55 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m55 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m55 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m55 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m55 #chao").style("fill", chao);
		});
		d3.xml(svg56).then((data) => {
			if ($(".ab").html() == "")
				d3.select(".ab").node().append(data.documentElement);

			d3.select("#m56 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m56 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m56 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m56 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m56 #chao").style("fill", chao);
			d3.select("#m56 #mapa").style("fill", arvore);
		});
		d3.xml(svg57).then((data) => {
			if ($(".ac").html() == "")
				d3.select(".ac").node().append(data.documentElement);

			d3.select("#m57 #cima").style("fill", colorArray[orderCima]);

			d3.select("#m57 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m57 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m57 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m57 #chao").style("fill", chao);
			d3.select("#m57 #mapa").style("fill", arvore);
		});
		d3.xml(svg58).then((data) => {
			if ($(".ad").html() == "")
				d3.select(".ad").node().append(data.documentElement);

			d3.select("#m58 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m58 #ncima").style("fill", colorArray[orderCCima]);

			d3.select("#m58 #piso").style("fill", neutroPiso);
			d3.select("#m58 #npiso").style("fill", roxoPiso);
			d3.select("#m58 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m58 #nfrente").style("fill", colorArray[orderCFrente1]);

			d3.select("#m58 #arvore").style("fill", arvore);
			d3.select("#m58 #troncosPO").style("fill", arvore);
			d3.select("#m58 #plantas").style("fill", cima);
			d3.select("#m58 #plantaPO").style("fill", janela);
			d3.select("#m58 #plantaV").style("fill", janela);
			d3.select("#m58 #chao").style("fill", chao);

			if (props.season === "Verão") {
				d3.select("#m58 #plantaV").style("opacity", "1");
				d3.select("#m58 #plantaPO").style("opacity", "0");
				d3.select("#m58 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m58 #plantaV").style("opacity", "0");
				d3.select("#m58 #plantaPO").style("opacity", "1");
				d3.select("#m58 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m58 #plantaV").style("opacity", "0");
				d3.select("#m58 #plantaPO").style("opacity", "0");
				d3.select("#m58 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg59).then((data) => {
			if ($(".ae").html() == "")
				d3.select(".ae").node().append(data.documentElement);

			d3.select("#m59 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m59 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m59 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m59 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m59 #piso").style("fill", neutroPiso);
			d3.select("#m59 #npiso").style("fill", roxoPiso);
			d3.select("#m59 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m59 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m59 #arvore").style("fill", arvore);
			d3.select("#m59 #troncosPO").style("fill", arvore);
			d3.select("#m59 #plantas").style("fill", cima);
			d3.select("#m59 #plantaPO").style("fill", janela);
			d3.select("#m59 #plantaV").style("fill", janela);
			d3.select("#m59 #chao").style("fill", chao);

			if (props.season === "Verão") {
				d3.select("#m59 #plantaV").style("opacity", "1");
				d3.select("#m59 #plantaPO").style("opacity", "0");
				d3.select("#m59 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m59 #plantaV").style("opacity", "0");
				d3.select("#m59 #plantaPO").style("opacity", "1");
				d3.select("#m59 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m59 #plantaV").style("opacity", "0");
				d3.select("#m59 #plantaPO").style("opacity", "0");
				d3.select("#m59 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg510).then((data) => {
			if ($(".af").html() == "")
				d3.select(".af").node().append(data.documentElement);

			d3.select("#m510 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m510 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m510 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m510 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m510 #piso").style("fill", neutroPiso);
			d3.select("#m510 #npiso").style("fill", roxoPiso);
			d3.select("#m510 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m510 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m510 #arvore").style("fill", arvore);
			d3.select("#m510 #troncosPO").style("fill", arvore);
			d3.select("#m510 #plantas").style("fill", cima);
			d3.select("#m510 #plantaPO").style("fill", janela);
			d3.select("#m510 #plantaV").style("fill", janela);
			d3.select("#m510 #chao").style("fill", chao);

			if (props.season === "Verão") {
				d3.select("#m510 #plantaV").style("opacity", "1");
				d3.select("#m510 #plantaPO").style("opacity", "0");
				d3.select("#m510 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m510 #plantaV").style("opacity", "0");
				d3.select("#m510 #plantaPO").style("opacity", "1");
				d3.select("#m510 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m510 #plantaV").style("opacity", "0");
				d3.select("#m510 #plantaPO").style("opacity", "0");
				d3.select("#m510 #troncosPO").style("opacity", "0");
			}
		});

		d3.xml(svg511).then((data) => {
			if ($(".ag").html() == "")
				d3.select(".ag").node().append(data.documentElement);

			d3.select("#m511 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m511 #chao").style("fill", chao);
			d3.select("#m511 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m511 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m511 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m511 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m511 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m511 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m511 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m511 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m511 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#m511 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m511 #troncosPO").style("fill", arvore);
			d3.select("#m511 #plantaPO").style("fill", janela);
			d3.select("#m511 #plantaV").style("fill", janela);
			d3.select("#m511 #arvore").style("fill", arvore);
			d3.select("#m511 #arvore").style("fill", arvore);
			d3.select("#m511 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m511 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m511 #plantas").style("fill", cima);
			d3.select("#m511 text").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m511 text").style("font-size", "5px");
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#m511 #tabela").style("color", "white");
				d3.select("#m511 #tabela line").style("stroke", "white");
			} else {
				d3.select("#m511 #tabela").style("color", "black");
				d3.select("#m511 #tabela line").style("stroke", "black");
			}
			if (props.season === "Verão") {
				d3.select("#m511 #plantaV").style("opacity", "1");
				d3.select("#m511 #plantaPO").style("opacity", "0");
				d3.select("#m511 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m511 #plantaV").style("opacity", "0");
				d3.select("#m511 #plantaPO").style("opacity", "1");
				d3.select("#m511 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m511 #plantaV").style("opacity", "0");
				d3.select("#m511 #plantaPO").style("opacity", "0");
				d3.select("#m511 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg512).then((data) => {
			if ($(".ai").html() == "")
				d3.select(".ai").node().append(data.documentElement);

			d3.select("#m512 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m512 #chao").style("fill", chao);
			d3.select("#m512 #lado-2").style("fill", colorArray[orderLado]);

			d3.select("#m512 #lado").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m512 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m512 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m512 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m512 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m512 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m512 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m512 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m512 #piso").style("fill", colorArray[orderRoxoPiso]);
			d3.select("#m512 #troncosPO").style("fill", arvore);
			d3.select("#m512 #plantaPO").style("fill", janela);
			d3.select("#m512 #plantaV").style("fill", janela);
			d3.select("#m512 #arvore").style("fill", arvore);
			d3.select("#m512 #arvore").style("fill", arvore);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#m512 #tabela").style("color", "white");
				d3.select("#m512 #tabela line").style("stroke", "white");
			} else {
				d3.select("#m512 #tabela").style("color", "black");
				d3.select("#m512 #tabela line").style("stroke", "black");
			}
			d3.select("#m512 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m512 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m512 #plantas").style("fill", cima);
			d3.select("#m512 text").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m512 text").style("font-size", "5px");

			if (props.season === "Verão") {
				d3.select("#m512 #plantaV").style("opacity", "1");
				d3.select("#m512 #plantaPO").style("opacity", "0");
				d3.select("#m512 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m512 #plantaV").style("opacity", "0");
				d3.select("#m512 #plantaPO").style("opacity", "1");
				d3.select("#m512 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m512 #plantaV").style("opacity", "0");
				d3.select("#m512 #plantaPO").style("opacity", "0");
				d3.select("#m512 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg513).then((data) => {
			if ($(".ah").html() == "")
				d3.select(".ah").node().append(data.documentElement);

			d3.select("#m513 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m513 #npiso").style("fill", colorArray[orderRoxoPiso]);
			d3.select("#m513 #nlado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m513 #chao").style("fill", chao);
			d3.select("#m513 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m513 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m513 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m513 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m513 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m513 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m513 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m513 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m513 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#m513 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m513 #troncosPO").style("fill", arvore);
			d3.select("#m513 #plantaPO").style("fill", janela);
			d3.select("#m513 #plantaV").style("fill", janela);
			d3.select("#m513 #arvore").style("fill", arvore);
			d3.select("#m513 #arvore").style("fill", arvore);
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#m513 #tabela").style("color", "white");
				d3.select("#m513 #tabela line").style("stroke", "white");
			} else {
				d3.select("#m513 #tabela").style("color", "black");
				d3.select("#m513 #tabela line").style("stroke", "black");
			}
			d3.select("#m513 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m513 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m513 #plantas").style("fill", cima);
			d3.select("#m513 text").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m513 text").style("font-size", "5px");
			d3.select("#m513 #plantas").style("fill", cima);

			if (props.season === "Verão") {
				d3.select("#m513 #plantaV").style("opacity", "1");
				d3.select("#m513 #plantaPO").style("opacity", "0");
				d3.select("#m513 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m513 #plantaV").style("opacity", "0");
				d3.select("#m513 #plantaPO").style("opacity", "1");
				d3.select("#m513 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m513 #plantaV").style("opacity", "0");
				d3.select("#m513 #plantaPO").style("opacity", "0");
				d3.select("#m513 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg514).then((data) => {
			if ($(".aj").html() == "")
				d3.select(".aj").node().append(data.documentElement);

			d3.select("#m514 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m514 #npiso").style("fill", colorArray[orderRoxoPiso]);
			d3.select("#m514 #nlado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m514 #chao").style("fill", chao);
			d3.select("#m514 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m514 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m514 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m514 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m514 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m514 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m514 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m514 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m514 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#m514 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m514 #troncosPO").style("fill", arvore);
			d3.select("#m514 #plantaPO").style("fill", janela);
			d3.select("#m514 #plantaV").style("fill", janela);
			d3.select("#m514 #som").style("fill", roxoExtra);
			d3.select("#m514 #tupperware").style("fill", roxoExtra);
			d3.select("#m514 #tupperware").style("opacity", "0.3");
			d3.select("#m514 #arvore").style("fill", arvore);
			d3.select("#m514 #arvore").style("fill", arvore);
			d3.select("#m514 #tabela").style("color", "black");
			d3.select("#m514 #tabela line").style(
				"stroke",
				colorArray[orderRoxoExtra]
			);
			d3.select("#m514 #linha1").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m514 #linha2").style("stroke", colorArray[orderRoxoExtra]);
			d3.select("#m514 #plantas").style("fill", cima);
			d3.select("#m514 text").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m514 text").style("font-size", "5px");
			d3.select("#m514 #plantas").style("fill", cima);

			if (props.season === "Verão") {
				d3.select("#m514 #plantaV").style("opacity", "1");
				d3.select("#m514 #plantaPO").style("opacity", "0");
				d3.select("#m514 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m514 #plantaV").style("opacity", "0");
				d3.select("#m514 #plantaPO").style("opacity", "1");
				d3.select("#m514 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m514 #plantaV").style("opacity", "0");
				d3.select("#m514 #plantaPO").style("opacity", "0");
				d3.select("#m514 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg515).then((data) => {
			if ($(".ak").html() == "")
				d3.select(".ak").node().append(data.documentElement);

			d3.select("#m515 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#m515 #npiso").style("fill", colorArray[orderRoxoPiso]);
			d3.select("#m515 #nlado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m515 #chao").style("fill", chao);
			d3.select("#m515 #lado").style("fill", colorArray[orderLado]);
			d3.select("#m515 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#m515 #cima").style("fill", colorArray[orderCima]);
			d3.select("#m515 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#m515 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#m515 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#m515 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#m515 #escuro").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m515 #piso").style("fill", colorArray[orderRoxoLado]);
			d3.select("#m515 #lado-2").style("fill", colorArray[orderRoxoDentro]);
			d3.select("#m515 #troncosPO").style("fill", arvore);
			d3.select("#m515 #plantaPO").style("fill", janela);
			d3.select("#m515 #plantaV").style("fill", janela);
			d3.select("#m515 #som").style("fill", roxoExtra);
			d3.select("#m515 #tupperware").style("fill", roxoExtra);
			d3.select("#m515 #tupperware").style("opacity", "0.3");
			d3.select("#m515 #arvore").style("fill", arvore);
			d3.select("#m515 #arvore").style("fill", arvore);
			d3.select("#m515 #tabela").style("color", "black");
			d3.select("#m515 #tabela line").style(
				"stroke",
				colorArray[orderRoxoExtra]
			);

			d3.select("#m515 #plantas").style("fill", cima);
			d3.select("#m515 text").style("fill", colorArray[orderRoxoExtra]);
			d3.select("#m515 text").style("font-size", "5px");
			d3.select("#m515 #plantas").style("fill", cima);
			d3.select("#m515 #linha").style("fill", "transparent");
			d3.select("#m515 #linha").style("stroke", frente);
			d3.select("#m515 #linha").style("stroke-width", "5px");

			if (props.season === "Verão") {
				d3.select("#m515 #plantaV").style("opacity", "1");
				d3.select("#m515 #plantaPO").style("opacity", "0");
				d3.select("#m515 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#m515 #plantaV").style("opacity", "0");
				d3.select("#m515 #plantaPO").style("opacity", "1");
				d3.select("#m515 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#m515 #plantaV").style("opacity", "0");
				d3.select("#m515 #plantaPO").style("opacity", "0");
				d3.select("#m515 #troncosPO").style("opacity", "0");
			}
		});
	}

	return (
		<div id="skrollr-body">
			<div
				className="container mitos justify-content-start"
				style={{
					margin: 0,
					padding: 0,
				}}
			>
				{" "}
				<section className="childM d-flex flex-row-reverse mx-4">
					<h2 className="py-5 d-flex justify-content-start" id="mito"></h2>
					<div
						className="grid02 d-flex justify-content-end"
						data-bottom-top="opacity: 0;"
						data--50p-top="opacity: 1; position:fixed; top:0;"
						data--3290p-top="opacity:1;  position:fixed; top:0;"
						data--3500p-top="opacity:0;  position:fixed; top:0;"
						data-anchor-target="#mito"
					></div>
				</section>
				<section>
					<div
						className="col-12 zz1"
						data-bottom-top="opacity: 0;"
						data--0p-top="opacity: 1; position:fixed; bottom:0;"
						data--490p-top="opacity: 1; position:fixed; bottom:0;"
						data--510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
				</section>
				<section className="childM">
					<div
						className="col-12 v"
						data-bottom-top="opacity: 0;"
						data--450p-top="opacity: 0; position:fixed; bottom:0;"
						data--500p-top="opacity: 1; position:fixed; bottom:0;"
						data--690p-top="opacity: 1; position:fixed; bottom:0;"
						data--710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								1. Arquitectura passiva significa sempre Passive House.
							</b>
							<br></br>A arquitectura passiva envolve tudo o que melhora o
							desempenho energético dos edifícios e o conforto dos habitantes
							sem o envolvimento de sistemas activos. Essa passividade passa,
							por exemplo, pela optimização da forma do edifício, da exposição
							ao sol, do isolamento térmico de paredes e janelas e a correcção
							de eventuais pontes térmicas.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 x"
						data-bottom-top="opacity: 0;"
						data--650p-top="opacity: 0; position:fixed; bottom:0;"
						data--700p-top="opacity: 1; position:fixed; bottom:0;"
						data--890p-top="opacity: 1; position:fixed; bottom:0;"
						data--910p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							No entanto, tem-se verificado uma crescente apropriação do termo
							“passivo” por construção que não o é. Em alguns casos, “passivo”
							transformou-se num chavão comercial, sem verificação possível,
							pois os requisitos ou métricas não estão definidos.
						</div>{" "}
						<br></br>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 y"
						data-bottom-top="opacity: 0;"
						data--850p-top="opacity: 0; position:fixed; bottom:0;"
						data--900p-top="opacity: 1; position:fixed; bottom:0;"
						data--1090p-top="opacity: 1; position:fixed; bottom:0;"
						data--1110p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1100p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Uma Passive House, por sua vez, colhe os benefícios dos princípios
							acima definidos, junta outros, e compromete-se com parâmetros
							técnicos explícitos e verificáveis.
						</div>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 aa"
						data-bottom-top="opacity: 0;"
						data--1050p-top="opacity: 0; position:fixed; bottom:0;"
						data--1100p-top="opacity: 1; position:fixed; bottom:0;"
						data--1290p-top="opacity: 1; position:fixed; bottom:0;"
						data--1310p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1150p-top="opacity:0;top:100%; left:25%; position: fixed;"
						data--1200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								2. A Passive House é apenas para habitações.
							</b>
							<br></br>
							Na realidade, os princípios da ecoeficiência, Passive House
							incluída, são aplicáveis à construção da maioria dos equipamentos:
							fábricas, escolas, instalações desportivas e comerciais, etc, além
							de, evidentemente, moradias e blocos de habitação colectiva.
							<br></br>
							Existem diversos{" "}
							<a
								href="https://passipedia.org/examples"
								target="_blank"
								style={{ color: "black", textDecoration: "underline" }}
							>
								exemplos
							</a>{" "}
							que demonstram isso mesmo.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ab"
						data-bottom-top="opacity: 0;"
						data--1250p-top="opacity: 0; position:fixed; bottom:0;"
						data--1300p-top="opacity: 1; position:fixed; bottom:0;"
						data--1490p-top="opacity: 1; position:fixed; bottom:0;"
						data--1510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1420p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1450p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								3. A Passive House é apenas para alemães, nórdicos ou outros
								habitantes de climas frios.
							</b>
							<br></br>A validade da Passive House é{" "}
							<a
								href="https://database.passivehouse.com/en/buildings/map/"
								target="_blank"
								style={{ color: "black", textDecoration: "underline" }}
							>
								global
							</a>{" "}
							, pois não prescreve soluções construtivas únicas. Define antes
							critérios de conforto e de consumo de energia, e alguns métodos
							para os alcançar. Cada construção ecoeficiente é única, pois
							utiliza os dados climáticos e geométricos específicos de cada
							lugar para projectar uma solução original.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ac"
						data-bottom-top="opacity: 0;"
						data--1450p-top="opacity: 0; position:fixed; bottom:0;"
						data--1500p-top="opacity: 1; position:fixed; bottom:0;"
						data--1690p-top="opacity: 1; position:fixed; bottom:0;"
						data--1710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Por outro lado, os maiores beneficiários de uma construção
							sustentável não são os países mais frios, mas aqueles onde, devido
							à{" "}
							<a
								href="https://www.publico.pt/2020/12/13/sociedade/noticia/pobreza-energetica-portugal-piores-ue-1942219"
								target="_blank"
								style={{ color: "black", textDecoration: "underline" }}
							>
								pobreza
							</a>
							, as pessoas não têm condições para manter os edifícios a uma
							temperatura adequada à actividade humana.
						</div>{" "}
						<br></br>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ag"
						data-bottom-top="opacity: 0;"
						data--1650p-top="opacity: 0; position:fixed; bottom:0;"
						data--1700p-top="opacity: 1; position:fixed; bottom:0;"
						data--1890p-top="opacity: 1; position:fixed; bottom:0;"
						data--1910p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--1800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--1900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								4. A construção ecoeficiente torna obrigatoriamente a construção
								mais cara.
							</b>
							<br></br>
							No caso português, as exigências não ultrapassam muito as
							condições mínimas previstas na legislação aplicável. Por vezes é
							necessário aumentar o isolamento térmico de paredes, de pavimentos
							e de coberturas, ou de portas e janelas, mas este aumento não
							forçosamente um impacto significativo.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ah"
						data-bottom-top="opacity: 0;"
						data--1850p-top="opacity: 0; position:fixed; bottom:0;"
						data--1900p-top="opacity: 1; position:fixed; bottom:0;"
						data--2090p-top="opacity: 1; position:fixed; bottom:0;"
						data--2110p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--1950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2020p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2030p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Regra geral, verifica-se uma transferência de investimentos, com
							poupanças significativas noutros componentes, nomeadamente nos
							sistemas de climatização tradicionais.
						</div>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ai"
						data-bottom-top="opacity: 0;"
						data--2050p-top="opacity: 0; position:fixed; bottom:0;"
						data--2100p-top="opacity: 1; position:fixed; bottom:0;"
						data--2290p-top="opacity: 1; position:fixed; bottom:0;"
						data--2310p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							O maior rigor no projecto e nos métodos construtivos ajudam ainda
							a evitar imprevistos e custos adicionais em fase de obra.
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ad"
						data-bottom-top="opacity: 0;"
						data--2250p-top="opacity: 0; position:fixed; bottom:0;"
						data--2300p-top="opacity: 1; position:fixed; bottom:0;"
						data--2490p-top="opacity: 1; position:fixed; bottom:0;"
						data--2510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2500p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								5. A arquitectura ecoeficiente é incompatível com a construção
								portuguesa.
							</b>
							<br></br>A Passive House e a arquitectura ecoeficiente estabelecem
							objectivos, e não sistemas construtivos específicos. Pelo
							contrário, adaptam-se e compatibilizam-se, através do projecto,
							com os modos de fazer específicos de cada lugar.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ae"
						data-bottom-top="opacity: 0;"
						data--2450p-top="opacity: 0; position:fixed; bottom:0;"
						data--2500p-top="opacity: 1; position:fixed; bottom:0;"
						data--2690p-top="opacity: 1; position:fixed; bottom:0;"
						data--2710p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2700p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							As soluções podem, assim, alternar entre a estrutura de betão
							armado e a de madeira, entre a cobertura inclinada com telha e a
							cobertura plana verde, entre a torre e o edifício mais horizontal.
							Depende do contexto, do programa, das preferências do cliente.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 aj"
						data-bottom-top="opacity: 0;"
						data--2650p-top="opacity: 0; position:fixed; bottom:0;"
						data--2700p-top="opacity: 1; position:fixed; bottom:0;"
						data--3090p-top="opacity: 1; position:fixed; bottom:0;"
						data--3110p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2900p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								6. Uma Passive House é um <em>tupperware</em> habitado.
							</b>
							<br></br>O sistema Passive House não produz contentores
							herméticos, edifícios que não respiram, onde, segundo se pensa,
							não é possível abrir uma janela. Esta ideia instalou-se devido aos
							requisitos estanquidade ao ar.
						</div>
					</p>
				</section>
				<section className="childM">
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--2850p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--2900p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--2950p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--3000p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							Contudo, existem também normas quanto à renovação do ar interior,
							cumpridas geralmente com recurso a um sistema de ventilação, sem
							ruído e de elevada eficiência. Na verdade, a utilização de uma
							Passive House é muito semelhante à de qualquer outro edifício, mas
							o ar é substancialmente mais limpo e mais saudável.
						</div>
					</p>
				</section>
				<section className="childM">
					<div
						className="col-12 ak"
						data-bottom-top="opacity: 0;"
						data--3050p-top="opacity: 0; position:fixed; bottom:0;"
						data--3100p-top="opacity: 1; position:fixed; bottom:0;"
						data--3490p-top="opacity: 1; position:fixed; bottom:0;"
						data--3510p-top="opacity:0;  position:fixed; bottom:0;"
						data-anchor-target="#mito"
					></div>
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--3150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--3200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--3250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--3300p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							<b style={{ color: janela }}>
								{" "}
								7. É sempre possível pegar num projecto convencional e
								transformá-lo em Passive House.{" "}
							</b>
							<br></br>A conversão de um projecto convencional é exequível em
							boa parte dos casos. No entanto, o processo de adaptação tornará,
							provavelmente, o projecto e a obra escusadamente mais dispendiosos
							e demorados.
						</div>
					</p>
				</section>
				<section className="childM">
					<p
						className="text-left col-6"
						data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
						data--3350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
						data--3400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--3450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
						data--3500p-top="opacity:0;top:0%; left:25%; position: fixed;"
						data-anchor-target="#mito"
					>
						{" "}
						<div className="text_edit">
							{" "}
							O procedimento mais avisado para construir ou reabilitar de modo
							ecoeficiente é adoptar esse requisito antes de iniciar o projecto.
							Assim, todas as equipas trabalharão de forma coordenada e
							sustentada para optimizar os vários factores que condicionam o
							desempenho do edifício.
						</div>
					</p>
				</section>
			</div>
		</div>
	);
};

export default Mitos;
