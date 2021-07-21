import eel
import xlwings as xw
from datetime import datetime
import json

eel.init("web")


@eel.expose()
def create_new_workbook():
    xw.Book()


# GET
@eel.expose()
def get_question():
    q = json.load(open("tests/Exam5.json", "r"))
    xw.books.active.sheets["sheet1"]["A1"].value = q


# POST
def post_question(data):
    cur_sht = xw.books.active.sheets["sheet1"].used_range.value
    with open("Exam5.json", "w") as f:
        json.dump(cur_sht, f)


eel.start("index.html")