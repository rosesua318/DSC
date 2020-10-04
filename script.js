var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);

function clickButton() {
    var li = document.createElement('li');

    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group-item"); 

    li.innerHTML = input.value;
    li.innerHTML += "<button style='float: right; claer:both;' id='complete' onclick='complete("+count+")'>완료</button>"
    li.innerHTML += "<button style='float: right; claer:both;' id='change' onclick='change("+count+")'>수정</button>"
    li.innerHTML += "<button style='float: right; claer:both;' id='delete' onclick='remove("+count+")'>삭제</button>"

    list.appendChild(li);
    
    input.value = "";

    count = count+1; //count++;
}

function remove(count) {
    var li = document.getElementById('li'+count);
    list.removeChild(li);
}

function complete(count) {
    var li = document.getElementById('li'+count);
    li.style.textDecoration = "line-through";
    li.style.fontStyle = "italic";
}

function change(count) {
    var newText = prompt("수정할 내용을 입력해주세요");
    if(!newText || newText === "" || newText === " ") return false;

    var li = document.getElementById('li'+count);
    li.innerHTML = newText;
    li.innerHTML += "<button style='float: right; claer:both;' id='complete' onclick='complete("+count+")'>완료</button>"
    li.innerHTML += "<button style='float: right; claer:both;' id='change' onclick='change("+count+")'>수정</button>"
    li.innerHTML += "<button style='float: right; claer:both;' id='delete' onclick='remove("+count+")'>삭제</button>"
}