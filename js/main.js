function betolt(url,cel) //paraméterek: mit töltsön be, hova töltse be
{
    http_request = XHRletrehozas();// XHR létrehozás a megfelelő böngészőhöz
    if (http_request == null) //XHR létrejöttének ellenőrzése
    {
        alert('A böngésződ nem alkalmas az AJAX-hoz!!');
	return false;
    }

    
    http_request.onreadystatechange = function (){
        if ((http_request.readyState == 4) && (http_request.status == 200))
            {
                document.getElementById(cel).innerHTML = http_request.responseText;
            }
    } //adat betöltése a megadott helyre
    
    http_request.open("GET", url, true);
    http_request.send(null);
	
}

 

function XHRletrehozas()
{
    var http_request = false;
	
    if (window.XMLHttpRequest) 
    {  //XHR létrehozása Mozilla, Opera stb böngészőkre
        http_request = new XMLHttpRequest();	  
    }
    else
    {
        if (window.ActiveXObject)
	{ // XHR létrehozása IE-re
            try { //IE 5.0-nél újabb
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } 
            catch (e) 
            {
                try { //IE 5.0
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                    } 
                catch (e) 
                {
                    return false;
                }
            }
	}
    }
    return http_request;
}

function description_load(description) {
    var show_description = document.querySelector("#menu_description");
    if (show_description.getElementsByClassName("show") == null)
    {
        show_description.classList.add("show");        
        betolt(description,"menu_description");
    }
    else
    {
        document.getElementById("menu_description").style.height = "0px";
    }
}