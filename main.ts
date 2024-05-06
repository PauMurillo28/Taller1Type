import {Serie} from './serie.js' 
import {dataSeries} from './data.js';


let seriesTable: HTMLElement = document.getElementById("series")!;


mostrarDatosSeries(dataSeries);
mostrarPromedioSeries(dataSeries);

function mostrarDatosSeries(misSeries: Serie[]):void{
    
    let tbodySeries: HTMLElement = document.createElement("tbody");

    

    for(let serie of misSeries){
        
        let trElement: HTMLTableRowElement = document.createElement("tr");

        trElement.innerHTML = `<td style="font-weight: bold">${serie.num}</td>
        <td style="color: rgb(36, 129, 211)">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.season}</td>`;

        tbodySeries.appendChild(trElement);
    }

    seriesTable.appendChild(tbodySeries);
}

function mostrarPromedioSeries(misSeries: Serie[]):void{

    let trElement: HTMLElement = document.createElement("tr");
    let tdElement: HTMLTableCellElement = document.createElement("td");

    let sumaSeries: number = 0;

    
    dataSeries.forEach(n => sumaSeries+= n.season);

    let promedio: number =sumaSeries/misSeries.length;

    tdElement.colSpan = 4;
    tdElement.textContent = `Seasons average: ${promedio}`;

    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);

}