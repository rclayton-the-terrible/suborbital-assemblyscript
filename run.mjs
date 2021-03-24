import fs from 'fs'
import loader from '@assemblyscript/loader'

const file = fs.readFileSync('./build/release/ascript.wasm')

const instance = await loader.instantiate(file, {})

console.log(instance);

console.log(instance.exports.foo(12));
