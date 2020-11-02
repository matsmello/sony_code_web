import React from "react";
import { Header } from "./components";
function App() {
  return (
    <>
      <Header />
      <div className="w-full">
        <section className="flex">
          <div className="flex flex-col justify-evenly flex-1 text-center">
            <h1 className="text-white text-8xl">W O W</h1>
            <h1 className="text-white text-6xl"> R A N K</h1>
            <p className="text-2xl px-20 py-5" style={{ color: "#FF9002" }}>
              WOW Rank é um aplicativo que reúne e pontua o movimento do usuário
              nas plataformas de música streaming. Utilizando estratégias de
              gamification e machine learning, vamos despertar interesse,
              aumentar o engajamento dos usuários, parceiros, marcas e obter
              dados importantes para a Sony, potencializando a monetização do
              setor como um todo. Após um cadastro simples, o usuário sincroniza
              o WOW RANK com sua plataforma de streaming e automaticamente ganha
              pontos por se cadastrar. A partir daí, ele terá acesso à sua
              pontuação e ao ranking geral, podendo ganhar prêmios.
            </p>
            <div className="flex justify-center">
              <img
                className="h-auto w-40 object-contain zoom-in"
                src={require("./images/apple.png").default}
              />
              <img
                className="h-auto w-40 object-contain zoom-in"
                src={require("./images/appstore.png").default}
              />
            </div>
          </div>
          <div className="flex-1 justify-end flex"></div>
        </section>
        <div
          className="w-full"
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            zIndex: -1,
            width: "100%",
          }}
        >
          <img
            className="h-auto w-auto object-contain"
            src={require("./images/bg.png").default}
          />
        </div>
        <section className="flex" style={{ marginTop: 40 }}>
          <img
            className="h-auto w-auto object-contain"
            src={require("./images/choose.png").default}
            style={{ zIndex: -1, position: "absolute" }}
          />

          <div
            className="flex flex-col justify-evenly flex-1 text-center"
            style={{ marginTop: 200 }}
          >
            <div style={{ marginLeft: 100 }}>
              <h1 className="text-white text-6xl text-left">Como</h1>
              <h1 className="text-white text-6xl text-left">Funciona ?</h1>
            </div>
            <p
              className="text-2xl px-20 py-5"
              style={{ color: "#FF9002", padding: "0px 170px", marginTop: 100 }}
            >
              Os pontos serão validados fora do aplicativo, através de
              parceiros: Cupons de desconto, brindes de marcas apoiadoras,
              ingressos de shows, chegando na maior premiação,
            </p>
          </div>
          <div className="flex-1 justify-end flex">
            <p
              className="text-2xl px-20 py-5"
              style={{ color: "#FF9002", marginTop: 400, padding: "0px 170px" }}
            >
              Meet & Greet com o seu ídolo! Podendo gerar uma grande ação de
              marketing pós-meet, incentivando ainda mais outros usuários a
              pontuar no WOW RANK.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
export default App;
