// const body = document.querySelector('body');
// const toggle = document.getElementById('toggle');
// toggle.onclick = function (params) {
//     toggle.classList.toggle('active');
//     body.classList.toggle('toggle')
// }

function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}

// function stepFunction(event) {
//     debugger;
//     var element = document.getElementsByClassName("collapse");
//     for (var i = 0; i < element.length; i++) {
//       if (element[i] !== event.target.ariaControls) {
//         element[i].classList.remove("show");
//       }
//     }
//   }