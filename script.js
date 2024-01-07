var lineCount = 0;
var ttlStyle = "";
var lineStyle = "";
var switchState = [false,false,false,false,false,false,false,false];

function connectPoints() {
    var point1Id = document.getElementById('point1Input').value;
    var point2Id = document.getElementById('point2Input').value;

    var point1 = document.getElementById(point1Id);
    var point2 = document.getElementById(point2Id);

    //alert(point1Id + ", " + point2Id);

    if (!point1 || !point2) {
        alert('Invalid point IDs');
        return;
    }

    lineCount += 1;

    var line = document.createElement('div');
    line.className = 'line';
    line.id = point1Id+point2Id;

    //alert("line_id = "+line.id);

    var x1 = point1.offsetLeft + point1.offsetWidth / 2;
    var y1 = point1.offsetTop + point1.offsetHeight / 2;
    var x2 = point2.offsetLeft + point2.offsetWidth / 2;
    var y2 = point2.offsetTop + point2.offsetHeight / 2;

    //alert("point1:("+x1+","+y1+")"+" "+"point2:("+x2+","+y2+")");

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;

    var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    line.style.width = length + 'px';
    line.style.transform = 'rotate(' + angle + 'deg)';
    line.style.left = ((x1==x2)?(x1+1):x1) + 'px';
    line.style.top = ((y1==y2)?(y1-1):y1) + 'px';

    //alert("color = "+lineStyle);
    line.style.borderColor = lineStyle;

    document.body.appendChild(line);
}
function deletePoints(){
    var point3Id = document.getElementById('point3Input').value;
    var point4Id = document.getElementById('point4Input').value;

    var point3 = document.getElementById(point3Id);
    var point4 = document.getElementById(point4Id);

    //alert(point3Id + ", " + point4Id);

    if (!point3 || !point4) {
        alert('Invalid point IDs');
        return;
    }

    lineCount -= 1;

    var line = document.getElementById(point3Id+point4Id);
    document.body.removeChild(line);
}
function createTTL() {
    var point5Id = document.getElementById('point5Input').value;
    var point6Id = document.getElementById('point6Input').value;

    var point5 = document.getElementById(point5Id);
    var point6 = document.getElementById(point6Id);

    if (!point5 || !point6) {
        alert('Invalid point IDs');
        return;
    }

    var ttl = document.createElement('div');
    ttl.className = 'ttl';
    ttl.id = point5Id+point6Id;

    var x1 = point5.offsetLeft + point5.clientWidth / 2;
    var y1 = point5.offsetTop + point5.clientHeight / 2;
    var x2 = point6.offsetLeft + point6.clientWidth / 2;
    var y2 = point6.offsetTop + point6.clientHeight / 2;

    //alert("point1:("+x1+","+y1+")"+" "+"point2:("+x2+","+y2+")");

    var deltaX = Math.abs(x2 - x1);
    var deltaY = Math.abs(y2 - y1);

    //alert("width:"+deltaX+" , "+"height:"+deltaY);

    ttl.style.width = deltaX + 'px';
    ttl.style.height = deltaY + 'px';
    ttl.style.left = ((x1<=x2)?x1:x2) + 'px';
    ttl.style.top = ((y1<=y2)?y1:y2) + 'px';

    var textElement = document.createElement('span');
    textElement.style.lineHeight = deltaY + 'px';
    textElement.textContent = ttlStyle;

    ttl.appendChild(textElement);
    document.body.appendChild(ttl);
}
function deleteTTL() {
    var point7Id = document.getElementById('point7Input').value;
    var point8Id = document.getElementById('point8Input').value;

    var point7 = document.getElementById(point7Id);
    var point8 = document.getElementById(point8Id);

    if (!point7 || !point8) {
        alert('Invalid point IDs');
        return;
    }

    var ttl = document.getElementById(point7Id+point8Id);
    document.body.removeChild(ttl);
}

var dropdown = document.getElementById('dropdown');
var selectColor = document.getElementById('selectColor');

selectColor.addEventListener('change', function() {
    lineStyle = selectColor.value;
});
dropdown.addEventListener('change', function() {
    ttlStyle = dropdown.value;
});

function Switch(index) {
    switchState[index] = !switchState[index];
    var button = document.getElementsByClassName('switch-style')[index];
    if (switchState[index]) {
        button.classList.add('clicked');
    } else {
        button.classList.remove('clicked');
    }
}