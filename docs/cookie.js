
var visitCount = Cookies.get('visitCount');
if (visitCount == undefined) var visitCount = 0;
Cookies.set('visitCount',(Number(visitCount) + 1))
document.getElementById('visits').innerHTML = String(visitCount);