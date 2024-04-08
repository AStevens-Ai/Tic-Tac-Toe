function Player(name, symbol){
    this.name = name,
    this.symbol = symbol
}

let playerOne = new Player('PlayerOne', 'X');
let playerTwo = new Player('PlayerTwo', 'O');

(function() {
    var boardTicTac = {
        board: [],
        currentPlayer: null,
        Container: document.querySelector('.container'),
    init: function() {
            this.cacheDom();
            this.currentPlayer = playerOne;
            
        }   ,
    createBoard: function(rows, cols){
            this.Container.innerHTML = '';
            const stylesheet = document.styleSheets[0];
            const containerRule = [...stylesheet.cssRules].find(
                (r) => r.selectorText === '.container'
            );
        
            this.Container.style.setProperty('--grid-rows', rows);
            this.Container.style.setProperty('--grid-cols', cols);
    
            this.board = [];
            for( let c = 0; c < (rows * cols); c++) {
                let cell = document.createElement('div');
                cell.innerText = '';
                cell.addEventListener('click', () => {this.handleCellClick(cell)})
                this.Container.appendChild(cell).className = 'grid-item';
                this.board.push(cell);
            }
        },
    cacheDom: function() {
            this.Container = document.querySelector('.container');
            let startBtn = document.querySelector('.start').addEventListener('click', () => {
                this.board = []
            playerOne.name = inputOne.value;
            playerOne.symbol = 'X';
            playerTwo.name = inputTwo.value;
            playerTwo.symbol = 'O'
                this.createBoard(3,3)
                this.currentPlayer = playerOne;
            })
            let resetBtn = document.querySelector('.reset').addEventListener('click', () => {
                this.board=[]
                this.createBoard(0,0)
                this.currentPlayer = playerOne;
            })
            let inputOne = document.querySelector('.nameOne')
            let inputTwo = document.querySelector('.nameTwo')
        }, 
    handleCellClick: function(cell) {
        let lastVariable
            if(cell.innerText === '') {
                cell.innerText = this.currentPlayer.symbol;
                if(this.currentPlayer.symbol === 'X') {
                     lastVariable = playerOne.name
                } else {
                    lastVariable = playerTwo.name
                }
                setTimeout(() => this.checkWin(lastVariable), 300);
                console.log(this.currentPlayer)
                this.currentPlayer = (this.currentPlayer === playerOne) ? playerTwo : playerOne;
            } else if (cell.innerText === 'X' || cell.innerText === 'O') {
                alert('Please select a different spot, this spot already has been chosen')
            }
        },
    checkWin: function(lastVariable) {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6] 
            ];
        
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (this.board[a].innerText !== '' && 
                    this.board[a].innerText === this.board[b].innerText &&
                    this.board[a].innerText === this.board[c].innerText) {
                    alert(`${lastVariable} Wins!`)
                    return
                }
            }
        }
    };
    boardTicTac.init()
})();
