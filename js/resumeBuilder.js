var name = "Elias Roman";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front-end Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
