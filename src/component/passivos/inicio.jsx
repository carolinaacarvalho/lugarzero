import React from "react";
import * as d3 from "d3";

import svgGridI from "../svgs/gridI.svg";
import svg11 from "../svgs/intro11.svg";
import svg12 from "../svgs/intro12.svg";
import svg21 from "../svgs/intro21.svg";
import svg22 from "../svgs/intro22.svg";
import svg23 from "../svgs/intro23.svg";
import svg24 from "../svgs/intro24.svg";
import svg25 from "../svgs/intro25.svg";
import svg26 from "../svgs/intro26.svg";
import svg27 from "../svgs/intro27.svg";
import svg28 from "../svgs/intro28.svg";
import svg29 from "../svgs/intro29.svg";
import svg31 from "../svgs/intro31.svg";
import svg32 from "../svgs/intro32.svg";
import svg33 from "../svgs/intro33.svg";
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
	orderCFrente2;

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".a") != null) {
		d3.xml(svg11).then((data) => {
			d3.select(".a").node().append(data.documentElement);
			d3.select("#intro11 #chao").style("fill", chao);
			d3.select("#intro11 #energia").style("stroke", "#23AFFB");
			d3.select("#intro11 #energia").style("fill", "none");
			d3.select("#intro11 #frente").style("fill", "#10EBE7");
			d3.select("#intro11 #janela").style("fill", "#1584FB");
			d3.select("#intro11 #lado").style("fill", "#0FD1CE");
			d3.select("#intro11 #arvore").style("fill", arvore);
			d3.select("#intro11 #troncosPO").style("fill", arvore);
			d3.select("#intro11 #plantas").style("fill", "#23AFFB");
			d3.select("#intro11 #plantasPO").style("fill", "#1584FB");
			d3.select("#intro11 #plantasV").style("fill", "#1584FB");

			d3.select("#intro11 #ceu").style("fill", "white");

			d3.select("#intro11 #plantasV").style("opacity", "0");
			d3.select("#intro11 #plantasPO").style("opacity", "0");
			d3.select("#intro11 #troncosPO").style("opacity", "0");

			d3.select("#intro11 #gridI").style("opacity", "0.7");
			d3.select("#intro11 #gridI").style("fill", "transparent");
			d3.select("#intro11 #gridI").style("stroke", "#10EBE7");
			d3.select("#intro11 #gridI").style("width", "100px");
			d3.select("#intro11 #gridI").style("stroke-width", "0.07px");
		});

		d3.xml(svg12).then((data) => {
			d3.select(".b").node().append(data.documentElement);
			d3.select("#intro12 #chao").style("fill", chao);
			d3.select("#intro12 #energia").style("stroke", cima);
			d3.select("#intro12 #energia").style("fill", "none");
			d3.select("#intro12 #cima").style("fill", cima);
			d3.select("#intro12 #frente").style("fill", "#10EBE7");
			d3.select("#intro12 #janela").style("fill", janela);
			d3.select("#intro12 #lado").style("fill", lado);
			d3.select("#intro12 #arvore").style("fill", arvore);
			d3.select("#intro12 #troncosPO").style("fill", arvore);
			d3.select("#intro12 #plantas").style("fill", cima);
			d3.select("#intro12 #plantasPO").style("fill", janela);
			d3.select("#intro12 #plantasV").style("fill", janela);

			d3.select("#intro12 #plantasV").style("opacity", "0");
			d3.select("#intro12 #plantasPO").style("opacity", "0");
			d3.select("#intro12 #troncosPO").style("opacity", "0");

			d3.select("#intro12 #painel").style("fill", frente);
		});

		d3.xml(svg21).then((data) => {
			d3.select(".c").node().append(data.documentElement);
			d3.select("#intro21 #estrada").style("fill", "#2b2b2b");
			d3.select("#intro21 #predios").style("fill", cJanela);
			d3.select("#intro21 #blackout").style("fill", "black");
			d3.select("#intro21 #luz").style("fill", "white");
			d3.select("#intro21 #plantas").style("fill", cima);
			d3.select("#intro21 #arvore").style("fill", arvore);
			d3.select("#intro21 #nfrente").style("fill", cFrente1);
			d3.select("#intro21 #njanela").style("fill", cJanela);
			d3.select("#intro21 #nlado").style("fill", cCima);
			d3.select("#intro21 #chao").style("fill", chao);
			d3.select("#intro21 #troncosPO").style("fill", arvore);
			d3.select("#intro21 #plantasPO").style("fill", janela);
			d3.select("#intro21 #plantasV").style("fill", janela);

			d3.select("#intro21 #plantasV").style("opacity", "0");
			d3.select("#intro21 #plantasPO").style("opacity", "0");
			d3.select("#intro21 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg22).then((data) => {
			d3.select(".d").node().append(data.documentElement);
			d3.select("#intro22 #estrada").style("fill", "#2b2b2b");
			d3.select("#intro22 #predios").style("fill", cJanela);
			d3.select("#intro22 #plantas").style("fill", cima);
			d3.select("#intro22 #arvore").style("fill", arvore);
			d3.select("#intro22 #ncima").style("fill", cCima);
			d3.select("#intro22 #ncima2").style("fill", cCima);
			d3.select("#intro22 #cima").style("fill", cima);

			d3.select("#intro22 #nfrente").style("fill", cFrente1);
			d3.select("#intro22 #frente").style("fill", frente);
			d3.select("#intro22 #nfrente2").style("fill", cFrente1);
			d3.select("#intro22 #njanela").style("fill", cJanela);
			d3.select("#intro22 #janela").style("fill", janela);
			d3.select("#intro22 #nlado").style("fill", cLado);
			d3.select("#intro22 #lado").style("fill", lado);
			d3.select("#intro22 #chao").style("fill", chao);
			d3.select("#intro22 #troncosPO").style("fill", arvore);
			d3.select("#intro22 #plantasPO").style("fill", janela);
			d3.select("#intro22 #plantasV").style("fill", janela);

			d3.select("#intro22 #plantasV").style("opacity", "0");
			d3.select("#intro22 #plantasPO").style("opacity", "0");
			d3.select("#intro22 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg23).then((data) => {
			d3.select(".e").node().append(data.documentElement);
			d3.select("#intro23 #plantas").style("fill", cima);
			d3.select("#intro23 #arvore").style("fill", arvore);
			d3.select("#intro23 #base").style("fill", arvore);
			d3.select("#intro23 #ncima").style("fill", cCima);
			d3.select("#intro23 #cima").style("fill", cima);
			d3.select("#intro23 #nfrente").style("fill", cFrente1);
			d3.select("#intro23 #frente").style("fill", frente);
			d3.select("#intro23 #nfrente2").style("fill", cFrente1);
			d3.select("#intro23 #njanela").style("fill", cJanela);
			d3.select("#intro23 #janela").style("fill", janela);
			d3.select("#intro23 #nlado").style("fill", cLado);
			d3.select("#intro23 #lado").style("fill", lado);
			d3.select("#intro23 #chao").style("fill", chao);
			d3.select("#intro23 #troncosPO").style("fill", arvore);
			d3.select("#intro23 #plantasPO").style("fill", janela);
			d3.select("#intro23 #plantasV").style("fill", janela);

			d3.select("#intro23 #plantasV").style("opacity", "0");
			d3.select("#intro23 #plantasPO").style("opacity", "0");
			d3.select("#intro23 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg24).then((data) => {
			d3.select(".f").node().append(data.documentElement);
			d3.select("#intro24 #plantas").style("fill", cima);
			d3.select("#intro24 #arvore").style("fill", arvore);
			d3.select("#intro24 #cima").style("fill", cima);
			d3.select("#intro24 #frente").style("fill", frente);
			d3.select("#intro24 #janela").style("fill", "white");
			d3.select("#intro24 #grid").style("stroke", frente);
			d3.select("#intro24 #grid").style("stroke-width", "0.2px");
			d3.select("#intro24 #grid").style("fill", "transparent");
			d3.select("#intro24 #lado").style("fill", lado);
			d3.select("#intro24 #chao").style("fill", chao);
			d3.select("#intro24 #troncosPO").style("fill", arvore);
			d3.select("#intro24 #plantasPO").style("fill", janela);
			d3.select("#intro24 #plantasV").style("fill", janela);
			d3.select("#intro24 #borda").style("fill", frente);
			d3.select("#intro24 #parede").style("fill", neutroLado);
			d3.select("#intro24 #dentro").style("fill", neutroDentro);
			d3.select("#intro24 #piso").style("fill", neutroPiso);

			d3.select("#intro24 #plantasV").style("opacity", "0");
			d3.select("#intro24 #plantasPO").style("opacity", "0");
			d3.select("#intro24 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg25).then((data) => {
			d3.select(".g").node().append(data.documentElement);
			d3.select("#intro25 #plantas").style("fill", cima);
			d3.select("#intro25 #arvore").style("fill", arvore);
			d3.select("#intro25 #painel").style("fill", cFrente1);
			d3.select("#intro25 #painel2").style("fill", arvore);
			d3.select("#intro25 #cima").style("fill", cima);
			d3.select("#intro25 #frente").style("fill", frente);
			d3.select("#intro25 #janela").style("fill", "white");
			d3.select("#intro25 #grid").style("stroke", frente);
			d3.select("#intro25 #grid").style("stroke-width", "0.2px");
			d3.select("#intro25 #grid").style("fill", "transparent");
			d3.select("#intro25 #linha").style("stroke", arvore);
			d3.select("#intro25 #linha").style("fill", "transparent");
			d3.select("#intro25 #lado").style("fill", lado);
			d3.select("#intro25 #chao").style("fill", chao);
			d3.select("#intro25 #troncosPO").style("fill", arvore);
			d3.select("#intro25 #plantasPO").style("fill", janela);
			d3.select("#intro25 #plantasV").style("fill", janela);
			d3.select("#intro25 #borda").style("fill", frente);
			d3.select("#intro25 #parede").style("fill", neutroLado);
			d3.select("#intro25 #dentro").style("fill", neutroDentro);
			d3.select("#intro25 #piso").style("fill", neutroPiso);

			d3.select("#intro25 #plantasV").style("opacity", "0");
			d3.select("#intro25 #plantasPO").style("opacity", "0");
			d3.select("#intro25 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg26).then((data) => {
			d3.select(".h").node().append(data.documentElement);
			d3.select("#intro26 #plantas").style("fill", cima);
			d3.select("#intro26 #arvore").style("fill", arvore);
			d3.select("#intro26 #painel").style("fill", cFrente1);
			d3.select("#intro26 #painel2").style("fill", arvore);
			d3.select("#intro26 #cima").style("fill", cima);
			d3.select("#intro26 #frente").style("fill", frente);
			d3.select("#intro26 #janela").style("fill", "white");
			d3.select("#intro26 #grid").style("stroke", frente);
			d3.select("#intro26 #grid").style("stroke-width", "0.2px");
			d3.select("#intro26 #grid").style("fill", "transparent");
			d3.select("#intro26 #local5").style("stroke", lado);
			d3.select("#intro26 #local5").style("fill", "transparent");
			d3.select("#intro26 #local1").style("fill", frente);
			d3.select("#intro26 #local2").style("fill", arvore);
			d3.select("#intro26 #local3").style("stroke", arvore);
			d3.select("#intro26 #local6").style("fill", lado);
			d3.select("#intro26 #local4").style("stroke", arvore);
			d3.select("#intro26 #local4").style("fill", "transparent");
			d3.select("#intro26 #local3").style("fill", "transparent");
			d3.select("#intro26 #linha").style("stroke", frente);
			d3.select("#intro26 #linha").style("fill", "transparent");
			d3.select("#intro26 #lado").style("fill", lado);
			d3.select("#intro26 #chao").style("fill", chao);
			d3.select("#intro26 #troncosPO").style("fill", arvore);
			d3.select("#intro26 #plantasPO").style("fill", janela);
			d3.select("#intro26 #plantasV").style("fill", janela);
			d3.select("#intro26 #borda").style("fill", frente);
			d3.select("#intro26 #parede").style("fill", neutroLado);
			d3.select("#intro26 #dentro").style("fill", neutroDentro);
			d3.select("#intro26 #piso").style("fill", neutroPiso);

			d3.select("#intro26 #plantasV").style("opacity", "0");
			d3.select("#intro26 #plantasPO").style("opacity", "0");
			d3.select("#intro26 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg27).then((data) => {
			d3.select(".i").node().append(data.documentElement);
			d3.select("#intro27 #plantas").style("fill", cima);
			d3.select("#intro27 #arvore").style("fill", arvore);
			d3.select("#intro27 #cima").style("fill", cima);
			d3.select("#intro27 #frente").style("fill", frente);
			d3.select("#intro27 #janela").style("fill", janela);
			d3.select("#intro27 #grid").style("stroke", frente);
			d3.select("#intro27 #grid").style("stroke-width", "0.2px");
			d3.select("#intro27 #grid").style("fill", "transparent");
			d3.select("#intro27 #lado").style("fill", lado);
			d3.select("#intro27 #chao").style("fill", chao);
			d3.select("#intro27 #troncosPO").style("fill", arvore);
			d3.select("#intro27 #plantasPO").style("fill", janela);
			d3.select("#intro27 #plantasV").style("fill", janela);
			d3.select("#intro27 #caixadentro").style("fill", cJanela);
			d3.select("#intro27 #caixalado").style("fill", cLado);
			d3.select("#intro27 #caixafrente").style("fill", cFrente1);
			d3.select("#intro27 #aguafrente").style("fill", cima);
			d3.select("#intro27 #aguafrente2").style("fill", cima);
			d3.select("#intro27 #agualado").style("fill", lado);

			d3.select("#intro27 #plantasV").style("opacity", "0");
			d3.select("#intro27 #plantasPO").style("opacity", "0");
			d3.select("#intro27 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg28).then((data) => {
			d3.select(".j").node().append(data.documentElement);
			d3.select("#intro28 #plantas").style("fill", cima);
			d3.select("#intro28 #plantas2").style("fill", lado);
			d3.select("#intro28 #plantas-2").style("fill", cima);
			d3.select("#intro28 #plantas2-2").style("fill", lado);
			d3.select("#intro28 #caule").style("fill", janela);
			d3.select("#intro28 #arvore").style("fill", arvore);
			d3.select("#intro28 #cima").style("fill", cima);
			d3.select("#intro28 #frente").style("fill", frente);
			d3.select("#intro28 #janela").style("fill", janela);
			d3.select("#intro28 #grid").style("stroke", frente);
			d3.select("#intro28 #grid").style("stroke-width", "0.2px");
			d3.select("#intro28 #grid").style("fill", "transparent");
			d3.select("#intro28 #lado").style("fill", lado);
			d3.select("#intro28 #chao").style("fill", chao);
			d3.select("#intro28 #troncosPO").style("fill", arvore);
			d3.select("#intro28 #plantasPO").style("fill", janela);
			d3.select("#intro28 #plantasV").style("fill", janela);
			d3.select("#intro28 #caixadentro").style("fill", cJanela);
			d3.select("#intro28 #caixalado").style("fill", cLado);
			d3.select("#intro28 #caixafrente").style("fill", cFrente1);
			d3.select("#intro28 #vertical").style("fill", arvore);

			d3.select("#intro28 #plantasV").style("opacity", "0");
			d3.select("#intro28 #plantasPO").style("opacity", "0");
			d3.select("#intro28 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg29).then((data) => {
			d3.select(".k").node().append(data.documentElement);
			d3.select("#intro29 #plantas").style("fill", cima);
			d3.select("#intro29 #plantas2").style("fill", janela);
			d3.select("#intro29 #caule").style("fill", arvore);
			d3.select("#intro29 #arvore").style("fill", arvore);

			d3.select("#intro29 #cima").style("fill", cima);
			d3.select("#intro29 #frente").style("fill", frente);
			d3.select("#intro29 #janela").style("fill", janela);
			d3.select("#intro29 #grid").style("stroke", frente);
			d3.select("#intro29 #grid").style("stroke-width", "0.2px");
			d3.select("#intro29 #grid").style("fill", "transparent");
			d3.select("#intro29 #energia").style("stroke", frente);
			d3.select("#intro29 #energia").style("fill", "transparent");
			d3.select("#intro29 #lado").style("fill", lado);
			d3.select("#intro29 #chao").style("fill", chao);
			d3.select("#intro29 #troncosPO").style("fill", arvore);
			d3.select("#intro29 #plantasPO").style("fill", janela);
			d3.select("#intro29 #plantasV").style("fill", janela);
			d3.select("#intro29 #caixadentro").style("fill", cJanela);
			d3.select("#intro29 #caixalado").style("fill", cLado);
			d3.select("#intro29 #caixafrente").style("fill", cFrente1);

			d3.select("#intro29 #plantasV").style("opacity", "0");
			d3.select("#intro29 #plantasPO").style("opacity", "0");
			d3.select("#intro29 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg31).then((data) => {
			d3.select(".l").node().append(data.documentElement);
			d3.select("#intro31 #plantas").style("fill", cima);
			d3.select("#intro31 #plantas2").style("fill", janela);
			d3.select("#intro31 #caule").style("fill", arvore);
			d3.select("#intro31 #arvore").style("fill", arvore);
			d3.select("#intro31 #cima").style("fill", cima);
			d3.select("#intro31 #frente").style("fill", frente);
			d3.select("#intro31 #janela").style("fill", janela);
			d3.select("#intro31 #grid").style("stroke", frente);
			d3.select("#intro31 #grid").style("stroke-width", "0.2px");
			d3.select("#intro31 #grid").style("fill", "transparent");
			d3.select("#intro31 #lado").style("fill", lado);
			d3.select("#intro31 #chao").style("fill", chao);
			d3.select("#intro31 #troncosPO").style("fill", arvore);
			d3.select("#intro31 #plantasPO").style("fill", janela);
			d3.select("#intro31 #plantasV").style("fill", janela);
			d3.select("#intro31 #scan").style("stroke-width", "5px");
			d3.select("#intro31 #scan").style("stroke", frente);
			d3.select("#intro31 #scan").style("fill", "transparent");

			d3.select("#intro31 #plantasV").style("opacity", "0");
			d3.select("#intro31 #plantasPO").style("opacity", "0");
			d3.select("#intro31 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg32).then((data) => {
			d3.select(".m").node().append(data.documentElement);
			d3.select("#intro32 #plantas").style("fill", cima);
			d3.select("#intro32 #plantas2").style("fill", lado);
			d3.select("#intro32 #caule").style("fill", janela);
			d3.select("#intro32 #arvore").style("fill", arvore);
			d3.select("#intro32 #vertical").style("fill", arvore);
			d3.select("#intro32 #cima").style("fill", cima);
			d3.select("#intro32 #frente").style("fill", frente);
			d3.select("#intro32 #janela").style("fill", janela);
			d3.select("#intro32 #grid").style("stroke", frente);
			d3.select("#intro32 #grid").style("stroke-width", "0.2px");
			d3.select("#intro32 #grid").style("fill", "transparent");
			d3.select("#intro32 #energia").style("stroke", frente);
			d3.select("#intro32 #energia").style("fill", "transparent");
			d3.select("#intro32 #lado").style("fill", lado);
			d3.select("#intro32 #chao").style("fill", chao);
			d3.select("#intro32 #troncosPO").style("fill", arvore);
			d3.select("#intro32 #plantasPO").style("fill", janela);
			d3.select("#intro32 #plantasV").style("fill", janela);
			d3.select("#intro32 #aguafrente").style("fill", cima);
			d3.select("#intro32 #aguafrente2").style("fill", cima);
			d3.select("#intro32 #agualado").style("fill", lado);
			d3.select("#intro32 #caixadentro").style("fill", cJanela);
			d3.select("#intro32 #caixalado").style("fill", cLado);
			d3.select("#intro32 #caixafrente").style("fill", cFrente1);
			d3.select("#intro32 #caixafrente2").style("fill", cFrente1);
			d3.select("#intro32 #painel").style("fill", cFrente1);
			d3.select("#intro32 #painel2").style("fill", arvore);

			d3.select("#intro32 #plantasV").style("opacity", "0");
			d3.select("#intro32 #plantasPO").style("opacity", "0");
			d3.select("#intro32 #troncosPO").style("opacity", "0");
		});

		d3.xml(svg33).then((data) => {
			d3.select(".zz").node().append(data.documentElement);
			d3.select("#intro33 #chao").style("fill", chao);

			d3.select("#intro33 #plantasV").style("opacity", "0");
			d3.select("#intro33 #plantasPO").style("opacity", "0");
			d3.select("#intro33 #troncosPO").style("opacity", "0");
		});

		d3.xml(svgGridI).then((data) => {
			d3.select(".gridI").node().append(data.documentElement);
			d3.select("#backgroundI #ceu").style("fill", "white");
			d3.select("#backgroundI #gridI").style("opacity", "0.6");
			d3.select("#backgroundI #gridI").style("fill", "transparent");
			d3.select("#backgroundI #gridI").style("stroke", frente);
			d3.select("#backgroundI #gridI").style("width", "100px");
			d3.select("#backgroundI #gridI").style("stroke-width", "0.1px");
			d3.select("#backgroundI #chao").style("fill", chao);
		});
	}
});

const Inicio = (props) => {
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
		neutroPiso = "#C2A58F";
		neutroLado = "#DCBFAA";
		neutroExtra = "#EFD6C5";

		//------------------------------------------------------------color palette inside normal houses
		roxoDentro = "#CD00FF";
		roxoPiso = "#620280";
		roxoLado = "#9100DD";
		roxoExtra = "#B200FF";

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
			if (document.querySelector(".options") != null)
				document.querySelector(".options").style.color = "black";
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
			if (document.querySelector(".options") != null)
				document.querySelector(".options").style.color = "black";
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
			if (document.querySelector(".options") != null)
				document.querySelector(".options").style.color = "black";
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
			if (document.querySelector(".options") != null)
				document.querySelector(".options").style.color = "white";
		}
		//------------------------------------------------------------call svgs + fill with color
		d3.xml(svgGridI).then(() => {
			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#backgroundI #ceu").style("fill", "black");
			} else {
				d3.select("#backgroundI #ceu").style("fill", "white");
			}
			d3.select("#backgroundI #gridI").style("opacity", "0.6");
			d3.select("#backgroundI #gridI").style("fill", "transparent");
			d3.select("#backgroundI #gridI").style("stroke", frente);
			d3.select("#backgroundI #gridI").style("width", "100px");
			d3.select("#backgroundI #gridI").style("stroke-width", "0.1px");
			d3.select("#backgroundI #chao").style("fill", chao);
		});
		d3.xml(svg11).then(() => {
			d3.select("#intro11 #chao").style("fill", chao);
			d3.select("#intro11 #energia").style("stroke", colorArray[orderCima]);
			d3.select("#intro11 #energia").style("fill", "none");
			d3.select("#intro11 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro11 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro11 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro11 #arvore").style("fill", arvore);
			d3.select("#intro11 #troncosPO").style("fill", arvore);
			d3.select("#intro11 #plantas").style("fill", cima);
			d3.select("#intro11 #plantasPO").style("fill", janela);
			d3.select("#intro11 #plantasV").style("fill", janela);

			if (props.sky === "Noite" || props.sky === "Base") {
				d3.select("#intro11 #ceu").style("fill", "black");
			} else {
				d3.select("#intro11 #ceu").style("fill", "white");
			}

			if (props.season === "Verão") {
				d3.select("#intro11 #plantasV").style("opacity", "1");
				d3.select("#intro11 #plantasPO").style("opacity", "0");
				d3.select("#intro11 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro11 #plantasV").style("opacity", "0");
				d3.select("#intro11 #plantasPO").style("opacity", "1");
				d3.select("#intro11 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro11 #plantasV").style("opacity", "0");
				d3.select("#intro11 #plantasPO").style("opacity", "0");
				d3.select("#intro11 #troncosPO").style("opacity", "0");
			}
			d3.select("#intro11 #gridI").style("opacity", "0.7");
			d3.select("#intro11 #gridI").style("fill", "transparent");
			d3.select("#intro11 #gridI").style("stroke", frente);
			d3.select("#intro11 #gridI").style("width", "100px");
			d3.select("#intro11 #gridI").style("stroke-width", "0.07px");
		});
		d3.xml(svg12).then(() => {
			d3.select("#intro12 #chao").style("fill", chao);
			d3.select("#intro12 #energia").style("stroke", cima);
			d3.select("#intro12 #energia").style("fill", "none");
			d3.select("#intro12 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro12 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro12 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro12 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro12 #arvore").style("fill", arvore);
			d3.select("#intro12 #troncosPO").style("fill", arvore);
			d3.select("#intro12 #plantas").style("fill", cima);
			d3.select("#intro12 #plantasPO").style("fill", janela);
			d3.select("#intro12 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#intro12 #plantasV").style("opacity", "1");
				d3.select("#intro12 #plantasPO").style("opacity", "0");
				d3.select("#intro12 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro12 #plantasV").style("opacity", "0");
				d3.select("#intro12 #plantasPO").style("opacity", "1");
				d3.select("#intro12 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro12 #plantasV").style("opacity", "0");
				d3.select("#intro12 #plantasPO").style("opacity", "0");
				d3.select("#intro12 #troncosPO").style("opacity", "0");
			}
			d3.select("#intro12 #painel").style("fill", frente);
		});
		d3.xml(svg21).then(() => {
			d3.select("#intro21 #estrada").style("fill", "#2b2b2b");
			d3.select("#intro21 #predios").style("fill", cJanela);
			d3.select("#intro21 #blackout").style("fill", "black");
			d3.select("#intro21 #luz").style("fill", "white");
			d3.select("#intro21 #plantas").style("fill", cima);
			d3.select("#intro21 #arvore").style("fill", arvore);
			d3.select("#intro21 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#intro21 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#intro21 #nlado").style("fill", colorArray[orderCCima]);
			d3.select("#intro21 #chao").style("fill", chao);
			d3.select("#intro21 #troncosPO").style("fill", arvore);
			d3.select("#intro21 #plantasPO").style("fill", janela);
			d3.select("#intro21 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#intro21 #plantasV").style("opacity", "1");
				d3.select("#intro21 #plantasPO").style("opacity", "0");
				d3.select("#intro21 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro21 #plantasV").style("opacity", "0");
				d3.select("#intro21 #plantasPO").style("opacity", "1");
				d3.select("#intro21 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro21 #plantasV").style("opacity", "0");
				d3.select("#intro21 #plantasPO").style("opacity", "0");
				d3.select("#intro21 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg22).then(() => {
			d3.select("#intro22 #estrada").style("fill", "#2b2b2b");
			d3.select("#intro22 #predios").style("fill", cJanela);
			d3.select("#intro22 #plantas").style("fill", cima);
			d3.select("#intro22 #arvore").style("fill", arvore);
			d3.select("#intro22 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#intro22 #ncima2").style("fill", colorArray[orderCCima]);
			d3.select("#intro22 #cima").style("fill", colorArray[orderCima]);

			d3.select("#intro22 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#intro22 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro22 #nfrente2").style("fill", colorArray[orderCFrente1]);
			d3.select("#intro22 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#intro22 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro22 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#intro22 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro22 #chao").style("fill", chao);
			d3.select("#intro22 #troncosPO").style("fill", arvore);
			d3.select("#intro22 #plantasPO").style("fill", janela);
			d3.select("#intro22 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#intro22 #plantasV").style("opacity", "1");
				d3.select("#intro22 #plantasPO").style("opacity", "0");
				d3.select("#intro22 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro22 #plantasV").style("opacity", "0");
				d3.select("#intro22 #plantasPO").style("opacity", "1");
				d3.select("#intro22 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro22 #plantasV").style("opacity", "0");
				d3.select("#intro22 #plantasPO").style("opacity", "0");
				d3.select("#intro22 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg23).then(() => {
			d3.select("#intro23 #plantas").style("fill", cima);
			d3.select("#intro23 #arvore").style("fill", arvore);
			d3.select("#intro23 #base").style("fill", arvore);
			d3.select("#intro23 #ncima").style("fill", colorArray[orderCCima]);
			d3.select("#intro23 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro23 #nfrente").style("fill", colorArray[orderCFrente1]);
			d3.select("#intro23 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro23 #nfrente2").style("fill", colorArray[orderCFrente1]);
			d3.select("#intro23 #njanela").style("fill", colorArray[orderCJanela]);
			d3.select("#intro23 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro23 #nlado").style("fill", colorArray[orderCLado]);
			d3.select("#intro23 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro23 #chao").style("fill", chao);
			d3.select("#intro23 #troncosPO").style("fill", arvore);
			d3.select("#intro23 #plantasPO").style("fill", janela);
			d3.select("#intro23 #plantasV").style("fill", janela);

			if (props.season === "Verão") {
				d3.select("#intro23 #plantasV").style("opacity", "1");
				d3.select("#intro23 #plantasPO").style("opacity", "0");
				d3.select("#intro23 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro23 #plantasV").style("opacity", "0");
				d3.select("#intro23 #plantasPO").style("opacity", "1");
				d3.select("#intro23 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro23 #plantasV").style("opacity", "0");
				d3.select("#intro23 #plantasPO").style("opacity", "0");
				d3.select("#intro23 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg24).then(() => {
			d3.select("#intro24 #plantas").style("fill", cima);
			d3.select("#intro24 #arvore").style("fill", arvore);
			d3.select("#intro24 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro24 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro24 #janela").style("fill", "white");
			d3.select("#intro24 #grid").style("stroke", frente);
			d3.select("#intro24 #grid").style("stroke-width", "0.2px");
			d3.select("#intro24 #grid").style("fill", "transparent");
			d3.select("#intro24 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro24 #chao").style("fill", chao);
			d3.select("#intro24 #troncosPO").style("fill", arvore);
			d3.select("#intro24 #plantasPO").style("fill", janela);
			d3.select("#intro24 #plantasV").style("fill", janela);
			d3.select("#intro24 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#intro24 #parede").style("fill", neutroLado);
			d3.select("#intro24 #dentro").style("fill", neutroDentro);
			d3.select("#intro24 #piso").style("fill", neutroPiso);

			if (props.season === "Verão") {
				d3.select("#intro24 #plantasV").style("opacity", "1");
				d3.select("#intro24 #plantasPO").style("opacity", "0");
				d3.select("#intro24 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro24 #plantasV").style("opacity", "0");
				d3.select("#intro24 #plantasPO").style("opacity", "1");
				d3.select("#intro24 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro24 #plantasV").style("opacity", "0");
				d3.select("#intro24 #plantasPO").style("opacity", "0");
				d3.select("#intro24 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg25).then(() => {
			d3.select("#intro25 #plantas").style("fill", cima);
			d3.select("#intro25 #arvore").style("fill", arvore);
			d3.select("#intro25 #painel").style("fill", cFrente1);
			d3.select("#intro25 #painel2").style("fill", arvore);
			d3.select("#intro25 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro25 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro25 #janela").style("fill", "white");
			d3.select("#intro25 #grid").style("stroke", frente);
			d3.select("#intro25 #grid").style("stroke-width", "0.2px");
			d3.select("#intro25 #grid").style("fill", "transparent");
			d3.select("#intro25 #linha").style("stroke", arvore);
			d3.select("#intro25 #linha").style("fill", "transparent");
			d3.select("#intro25 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro25 #chao").style("fill", chao);
			d3.select("#intro25 #troncosPO").style("fill", arvore);
			d3.select("#intro25 #plantasPO").style("fill", janela);
			d3.select("#intro25 #plantasV").style("fill", janela);
			d3.select("#intro25 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#intro25 #parede").style("fill", neutroLado);
			d3.select("#intro25 #dentro").style("fill", neutroDentro);
			d3.select("#intro25 #piso").style("fill", neutroPiso);

			if (props.season === "Verão") {
				d3.select("#intro25 #plantasV").style("opacity", "1");
				d3.select("#intro25 #plantasPO").style("opacity", "0");
				d3.select("#intro25 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro25 #plantasV").style("opacity", "0");
				d3.select("#intro25 #plantasPO").style("opacity", "1");
				d3.select("#intro25 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro25 #plantasV").style("opacity", "0");
				d3.select("#intro25 #plantasPO").style("opacity", "0");
				d3.select("#intro25 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg26).then(() => {
			d3.select("#intro26 #plantas").style("fill", cima);
			d3.select("#intro26 #arvore").style("fill", arvore);
			d3.select("#intro26 #painel").style("fill", cFrente1);
			d3.select("#intro26 #painel2").style("fill", arvore);
			d3.select("#intro26 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro26 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro26 #janela").style("fill", "white");
			d3.select("#intro26 #grid").style("stroke", frente);
			d3.select("#intro26 #grid").style("stroke-width", "0.2px");
			d3.select("#intro26 #grid").style("fill", "transparent");
			d3.select("#intro26 #local5").style("stroke", lado);
			d3.select("#intro26 #local5").style("fill", "transparent");
			d3.select("#intro26 #local1").style("fill", frente);
			d3.select("#intro26 #local2").style("fill", arvore);
			d3.select("#intro26 #local3").style("stroke", arvore);
			d3.select("#intro26 #local6").style("fill", lado);
			d3.select("#intro26 #local4").style("stroke", arvore);
			d3.select("#intro26 #local4").style("fill", "transparent");
			d3.select("#intro26 #local3").style("fill", "transparent");
			d3.select("#intro26 #linha").style("stroke", frente);
			d3.select("#intro26 #linha").style("fill", "transparent");
			d3.select("#intro26 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro26 #chao").style("fill", chao);
			d3.select("#intro26 #troncosPO").style("fill", arvore);
			d3.select("#intro26 #plantasPO").style("fill", janela);
			d3.select("#intro26 #plantasV").style("fill", janela);
			d3.select("#intro26 #borda").style("fill", colorArray[orderFrente]);
			d3.select("#intro26 #parede").style("fill", neutroLado);
			d3.select("#intro26 #dentro").style("fill", neutroDentro);
			d3.select("#intro26 #piso").style("fill", neutroPiso);

			if (props.season === "Verão") {
				d3.select("#intro26 #plantasV").style("opacity", "1");
				d3.select("#intro26 #plantasPO").style("opacity", "0");
				d3.select("#intro26 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro26 #plantasV").style("opacity", "0");
				d3.select("#intro26 #plantasPO").style("opacity", "1");
				d3.select("#intro26 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro26 #plantasV").style("opacity", "0");
				d3.select("#intro26 #plantasPO").style("opacity", "0");
				d3.select("#intro26 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg27).then(() => {
			d3.select("#intro27 #plantas").style("fill", cima);
			d3.select("#intro27 #arvore").style("fill", arvore);
			d3.select("#intro27 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro27 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro27 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro27 #grid").style("stroke", frente);
			d3.select("#intro27 #grid").style("stroke-width", "0.2px");
			d3.select("#intro27 #grid").style("fill", "transparent");
			d3.select("#intro27 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro27 #chao").style("fill", chao);
			d3.select("#intro27 #troncosPO").style("fill", arvore);
			d3.select("#intro27 #plantasPO").style("fill", janela);
			d3.select("#intro27 #plantasV").style("fill", janela);
			d3.select("#intro27 #caixadentro").style(
				"fill",
				colorArray[orderCJanela]
			);
			d3.select("#intro27 #caixalado").style("fill", colorArray[orderCLado]);
			d3.select("#intro27 #caixafrente").style(
				"fill",
				colorArray[orderCFrente1]
			);
			d3.select("#intro27 #aguafrente").style("fill", colorArray[orderCima]);
			d3.select("#intro27 #aguafrente2").style("fill", colorArray[orderCima]);
			d3.select("#intro27 #agualado").style("fill", colorArray[orderLado]);

			if (props.season === "Verão") {
				d3.select("#intro27 #plantasV").style("opacity", "1");
				d3.select("#intro27 #plantasPO").style("opacity", "0");
				d3.select("#intro27 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro27 #plantasV").style("opacity", "0");
				d3.select("#intro27 #plantasPO").style("opacity", "1");
				d3.select("#intro27 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro27 #plantasV").style("opacity", "0");
				d3.select("#intro27 #plantasPO").style("opacity", "0");
				d3.select("#intro27 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg28).then(() => {
			d3.select("#intro28 #plantas").style("fill", cima);
			d3.select("#intro28 #plantas2").style("fill", lado);
			d3.select("#intro28 #plantas-2").style("fill", cima);
			d3.select("#intro28 #plantas2-2").style("fill", lado);
			d3.select("#intro28 #caule").style("fill", janela);
			d3.select("#intro28 #arvore").style("fill", arvore);
			d3.select("#intro28 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro28 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro28 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro28 #grid").style("stroke", frente);
			d3.select("#intro28 #grid").style("stroke-width", "0.2px");
			d3.select("#intro28 #grid").style("fill", "transparent");
			d3.select("#intro28 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro28 #chao").style("fill", chao);
			d3.select("#intro28 #troncosPO").style("fill", arvore);
			d3.select("#intro28 #plantasPO").style("fill", janela);
			d3.select("#intro28 #plantasV").style("fill", janela);
			d3.select("#intro28 #caixadentro").style(
				"fill",
				colorArray[orderCJanela]
			);
			d3.select("#intro28 #caixalado").style("fill", colorArray[orderCLado]);
			d3.select("#intro28 #caixafrente").style(
				"fill",
				colorArray[orderCFrente1]
			);
			d3.select("#intro28 #vertical").style("fill", arvore);

			if (props.season === "Verão") {
				d3.select("#intro28 #plantasV").style("opacity", "1");
				d3.select("#intro28 #plantasPO").style("opacity", "0");
				d3.select("#intro28 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro28 #plantasV").style("opacity", "0");
				d3.select("#intro28 #plantasPO").style("opacity", "1");
				d3.select("#intro28 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro28 #plantasV").style("opacity", "0");
				d3.select("#intro28 #plantasPO").style("opacity", "0");
				d3.select("#intro28 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg29).then(() => {
			d3.select("#intro29 #plantas").style("fill", cima);
			d3.select("#intro29 #plantas2").style("fill", janela);
			d3.select("#intro29 #caule").style("fill", arvore);
			d3.select("#intro29 #arvore").style("fill", arvore);

			d3.select("#intro29 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro29 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro29 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro29 #grid").style("stroke", frente);
			d3.select("#intro29 #grid").style("stroke-width", "0.2px");
			d3.select("#intro29 #grid").style("fill", "transparent");
			d3.select("#intro29 #energia").style("stroke", frente);
			d3.select("#intro29 #energia").style("fill", "transparent");
			d3.select("#intro29 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro29 #chao").style("fill", chao);
			d3.select("#intro29 #troncosPO").style("fill", arvore);
			d3.select("#intro29 #plantasPO").style("fill", janela);
			d3.select("#intro29 #plantasV").style("fill", janela);
			d3.select("#intro29 #caixadentro").style(
				"fill",
				colorArray[orderCJanela]
			);
			d3.select("#intro29 #caixalado").style("fill", colorArray[orderCLado]);
			d3.select("#intro29 #caixafrente").style(
				"fill",
				colorArray[orderCFrente1]
			);

			if (props.season === "Verão") {
				d3.select("#intro29 #plantasV").style("opacity", "1");
				d3.select("#intro29 #plantasPO").style("opacity", "0");
				d3.select("#intro29 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro29 #plantaV").style("opacity", "0");
				d3.select("#intro29 #plantasPO").style("opacity", "1");
				d3.select("#intro29 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro29 #plantasV").style("opacity", "0");
				d3.select("#intro29 #plantasPO").style("opacity", "0");
				d3.select("#intro29 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg31).then(() => {
			d3.select("#intro31 #plantas").style("fill", cima);
			d3.select("#intro31 #plantas2").style("fill", janela);
			d3.select("#intro31 #caule").style("fill", arvore);
			d3.select("#intro31 #arvore").style("fill", arvore);
			d3.select("#intro31 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro31 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro31 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro31 #grid").style("stroke", frente);
			d3.select("#intro31 #grid").style("stroke-width", "0.2px");
			d3.select("#intro31 #grid").style("fill", "transparent");
			d3.select("#intro31 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro31 #chao").style("fill", chao);
			d3.select("#intro31 #troncosPO").style("fill", arvore);
			d3.select("#intro31 #plantasPO").style("fill", janela);
			d3.select("#intro31 #plantasV").style("fill", janela);
			d3.select("#intro31 #scan").style("stroke-width", "5px");
			d3.select("#intro31 #scan").style("stroke", frente);
			d3.select("#intro31 #scan").style("fill", "transparent");

			if (props.season === "Verão") {
				d3.select("#intro31 #plantasV").style("opacity", "1");
				d3.select("#intro31 #plantasPO").style("opacity", "0");
				d3.select("#intro31 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro31 #plantasV").style("opacity", "0");
				d3.select("#intro31 #plantasPO").style("opacity", "1");
				d3.select("#intro31 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro31 #plantasV").style("opacity", "0");
				d3.select("#intro31 #plantasPO").style("opacity", "0");
				d3.select("#intro31 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg32).then((data) => {
			d3.select("#intro32 #plantas").style("fill", cima);
			d3.select("#intro32 #plantas2").style("fill", lado);
			d3.select("#intro32 #caule").style("fill", janela);
			d3.select("#intro32 #arvore").style("fill", arvore);
			d3.select("#intro32 #vertical").style("fill", arvore);
			d3.select("#intro32 #cima").style("fill", colorArray[orderCima]);
			d3.select("#intro32 #frente").style("fill", colorArray[orderFrente]);
			d3.select("#intro32 #janela").style("fill", colorArray[orderJanela]);
			d3.select("#intro32 #grid").style("stroke", frente);
			d3.select("#intro32 #grid").style("stroke-width", "0.2px");
			d3.select("#intro32 #grid").style("fill", "transparent");
			d3.select("#intro32 #energia").style("stroke", frente);
			d3.select("#intro32 #energia").style("fill", "transparent");
			d3.select("#intro32 #lado").style("fill", colorArray[orderLado]);
			d3.select("#intro32 #chao").style("fill", chao);
			d3.select("#intro32 #troncosPO").style("fill", arvore);
			d3.select("#intro32 #plantasPO").style("fill", janela);
			d3.select("#intro32 #plantasV").style("fill", janela);
			d3.select("#intro32 #aguafrente").style("fill", colorArray[orderCima]);
			d3.select("#intro32 #aguafrente2").style("fill", colorArray[orderCima]);
			d3.select("#intro32 #agualado").style("fill", colorArray[orderLado]);
			d3.select("#intro32 #caixadentro").style(
				"fill",
				colorArray[orderCJanela]
			);
			d3.select("#intro32 #caixalado").style("fill", colorArray[orderCLado]);
			d3.select("#intro32 #caixafrente").style(
				"fill",
				colorArray[orderCFrente1]
			);
			d3.select("#intro32 #caixafrente2").style(
				"fill",
				colorArray[orderCFrente1]
			);
			d3.select("#intro32 #painel").style("fill", cFrente1);
			d3.select("#intro32 #painel2").style("fill", arvore);

			if (props.season === "Verão") {
				d3.select("#intro32 #plantasV").style("opacity", "1");
				d3.select("#intro32 #plantasPO").style("opacity", "0");
				d3.select("#intro32 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro32 #plantasV").style("opacity", "0");
				d3.select("#intro32 #plantasPO").style("opacity", "1");
				d3.select("#intro32 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro32 #plantasV").style("opacity", "0");
				d3.select("#intro32 #plantasPO").style("opacity", "0");
				d3.select("#intro32 #troncosPO").style("opacity", "0");
			}
		});
		d3.xml(svg33).then((data) => {
			d3.select("#intro33 #chao").style("fill", chao);

			if (props.season === "Verão") {
				d3.select("#intro33 #plantasV").style("opacity", "1");
				d3.select("#intro33 #plantasPO").style("opacity", "0");
				d3.select("#intro33 #troncosPO").style("opacity", "0");
			} else if (props.season === "Outono" || props.season === "Primavera") {
				d3.select("#intro33 #plantasV").style("opacity", "0");
				d3.select("#intro33 #plantasPO").style("opacity", "1");
				d3.select("#intro33 #troncosPO").style("opacity", "1");
			} else {
				d3.select("#intro33 #plantasV").style("opacity", "0");
				d3.select("#intro33 #plantasPO").style("opacity", "0");
				d3.select("#intro33 #troncosPO").style("opacity", "0");
			}
		});
	}
	return (
		<div id="skrollr-body">
			<div
				className="container introducao justify-content-start"
				id="skrollr-body"
				style={{
					margin: 0,
					padding: 0,
				}}
			>
				<div className="ecoeficiencia" id="ecoeficiencia">
					{/*	<section className="childIntro">
					<h1 className="py-5 px-5 justify-content-start">Ecoeficiência</h1>
				</section>
*/}
					<section className="childIntro d-flex flex-row-reverse mx-4">
						<div
							className="gridI d-flex justify-content-end"
							data-0-top="opacity: 1; position:fixed;"
							data-3600p="opacity: 1; position:fixed;"
							data-3601p="opacity: 0; position:fixed;"
							data-anchor-target="#ecoeficiencia"
						></div>
					</section>

					<section className="childIntro">
						<div className="start"></div>

						<div
							className="col-12 a img"
							data--290p-top="opacity: 1; position:fixed; bottom:0;"
							data--310p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data--150p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--300p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit" id="scroll">
								<b style={{ color: janela }}>1. Ecoeficiência</b>
								<br></br> Actualmente, a compra um veículo eléctrico,
								ecoeficiente, coloca-nos dois problemas: um é{" "}
								<b style={{ color: janela }}>económico</b>, pois sabemos que
								será mais caro do que um automóvel com motor convencional; outro
								é <b style={{ color: janela }}>funcional</b>, pois terá também
								menos autonomia. Apesar da poupança que o carro eléctrico
								significa, em combustíveis e em emissões poluentes para a
								atmosfera, estes entraves não são superáveis para uma boa parte
								dos consumidores.
							</div>
						</p>
					</section>

					<section className="childIntro" id="nextIntro">
						<div
							className="col-12 b img"
							data-bottom-top="opacity: 0;"
							data--250p-top="opacity: 0; position:fixed; bottom:0;"
							data--300p-top="opacity: 1; position:fixed; bottom:0;"
							data--490p-top="opacity: 1; position:fixed; bottom:0;"
							data--510p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--500p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit">
								{" "}
								Num edifício, pelo contrário, a ecoeficiência não nos coloca
								estes dilemas. Pode ser{" "}
								<b style={{ color: janela }}>acessível a todos</b>, sem
								sacrificar a funcionalidade. Assim, não há razão para que não
								seja um dado à priori em qualquer projecto. Em construção nova
								ou em reabilitação. Vamos explicar como, por partes, e em
								português. Para todos.
							</div>
						</p>
					</section>
				</div>

				<div className="arquitetura ecoeficiente" id="arquiteturaecoeficiente">
					<section className="childIntro">
						<div
							className="col-12 c img"
							data-bottom-top="opacity: 0;"
							data--450p-top="opacity: 0; position:fixed; bottom:0;"
							data--500p-top="opacity: 1; position:fixed; bottom:0;"
							data--690p-top="opacity: 1; position:fixed; bottom:0;"
							data--710p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--700p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								<b style={{ color: janela }}>
									2. O que é a arquitectura ecoeficiente?
								</b>
								<br></br> A arquitectura ecoeficiente é uma ferramenta
								fundamental no
								<b style={{ color: janela }}>
									&nbsp;combate às alterações climáticas, à pobreza energética e
									às desigualdades
								</b>
								. Por si só, promove modos de vida mais saudáveis e mais
								sustentáveis, gera poupanças e generaliza o conforto e a
								qualidade do ar em habitações, em locais de trabalho, de estudo
								ou de lazer.
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 d img"
							data-bottom-top="opacity: 0;"
							data--650p-top="opacity: 0; position:fixed; bottom:0;"
							data--700p-top="opacity: 1; position:fixed; bottom:0;"
							data--890p-top="opacity: 1; position:fixed; bottom:0;"
							data--910p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--900p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Apesar dos ganhos significativos que introduz, a ecoeficiência
								não tem de ser mais cara do que a construção comum. Para isso,
								em cada projecto consideramos um{" "}
								<b style={{ color: janela }}>
									conjunto largo de condicionantes interdependentes
								</b>
								. <br></br>
								<br></br>
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 e img"
							data-bottom-top="opacity: 0;"
							data--850p-top="opacity: 0; position:fixed; bottom:0;"
							data--900p-top="opacity: 1; position:fixed; bottom:0;"
							data--1090p-top="opacity: 1; position:fixed; bottom:0;"
							data--1110p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--1000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1100p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Desenhamos edifícios que integram e respeitam o património
								histórico e paisagístico do lugar, procurando a melhor{" "}
								<b style={{ color: janela }}>exposição solar </b>e o{" "}
								<b style={{ color: janela }}>menor impacto na paisagem.</b>
								<br></br>
								<br></br>
								<br></br>
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 f img"
							data-bottom-top="opacity: 0;"
							data--1050p-top="opacity: 0; position:fixed; bottom:0;"
							data--1100p-top="opacity: 1; position:fixed; bottom:0;"
							data--1290p-top="opacity: 1; position:fixed; bottom:0;"
							data--1310p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--1150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--1200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1300p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								Optimizamos o isolamento térmico e reforçamos a estanqueidade do
								edifício em função de
								<b style={{ color: janela }}>
									{" "}
									dados climáticos reais específicos de cada local
								</b>
								.<br></br>
								<br></br>
								<br></br>
								<br></br>
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 g img"
							data-bottom-top="opacity: 0;"
							data--1250p-top="opacity: 0; position:fixed; bottom:0;"
							data--1300p-top="opacity: 1; position:fixed; bottom:0;"
							data--1490p-top="opacity: 1; position:fixed; bottom:0;"
							data--1510p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--1350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--1400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1500p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								Procuramos o{" "}
								<b style={{ color: janela }}>
									consumo de electricidade ao mínimo
								</b>{" "}
								e, simultaneamente, prevemos a{" "}
								<b style={{ color: janela }}>
									produção e armazenamento de energia renovável{" "}
								</b>
								para autoconsumo.
								<br></br>
								<br></br> <br></br>
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 h img"
							data-bottom-top="opacity: 0;"
							data--1450p-top="opacity: 0; position:fixed; bottom:0;"
							data--1500p-top="opacity: 1; position:fixed; bottom:0;"
							data--1690p-top="opacity: 1; position:fixed; bottom:0;"
							data--1710p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--1550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--1600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1700p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Damos preferência a componentes eficientes, a{" "}
								<b style={{ color: janela }}>
									materiais locais, naturais, renováveis ou reciclados
								</b>
								. <br></br> <br></br>
								<br></br> <br></br>
							</div>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 i img "
							data-bottom-top="opacity: 0;"
							data--1650p-top="opacity: 0; position:fixed; bottom:0;"
							data--1700p-top="opacity: 1; position:fixed; bottom:0;"
							data--1890p-top="opacity: 1; position:fixed; bottom:0;"
							data--1910p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--1750p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--1800p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1850p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--1900p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Pensamos o ciclo da água no edifício, desde a{" "}
								<b style={{ color: janela }}>recolha</b> e
								<b style={{ color: janela }}> armazenamento da água da chuva</b>
								, à <b style={{ color: janela }}>reciclagem</b> de água usada.{" "}
							</div>
							<br></br>
							<br></br> <br></br>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 k img"
							data-bottom-top="opacity: 0;"
							data--1850p-top="opacity: 0; position:fixed; bottom:0;"
							data--1900p-top="opacity: 1; position:fixed; bottom:0;"
							data--2090p-top="opacity: 1; position:fixed; bottom:0;"
							data--2110p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--1950p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--2000p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2050p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2100p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Prevemos o{" "}
								<b style={{ color: janela }}>
									carregamento de carros e bicicletas eléctricas
								</b>{" "}
								ou outros meios de nos deslocarmos sem emissões.
							</div>
							<br></br> <br></br>
							<br></br>
							<br></br>
						</p>
					</section>
					<section className="childIntro">
						<div
							className="col-12 j img"
							data-bottom-top="opacity: 0;"
							data--2050p-top="opacity: 0; position:fixed; bottom:0;"
							data--2100p-top="opacity: 1; position:fixed; bottom:0;"
							data--2290p-top="opacity: 1; position:fixed; bottom:0;"
							data--2310p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--2150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--2200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2300p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Facilitamos a{" "}
								<b style={{ color: janela }}>
									separação de resíduos e a compostagem
								</b>
								. Reforçamos a{" "}
								<b style={{ color: janela }}>renaturalização dos edifícios</b>,
								com coberturas ou fachadas verdes, com hortas urbanas que servem
								a produção local de alimentos.
							</div>{" "}
							<br></br>
						</p>{" "}
					</section>
				</div>
				<div className="nzeb">
					<section className="childIntro">
						<h1
							className="py-5 d justify-content-start"
							data-aos="fade-up"
						></h1>
					</section>
					<section className="childIntro">
						<div
							className="col-12 l img"
							data-bottom-top="opacity: 0;"
							data--2250p-top="opacity: 0; position:fixed; bottom:0;"
							data--2300p-top="opacity: 1; position:fixed; bottom:0;"
							data--3090p-top="opacity: 1; position:fixed; bottom:0;"
							data--3110p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--2350p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--2400p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2450p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2500p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								<b style={{ color: janela }}>Passive House, nZEB e nZEB+.</b>
								<br></br>A questão energética é central na ecoeficiência. Antes
								de produzir electricidade, importa reduzir ao mínimo o seu
								consumo. E por isso recorremos a um padrão construtivo
								internacional muito rigoroso:{" "}
								<b style={{ color: janela }}>Passive House</b>.
							</div>
						</p>
					</section>
					<section className="childIntro">
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--2550p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--2600p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2650p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2700p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								Trata-se de um{" "}
								<b style={{ color: janela }}>
									sistema voluntário de certificação
								</b>
								. Define requisitos transparentes e objectivos, que são
								certificados por uma entidade independente no final do processo
								de construção. A emissão desse certificado{" "}
								<b style={{ color: janela }}>confirma a qualidade</b> do
								trabalho dos projectistas e dos construtores.
							</div>
						</p>
					</section>
					<section className="childIntro">
						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--2850p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--2900p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--2950p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--3000p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								{" "}
								Assim, por um lado, trabalhamos para atingir o{" "}
								<b style={{ color: janela }}>
									balanço energético quase nulo (<em>nZEB</em>)
								</b>
								, recorrendo fundamentalmente à Passive House e às suas
								ferramentas.
								<br></br>
								<br></br> <br></br>
							</div>
						</p>
					</section>

					<section className="childIntro">
						<div
							className="col-12 m img"
							data-bottom-top="opacity: 0;"
							data--3050p-top="opacity: 0; position:fixed; bottom:0;"
							data--3100p-top="opacity: 1; position:fixed; bottom:0;"
							data--3290p-top="opacity: 1; position:fixed; bottom:0;"
							data--3310p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>

						<p
							className="text-left col-6"
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--3150p-top="opacity:0;top:100%; left:25%;; position: fixed;"
							data--3200p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--3250p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--3300p-top="opacity:0;top:0%; left:25%; position: fixed;"
							data-anchor-target="#ecoeficiencia"
						>
							{" "}
							<div className="text_edit ">
								Por outro, acreditamos que a ecoeficiência passa por desenhar um
								<b style={{ color: janela }}> nZEB+</b>, em que cada
								<b style={{ color: janela }}> +</b> adicional trata uma das
								preocupações já enunciadas:{" "}
								<b style={{ color: janela }}>
									{" "}
									eficiência hídrica, materiais e sistemas de menor pegada
									ecológica, mobilidades suaves, tratamento de resíduos, hortas
									e renaturalização do espaço urbano.
								</b>
							</div>
						</p>
					</section>
				</div>
				<div className="opcoes">
					<section className="childIntro" id="opcoesIntro">
						<div
							className="col-12 zz img"
							data-bottom-top="opacity: 0;"
							data--3250p-top="opacity: 0; position:fixed; bottom:0;"
							data--3300p-top="opacity: 1; position:fixed; bottom:0;"
							data--3600p-top="opacity: 1; position:fixed; bottom:0;"
							data--3610p-top="opacity:0;  position:fixed; bottom:0;"
							data-anchor-target="#ecoeficiencia"
						></div>
						<div
							className="text_edit options"
							style={{
								textAlign: "center",
								fontFamily: "Space Mono, monospace",
							}}
							data-bottom-top="opacity:0;top:100%; left:25%; position: relative;"
							data--3250p-top="opacity:0;top:100%; left:25%; position: fixed;"
							data--3300p-top="opacity:1;top:25%;  left:25%; position: fixed;"
							data--3500p-top="opacity:1;top:25%; left:25%; position: fixed; visibility: visible"
							data--3550p-top="opacity:0;top:0%; left:25%; position: fixed; visibility: hidden;"
							data-anchor-target="#ecoeficiencia"
						>
							Apesar da objectividade do que propõe, <br></br>e dos benefícios
							evidentes, a ecoeficiência está envolta<br></br> em cepticismo e
							preconceitos.<b style={{ color: janela }}> Por onde começar?</b>{" "}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
	//------------------------------------------------------------call svgs + fill with color
};

export default Inicio;
