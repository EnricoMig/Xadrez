const boardElement = document.getElementById('chess-board');
const columnReferencesElement = document.getElementById('column-references');
const rowReferencesElement = document.getElementById('row-references');
let board = [];

// Função para inicializar o tabuleiro
function initBoard() {
    const pieces = {
        48: '♟', 49: '♟', 50: '♟', 51: '♟', 52: '♟', 53: '♟', 54: '♟', 55: '♟', // Peões pretos
        56: '♜', 57: '♞', 58: '♝', 59: '♛', 60: '♚', 61: '♝', 62: '♞', 63: '♜', // Peças maiores pretas
        8: '♙', 9: '♙', 10: '♙', 11: '♙', 12: '♙', 13: '♙', 14: '♙', 15: '♙', // Peões brancos
        0: '♖', 1: '♘', 2: '♗', 3: '♕', 4: '♔', 5: '♗', 6: '♘', 7: '♖' // Peças maiores brancas
    };

    // Criando o tabuleiro de xadrez
    for (let i = 0; i < 64; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? 'dark' : 'light'); // Inverte as cores
        square.textContent = pieces[i] || ''; // Coloca as peças nas posições corretas
        boardElement.appendChild(square);
        board.push(square);
    }

    // Adicionando as referências das colunas na parte direita
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    columns.reverse().forEach(col => {
        const columnSpan = document.createElement('span');
        columnSpan.textContent = col;
        columnReferencesElement.appendChild(columnSpan);
    });

    // Adicionando as referências das linhas na parte inferior
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    rows.reverse().forEach(row => {
        const rowSpan = document.createElement('span');
        rowSpan.textContent = row;
        rowReferencesElement.appendChild(rowSpan);
    });
}

// Inicializa o tabuleiro quando a página for carregada
window.onload = initBoard;
