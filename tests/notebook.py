import pandas as pd
import xlwings as xw
import json

wb = xw.Book()

cur_sht = None

# excel
class ExcelIO:
    def get_sheet():
        cur_sht = wb.sheets["sheet1"].used_range.value

    def set_sheet():
        wb.sheets["sheet1"]["A1"].value = cur_sht


class JsonIO:
    def read_question():
        q = json.load(open("Exam5.json", "r"))
        print(q)

    def save_question(data):
        with open("Exam5.json", "w") as f:
            json.dump(data, f)


if __name__ == "__main__":
    jio = JsonIO
    jio.read_question()