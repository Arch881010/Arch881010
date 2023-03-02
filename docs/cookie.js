var visitCount = Cookies.get('visitCount');
//visitCount = undefined;
if (visitCount == undefined) var visitCount = 0;
visitCountNumer = Number(visitCount) + 1
Cookies.set('visitCount',visitCountNumer);
document.getElementById('visits').innerHTML = String(visitCount);
if (visitCount > 11) {
    Cookies.remove('visitCount');
    window.alert("Calm down. You do not need to visit this website 12+ times!")
}