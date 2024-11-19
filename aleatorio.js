const nomes = ["Pericles", "Vladska", "Aniversariana", "Enzinho", "Noah", "Miguelito", "Jubileu"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)