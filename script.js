"use strict";
let arr = [];
class LocationR {
    constructor(nehme, city, zipCode, address, Image, date) {
        this.nehme = nehme;
        this.zipCode = zipCode;
        this.city = city;
        this.address = address;
        this.Image = Image;
        this.date = date;
        arr.push(this);
    }
    display() {
        return `<div class="card-group" style=" width=18rem;" >
    <div class="card-body">

        <h5>Places:</h5
        ><ul>
        <li >
            <h5>${this.nehme}</h5>
        </li>
        <ul><br>
            <li >${this.address} ${this.zipCode} ${this.city}</li>
            <br><br><br>
            <li ><img src="${this.Image}"  alt="..." > </li>
        </ul>

    </ul>
    </div>
    <p>${this.date}</p>
    
    
    </div>`;
    }
}
let Location1 = new LocationR("St. Charles Church", "vienna", 1010, "Karlsplatz 1", "img/a1.jpg", new Date(2022, 4, 4, 17, 23, 42, 11));
let Location2 = new LocationR("Zoo Vienna", "vienna", 1130, "Maxingstraße 13b", "img/a2.jpg", new Date(2023, 4, 4, 17, 23, 42, 11));
class restaurant extends LocationR {
    constructor(nehme, city, zipCode, address, Image, telephoneNumber, typeofCuisine, kolinarisch, date) {
        super(nehme, city, zipCode, address, Image, date);
        this.telephoneNumber = telephoneNumber;
        this.typeofCuisine = typeofCuisine;
        this.kolinarisch = kolinarisch;
    }
    display() {
        return `<div class="card-group" style="width: 18rem;">
<div class="card-body">

    <h5 class="">Restaurants:</h5>
    <ul>
    <li >
        <h5>${this.nehme}</h5>
    </li>
    <ul>
        
        <li  >${this.zipCode} ${this.city}, ${this.address}, ${this.telephoneNumber}</li>
        <li > <a href="${this.typeofCuisine}">${this.typeofCuisine}</a></li>
        <li  >${this.kolinarisch}</li>
        <li  ><img src="${this.Image}"  alt="..."></li>
    </ul>

</ul>
</div>
<p>${this.date}</p>

</div>`;
    }
}
let Lemon = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "img/a3.png", "+43(1)5812308", "www.lemonleaf.at", "Indian", new Date(2017, 4, 4, 17, 23, 42, 11));
let sixta = new restaurant("SIXTA", "vienna", 1050, "Schönbrunner Straße 21", "img/a4.png", "+43 1 58 528 56 l +43 1 58 528 56", "http://www.sixta-restaurant.at/", "Viennese", new Date(2025, 4, 4, 17, 23, 42, 11));
class events extends LocationR {
    constructor(nehme, city, zipCode, address, Image, webAddress, eventDate, eventTime, ticketPrice, date) {
        super(nehme, city, zipCode, address, Image, date);
        this.webAddress = webAddress;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    display() {
        return `<div class="card-group" style="width: 18rem;">
<div class="card-body">

    <h5 class="">Events:</h5>
    <ul>
    <li >
        <h5>${this.nehme}</h5>
    </li>
    <ul>
    <li > <a href="${this.webAddress}">${this.webAddress}</a></li>
    <li >${this.eventDate}. ${this.eventTime}</li>
        <li >${this.address} ,${this.zipCode} ,${this.city} </li>
        <li >${this.ticketPrice} €</li>
        <li ><img src="${this.Image}"  alt="..."></li>
    </ul>

</ul>
</div>
<p>${this.date}</p>
</div>`;
    }
}
let Kris = new events("Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/a5.jpg", "http://kriskristofferson.com/", "Fr.,", "15.11.2021.20:00", 58.50, new Date(2019, 4, 4, 17, 23, 42, 11));
let Lenny = new events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1,", "img/a6.jpg", "www.lennykravitz.com/", " Sat", "09.12.2029 - 19:30", 47.80, new Date(2016, 4, 4, 17, 23, 42, 11));
for (let val of arr) {
    document.getElementById("result").innerHTML += (val.display());
}
;
let btns = document.getElementById("sort");
btns.addEventListener("click", function () {
    arr.sort((a, b) => b.date - a.date);
    for (let val1 of arr) {
        document.getElementById("des").innerHTML += (val1.display());
    }
    ;
    console.table(arr);
});
let btns1 = document.getElementById("sort");
btns1.addEventListener("click", function () {
    arr.sort((a, b) => a.date - b.date);
    for (let val1 of arr) {
        document.getElementById("asc").innerHTML += (val1.display());
    }
    ;
    console.table(arr);
});
