const totalConvert = [
    ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['u', 6], ['o', 7], ['f', 8],
    ['i', 1], ['k', 2], ['g', 3], ['m', 4], ['h', 5], ['v', 6], ['z', 7], ['p', 8],
    ['q', 1], ['r', 2], ['l', 3], ['t', 4], ['n', 5], ['w', 6], ['^', 7], ['x', 6], ['s', 3],
    ['j', 1], ["'", 2], ["~", 3], ["ç", 6], [".", 2], ["y", 1]
];

const consoantes = [
    ['b', 2], ['c', 3], ['d', 4], ['f', 8],
    ['k', 2], ['g', 3], ['m', 4], ['h', 5], ['v', 6], ['z', 7], ['p', 8],
    ['q', 1], ['r', 2], ['l', 3], ['t', 4], ['n', 5], ['w', 6], ['^', 7], ['x', 6], ['s', 3],
    ['j', 1], ["'", 2], ["~", 3], ["ç", 6], [".", 2]
];


const vogaisConvert = [
    ['a', 1], ['e', 5], ['u', 6],['o', 7],['i', 1],["y", 1]
];
function reduzNumero (num) {
    while (num / 10 >= 1) {
        let num1 = parseInt(num/10);
        let num2 = Number(num%10);
        num = num1 + num2;
    }
    return num;
}

function somaDigitos(num) {
    const resultado = num.split('').map(Number);
    let soma = resultado.reduce((total, digito) => total + digito, 0);
    soma = reduzNumero(soma);
    return soma;
}

function somaVogais(str) {
    let resultado = 0;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const valor = vogaisConvert.find(pair => pair[0] === char);

        if (valor) {
            resultado += valor[1];
        }
    }

    return resultado
}

function somaConsoantes(str) {
    let resultado = 0;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const valor = consoantes.find(pair => pair[0] === char);

        if (valor) {
            resultado += valor[1];
        }
    }

    return resultado
}


export function motivation(str) {
    let resultado = 0;
    let somaProvisoria;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const valor = vogaisConvert.find(pair => pair[0] === char);

        if (valor) {
            resultado += valor[1];
        }
    }
    somaProvisoria = resultado;
    resultado = reduzNumero(resultado);
    return [somaProvisoria, resultado]
}

export function impression(str) {
    let resultado = 0;
    let somaProvisoria;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const valor = consoantes.find(pair => pair[0] === char);
        if (valor) {
            resultado += valor[1];
        }
    }
    somaProvisoria = resultado;
    resultado = reduzNumero(resultado);
    return [somaProvisoria, resultado]
}

export function expression(str) {
    let resultado = 0;
    let somaProvisoria;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const valor = totalConvert.find(pair => pair[0] === char);
        

        if (valor) {
            resultado += valor[1];
        }
    }
    somaProvisoria = resultado;
    resultado = reduzNumero(resultado);
    return [somaProvisoria, resultado]
}

export function psychic(str) {
    const [ano, mes, dia] = str.split('-');
    let somaDia = somaDigitos(dia);
    return somaDia;
}


export function destiny(str) {
    const [ano, mes, dia] = str.split('-');
    let somaDia = somaDigitos(dia);
    let somaMes = somaDigitos(mes);
    let somaAno = somaDigitos(ano)
    let somaTotal = somaDia + somaMes + somaAno;
    let somaProvisoria = somaTotal;

    if(somaTotal != 11 && somaTotal != 22) {
        somaTotal = reduzNumero(somaTotal);
    }
    
    return [somaProvisoria,somaTotal];
}

export function mission(name, date) {
    const expressao = expression(name)[1];
    const destino= destiny(date)[1];
    let missao = Number(expressao) + Number(destino);
    if(missao != 11 & missao != 22) {
        missao = reduzNumero(missao);
    }
    return missao;
}

export function ocultTalent(name) {
    const expressao = expression(name)[1];
    const motivacao = motivation(name)[1];
    let ocultTalent = reduzNumero(expressao + motivacao)
    return ocultTalent;
}
export function licoesCarmicas(str) {
    const caracteresNaTabela = totalConvert.map(par => par[0]);
    const valoresNumericosNaTabela = totalConvert.map(par => par[1]);

    const valoresNumericosEncontrados = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const indiceNaTabela = caracteresNaTabela.indexOf(char);

        if (indiceNaTabela !== -1) {
        const valorCorrespondente = valoresNumericosNaTabela[indiceNaTabela];
        valoresNumericosEncontrados.push(valorCorrespondente);
        }
    }

    const valoresNumericosSemCorrespondente = [];

    for (let i = 1; i <= 9; i++) {
        if (!valoresNumericosEncontrados.includes(i)) {
        valoresNumericosSemCorrespondente.push(i);
        }
    }

    return valoresNumericosSemCorrespondente;
}

export function culturedTrends(str) {
    const inteirosFrequencia = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      const indiceNaTabela = totalConvert.findIndex(par => par[0] === char);
  
      if (indiceNaTabela !== -1) {
        const valor = totalConvert[indiceNaTabela][1];
        inteirosFrequencia[valor] = (inteirosFrequencia[valor] || 0) + 1;
      }
    }
  
    const inteirosComQuatroOuMaisOcorrencias = Object.keys(inteirosFrequencia)
      .filter(valor => inteirosFrequencia[valor] >= 4)
      .map(Number);
  
    return inteirosComQuatroOuMaisOcorrencias;
}

export function subconsciousResponse(name) {
    const numLicoes = licoesCarmicas(name).length;
    let responses = 9 - numLicoes;
    return responses;
}

export function degreeOfAscension(str) {
    let somaV = somaVogais(str);
    let somaC = somaConsoantes(str);
    if (somaV === somaC) {
        return 'Espirito Elevado'
    } else if(somaV > somaC) {
        return 'Espirito Rebaixado'
    } else {
        return 'Espirito em Ascensão'
    }
}

export function personalYear(str) {
    const [ano, mes, dia] = str.split('-');
    const anoAtual = new Date().getFullYear();
    let somaDia = somaDigitos(dia);
    let somaMes = somaDigitos(mes);
    let somaAno = somaDigitos(anoAtual.toString());
    let somaTotal =  somaDia + somaMes + somaAno;
    return [somaTotal,reduzNumero(somaTotal)];
}

export function personalMounth(str) {
    const anoPessoal =  personalYear(str)[1];
    const mesAtual = (new Date().getMonth() + 1)
    let somaMes = somaDigitos(mesAtual.toString());
    let somaTotal = anoPessoal + reduzNumero(somaMes);
    return somaTotal;
}

export function personalDay(str) {
    const mesPessoal = personalMounth(str).toString();
    const diaAtual = new Date().getDate();
    let somaMes = somaDigitos(mesPessoal);
    let somaDia = somaDigitos(diaAtual.toString());
    let somaTotal = Number(somaMes) + Number(somaDia);
    return somaTotal;
}






