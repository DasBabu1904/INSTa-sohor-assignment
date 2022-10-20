function beforeTimeOut() {
    console.log("Before TimeOut!!!");
}
function con() {
    console.log("time OUt!!!");
}


beforeTimeOut();
const t = setTimeout(con, 3500);
let x = prompt("Give an integer number");
x = parseInt(x) + 200;
alert("after operation your number is " + x);
const y = confirm("Do you want to see the location??");
if (y === true) {
    console.log(window.location.href);
}