import Mustache from 'mustache'
import fs from 'fs';

let content=''
process.argv.forEach(function (val, index, array) {
    if(val && val.startsWith('content')){
        content= val.substring(val.indexOf('=')+1);
    }
});
const emailTemp = fs.readFileSync('./templates/email.html','utf8')

console.log(Mustache.render(emailTemp,{content}))