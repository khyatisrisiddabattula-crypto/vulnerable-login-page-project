(function () {
  "use strict";

  /* ---------- animated background particles ---------- */
  var layer = document.querySelector(".particles");
  if (layer) {
    for (var i = 0; i < 28; i++) {
      var dot = document.createElement("span");
      var size = Math.random() * 10 + 4;
      dot.style.width = dot.style.height = size + "px";
      dot.style.left = Math.random() * 100 + "vw";
      dot.style.top = 100 + Math.random() * 30 + "vh";
      dot.style.animationDuration = 14 + Math.random() * 18 + "s";
      dot.style.animationDelay = "-" + Math.random() * 20 + "s";
      layer.appendChild(dot);
    }
  }

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- elements ---------- */
  var form = document.getElementById("analyzer-form");
  var results = document.getElementById("results");
  var resultsSub = document.getElementById("results-sub");
  var resetBtn = document.getElementById("reset-btn");
  var demoBtn = document.getElementById("demo-btn");
  var el = function (id) { return document.getElementById(id); };

  var DEFAULTS = {
    url: "", username: "Present", password: "Present", https: "Enabled",
    strength: "Strong", attempts: "Rate Limited", errors: "Enabled",
    validation: "Implemented", storage: "Hashed"
  };

  var DEMO = {
    url: "https://demo-insecure.example.com/login",
    username: "Present", password: "Present", https: "Disabled",
    strength: "Not Implemented", attempts: "Unlimited Attempts", errors: "Disabled",
    validation: "Missing", storage: "Plaintext / Unknown"
  };

  function apply(cfg) {
    Object.keys(cfg).forEach(function (k) { if (el(k)) el(k).value = cfg[k]; });
  }

  function read() {
    return {
      url: el("url").value.trim(),
      username: el("username").value,
      password: el("password").value,
      https: el("https").value,
      strength: el("strength").value,
      attempts: el("attempts").value,
      errors: el("errors").value,
      validation: el("validation").value,
      storage: el("storage").value
    };
  }

  /* ---------- educational checks (fully local simulation) ---------- */
  function buildChecks(c) {
    return [
      { name: "Missing HTTPS", check: "Transport Security (HTTPS/TLS)", failed: c.https === "Disabled", penalty: 25, severity: "CRITICAL", warning: false,
        description: "Credentials can be exposed if authentication traffic is not protected by TLS.",
        recommendation: "Use HTTPS/TLS for login and authenticated pages." },
      { name: "Weak Password Validation", check: "Password Strength Validation", failed: c.strength !== "Strong",
        penalty: c.strength === "Not Implemented" ? 15 : 10, severity: "MEDIUM", warning: c.strength === "Weak",
        description: "Weak password controls can make accounts easier to compromise.",
        recommendation: "Use strong password policies and password-strength feedback." },
      { name: "Unlimited Login Attempts", check: "Brute Force Protection", failed: c.attempts === "Unlimited Attempts", penalty: 20, severity: "HIGH", warning: false,
        description: "Unlimited attempts can increase the risk of brute-force attacks.",
        recommendation: "Implement login throttling, rate limiting, account protection and preferably MFA." },
      { name: "Detailed Authentication Errors", check: "Error Handling", failed: c.errors === "Disabled", penalty: 10, severity: "MEDIUM", warning: true,
        description: "Detailed login errors may reveal whether an account exists.",
        recommendation: "Use generic authentication failure messages." },
      { name: "Missing Input Validation", check: "Input Validation", failed: c.validation === "Missing", penalty: 10, severity: "HIGH", warning: false,
        description: "Unvalidated input can increase the risk of malicious input reaching application logic.",
        recommendation: "Implement appropriate server-side and client-side input validation." },
      { name: "Insecure Password Storage", check: "Password Storage", failed: c.storage !== "Hashed", penalty: 25, severity: "CRITICAL", warning: false,
        description: "Storing passwords as plaintext or using an unknown storage method is unsafe.",
        recommendation: "Store passwords using an appropriate password hashing mechanism." },
      { name: "Missing Username Field", check: "Authentication Identifier", failed: c.username === "Missing", penalty: 10, severity: "LOW", warning: true,
        description: "The login form does not contain a username/email field.",
        recommendation: "Provide a properly validated authentication identifier." },
      { name: "Missing Password Field", check: "Password Field", failed: c.password === "Missing", penalty: 10, severity: "HIGH", warning: false,
        description: "The login form does not contain a password field.",
        recommendation: "Use an appropriate authentication mechanism." }
    ];
  }

  function riskLevel(score) {
    if (score >= 80) return "SECURE";
    if (score >= 60) return "MODERATE RISK";
    if (score >= 40) return "HIGH RISK";
    return "CRITICAL RISK";
  }

  function animateScore(target) {
    var ring = el("score-ring");
    var out = el("score-value");
    var current = 0;
    var step = Math.max(1, Math.round(target / 40));
    clearInterval(animateScore._t);
    animateScore._t = setInterval(function () {
      current += step;
      if (current >= target) { current = target; clearInterval(animateScore._t); }
      out.textContent = current;
      ring.style.background = "conic-gradient(var(--primary) " + (current * 3.6) + "deg, var(--light-pink) 0deg)";
      ring.setAttribute("aria-label", "Security score " + current + " out of 100");
    }, 18);
  }

  function render(c) {
    var checks = buildChecks(c);
    var score = 100, vulns = 0, warns = 0, passed = 0;

    checks.forEach(function (k) {
      if (k.failed) { score -= k.penalty; if (k.warning) warns++; else vulns++; }
      else passed++;
    });
    score = Math.max(0, score);

    animateScore(score);
    el("risk-level").textContent = riskLevel(score);
    el("vuln-count").textContent = vulns;
    el("warn-count").textContent = warns;
    el("pass-count").textContent = passed;

    var grid = el("vuln-grid");
    grid.innerHTML = "";
    var failing = checks.filter(function (k) { return k.failed; });
    if (!failing.length) {
      var ok = document.createElement("article");
      ok.className = "vuln";
      ok.innerHTML = '<h4>No issues detected</h4><p>All simulated configuration checks passed. Keep reviewing real implementations against current security guidance.</p>';
      grid.appendChild(ok);
    }
    failing.forEach(function (k) {
      var card = document.createElement("article");
      card.className = "vuln";
      card.innerHTML =
        '<h4>' + k.name + '</h4>' +
        '<span class="pill sev-' + k.severity + '">' + k.severity + '</span>' +
        '<p><strong>Description:</strong> ' + k.description + '</p>' +
        '<p><strong>Recommendation:</strong> ' + k.recommendation + '</p>' +
        '<p><strong>Status:</strong> <span class="' + (k.warning ? 'status-warn' : 'status-vuln') + '">' +
        (k.warning ? '⚠ WARNING' : '✕ VULNERABLE') + '</span></p>';
      grid.appendChild(card);
    });

    var tbody = el("results-tbody");
    tbody.innerHTML = "";
    checks.forEach(function (k) {
      var status = !k.failed ? '<span class="status-pass">✓ PASS</span>'
        : (k.warning ? '<span class="status-warn">⚠ WARNING</span>' : '<span class="status-vuln">✕ VULNERABLE</span>');
      var tr = document.createElement("tr");
      tr.innerHTML =
        '<td data-label="Check">' + k.check + '</td>' +
        '<td data-label="Status">' + status + '</td>' +
        '<td data-label="Severity">' + (k.failed ? '<span class="pill sev-' + k.severity + '">' + k.severity + '</span>' : '—') + '</td>' +
        '<td data-label="Recommendation">' + (k.failed ? k.recommendation : "Configuration looks good.") + '</td>';
      tbody.appendChild(tr);
    });

    results.classList.add("show");
    resetBtn.hidden = false;
    resultsSub.textContent = c.url
      ? "Simulated assessment for sample input: " + c.url + " (no request was made)."
      : "Simulated assessment of the selected configuration.";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var c = read();
    var urlField = el("url");
    if (c.url && !/^https?:\/\/\S+$/i.test(c.url)) {
      urlField.setAttribute("aria-invalid", "true");
      resultsSub.textContent = "Please enter a sample URL starting with http:// or https:// (or leave it empty).";
      urlField.focus();
      return;
    }
    urlField.removeAttribute("aria-invalid");
    render(c);
    document.getElementById("vulnerabilities").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  demoBtn.addEventListener("click", function () {
    apply(DEMO);
    render(DEMO);
    document.getElementById("vulnerabilities").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resetBtn.addEventListener("click", function () {
    apply(DEFAULTS);
    results.classList.remove("show");
    resetBtn.hidden = true;
    resultsSub.textContent = "Run an analysis or try the demo to generate a report.";
    document.getElementById("analyzer").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- initial demo state ---------- */
  apply(DEMO);
  render(DEMO);
})();
