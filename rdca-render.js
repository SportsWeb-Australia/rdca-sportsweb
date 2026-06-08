/* ============================================================================
   RDCA SportsWeb One — render helpers  (shared/rdca-render.js)
   Turns the data in the data files (playhq.js, site-data.js) into on-system markup (reusing _shared.css
   + _pages.css classes). Pages call RDCA.render.X("#mount"). Logic lives here;
   DATA lives in the data files; PAGES stay thin. This is the "edit data in one
   place → site updates" demonstration.
   ========================================================================== */
(function () {
  window.RDCA = window.RDCA || {};
  var D = function () { return window.RDCA_DATA || {}; };
  var P = function () { return window.RDCA_PLAYHQ || {}; };

  // Content-governance pills ("Needs RDCA review" / "Sample") are OFF for the
  // public build. Set window.RDCA_SHOW_FLAGS = true (before this script loads)
  // to show them again for internal QA. The underlying flags stay in the data.
  if (typeof window.RDCA_SHOW_FLAGS !== "boolean") window.RDCA_SHOW_FLAGS = false;

  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){
    return ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" })[c]; }); }
  function el(sel){ return typeof sel === "string" ? document.querySelector(sel) : sel; }
  function set(sel, html){ var n = el(sel); if (n) n.innerHTML = html; }

  function flag(item){
    if (!window.RDCA_SHOW_FLAGS) return "";
    if (item && item.needsReview) return ' <span class="flag flag-review"><i class="ti ti-alert-triangle"></i> Needs RDCA review</span>';
    if (item && item.sample)      return ' <span class="flag flag-mock"><i class="ti ti-flask"></i> Sample</span>';
    return "";
  }
  function initials(name){ return String(name||"").split(/\s+/).map(function(w){return w[0];}).join("").slice(0,3).toUpperCase(); }

  var R = {
    // ---- club directory ----
    clubs: function (sel) {
      var d = D(); var clubs = d.clubs || [];
      var html = clubs.map(function (c) {
        var band = c.logo
          ? '<img src="' + esc(c.logo) + '" alt="' + esc(c.name) + '">'
          : ((window.RDCA && window.RDCA.LOGO)
              ? '<img src="' + window.RDCA.LOGO + '" alt="' + esc(c.name) + '" style="opacity:.95">'
              : '<span style="color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:22px;letter-spacing:1px">' + esc(initials(c.name)) + '</span>');
        return '<a class="club-card" href="#" title="Club profile coming soon">' +
                 '<div class="club-band">' + band + '</div>' +
                 '<div class="club-body">' +
                   '<div class="club-name">' + esc(c.name) + '</div>' +
                   '<div class="club-meta"><i class="ti ti-trophy"></i> ' + esc(c.grade) + '</div>' +
                 '</div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- sponsors grid (branded cards, mirrors the homepage treatment) ----
    sponsors: function (sel) {
      var modes = {
        invert: function (l, n) { return '<img src="' + esc(l) + '" alt="' + esc(n) + '" style="height:44px;max-width:160px;object-fit:contain;filter:brightness(0) invert(1);margin-bottom:12px">'; },
        chip:   function (l, n) { return '<div style="background:#fff;border-radius:8px;padding:6px 11px;display:inline-flex;align-items:center;margin-bottom:12px"><img src="' + esc(l) + '" alt="' + esc(n) + '" style="height:34px;max-width:140px;object-fit:contain"></div>'; },
        bare:   function (l, n) { return '<img src="' + esc(l) + '" alt="' + esc(n) + '" style="height:44px;max-width:160px;object-fit:contain;border-radius:6px;margin-bottom:12px">'; }
      };
      var html = (D().sponsors || []).map(function (s) {
        var grad = (s.grad && s.grad.length === 2)
          ? ("linear-gradient(135deg," + s.grad[0] + "," + s.grad[1] + ")")
          : "linear-gradient(135deg,var(--navy),var(--navy3))";
        var logo = s.logo ? (modes[s.logoMode] || modes.bare)(s.logo, s.name) : "";
        return '<a class="sp-card" href="' + esc(s.url) + '" target="_blank" rel="noopener" style="background:' + grad + '">' +
                 '<div class="sp-body">' +
                   '<div class="sp-tier">' + esc(s.tier) + '</div>' +
                   logo +
                   '<div class="sp-name">' + esc(s.name) + flag(s) + '</div>' +
                   (s.blurb ? '<div class="sp-blurb">' + esc(s.blurb) + '</div>' : '') +
                   '<div class="sp-cta"><i class="ti ti-external-link"></i> ' + esc(s.cta || "Visit Website") + '</div>' +
                 '</div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- documents / downloads ----
    documents: function (sel) {
      var html = (D().documents || []).map(function (doc) {
        var ic = doc.icon || "ti-file-text";
        var act = doc.type === "pdf" ? "ti-download" : "ti-external-link";
        return '<a class="doc-item" href="' + esc(doc.url) + '"' + (doc.url !== "#" ? ' target="_blank" rel="noopener"' : '') + '>' +
                 '<div class="doc-ic"><i class="ti ' + ic + '"></i></div>' +
                 '<div><div class="doc-tt">' + esc(doc.title) + flag(doc) + '</div>' +
                 '<div class="doc-mt">' + (doc.type === "pdf" ? "Download (PDF)" : "View") + '</div></div>' +
                 '<i class="ti ' + act + '"></i></a>';
      }).join("");
      set(sel, html);
    },

    // ---- committees / board ----
    committees: function (sel) {
      var c = D().committees || {}; var groups = c.groups || [];
      var html = groups.map(function (g) {
        var members = (g.members || []).map(function (m) {
          var av = m.photo
            ? '<div class="profile-av"><img src="' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy"></div>'
            : '<div class="profile-av">' + esc(initials(m.name)) + '</div>';
          var tel = m.phone ? m.phone.replace(/[^0-9+]/g, "") : "";
          return '<div class="profile-card">' + av +
                   '<div class="profile-name">' + esc(m.name) + flag(m) + '</div>' +
                   '<div class="profile-role">' + esc(m.role || "") + '</div>' +
                   '<div class="profile-contact">' +
                     (m.phone ? '<a href="tel:' + esc(tel) + '"><i class="ti ti-phone"></i> ' + esc(m.phone) + '</a>' : '') +
                     (m.email ? '<a href="mailto:' + esc(m.email) + '"><i class="ti ti-mail"></i> ' + esc(m.email) + '</a>' : '') +
                   '</div>' +
                 '</div>';
        }).join("");
        return '<div class="section-block"><div class="block-hed">' + esc(g.name) + flag(g) + '</div>' +
               (g.note ? '<div class="block-sub">' + esc(g.note) + '</div>' : '') +
               (members ? '<div class="profile-grid">' + members + '</div>' : '') +
               '</div>';
      }).join("");
      set(sel, html);
    },

    // ---- news ----
    news: function (sel) {
      var html = (D().news || []).map(function (n) {
        return '<a class="tile" href="' + esc(n.url) + '">' +
                 '<div class="tile-ic"><i class="ti ti-news"></i></div>' +
                 '<div><div class="tile-tt">' + esc(n.title) + flag(n) + '</div>' +
                 '<div class="tile-tx">' + esc(n.cat) + ' &middot; ' + esc(n.date) + '<br>' + esc(n.excerpt) + '</div></div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- honours table ----
    honours: function (sel) {
      var h = D().honours || {}; var rows = (h.premierships || []).map(function (r) {
        return '<tr><td>' + esc(r.season) + '</td><td>' + esc(r.grade) + '</td><td>' + esc(r.club) + flag(r) + '</td></tr>';
      }).join("");
      set(sel, '<table class="honours-table"><thead><tr><th>Season</th><th>Grade</th><th>Premier</th></tr></thead><tbody>' + rows + '</tbody></table>');
    },

    // ---- life members table ----
    lifeMembers: function (sel) {
      var rows = ((D().honours && D().honours.lifeMembers) || []).map(function (m) {
        var nm = m.doc
          ? '<a href="' + esc(m.doc) + '" target="_blank" rel="noopener">' + esc(m.name) + ' <i class="ti ti-external-link" style="font-size:11px;color:var(--muted)"></i></a>'
          : esc(m.name);
        return '<tr><td>' + esc(m.season) + '</td><td>' + nm + flag(m) + '</td><td>' + esc(m.assoc) + '</td></tr>';
      }).join("");
      set(sel, '<table class="honours-table"><thead><tr><th>Season</th><th>Life Member</th><th>Association</th></tr></thead><tbody>' + rows + '</tbody></table>');
    },

    // ---- honour boards hub (links to live RDCA boards) ----
    honoursHub: function (sel) {
      var html = ((D().honours && D().honours.boards) || []).map(function (b) {
        return '<a class="tile" href="' + esc(b.url) + '" target="_blank" rel="noopener">' +
                 '<div class="tile-ic"><i class="ti ' + (b.icon || "ti-link") + '"></i></div>' +
                 '<div><div class="tile-tt">' + esc(b.label) + ' <i class="ti ti-external-link" style="font-size:12px;color:var(--muted)"></i>' + flag(b) + '</div>' +
                 (b.note ? '<div style="font-size:12px;color:var(--muted);margin-top:2px">' + esc(b.note) + '</div>' : '') +
                 '</div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- section about (native) ----
    sectionAbout: function (sectionKey, sel) {
      var s = (D().sections || {})[sectionKey];
      if (!s || !s.aboutText) { set(sel, ""); return; }
      set(sel, '<div class="section-block"><div class="block-hed">About ' + esc(s.title) + '</div><div class="prose">' + s.aboutText + '</div></div>');
    },

    // ---- section code of conduct (native) ----
    sectionConduct: function (sectionKey, sel) {
      var s = (D().sections || {})[sectionKey];
      if (!s || !s.conduct) { set(sel, ""); return; }
      var c = s.conduct;
      var link = c.url
        ? '<div style="margin-top:14px"><a class="btn btn-navy btn-sm" href="' + esc(c.url) + '" target="_blank" rel="noopener"><i class="ti ti-clipboard-check"></i> Read the full ' + esc(s.title) + ' Code of Conduct <i class="ti ti-external-link"></i></a></div>'
        : '';
      set(sel, '<div class="section-block"><div class="block-hed">Code of Conduct</div><div class="prose">' + (c.summary || '') + '</div>' + link + '</div>');
    },

    // ---- board of management ----
    board: function (sel) {
      var members = ((D().board && D().board.members) || []);
      function initials(n){ return (n||"").split(/\s+/).map(function(w){return w[0]||"";}).join("").slice(0,2).toUpperCase(); }
      var html = members.map(function (m) {
        var av = m.photo
          ? '<div class="board-av"><img src="' + esc(m.photo) + '" alt="' + esc(m.name) + '" loading="lazy"></div>'
          : '<div class="board-av board-av-init">' + esc(initials(m.name)) + '</div>';
        var c = '';
        if (m.phone) c += '<a href="tel:' + esc(m.phone.replace(/\s+/g,'')) + '"><i class="ti ti-phone"></i> ' + esc(m.phone) + '</a>';
        if (m.email) c += '<a href="mailto:' + esc(m.email) + '"><i class="ti ti-mail"></i> ' + esc(m.email) + '</a>';
        return '<div class="board-card">' + av +
          '<div class="board-name">' + esc(m.name) + flag(m) + '</div>' +
          '<div class="board-role">' + esc(m.role) + '</div>' +
          (c ? '<div class="board-contact">' + c + '</div>' : '') +
        '</div>';
      }).join("");
      set(sel, '<div class="board-grid">' + html + '</div>');
    },

    // ---- premiers timeline ----
    premiers: function (sel) {
      var seasons = ((D().honours && D().honours.premiers) || []);
      if (!seasons.length) { set(sel, ""); return; }
      var html = '<div class="tl">' + seasons.map(function (s) {
        var wins = (s.winners || []).map(function (w) {
          var club = w.club
            ? '<span class="tl-club">' + esc(w.club) + '</span>'
            : '<span class="tl-tbc">TBC</span>';
          return '<div class="tl-win"><span class="tl-grade">' + esc(w.grade) + '</span>' + club + '</div>';
        }).join("");
        return '<div class="tl-item"><div class="tl-season">' + esc(s.season) + flag(s) + '</div><div class="tl-card">' + wins + '</div></div>';
      }).join("") + '</div>';
      set(sel, html);
    },

    // ---- umpire links ----
    umpires: function (sel) {
      var u = D().umpires || {};
      var html = (u.links || []).map(function (l) {
        return '<a class="tile" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
                 '<div class="tile-ic"><i class="ti ' + (l.icon || "ti-link") + '"></i></div>' +
                 '<div><div class="tile-tt">' + esc(l.label) + (l.external ? ' <i class="ti ti-external-link" style="font-size:12px;color:var(--muted)"></i>' : '') + flag(l) + '</div></div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- PlayHQ competition cards (Competition Hub) ----
    playhqCompetitions: function (sel) {
      var comps = (P().competitions) || {};
      var html = Object.keys(comps).map(function (k) {
        var c = comps[k];
        return '<div class="playhq-card">' +
                 '<span class="playhq-badge"><i class="ti ti-external-link"></i> PlayHQ</span>' +
                 '<h3>' + esc(c.label) + '</h3>' +
                 '<p>Fixtures, results and ladders for ' + esc(c.label) + ' are live on PlayHQ.' +
                   (c.season ? ' <span class="dim">(' + esc(c.season) + ')</span>' : '') + flag(c) + '</p>' +
                 '<div class="playhq-actions">' +
                   '<a class="btn btn-red btn-sm" href="' + esc(c.url) + '" target="_blank" rel="noopener">View on PlayHQ <i class="ti ti-external-link"></i></a>' +
                 '</div></div>';
      }).join("");
      set(sel, html);
    },

    // ---- a single section page's links (juniors/seniors/veterans/womens) ----
    sectionLinks: function (sectionKey, sel) {
      var s = (D().sections || {})[sectionKey]; if (!s) return;
      var tiles = [];
      function tile(label, url, icon, item){
        if (!url) return;
        var blank = item && item.blank;
        var internal = item && item.internal;
        var href = blank
          ? ('/placeholder.html?title=' + encodeURIComponent(label) + '&src=' + encodeURIComponent(url))
          : esc(url);
        var attrs = (blank || internal) ? '' : ' target="_blank" rel="noopener"';
        tiles.push('<a class="tile" href="' + href + '"' + attrs + '>' +
          '<div class="tile-ic"><i class="ti ' + (icon||"ti-link") + '"></i></div>' +
          '<div><div class="tile-tt">' + esc(label) + flag(item) + '</div></div>' +
          '<i class="ti ti-chevron-right"></i></a>');
      }
      if (s.committee)     tile(s.committee.label, s.committee.url, "ti-users", s.committee);
      if (s.documents)     tile(s.documents.label, s.documents.url, "ti-folder", s.documents);
      (s.links || []).forEach(function (l){ tile(l.label, l.url, "ti-link", l); });
      (s.repTeams || []).forEach(function (r){ tile(r.label, r.url, "ti-shield-half-filled", r); });
      set(sel, tiles.join(""));
    }
  };

  window.RDCA.render = R;
})();
