import id from "./funções/id.js";
import funcionarios from "./arrays/arrayFuncionarios.js";
import { format, parseJSON } from "date-fns";
import { addDays } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import parse from "date-fns/parse";
import { differenceInDays } from "date-fns";
import { intervalToDuration } from "date-fns";

const cadastroFunc = (
  nome,
  dataNascimento,
  CPF,
  telefone,
  cidade,
  CEP,
  logradouro,
  bairro,
  numero,
  matricula,
  localTrabalho,
  dataAdmissao
) => {
  if (typeof nome !== "string") Error("error");
  if (typeof dataNascimento !== "string") Error("error");
  if (typeof CPF !== "number") Error("error");
  if (typeof telefone !== "string") Error("error");
  if (typeof cidade !== "string") Error("error");
  if (typeof CEP !== "number") Error("error");
  if (typeof logradouro !== "string") Error("error");
  if (typeof bairro !== "string") Error("error");
  if (typeof numero !== "number") Error("error");
  if (typeof matricula !== "string") Error("error");
  if (typeof localTrabalho !== "string") Error("error");
  if (typeof dataAdmissao !== "string") Error("error");
  funcionarios.push({
    id: id(),
    nome,
    dataNascimento,
    CPF,
    telefone,
    cidade,
    CEP,
    logradouro,
    bairro,
    numero,
    matricula,
    localTrabalho,
    dataAdmissao,
  });
};

const alterarCadastroFunc = (id, nome, matricula, dataAdmissao) => {
  if(typeof id !== "number" || typeof id !== '') Error("error")
  if (typeof nome !== "string") Error("error");
  if (typeof dataNascimento !== "string") Error("error");
  if (typeof CPF !== "number") Error("error");
  if (typeof telefone !== "string") Error("error");
  if (typeof cidade !== "string") Error("error");
  if (typeof CEP !== "number") Error("error");
  if (typeof logradouro !== "string") Error("error");
  if (typeof bairro !== "string") Error("error");
  if (typeof numero !== "number") Error("error");
  if (typeof matricula !== "string") Error("error");
  if (typeof localTrabalho !== "string") Error("error");
  if (typeof dataAdmissao !== "string") Error("error");
  const encontrarFunc = funcionarios.find(
    (funcionario) => funcionario.id === id
  );
  if (nome) encontrarFunc.nome = nome;
  if (matricula) encontrarFunc.matricula = matricula;
  if (dataAdmissao) encontrarFunc.dataAdmissao = dataAdmissao;
};

const deletar = (id) => {
  if(typeof id !== "number" || typeof id !== '') Error("error")
  if(typeof id !== "number") Error("error")
  const filtrando = funcionarios.filter((funcionario) => funcionario.id !== id);
  console.log(filtrando);
};

const dataLicenca = (id, dataUsuario, dias) => {
  if(typeof id !== "number" || typeof id !== '') Error("error")
  if(typeof dataUsuario !== "string") Error("error")
  if(typeof dias !== "number") Error("error")
  const encontrarFuncionario = funcionarios.find(
    (funcionario) => funcionario.id === id
  );
  if (encontrarFuncionario) {
    let dataEntrada = parse(dataUsuario, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    const calculo = addDays(dataEntrada, dias);
    const dataFormatada = format(new Date(calculo), "dd/MM/yyyy");
    console.log(
      `${encontrarFuncionario.nome}, sua Licença de ${dias} dia(s), termina em ${dataFormatada}`
    );
  } else {
    let dataEntrada = parse(dataUsuario, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    const calculo = addDays(dataEntrada, dias);
    const dataFormatada = format(new Date(calculo), "dd/MM/yyyy");
    console.log(`Sua Liceça termina em ${dataFormatada}`);
  }
};

const distanciaEntreDatas = (id, dataInicial, dataFinal) => {
  if(typeof id !== "number" || typeof id !== '') Error("error")
  if(typeof id !== "number") Error("error")
  if(typeof dataInicial !== "string") Error("error")
  if(typeof dataFinal !== "string") Error("error")
  const encontrarFuncionario = funcionarios.find(
    (funcionario) => funcionario.id === id
  );
  if (encontrarFuncionario) {
    let dataEntrada = parse(dataInicial, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    let dataSaida = parse(dataFinal, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    const diasEntreDatas = differenceInDays(dataSaida, dataEntrada);
    console.log(
      `${encontrarFuncionario.nome}, entre a data ${dataInicial} e ${dataFinal} o você tem ${diasEntreDatas} dias.`
    );
  } else {
    let dataEntrada = parse(dataInicial, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    let dataSaida = parse(dataFinal, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    const diasEntreDatas = differenceInDays(dataSaida, dataEntrada);
    console.log(
      `Entre a data ${dataInicial} e ${dataFinal} o servidor tem ${diasEntreDatas} dias.`
    );
  }
};

const intervaloDataAdmissao = (id, dataAdmissao, dataSaida) => {
  if(typeof id !== "number" || typeof id !== '') Error("error")
  if(typeof dataAdmissao !== "string") Error("error")
  if(typeof dataSaida !== "string") Error("error")
  const encontrarFuncionario = funcionarios.find(
    (funcionario) => funcionario.id === id
  );
  if (encontrarFuncionario) {
    let dataEntrada = parse(dataAdmissao, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    if (dataSaida) {
      let dataFinal = parse(dataSaida, "dd/MM/yyyy", new Date(), {
        locale: ptBR,
      });
      const intervalo = intervalToDuration({
        start: new Date(dataEntrada),
        end: new Date(dataFinal),
      });
      if (intervalo.days === undefined) intervalo.days = 0;
      if (intervalo.months === undefined) intervalo.months = 0;
      if (intervalo.years === undefined) intervalo.years = 0;
      console.log(
        `${encontrarFuncionario.nome}, seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`
      );
    } else {
      const intervalo = intervalToDuration({
        start: new Date(dataEntrada),
        end: new Date(),
      });
      if (intervalo.days === undefined) intervalo.days = 0;
      if (intervalo.months === undefined) intervalo.months = 0;
      if (intervalo.years === undefined) intervalo.years = 0;
      console.log(
        `Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`
      );
    }
  } else {
    let dataEntrada = parse(dataAdmissao, "dd/MM/yyyy", new Date(), {
      locale: ptBR,
    });
    if (dataSaida) {
      let dataFinal = parse(dataSaida, "dd/MM/yyyy", new Date(), {
        locale: ptBR,
      });
      const intervalo = intervalToDuration({
        start: new Date(dataEntrada),
        end: new Date(dataFinal),
      });
      if (intervalo.days === undefined) intervalo.days = 0;
      if (intervalo.months === undefined) intervalo.months = 0;
      if (intervalo.years === undefined) intervalo.years = 0;
      console.log(
        `Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`
      );
    } else {
      const intervalo = intervalToDuration({
        start: new Date(dataEntrada),
        end: new Date(),
      });
      if (intervalo.days === undefined) intervalo.days = 0;
      if (intervalo.months === undefined) intervalo.months = 0;
      if (intervalo.years === undefined) intervalo.years = 0;
      console.log(
        `Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`
      );
    }
  }
};

cadastroFunc(
  "Leandro dos Santos Cunha",
  "16/10/1984",
  10945157797,
  "22991031962",
  "Sumidouro-RJ",
  28637000,
  "Rua Vigário de Alexandre",
  51,
  "21.06.5625",
  "E. E. M. Dona Mariana",
  "01/09/2022"
);

dataLicenca(1, "29/10/2024", 180);
console.log(
  "____________________________________________________________________________________________________________________________"
);
distanciaEntreDatas(1, "27/10/2024", "03/03/2025");
console.log(
  "____________________________________________________________________________________________________________________________"
);
intervaloDataAdmissao(1, "10/10/2024", "11/12/2025");
