function menu() {
	var icon = document.getElementById('icon');
	var body = document.getElementById('side-menu');

	if (icon.className === "icon-three") {
    icon.className += " active-three";
  } else {
    icon.className = "icon-three";
  }

  if (body.className === "hide") {
    body.className += " body-menu";
  } else {
    body.className = "hide";
  }
}

document.onkeydown = function(e) {
  // Allows tab and enter for accessibility
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
};