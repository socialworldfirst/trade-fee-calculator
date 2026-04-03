(function(){
  var k = 'corridor_auth';
  var p = 'nerds';
  if (localStorage.getItem(k) === p) return;
  var attempts = 0;
  while (attempts < 3) {
    var input = prompt('Password required:');
    if (input === null) { document.body.innerHTML = ''; return; }
    if (input === p) { localStorage.setItem(k, p); return; }
    attempts++;
  }
  document.body.innerHTML = '<div style="font-family:monospace;padding:48px;color:#888;">Access denied.</div>';
})();
