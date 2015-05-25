var myHttpRequest = false;

if(window.XMLHttpRequest)
     myHttpRequest = new XMLHttpRequest();
else if(window.ActiveXObject)
     myHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");

function loadContent(source, content)
{
     if(myHttpRequest)
     {
          var data = document.getElementById(content);

          myHttpRequest.open("GET",source);

          myHttpRequest.onreadystatechange = function()
          {
               if(myHttpRequest.readyState==4)
                    data.innerHTML = myHttpRequest.responseText;
          }

          myHttpRequest.send(null);
     }
}