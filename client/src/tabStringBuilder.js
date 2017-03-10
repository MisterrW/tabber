
export default class TabStringBuilder{
  constructor() {
  }

  buildTabString(inputString) {
    const strings_strings_arr = []
    const strings_arrs_arr = [[], [], [], [], [], []]
    const lines_original_file_arr = inputString.split("\n");

    const eH = []
    const b = []
    const g = []
    const d = []
    const a = []
    const eL = []

    lines_original_file_arr.forEach((item, i) => {
      if (i < (lines_original_file_arr.length - 5)){
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
    }
    })

    strings_arrs_arr.forEach((arr, i) => {
      strings_strings_arr[i] = arr.join("")
    })

    const final_string = strings_strings_arr.join("break")

    return(final_string)
  }
}
