import eel
import xlwings as xw
from datetime import datetime

eel.init("web")


@eel.expose()
def create_new_workbook():
    wb = xw.Book()


eel.start("index.html")
