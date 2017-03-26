// JavaScript source code
var leftArr, rightArr;
var processDetail = "";

function paintTable() {
    var leftRows = parseInt($("#left-rows").val());
    var leftColumns = parseInt($("#left-columns").val());
    var rightRows = parseInt($("#right-rows").val());
    var rightColumns = parseInt($("#right-columns").val());

    if (leftColumns == rightRows) {
        var leftTable = "";
        var rightTable = "";
        leftTable = generateTable(leftRows, leftColumns, "left");
        rightTable = generateTable(rightRows, rightColumns, "right");


        leftTableDiv.innerHTML = leftTable;
        rightTableDiv.innerHTML = rightTable;
    } else {
        alert("u had to make the matrix follow the rule:left array's columns" + "\n[" + leftColumns + "]"
            + " must equal to right array's rows" + "\n[" + rightRows + "]");
    }
}

function generateTable(rows, columns, direction) {
    var temp = "";
    temp += "<table border=1 class='" + direction + "-table'>";
    for (var r = 0; r < rows; r++) {
        temp += "<tr class='" + direction + "-tr'>";
        for (var c = 0; c < columns; c++) {
            temp += "<td class='" + direction + "-td'><input type='text' class='" + direction + "-value' value='0' /></td>";
        }
        temp += "</tr>";
    }
    temp += "</table>";
    return temp;
}

function addData() {
    var leftRows = parseInt($("#left-rows").val());
    var leftColumns = parseInt($("#left-columns").val());
    var rightRows = parseInt($("#right-rows").val());
    var rightColumns = parseInt($("#right-columns").val());

    leftArr = addToSingleArr("left", leftRows, leftColumns);
    rightArr = addToSingleArr("right", rightRows, rightColumns);
    //alert("complicated");
}

function addToSingleArr(direction, rows, columns) {
    var c = 0, r = 0;
    var tdIndex = "td." + direction + "-td";
    var inputIndex = "input." + direction + "-value";
    var cols = "";

    var arr = new Array(rows);
    for (var arrR = 0; arrR < rows; arrR++) {
        arr[arrR] = new Array(columns).fill(0);
    }

    $("td." + direction + "-td").each(function () {
        $this = $(this);
        $thisValue = $this.find("input");
        var num = parseInt($thisValue.val());

        arr[r][c] = num;
        cols += num + " ";
        if (++c == columns) {
            cols += "\n";
            r++;
            c = 0;
        }
    });

    alert(cols);
    return arr;
}

function calculate() {
    var leftRows = parseInt($("#left-rows").val());
    var leftColumns = parseInt($("#left-columns").val());
    var rightRows = parseInt($("#right-rows").val());
    var rightColumns = parseInt($("#right-columns").val());

    var resultArr;
    resultArr = new Array(leftRows);
    for (var r = 0; r < leftRows; r++) {
        resultArr[r] = new Array(rightColumns).fill(0);
        //alert("result arr had constructed");
    }

    for (r in resultArr) {
        for (c in resultArr[r]) {
            var multiplyResult = multiply(r, c);
            resultArr[r][c] = multiplyResult;
            alert("arr[" + r + "][" + c + "]=" + resultArr[r][c]);
        }
    }
    var matrixHTML = showMatrix(resultArr);
    processDetail += "</li>"
    container.innerHTML = container.innerHTML.concat(matrixHTML);
    container.innerHTML = container.innerHTML.concat(processDetail);
}

function multiply(r, c) {
    var result = 0;
    for (x in leftArr[r]) {
        result = result + leftArr[r][x] * rightArr[x][c];
        processDetail += leftArr[r][x] + "*" + rightArr[x][c] + "\n";
        //alert("times "+x+" result:"+result+" left:"+leftArr[r][x]+" right:"+rightArr[x][c]);
        //alert("get result" + result);
    }
    processDetail += "=" + result;
    return result;
}

function showMatrix(arr) {
    var matrixText = "<li><table border='1'>";
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
