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
    temp += "<table border='1' class='"+direction+"-table'>";
    for (var r = 0; r < rows; r++) {
        temp += "<tr class='" + direction + "-tr'>";
        for (var c = 0; c < columns; c++) {
            temp += "<td class='" + direction + "-td'><input type='text' class='"+direction+"-value' /></td>";
        }
        temp += "</tr>";
    }
    temp += "</table>";
    return temp;
}

function addData(direction, rows, columns) {
    var arr = new Array(rows);
    var tableIndex = "table." + direction + "-table";
    var trIndex = "tr." + direction + "-tr";
    var inputIndex = "input."+direction + "-value";
    for (r in arr) {
        arr(r) = new Array(columns);
    }
    $(tableIndex+" "+trIndex).each(function () {
        $this = $(this);
        $thisValue = $(this).find(inputIndex);
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
}

function multiply() {

}
