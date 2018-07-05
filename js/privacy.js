function closePrivacy() {
  var x = document.getElementById("privacy");
  var d = new Date();

  d.setTime(d.getTime() + (2000*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();

  x.style.display = "none";
  document.cookie = "Vesper_privacy=closed;" + expires + ";path=/";

  console.log('Button clicked');
}
