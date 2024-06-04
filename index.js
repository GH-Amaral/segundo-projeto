function parametro(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

const vitorias = 75;
const derrotas = 20;
const nivel = parametro(vitorias, derrotas);
console.log(`O Héroi tem um saldo de ${vitorias - derrotas} e está no nível de ${nivel}`);
