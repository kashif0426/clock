function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM'
    var dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    hour = hour % 12;
}