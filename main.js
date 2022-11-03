function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player1}">
        </li>
    `
}

function createCard(date, day, games) {
    return `
<div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>        
        ${games}
    </ul>
</div>
    `
}

document.querySelector('#app').innerHTML = `
        <header>
                <img src="./assets/logo.svg" alt="logo nlw">
            </header>

            <main id="cards">
                ${createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador"))}
                ${createCard("21/11", "segunda", createGame("england", "10:00", "iran") + createGame("senegal", "13:00", "netherlands") + createGame("usa", "16:00", "wales"))}
                ${createCard("22/11", "terça", createGame("argentina", "07:00", "arabia") + createGame("denmark", "10:00", "tunisia") + createGame("mexico", "13:00", "poland") + createGame("france", "16:00", "australia"))}
                ${createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia") + createGame("germany", "10:00", "japan") + createGame("spain", "13:00", "costarica") + createGame("belgium", "16:00", "canada"))}
                ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
                ${createCard("25/11", "sexta", createGame())}
                ${createCard("26/11", "sábado", createGame())}
                ${createCard("27/11", "domingo", createGame())}
                ${createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland"))}
                ${createCard("29/11", "terça", createGame())}
                ${createCard("30/11", "quarta", createGame())}
                ${createCard("01/12", "quinta", createGame())}
                ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
            </main>
`