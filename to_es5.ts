import {parse} from '@babel/parser'
import * as babel from '@babel/core'

const code = `let a = 'let';let b = 2; const c = 3`
const ast = parse(code, {sourceType: 'module'})
const res = babel.transformFromAstSync(ast, code, {
    presets: ['@babel/preset-env']
})

console.log(res.code)