function show() {
    document.getElementById("side-menu").classList.toggle("show");
}
// function data() {
//     var span;
//     var date = newDate();
//     var an;

//     an=date.getFullYear();

//     span=document.getElementById("data");
//     span.innerHTML="toate drepturi;e de autor sunt rezervate<br/>" + an;

// }
// data();
function data() {
    var span;
    var date = new Date();
    var an, luna, zi;
    an = date.getFullYear();
    luna = date.getMonth() + 1;
    zi = date.getDate();
  
    text=zi+"."+luna+"."+an;
    span = document.getElementById("data");
    span.innerHTML = "Toate drepturile de autor sunt rezervate <br/>" + text;
}
data()

