function validate_form(thisform)
{
with (thisform)
{
if (validate_email(email, "The input email address is not valid!")==false)
  {email.focus(); return false;}
}
}

//Validate emails
function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@");
dotpos=value.indexOf(".");
if (apos<1||dotpos-apos<4) 
  {alert(alerttxt);return false;}
else {return true;}
}
}
