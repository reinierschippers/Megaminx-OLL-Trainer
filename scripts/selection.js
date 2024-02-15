
// load selected cases
loadSelection();
renderSelection();

function updateTitle() {
    document.getElementById("csi").innerHTML = window.selCases.length;
}
function itemClicked(i) {
    if (window.ollMap[i] == null) {
        console.error("is null");
        return;
    }

    var index = window.selCases.indexOf(i);
    var wasSelected = (index != -1);
    if (wasSelected)
        window.selCases.splice(index, 1);
    else
        window.selCases.push(i);

    document.getElementById("itemTd" + i).className = (wasSelected ? "itemUnsel" : "itemSel") + " borderedContainer" ;
    saveSelection();
    updateTitle();
}

function selectAllNone() {
    var nothingSelected = (window.selCases.length == 0);
    if (nothingSelected) {
        for (var i = 1; i <= 178; ++i)
            window.selCases.push(i);
    } else {
        window.selCases = [];
    }
    renderSelection();
    saveSelection();
}

/// \returns true if at least one case selected in group groupName
function isAtLeastOneSelected(groupName) {
    var indeces = algsGroups[groupName];
    for (var i in indeces) {
        if (selCases.indexOf(indeces[i]) != -1)
            return true;
    }
    return false;
}

// select or deselect all cases in the group
function selectOllGroup(name) {
    var aos = isAtLeastOneSelected(name);
    var indeces = algsGroups[name];
    for (i in indeces) {
        if (aos) { // need to delete
            var j = window.selCases.indexOf(indeces[i]);
            if (j != -1)
                window.selCases.splice(j, 1);
        } else { // need to add
            window.selCases.push(indeces[i]);
        }
    }
    renderSelection();
    saveSelection();
}

function makeDivNormal(groupname) {
    var s = "<div class='colFlex' style='width: fit-content'>";
    var indeces = algsGroups[groupname];
    s += "<div class='borderedContainer itemUnsel pad' onclick='selectOllGroup(\""+groupname
        +"\")'><b>" + groupname + "</b></div>";
    s += "<div class='rowFlex' style='flex-wrap: wrap'>";
    for (var j = 0; j < indeces.length; j++) {
        var i = indeces[j]; // case number
        var sel = (window.selCases.indexOf(i) != -1);
        s += "<div id='itemTd"+i+"' onclick='itemClicked("+i+")' class='borderedContainer "+(sel?"itemSel":"itemUnsel")+"' title='"+algsInfo[i]["name"]+"'>"+
        //"<img width='100px' id='sel"+i+"' src='pic/"+i+".png' > <br>case #"+i+"</div>";
        "<img class='caseImage' id='sel"+i+"' src='pic/"+i+".png' ></div>";
    }
    s += "</div></div>";
    return s;
}


/// iterates the ollMap and highlights HTML elements according to the selection
function renderSelection()
{
    var s="";
    s += "<div><div class='borderedContainer itemUnsel pad' onclick='selectAllNone()' colspan='6'><b>All Cases (178)</b> | selected: <span id='csi'></span></div></div>";

    s += makeDivNormal("Group 1");
    s += makeDivNormal("Group 2");
    s += makeDivNormal("Group 3");
    s += makeDivNormal("Group 4");
    s += makeDivNormal("Group 5");
    s += makeDivNormal("Group 6");
    s += makeDivNormal("Group 7");
    s += makeDivNormal("Group 8");
    s += makeDivNormal("Group 9");
    s += makeDivNormal("Group 10");
    s += makeDivNormal("Group 11");
    s += makeDivNormal("Group 12");
    s += makeDivNormal("Group 13");
    s += makeDivNormal("Group 14");
    s += makeDivNormal("Group 15");
    s += makeDivNormal("Group 16");
    s += makeDivNormal("Group 17");
    s += makeDivNormal("Group 18");
    s += makeDivNormal("Group 19");
    s += makeDivNormal("Group 20");
    s += makeDivNormal("Group 21");
    s += makeDivNormal("Group 22");
    s += makeDivNormal("Group 23");
    s += makeDivNormal("Group 24");
    s += makeDivNormal("Group 25");
    s += makeDivNormal("Group 26");
    s += makeDivNormal("Group 27");
    s += makeDivNormal("Group 28");
    s += makeDivNormal("Group 29");
    s += makeDivNormal("Group 30");
    s += makeDivNormal("Group 31");
    s += makeDivNormal("Group 32");
    s += makeDivNormal("Group 33");
    s += makeDivNormal("Group 34");
    s += makeDivNormal("Group 35");
    s += makeDivNormal("Group 36");
    s += makeDivNormal("Group 37");

    document.getElementById("cases_selection").innerHTML = s;
    updateTitle();
}
