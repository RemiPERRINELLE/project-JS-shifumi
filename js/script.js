window.onload = function(){

    // Variables

    let btnStone = document.getElementsByTagName('img')[0];
    let btnPaper = document.getElementsByTagName('img')[1];
    let btnScissors = document.getElementsByTagName('img')[2];

    let btnPlayGame = document.getElementsByTagName('button')[0];
    let btnReplay = document.getElementsByTagName('button')[1];

    let userGame = document.getElementsByTagName('article')[0];
    let computerGame = document.getElementsByTagName('article')[1];

    let result = document.getElementsByTagName('aside')[0];

    let scoreWin = document.getElementsByTagName('h3')[0];
    let scoreLose = document.getElementsByTagName('h3')[1];
    let scoreTie = document.getElementsByTagName('h3')[2];
    let victories = 0;
    let lost = 0;
    let ties = 0;

    let userChoice;
    let computerChoice;


    // Choix de l'internaute
    function clickOnBtn( button, choice ){

        button.onclick = function(){

            userChoice = choice;

            // Affichage de l'image du choix de l'internaute
            userGame.innerHTML = '<img src="imgs/' + choice + '.svg" alt="' + choice + '">';

            // Affichage du boutton "Lancer la partie"
            btnPlayGame.style.display = 'block';

            // Masquer le choix de l'ordinateur, le résultat et le bouton "Rejouer"
            computerGame.innerHTML = '';
            result.innerHTML = '';
            btnReplay.style.display = 'none';
        }
    }

    // Appel de la fonction
    clickOnBtn( btnStone, 'stone' );
    clickOnBtn( btnPaper, 'paper' );
    clickOnBtn( btnScissors, 'scissors' );


    // Choix aléatoire de l'ordinateur
    function computerBet(){

        let computerMemory = ['stone', 'paper', 'scissors'];
        let max = computerMemory.length;

        computerChoice = computerMemory[ Math.floor( Math.random() * max ) ];

        // Affichage de l'image du choix de l'ordinateur dans le deuxième article
        computerGame.innerHTML = '<img src="imgs/' + computerChoice + '.svg" alt="' + computerChoice +'">';

        // Marsquer le bouton "Lancer la partie" puis afficher le bouton "Rejouer"
        btnPlayGame.style.display = 'none';
        btnReplay.style.display = 'block';

        // Résultat
        if ( userChoice == computerChoice ){
            result.innerHTML = '<span class="tie">Egalité !</span>';
            ties ++;
        }
        else if ( userChoice == 'stone' && computerChoice == 'paper'){
            result.innerHTML = '<span class="youLose">Perdu !</span>';
            lost ++;
        }
        else if ( userChoice == 'paper' && computerChoice == 'scissors'){
            result.innerHTML = '<span class="youLose">Perdu !</span>';
            lost ++;
        }
        else if( userChoice == 'scissors' && computerChoice == 'stone'){
            result.innerHTML = '<span class="youLose">Perdu !</span>';
            lost ++;
        }
        else {
            result.innerHTML = '<span class="youWin">Gagné !</span>';
            victories ++;
        }
    
        // Mise à jour du score
        scoreWin.innerHTML =  'Victoires : ' + victories;
        scoreLose.innerHTML = 'Défaites : ' + lost;
        scoreTie.innerHTML = 'Egalités : ' + ties;
    
    }

    // Lancer la fonction computerBet() au click sur le bouton "Lancer la partie" :
    btnPlayGame.onclick = function(){

        computerBet();
    }

    // Rejouer la partie via le bouton "Rejouer"
    btnReplay.onclick = function(){
        
        // Masquer le choix de l'internaute et de l'ordinateur, le résultat et le bouton "Rejouer"
        userGame.innerHTML = '';
        computerGame.innerHTML = '';
        result.innerHTML = '';
        btnReplay.style.display = 'none';
    }





}