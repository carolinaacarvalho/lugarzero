import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import svgGridS from "../svgs/gridS.svg";
import * as d3 from "d3";

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
var janela; //variables natural
document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".gridS") != null)
		d3.xml(svgGridS).then((data) => {
			d3.select(".gridS").node().append(data.documentElement);

			d3.select("#backgroundS #ceu").style("fill", "white");

			d3.select("#backgroundS #gridS").style("opacity", "0.6");
			d3.select("#backgroundS #gridS").style("fill", "transparent");
			d3.select("#backgroundS #gridS").style("stroke", frente);
			d3.select("#backgroundS #gridS").style("width", "100px");
			d3.select("#backgroundS #gridS").style("stroke-width", "0.1px");
		});
});

const Sobre = (props) => {
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
	d3.xml(svgGridS).then(() => {
		if (props.sky === "Noite" || props.sky === "Base") {
			d3.select("#backgroundS #ceu").style("fill", "black");
		} else {
			d3.select("#backgroundS #ceu").style("fill", "white");
		}
		d3.select("#backgroundS #gridS").style("opacity", "0.6");
		d3.select("#backgroundS #gridS").style("fill", "transparent");
		d3.select("#backgroundS #gridS").style("stroke", frente);
		d3.select("#backgroundS #gridS").style("width", "100px");
		d3.select("#backgroundS #gridS").style("stroke-width", "0.1px");
	});
	if (document.querySelectorAll(".sobre p") != null)
		var divs = document.querySelectorAll(".sobre p");
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
			<div className="container sobre">
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
						className="gridS d-flex justify-content-end"
						data-0-top="opacity: 1; position:fixed; zIndex:-1; left:0%; top:0%"
						data-1859p="opacity: 1; position:fixed; zIndex:-1;"
					></div>
				</div>
				<section className="childSobre">
					<p
						className="text-left col-5"
						data-bottom-top="opacity: 1;"
						data--10p-top="opacity: 1;"
						data--20p-top="opacity: 0; "
						data-anchor-target=".sobre"
					>
						{" "}
						<div id="scroll">
							Na Lugar-Zero dedicamo-nos à promoção, gestão e consultoria em
							arquitectura e construção ecoeficiente. Fundada em 2018, é uma
							empresa sedeada em Coimbra, mas com raízes no Parque Natural da
							Serra da Estrela — o nosso lugar-zero.{" "}
						</div>
						<br></br>
						<div id="scroll">
							Queremos levar a arquitectura económica e ambientalmente
							sustentável a todos, construindo edifícios passivos acessíveis,
							onde o balanço energético se aproxima de zero (nzeb – nearly-zero
							energy buildings), as emissões poluentes são nulas e os recursos
							naturais utilizados de forma responsável.{" "}
						</div>
						<br></br>
						<div id="scroll">
							Com vários anos de experiência e formação certificada em Passive
							House, ajudamos famílias, promotores públicos e privados, e
							empresas a alcançar elevados padrões de ecoeficiência nos seus
							edifícios.
						</div>
					</p>
				</section>
			</div>
		</div>
	);
};

export default Sobre;
