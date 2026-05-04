var numero = 108358 - 18593; // = 89765
var id = "A" + numero;       // = A89765

async function fetchAPI(url, method) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json'
            },
        });

        const data = await response.json();
        console.log(data);

        var tabela = document.getElementById("tabela");
        var cabecalho = document.getElementById("cabecalho");

        // limpar tabela antes de preencher
        cabecalho.innerHTML = "";
        tabela.innerHTML = "";

        // verificar se é array ou objeto
        if (Array.isArray(data)) {
            // é array
            var headerRow = "<tr>";
            for (var chave in data[0]) {
                headerRow += "<th>" + chave + "</th>";
            }
            headerRow += "</tr>";
            cabecalho.innerHTML = headerRow;

            data.forEach(function(item) {
                var linha = "<tr>";
                for (var chave in item) {
                    linha += "<td>" + item[chave] + "</td>";
                }
                linha += "</tr>";
                tabela.innerHTML += linha;
            });

        } else {
            // é objeto
            var headerRow = "<tr>";
            for (var chave in data) {
                headerRow += "<th>" + chave + "</th>";
            }
            headerRow += "</tr>";
            cabecalho.innerHTML = headerRow;

            var linha = "<tr>";
            for (var chave in data) {
                linha += "<td>" + data[chave] + "</td>";
            }
            linha += "</tr>";
            tabela.innerHTML = linha;
        }

    } catch (error) {
        console.log('Error:', error);
    }
}