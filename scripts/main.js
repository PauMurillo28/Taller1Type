import { dataSeries } from './data.js';
var seriesTable = document.getElementById("series");
mostrarDatosSeries(dataSeries);
mostrarPromedioSeries(dataSeries);
function mostrarDatosSeries(misSeries) {
    var tbodySeries = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie.num, "</td>\n            <td style=\"color: rgb(36, 129, 211)\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.season, "</td>");
        trElement.onclick = function () { mostrarCardSerie(serie); };
        tbodySeries.appendChild(trElement);
    };
    for (var _i = 0, misSeries_1 = misSeries; _i < misSeries_1.length; _i++) {
        var serie = misSeries_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(tbodySeries);
}
function mostrarPromedioSeries(misSeries) {
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    var sumaSeries = 0;
    dataSeries.forEach(function (n) { return sumaSeries += n.season; });
    var promedio = sumaSeries / misSeries.length;
    tdElement.colSpan = 4;
    tdElement.textContent = "Seasons average: ".concat(promedio);
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);
}
function mostrarCardSerie(serie) {
    var cardContainer = document.getElementById('card');
    cardContainer.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"./img/".concat(serie.image, "\" class=\"card-img-top img-fluid\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-titulo\">").concat(serie.name, "</h5>\n          <p class=\"card-descripcion\">").concat(serie.description, "</p>\n          <a class=\"card-website\" href = ").concat(serie.link, ">").concat(serie.link, "</a>\n        </div>\n      </div>\n    ");
}
