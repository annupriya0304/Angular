var formLabels = document.getElementsByTagName('Label');
alert("Different form inputs= "+ formLabels.length);

let para = document.createElement("p");
para.textContent = "This paragraph was added by a page script.";
para.setAttribute("id", "pop-up-script");

document.body.appendChild(para);
document.getElementById("pop-up-script").style.zIndex = 100;
document.getElementById("pop-up-script").style.border = "1px solid black";
document.getElementById("pop-up-script").style.height = "500px";
document.getElementById("pop-up-script").style.position = "absolute";
document.getElementById("pop-up-script").style.top = "0px";
document.getElementById("pop-up-script").style.backgroundColor = "yellow";

for (i= 0; i< formLabels.length; i ++){

var element= document.getElementById(formLabels[i].htmlFor); 
var elemlabel= document.createElement('label');
elemlabel.setAttribute("innerHTML", formLabels[i].innerHTML);
  var elem= document.createElement(element.tagName);
  elem.setAttribute("id", element.id+ "_formFiller");
document.body.appendChild(elemlabel);
document.body.appendChild(elem);

}
