

async function create_new_workbook() {
    document.getElementById("status").innerHTML = "Opening Excel...";
    result = await eel.create_new_workbook()();    
    document.getElementById("status").innerHTML = "";    
}

async function get_question() {
    await eel.get_question()();    
}

function toggleSetting(){
    cur_setting = document.getElementById("setting").innerHTML
    if (cur_setting == "Spring"){
        document.getElementById("setting").innerHTML = "Fall"
    }else{
        document.getElementById("setting").innerHTML = "Spring"
    }
}