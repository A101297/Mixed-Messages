const wordsObj = {
    subject : ['William', 'Jose Hugo', 'he','Alejandra','she', 'Ana', 'Miguel', 'Irving','we', 'Kenya', 'they'],
    verb : ['cook', 'eat', 'sleep', 'jump', 'flirt', 'gather', 'run', 'enjoy', 'call'],
    link : ['with', 'to', 'back', 'up', 'off', 'on'],
    objectComplement : ['pear', 'car', 'bed', 'restaurant', 'girls', 'boys', 'enthusiasm']
} 
function catchElement(ele){
    return ele[(Math.floor(Math.random() * ele.length))]
}
function mix(obj){
    let subj = catchElement(obj.subject);
    let action = catchElement(obj.verb);
    let connector = catchElement(obj.link);
    let objComp = catchElement(obj.objectComplement);
    if(subj == 'we' || subj == 'they'){
        action = action
    }else{
        action+='s';
    }
    return`${subj} ${action} ${connector} ${objComp}`;
}
console.log(mix(wordsObj))
