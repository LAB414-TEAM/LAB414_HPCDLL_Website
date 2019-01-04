import xlrd 
import json
import os
import sys

###  Example execute:
###  python read_excelFile save_jsonFile

def get_Excel(excel):
    book = xlrd.open_workbook(excel) #打開excel
    sheet = book.sheet_by_index(0) #根據順序獲取sheet頁
    # sheet = book.sheet_by_name(0) #根據名稱獲取sheet頁
    # print(sheet.cell(0,0).value) #指定行和列獲取數據
    # print(sheet.cell(1,0).value) #指定行和列獲取數據
    print("多少列：%d" % sheet.ncols) #獲取excel裏面有多少列
    print("多少行：%d" % sheet.nrows) #獲取excel裏面有多少行
    # print(sheet.row_values(1))#取第幾行的數據
    # print(sheet.col_values(1))#取第幾行的數據
    return sheet

def excel_to_json(excel_sheet):
    data = []
    total_data = []
    keys = [v.value for v in excel_sheet.row(0)]
    row_data = {}
    row_number = 0
    while (row_number+1) < excel_sheet.nrows:
        print(row_number)
        row_number = row_number+1
        if row_number == 0:
            continue
        row_data = {}
        for col_number, cell in enumerate(excel_sheet.row(row_number)):
            if col_number == 10:
                continue
            row_data[keys[col_number]] = cell.value
        data.append(row_data)
        print(data)
        print(excel_sheet.cell(row_number, 10))
        print("===============================================")
        if excel_sheet.cell(row_number, 10).value:
            years = excel_sheet.cell(row_number, 10).value
            total_data.append({"Year":int(years), "Papers":data})
            data = []
    return total_data

def write_json(json_data, save_json_name):
    with open(save_json_name, 'w') as json_file:
        json_file.write(json.dumps(json_data, indent=4, separators=(',', ': ')))



if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Need read Excel path & save json path !!")
        sys.exit()        
    excel_sheet =  get_Excel(sys.argv[1])      ### Get excel file data
    json_data = excel_to_json(excel_sheet)     ### Excel file change to json file
    write_json(json_data, sys.argv[2])         ### Write json file

