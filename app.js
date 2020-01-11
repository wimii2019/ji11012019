const wymiar = 8;

let table = document.getElementById("myTable");


function myCreateFunction() {
for (var i = 0; i <wymiar; i++) {
  var row = table.insertRow(i);
  for (var x = wymiar; x >0; x--) {
    var cell = row.insertCell(0);
    cell.id=i + 'x' + x;
    cell.innerHTML = "0";
    cell.style.color = "blue";
    cell.style.margin = "50px";
    cell.onclick = function(event){
      var target = event.target || event.srcElement;
      var id = target.id
      console.log(id);
      console.log(document.getElementById(id).innerHTML);
      if(document.getElementById(id).innerHTML==='0'){
        document.getElementById(id).innerHTML='1';
      }
      else {
        document.getElementById(id).innerHTML='0';
      }
    };

  }
}
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
