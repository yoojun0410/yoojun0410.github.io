
var modals = document.getElementsByClassName("modal");

var btns = document.getElementsByClassName("btn");

var spanes = document.getElementsByClassName("close");
var funcs = [];
 

function Modal(num) {
  return function() {

    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };

    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}

for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 

for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function(){
	var txt = prompt('제목 입력');
	list.innerHTML += '<li>' + txt + '</li>';
});
