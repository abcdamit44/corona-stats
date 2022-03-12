let api = 'https://api.covid19api.com/summary';
async function covid19() {
    let response = await fetch(api);
    let data = await response.json();
    return data;
}
let corona = covid19();
corona.then((data) => {
    for (let i = 0; i < data.Countries.length; i++) {
        // console.log(data.Countries[i].Country)
        let tbody = document.getElementById("tableBody");
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        let td0 = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        td.innerHTML = i;
        td0.innerHTML = data.Countries[i].Country;
        td1.innerHTML = data.Countries[i].CountryCode;
        td2.innerHTML = data.Countries[i].NewConfirmed;
        td3.innerHTML = data.Countries[i].NewDeaths;
        td4.innerHTML = data.Countries[i].NewRecovered;
        td5.innerHTML = data.Countries[i].TotalConfirmed;
        td6.innerHTML = data.Countries[i].TotalDeaths;
        td7.innerHTML = data.Countries[i].TotalRecovered;
        tr.append(td);
        tr.append(td0);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        tr.append(td7);
        tbody.append(tr);
    }
})

function searchFun() {
    let filter = document.getElementById("mySearch").value.toUpperCase();
    let myTable = document.querySelector("table");
    let myTr = myTable.getElementsByTagName("tr");
    for (let i = 1; i < myTr.length; i++) {
        let myTd = myTr[i].getElementsByTagName('td')[1];

        // if (myTd) {
        let textValue = myTd.textContent || myTd.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            myTr[i].style.display = "";
        } else {
            myTr[i].style.display = "none";
        }
        // }
    }


}