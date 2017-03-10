// js script to turn text tab into my tab format. Note only works at present if tab is in standard tuning and each line starts with that string's open pitch (ie 'E').

// copy the text of the file you want to convert into a .txt file in this folder called "to_tab.txt", or rename in this file appropriately. cd to this folder in terminal and run this script (ie with node nodetabreader.js), the formatted file should appear as "output_file_js.txt".

var fs = require('fs');

const strings_strings_arr = []
const strings_arrs_arr = [[], [], [], [], [], []]
const lines_original_file_arr = fs.readFileSync('to_tab.txt').toString().split("\n");

console.log(lines_original_file_arr)

const eH = []
const b = []
const g = []
const d = []
const a = []
const eL = []

lines_original_file_arr.forEach((item, i) => {
  if ( (lines_original_file_arr[i][0] === "E" && lines_original_file_arr[i+1][0] === "B" && lines_original_file_arr[i+2][0] === "G")
  || (lines_original_file_arr[i][1] === "|" && lines_original_file_arr[i+1][1] === "|" && lines_original_file_arr[i+2][1] === "|" && lines_original_file_arr[i+3][1] === "|" && lines_original_file_arr[i+4][1] === "|" && lines_original_file_arr[i+5][1] === "|")
  || (lines_original_file_arr[i][0] === "-" && lines_original_file_arr[i+1][0] === "-" && lines_original_file_arr[i+2][0] === "-" && lines_original_file_arr[i+3][1] === "-" && lines_original_file_arr[i+4][1] === "-" && lines_original_file_arr[i+5][1] === "-")) {
    strings_arrs_arr[0].push(lines_original_file_arr[i])
    strings_arrs_arr[1].push(lines_original_file_arr[i+1])
    strings_arrs_arr[2].push(lines_original_file_arr[i+2])
    strings_arrs_arr[3].push(lines_original_file_arr[i+3])
    strings_arrs_arr[4].push(lines_original_file_arr[i+4])
    strings_arrs_arr[5].push(lines_original_file_arr[i+5])
  }
})

strings_arrs_arr.forEach((arr, i) => {
  strings_strings_arr[i] = arr.join("")
})

const final_string = strings_strings_arr.join("break")

fs.writeFile("output_file_js.txt", final_string, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("file was saved");
});
