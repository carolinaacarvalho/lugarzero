import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import svgGridP from "../svgs/gridP.svg";
import * as d3 from "d3";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

AOS.init({ delay: 120 });
/*
document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".gridI") != null) {
		d3.xml(svgGridI).then((data) => {
			d3.select(".gridI").node().append(data.documentElement);
		});
	}
});*/
var frente; //variables natural
var janela;
document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".gridP") != null)
		d3.xml(svgGridP).then((data) => {
			d3.select(".gridP").node().append(data.documentElement);

			d3.select("#backgroundP #ceu").style("fill", "white");

			d3.select("#backgroundP #gridP").style("opacity", "0.6");
			d3.select("#backgroundP #gridP").style("fill", "transparent");
			d3.select("#backgroundP #gridP").style("stroke", frente);
			d3.select("#backgroundP #gridP").style("width", "100px");
			d3.select("#backgroundP #gridP").style("stroke-width", "0.1px");
		});
});

const Piloto = (props) => {
	if (props.season === "Inverno") {
		frente = "#10EBE7";
		janela = "#1584FB";
	} else if (props.season === "Primavera") {
		frente = "#7CFC9A";
		janela = "#00BD2C";
	} else if (props.season === "Verão") {
		frente = "#DDFF4D";
		janela = "#CCB600";
	} else if (props.season === "Outono") {
		frente = "#FFC18F";
		janela = "#FB6115";
	}
	d3.xml(svgGridP).then(() => {
		if (props.sky === "Noite" || props.sky === "Base") {
			d3.select("#backgroundP #ceu").style("fill", "black");
		} else {
			d3.select("#backgroundP #ceu").style("fill", "white");
		}
		d3.select("#backgroundP #gridP").style("opacity", "0.6");
		d3.select("#backgroundP #gridP").style("fill", "transparent");
		d3.select("#backgroundP #gridP").style("stroke", frente);
		d3.select("#backgroundP #gridP").style("width", "100px");
		d3.select("#backgroundP #gridP").style("stroke-width", "0.1px");
	});

	if (document.querySelectorAll(".piloto p") != null)
		var divs = document.querySelectorAll(".piloto p");
	if (props.sky === "Noite" || props.sky === "Base")
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.color = "white";
		}
	else
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.color = "black";
		}

	return (
		//------------------------------------------------------------TEXTO A ALTERAR
		<div id="skrollr-body">
			<div className="container piloto">
				{/** 	<section
						className="childSobre d-flex flex-row-reverse mx-5"
						style={{ zIndex: -1 }}
					>
						<div
							className="gridI d-flex justify-content-end"
							data-0-top="opacity: 1; position:fixed;"
							data-1859p="opacity: 1; position:fixed;"
						></div>
					</section>{" "}*/}
				<div className=" d-flex flex-row-reverse mx-5">
					<div
						className="gridP d-flex justify-content-end"
						data-0-top="opacity: 1; position:fixed; zIndex:-1; left:0%; top:0%"
						data-1859p="opacity: 1; position:fixed; zIndex:-1;"
					></div>
				</div>
				<section className="childPiloto" style={{ zIndex: -1 }}>
					<div className="row text_left">
						{" "}
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--10p-top="opacity: 1;"
							data--20p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							No âmbito da iniciativa SENZEB, juntámo-nos ao Departamento de
							Arquitectura da Universidade de Coimbra e à Archigraphics—Studio
							para construir uma casa-piloto ecoeficiente. Este edifício, com
							cerca de 140 m2, permite ensaiar, à escala real, num contexto
							desafiante o desenho bioclimático optimizado, aliado a opções
							técnicas capazes de assegurar elevados níveis de conforto, baixos
							consumos energéticos e custos de construção acessíveis à
							generalidade da população portuguesa.
						</p>
					</div>{" "}
					<br></br>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--30p-top="opacity: 1;"
							data--40p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							SENZEB é uma iniciativa de investigação, desenvolvimento e
							construção experimental de edifícios com balanço energético quase
							nulo (nzeb), com epicentro em Gouveia, na Serra da Estrela.
							Procura levar a investigação em arquitectura do campo académico
							para a prática construtiva.
						</p>
						<br></br>
					</div>
					<br></br>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--80p-top="opacity: 1;"
							data--90p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							O projecto desta habitação experimental insere-se numa pequena
							quinta serrana, nas imediações da localidade de Aldeias, onde a
							paisagem e a topografia condicionam e enriquecem o desenho do
							edifício. A presença próxima e majestosa das montanhas, a sudeste,
							contrasta com a perspectiva sobre o horizonte vasto do Mondego, a
							poente. Entre alguns carvalhos adultos, amadurecidos pelo frio do
							Inverno e pelo tórrido calor estival, um apoio agrícola sem
							qualquer vaidade sugere já a implantação para a casa. No ponto
							onde os contrastes paisagísticos confluem, a arquitectura, ali,
							apenas os enquadrará discretamente.
						</p>
					</div>
					<br></br>
					<div className="row">
						<img
							data-bottom-top="opacity: 1; left:-42%;"
							data--120p-top="opacity: 1;"
							data--130p-top="opacity: 0;"
							data-anchor-target=".piloto"
							className="text-left col-7"
							src={img1}
							alt={"logo"}
						/>
					</div>
					<br></br>
					<div className="row">
						<img
							data-bottom-top="opacity: 1; left:-42%;"
							data--200p-top="opacity: 1;"
							data--210p-top="opacity: 0;"
							data-anchor-target=".piloto"
							className="text-left col-7"
							src={img3}
							alt={"logo"}
						/>
					</div>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--280p-top="opacity: 1;"
							data--290p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							{" "}
							Com uma planta rectangular, de apenas um piso, o edifício funde-se
							com a topografia na face norte, libertando-se desta nas restantes
							três. Entre as árvores, pousa e encosta-se ao terreno íngreme,
							parcialmente modelado por muros graníticos, e abriga-se sob uma
							cobertura ajardinada que estende e remata o percurso de chegada
							num platô sobre o vale. Por baixo deste plano projectado,
							resguardam-se as fachadas do sol intenso do Verão ou deixam-se por
							ele aquecer nos meses frios. A nascente, uma janela única rasgada
							encaixilha a montanha, por oposição às janelas verticais que abrem
							os quartos na direcção oposta. Ligando ambas as fachadas, o topo
							sul, muito transparente, permite à sala sintetizar, numa vista
							panorâmica, a riqueza do lugar.
						</p>
					</div>{" "}
					<br></br>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--340p-top="opacity: 1;"
							data--350p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							{" "}
							Entre os planos de vidro, a cortiça portuguesa veste as paredes
							com o tom castanho da terra agrícola, esperando ser contaminada
							com os mesmos líquenes que povoam os troncos das árvores. Nesta
							habitação experimental, procurámos as texturas dos materiais que
							melhor se conjugam com os pigmentos naturais da envolvente.
							Procurámos, com um orçamento limitado, responder às necessidades
							funcionais e imateriais de uma família média que imaginámos uma e
							outra vez. Não há divisões escusadamente generosas, nem
							demasiadamente reduzidas. As suas proporções foram estudadas para,
							a partir de um princípio compositivo regular, proporcionarem
							conforto aos seus utilizadores.
						</p>
					</div>{" "}
					<br></br>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--360p-top="opacity: 1;"
							data--400p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							Pelo interior, o chão alterna entre o granito local, nas áreas
							comuns, e a madeira de pinho, nos quartos, cujo amarelo-claro se
							estende às carpintarias de portas e armários. Os tectos,
							maioritariamente no tom cinza do betão aparente que suporta a
							cobertura-jardim, absorvem uma pequena parte da luz que as paredes
							brancas fazem reflectir.
						</p>
					</div>
					<br></br>
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--440p-top="opacity: 1;"
							data--450p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							Nesta habitação experimental, procurámos as texturas dos materiais
							que melhor se conjugam com os pigmentos naturais da envolvente.
							Procurámos, com um orçamento limitado, responder às necessidades
							funcionais e imateriais de uma família média que imaginámos uma e
							outra vez. Não há divisões escusadamente generosas, nem
							demasiadamente reduzidas. As suas proporções foram estudadas para,
							a partir de um princípio compositivo regular, proporcionarem
							conforto aos seus utilizadores.
						</p>
					</div>
					<br></br>{" "}
					<div className="row">
						<p
							id="scroll"
							className="col-5"
							data-bottom-top="opacity: 1;"
							data--460p-top="opacity: 1;"
							data--470p-top="opacity: 0; "
							data-anchor-target=".piloto"
						>
							Com esta habitação, no nosso lugar-zero, pretendemos demonstrar a
							viabilidade da construção sustentável, ecoeficiente e económica,
							enquanto contributo para minorar as alterações climáticas e a
							pobreza energética que afligem tantas famílias.
						</p>
					</div>
					<div className="row">
						<img
							data-bottom-top="opacity: 1; left:-42%;"
							data--520p-top="opacity: 1;"
							data-anchor-target=".piloto"
							className="text-left col-7"
							src={img2}
							alt={"logo"}
						/>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Piloto;
