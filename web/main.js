

async function create_new_workbook() {
    document.getElementById("status").innerHTML = "Opening Excel...";
    result = await eel.create_new_workbook()();    
    document.getElementById("status").innerHTML = "";    
}

async function get_question() {
    await eel.get_question()();    
}