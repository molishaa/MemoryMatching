a minimum of moves to have 3 stars */
function addStars() {
    let stars = document.querySelectorAll(".stars li");
    if (counter < 11) {
    if (counter < 12) {
        stars[0].style.color = "black";
        stars[1].style.color = "black";
        stars[2].style.color = "black";
        stars[3].style.color = "black";
    } else if (counter >= 11 && counter < 16) {
    } else if (counter >= 12 && counter < 16) {
        stars[3].style.color = "white";

    } else if (counter >= 16 && counter < 21) {
    } else if (counter >= 16 && counter < 22) {
        stars[2].style.color = "white";
    } else if (counter >= 21 && counter < 25){
    } else if (counter >= 22 && counter < 26){
        stars[1].style.color = "white";
    } else{
        stars[0].style.color = "white";
@@ -263,9 +263,10 @@ function toggleModal() {
function printModalStatistics() {
    const timeStatistics = document.querySelector(".summary");
    const clockTime = document.querySelector("#watch").innerHTML;
    timeStatistics.innerHTML = `Time = ${clockTime} .
    Moves = ${counter + 1} .
    const str = `Time = ${clockTime} 
     Moves = ${counter + 1} 
     Stars = ${remainingStars}`;
    timeStatistics.innerHTML = str;
    console.log(timeStatistics);
    console.log(clockTime);
}