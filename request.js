var SolicitaDados = new XMLHttpRequest();
SolicitaDados.open('GET', 'https://api.github.com/users/juniorknx')
SolicitaDados.send(null);

SolicitaDados.onreadystatechange = function() {
    if (SolicitaDados.readyState === 4) {
        console.log(JSON.parse(SolicitaDados.responseText))
    }
}