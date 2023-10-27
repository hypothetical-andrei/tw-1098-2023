import fs from 'fs'
import { rimrafSync } from 'rimraf'

fs.mkdirSync('temp')
rimrafSync('temp')