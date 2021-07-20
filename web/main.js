eel.expose(prompt_alerts);
function prompt_alerts(description) {
    alert(description);
}

async function create_new_workbook() {
        
    result = await eel.create_new_workbook()();    
}