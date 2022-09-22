var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isHidden = false;
var notHiddenIcon = "fa-eye";
var hiddenIcon ="fa-eye-slash";
function saveTask(){
    console.log("Task saved");
}

function changeIcon(){
    if(!isImportant){
        //change the icon to important
        $("#important").removeClass(nonImportantIcon).addClass(importantIcon);
        console.log("Star click");
        isImportant=true;
    }else{
        // change the icon to no important
        $("#important").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant=false;
    }
}

function hideInfo(){
    if(!isHidden){
        console.log("Section hid");
        $("#eyeIcon").removeClass(notHiddenIcon).addClass(hiddenIcon);
        $("section.info").hide();
        isHidden=true;
    }else{
        $("#eyeIcon").removeClass(hiddenIcon).addClass(notHiddenIcon);
        $("section.info").show();
        isHidden=false;
    }

    
}
function init(){
    console.log("Task Manager");

    //load prev data

    // catch events
    $("#btnSave").click(saveTask);
    $("#important").click(changeIcon);
    $("#hideBtn").click(hideInfo);
}

window.onload=init;