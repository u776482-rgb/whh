    const $ = (id) => document.getElementById(id);
    const pad = (n) => String(n).padStart(2, "0");

    function tick() {
      const now = new Date();
      $("hours").textContent = pad(now.getHours());
      $("minutes").textContent = pad(now.getMinutes());
      $("seconds").textContent = pad(now.getSeconds());
    }

    tick();                
    setInterval(tick, 1000);