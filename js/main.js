let select = document.getElementById('listColors');
let circles = document.querySelectorAll('.circle');

select.addEventListener('change', function (){
  let selected = select.options[select.selectedIndex].value;
  console.log(selected)
  if(selected == "none"){
    circles[0].style.backgroundColor = "#770101";
    circles[1].style.backgroundColor = "#807D01";
    circles[2].style.backgroundColor = "#006E00";
  }
  else if(selected == "red"){
    circles[0].style.backgroundColor = "#F70B0B";
    circles[1].style.backgroundColor = "#807D01";
    circles[2].style.backgroundColor = "#006E00";
  }
  else if(selected == "yellow"){
    circles[0].style.backgroundColor = "#770101";
    circles[1].style.backgroundColor = "#EBE702";
    circles[2].style.backgroundColor = "#006E00";
  }
  else if(selected == "green"){
    circles[0].style.backgroundColor = "#770101";
    circles[1].style.backgroundColor = "#807D01";
    circles[2].style.backgroundColor = "#02EB02";
  }
  
});
