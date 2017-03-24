// JavaScript source code
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

        $("#left-table-div").html() = leftTable;
        $("#right-table-div").html() = rightTable;
    } else {
        alert("u had to make the matrix follow the rule:left array's columns" + "\n[" + leftColumns + "]"
            + " must equal to right array's rows" + "\n[" +rightRows+"]");
    }
}

function generateTable(rows,columns,direction){
    var temp = "";
    temp += "<table border='1' id='"+direction+"-table'>";
    for (var r = 0; r < row; r++) {
        temp += "<tr class='" + direction + "-tr'>";
        for (var c = 0; c < columns; c++) {
            temp += "<td class='" + direction + "-td'><input type='text' class='"+direction+"-value' /></td>";
        }
        temp += "</tr>";
    }
    temp += "</table>";
    return temp;
}
