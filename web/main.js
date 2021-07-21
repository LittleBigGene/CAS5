async function create_new_workbook() {
    document.getElementById("status").innerHTML = "Opening Excel...";
    result = await eel.create_new_workbook()();
    document.getElementById("status").innerHTML = "";
}

async function get_question() {
    alert(get_form_input())
    // await eel.get_question()();
}

function get_form_input() {
    setting = document.getElementById("setting").innerText
    year = document.getElementById("year").value
    exam = document.getElementById("exam").value.toUpperCase()
    q = document.getElementById("question").value

    return `${setting}${year}${exam}#${q}`
}

function toggleSetting() {
    cur_setting = document.getElementById("setting").innerHTML
    if (cur_setting == "Spring") {
        document.getElementById("setting").innerText = "Fall"
    } else {
        document.getElementById("setting").innerText = "Spring"
    }
}