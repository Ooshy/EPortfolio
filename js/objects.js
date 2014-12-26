var hotel = {
    "num_rooms": 100,
    "num_floors": 3
};

function Hotel(num_rooms, num_floors) {
    this.num_rooms = num_rooms;
    this.num_floors = num_floors;
}

var my_hotel = new Hotel(200, 4);

document.getElementById("first_object").innerHTML = "<h4># Floors:</h4><p>" + hotel.num_floors + "</p>" + "<h4># Rooms:</h4><p>" + hotel.num_rooms + "</p>";
document.getElementById("second_object").innerHTML = "<h4># Floors:</h4><p>" + my_hotel.num_floors + "</p>" + "<h4># Rooms:</h4><p>" + my_hotel.num_rooms + "</p>";