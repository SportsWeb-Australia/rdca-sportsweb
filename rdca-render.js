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

  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){
    return ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" })[c]; }); }
  function el(sel){ return typeof sel === "string" ? document.querySelector(sel) : sel; }
  function set(sel, html){ var n = el(sel); if (n) n.innerHTML = html; }

  function flag(item){
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
          : '<span style="color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:22px;letter-spacing:1px">' + esc(initials(c.name)) + '</span>';
        return '<a class="club-card" href="#" title="Club profile coming soon">' +
                 '<div class="club-band">' + band + '</div>' +
                 '<div class="club-body">' +
                   '<div class="club-name">' + esc(c.name) + '</div>' +
                   '<div class="club-meta"><i class="ti ti-trophy"></i> ' + esc(c.grade) + '</div>' +
                 '</div></a>';
      }).join("");
      set(sel, html);
    },

    // ---- sponsors grid ----
    sponsors: function (sel) {
      var html = (D().sponsors || []).map(function (s) {
        return '<a class="tile" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
                 '<div class="tile-ic red"><i class="ti ti-heart-handshake"></i></div>' +
                 '<div><div class="tile-tt">' + esc(s.name) + flag(s) + '</div>' +
                 '<div class="tile-tx">' + esc(s.tier) + '</div></div>' +
                 '<i class="ti ti-external-link"></i></a>';
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
                 '<div class="doc-mt">' + (doc.type === "pdf" ? "PDF download" : "Opens on rdca.com") + '</div></div>' +
                 '<i class="ti ' + act + '"></i></a>';
      }).join("");
      set(sel, html);
    },

    // ---- committees / board ----
    committees: function (sel) {
      var c = D().committees || {}; var groups = c.groups || [];
      var html = groups.map(function (g) {
        var members = (g.members || []).map(function (m) {
          return '<div class="profile-card">' +
                   '<div class="profile-av">' + esc(initials(m.name)) + '</div>' +
                   '<div class="profile-name">' + esc(m.name) + flag(m) + '</div>' +
                   '<div class="profile-role">' + esc(m.role || "") + '</div>' +
                   (m.email ? '<div class="profile-contact"><a href="mailto:' + esc(m.email) + '">' + esc(m.email) + '</a></div>' : '') +
                 '</div>';
        }).join("");
        var linkBtn = (g.url && g.url !== "#")
          ? '<a class="btn btn-outline-red btn-sm" href="' + esc(g.url) + '" target="_blank" rel="noopener">View on rdca.com <i class="ti ti-external-link"></i></a>' : '';
        return '<div class="section-block"><div class="block-hed">' + esc(g.name) + flag(g) + '</div>' +
               (members ? '<div class="profile-grid" style="margin-bottom:12px">' + members + '</div>' : '<div class="block-sub">Member list to be migrated from rdca.com.</div>') +
               linkBtn + '</div>';
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
        tiles.push('<a class="tile" href="' + esc(url) + '" target="_blank" rel="noopener">' +
          '<div class="tile-ic"><i class="ti ' + (icon||"ti-link") + '"></i></div>' +
          '<div><div class="tile-tt">' + esc(label) + flag(item) + '</div></div>' +
          '<i class="ti ti-chevron-right"></i></a>');
      }
      if (s.about)         tile(s.about.label, s.about.url, "ti-info-circle", s.about);
      if (s.committee)     tile(s.committee.label, s.committee.url, "ti-users", s.committee);
      if (s.documents)     tile(s.documents.label, s.documents.url, "ti-folder", s.documents);
      if (s.codeOfConduct) tile(s.codeOfConduct.label, s.codeOfConduct.url, "ti-clipboard-check", s.codeOfConduct);
      (s.links || []).forEach(function (l){ tile(l.label, l.url, "ti-link", l); });
      (s.repTeams || []).forEach(function (r){ tile(r.label, r.url, "ti-shield-half-filled", r); });
      set(sel, tiles.join(""));
    }
  };

  window.RDCA.render = R;
})();
