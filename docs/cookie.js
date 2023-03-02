var visitCount = Cookies.get('visitCount');
//visitCount = undefined;
if (visitCount == undefined) var visitCount = 0;
visitCountNumer = Number(visitCount) + 1
Cookies.set('visitCount',visitCountNumer);
document.getElementById('visits').innerHTML = String(visitCountNumer);