window.onload = function () {



    //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html
    var piemenu = new wheelnav('piemenu');
    piemenu.spreaderInTitle = icon.plus;
    piemenu.spreaderOutTitle = icon.cross;
    piemenu.spreaderRadius = piemenu.wheelRadius * 0.4;
    piemenu.wheelRadius = piemenu.wheelRadius * 1;
    piemenu.createWheel(["Events", "Workshops","Attractions","Ignitia", "Sponsors","Photogallery"]);

  piemenu.setTooltips(["Events", "Workshops","Attractions","Ignitia", "Sponsors","Photogallery"]);
};
function events()
{
  alert("yay");
};
aboutus()
{

};
photogallery()
{

};
workshops()
{
alert('yay');
};
ignitia()
{

};
sponsors()
{

};
