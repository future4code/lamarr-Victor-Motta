import React, {useState} from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export function SeletorPaginas (){
    const [trocaPagina, setTrocaPagina]=useState(Etapa1);
    switch(trocaPagina){
        case 1:
            return <Etapa1/>
            break;
        case 2:
            return <Etapa2/>
            break;
        case 3:
            return <Etapa3/>
            break;
        default:
            return <Final/>
            break;
    }
}