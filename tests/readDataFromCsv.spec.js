import{test}from"@playwright/test"
import fs from "fs"
import path from"path"
import { Parse } from "csv-parse/sync"

const readCsv=parse(fs.readFileSync("tests/readDataFromCsv.spec.js"),{
    columns :true,
    skip_empty_lines:true,
    //skip_recods_with_empty_values:true,
    //delimiter:";"

})