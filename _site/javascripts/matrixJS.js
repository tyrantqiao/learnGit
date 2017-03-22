// JavaScript source code
var dataArr;

function paintTable() {
    var row = parseInt($("#cardinal-rows").val());
    var column = parseInt($("#cardinal-columns").val());
    alert("row:" + row + " column:" + column);
            
    dataArr=new Array(row);
    for (var r = 0; r < row; r++)
        dataArr[r] = new Array(column);
            
    for (var r = 0, c = 0; r < row*column; r++) {
        $("#dataArr").push(0);
    }

    var tableStr = "<table class='cardinal-table' border=" + 1 + ">";
    for (var r = 1; r < row + 1; r++) {
        tableStr = tableStr + "<tr class='data-tr'>";
        for (var c = 1; c < column + 1; c++) {
            tableStr = tableStr + "<td class='data-td'><input class='data-value' type='text'    value='0' /> </td>";
        }
        tableStr = tableStr + "</tr>";
    }
    tableStr = tableStr + "</table>";
            
    table.innerHTML = tableStr;
}

function addNumber() {
    var cols = "";
    var c = 0,r=0;
    
    var row = parseInt($("#cardinal-rows").val());
    var column = parseInt($("#cardinal-columns").val());
    alert("row:" + row + " column:" + column);

    //cardinalMatrix = new Array(row);

    //for (var r = 0; r < row; r++) {
    //    cardinalMatrix[r]=new Array(column);
    //}

    $("td.data-td").each(function () {
        $this = $(this);
        $thisValue = $(this).find("input.data-value");
        var num = parseInt($thisValue.val());
                    
        dataArr[r][c] = num;
        cols += num + " ";
        if (++c == column) {
            cols += "\n";
            r++;
            c = 0;
        }
        //alert("get number:" + num );
    });
    cols = cols.length > 0 ? cols.substring(0, cols.length - 1) : "didn't have a element";
    alert(cols);
}
        

function det(arr) {
    var array = arr;
    var s1 = array;
}

function calculate() {
    var row = parseInt($("#cardinal-rows").val());
    var column = parseInt($("#cardinal-columns").val());
    alert(row + " " + column + " ");

    var matrixText = showMatrix(dataArr);
    var generateMath = "<li><div class='div-inLine'>" + matrixText + "</div>" + "<div class='div-inLine'>" + "运算过程：    ";
    //alert("xx"+dataArr[1][1]);  //here's the point this is the one dimension arr // completed
    // fucking "2" is a string not a number!!!!!!!!!!!!!!
    var fuckSwitch = row;
    switch (fuckSwitch) {
        case 2: {
            var result = crossMultiplication(dataArr);
            generateMath += dataArr[0][0] + "*" + dataArr[1][1] + "-" + dataArr[1][0] + "*" + dataArr[0][1] + "=" + result;
            break;
        }
        case 3: {
            var result = threeDegreeMatrix(dataArr);
            generateMath += "the thirdDegreeMatrix's value" + " =" + result;
            break;
        }
        case 4: {
            //var test = 1;
            //alert(test+=Math.pow(-1,3)*3*2);
            var result=0;
            for (var c = 0; c < fuckSwitch; c++) {
                var stepByStep = dataArr[0][c] * detMatrix(0, c, dataArr, fuckSwitch) * Math.pow(-1, c + 1);
                result += stepByStep;
                generateMath += "<div class='div-inLine'>" + dataArr[0][c] + "*" + showMatrix(createChildMatrix(0, c, dataArr, fuckSwitch))+"="+stepByStep+"</div>";
            }
            generateMath += "the " + fuckSwitch + "degrees' matrix value is equal to" + result;
            break;
        }
    }
    generateMath += "</div></li>";
    container.innerHTML = container.innerHTML.concat(generateMath);
}
        
function crossMultiplication(arr) {
    return arr[0][0] * arr[1][1] - arr[1][0] * arr[0][1];
}

function detMatrix(row, column, arr, degrees) {
    //degrees is still represent the parentArr's degrees
    //TODO to be continued data the consuming time by crossMultiplication or 沙路法
    //展示后面做；
    degrees--;
    alert(degrees + "-degrees");
    if(degrees!=2){
        var childMatrix = createChildMatrix(row, column, arr, degrees);
        alert(childMatrix[2][2]);
        var result =0 ;
        for (var c = 0; c < degrees; c++) {
            result += childMatrix[0][c] * detMatrix(0, c, childMatrix, degrees) * Math.pow(-1, c+1);
        }
        return result;
    } else {
        var threeDegreeResult = threeDegreeMatrix(arr);
        return threeDegreeResult;
    }

}

function createChildMatrix(removeRow,removeColumn,arr,degrees) {
    var childMatrix=new Array(degrees);
    for (var r = 0; r < degrees; r++) {
        childMatrix[r]=new Array(degrees);
    }
    var indexR = -1,indexC=-1;
    for (r in arr) {
        indexR++;
        if (r == removeRow) {
            indexR--;
            continue;
        }
        for (c in arr[r]) {
            indexC++;
            if (c == removeColumn) {
                indexC--;
                continue;
            }
            childMatrix[indexR][indexC] = arr[r][c];
            //alert("r"+indexR+" c"+indexC+" num="+childMatrix[indexR][indexC])
        }
        indexC = -1;
    }
    return childMatrix;
}

function threeDegreeMatrix(arr) {
    var result;
    result = arr[0][0] * arr[1][1] * arr[2][2] + arr[0][1] * arr[1][2] * arr[2][0] + arr[0][2] * arr[1][0] * arr[2][1] - arr[0][0] * arr[1][2] * arr[2][1] - arr[0][1] * arr[1][0] * arr[2][2] - arr[0][2] * arr[1][1] * arr[2][0];
    return result;
}
       
function showMatrix(arr) {
    var matrixText = "<br /><table border='1'>";
    for (r in arr) {
        matrixText += "<tr>";
        for (c in arr[r]) {
            matrixText += "<td>";
            matrixText += arr[r][c] + " ";
            matrixText += "</td>";
        }
        matrixText += "</tr>";
    }
    matrixText += "</table>";
    return matrixText;
}