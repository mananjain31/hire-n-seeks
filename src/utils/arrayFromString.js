export default function arrayFromString(string){
    if(! string || string === '') return [];
    let value = string.replaceAll(`'`, `"`);
    value = JSON.parse(value);
    return value;
}