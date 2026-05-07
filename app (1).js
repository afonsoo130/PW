document.getElementById("108734").addEventListener("submit", function(event){
    event.preventDefault();

    const pessoa={
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        nascimento: document.getElementById("nascimento").value,
        localidade: document.getElementById("localidade").value,
        profissao: document.getElementById("profissao").value
    };

    //let lista= JSON.parse(localStorage.getItem("eid")) || []; // Para o teste bastava apagar esta linha e a de baixo e trocar lista por pessoa;

    //lista.push(pessoa); // Para o teste bastava trocar lista por pessoa;

    localStorage.setItem("g401", JSON.stringify(pessoa));

    alert("Formulário desenvolvido por: Pedro Afonso Ribeiro Lopes");

    fetchAPI("https://ioeduc-dot-iodevprojects.appspot.com/mt2/A90141", "GET");


});

//Read
async function fetchAPI(url, method) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        const products = data; // put the right data here

        let html ="<table class='table table-bordered mt-4'><thead><tr>";
        Object.keys(products[0]).forEach(chave => html += `<th>${chave}</th>`);
        html += "</tr></thead><tbody>";
        products.forEach(item =>{
            html += "<tr>";
            Object.values(item).forEach(valor => html += `<td>${valor}</td>`);
            html += "</tr>";
        });
        html += "</tbody></table>";
        document.getElementById("result").innerHTML=html;

    } catch (error) {
        console.log('Error:', error);
    }

    
}
