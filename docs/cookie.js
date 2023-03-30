var visitCount = Cookies.get('visitCount');
//visitCount = undefined;
if (visitCount == undefined) var visitCount = 0;
visitCountNumer = Number(visitCount) + 1
Cookies.set('visitCount',visitCountNumer);
document.getElementById('visits').innerHTML = String(visitCountNumer);
//More things
async function ftch(grade){
    var data = await fetch(`https://arch881010.github.io/data/public-classes/${grade}thgrade.json`);
    var json = await data.json();
    var classes = await json.classes;
    document.write(`JSON stuff\n{\nclasses:[\n`)
    for (var classname in classes) {
        document.write(`${classname},`);
    }
    document.write('\n],')
}
ftch(10);