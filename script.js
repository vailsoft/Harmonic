var seletorTom = document.querySelector('#tom')
var table = document.createElement('table');
table.setAttribute('id', 'campo_harmonico')
document.body.appendChild(table)
var header = table.createTHead()

seletorTom.addEventListener('change', () => {
    var valueseletorTom = seletorTom.value;
    var notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var escala_maior_natural = [0, 2, 4, 5, 7, 9, 11];
    var nova_escala = [];
    var campo_harmonico = []
    var p = '';
    for (var i = Number.parseInt(valueseletorTom); i < 12; i++) {
        nova_escala.push(notas[i])
    }
    if (nova_escala.length < 12) {
        for (var i = 0; i < 12; i++) {
            nova_escala.push(notas[i])
            if (nova_escala.length == 12) {
                break
            }
        }
    }

    for (var i = 0; i < 7; i++) {
        campo_harmonico.push(nova_escala[escala_maior_natural[i]])
    }

    if (table.rows.length > 0) {
        table.deleteRow(0)
    }

    var row = table.insertRow(0)

    for (var i = 0; i < 7; i++) {
        var cell = row.insertCell()
        var text = campo_harmonico[i];
        var minor = text += (i == 1 || i == 2 || i == 5) ? 'm' : '';
        var diminute = minor +=(i == 6)? '<sup>Ø</sup>':'';
        cell.innerHTML = diminute;
    }
})