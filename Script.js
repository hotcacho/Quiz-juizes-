let pontos = 0;

function gerarResultado(){
    pontos = 0;
    let p1 = document.getElementById("p1b");
    if(p1.checked){pontos++}

    let p2 = document.getElementById("p2c");
    if(p2.checked){pontos++}

    let p3 = document.getElementById("p3b");
    if(p3.checked){pontos++}

    let p4 = document.getElementById("p4c");
    if(p4.checked){pontos++}

    let p5 = document.getElementById("p5a");
    if(p5.checked){pontos++}

    let p6 = document.getElementById("p6d");
    if(p6.checked){pontos++}

    let p7 = document.getElementById("p7c");
    if(p7.checked){pontos++}

    let p8 = document.getElementById("p8d");
    if(p8.checked){pontos++}
    
    let p9 = document.getElementById("p9a");
    if(p9.checked){pontos++}
    
    let p10 = document.getElementById("p10c");
    if(p10.checked){pontos++}
    
    resultado()
}

function resultado(){
    alert("resultado: " + pontos + " / 10")
}