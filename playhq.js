/* ============================================================================
   RDCA SportsWeb One — PlayHQ data & future-API config  (shared/data/playhq.js)
   ----------------------------------------------------------------------------
   WHY THIS FILE EXISTS
   The live RDCA site does NOT compute fixtures/results/ladders itself — it
   links them out to PlayHQ. For the 80% build we do the same (link/embed),
   but we keep everything PlayHQ in ONE place so that swapping links for a live
   API later is a single-file change, not a site-wide hunt.

   STATUS OF LINKS BELOW
   The season URLs were lifted from rdca.com and are from the 2023–24 season.
   They are marked needsReview:true — RDCA must confirm the CURRENT season URL
   each year (or we switch to the API + seasonId, see CONFIG.api).
   ========================================================================== */

window.RDCA_PLAYHQ = {

  /* Org landing page on PlayHQ (always valid, season-independent). */
  orgSlug: "ringwood-and-district-cricket-association",
  orgUrl:  "https://www.playhq.com/cricket-australia/org/ringwood-and-district-cricket-association",

  /* Per-section competition links (link-out for now).
     key matches the section pages (juniors/seniors/veterans/womens). */
  competitions: {
    seniors:  { label: "RDCA Seniors",  season: "Summer 2023–24", needsReview: true,
                url: "https://www.playhq.com/cricket-australia/org/ringwood-and-district-cricket-association/rdca-seniors-cricket-summer-202324/ba69a757" },
    juniors:  { label: "RDCA Juniors",  season: "Summer 2023–24", needsReview: true,
                url: "https://www.playhq.com/cricket-australia/org/ringwood-and-district-cricket-association/rdca-juniors-summer-202324/28066211" },
    womens:   { label: "RDCA Women's (East)", season: "Summer 2023–24", needsReview: true,
                url: "https://www.playhq.com/cricket-australia/org/ringwood-and-district-cricket-association/rdca-womens-east-summer-202324/2e56af2f" },
    veterans: { label: "RDCA Veterans", season: "Summer 2023–24", needsReview: true,
                url: "https://www.playhq.com/cricket-australia/org/ringwood-and-district-cricket-association/710bdac9" }
  },

  /* ==========================================================================
     FUTURE API CONFIG  — nothing here is called yet. It documents exactly what
     the live integration will need so the static site is already shaped for it.
     PlayHQ has a public API (api.playhq.com) that requires an x-api-key and a
     x-phq-tenant header (tenant: "ca" for Cricket Australia).
     ========================================================================== */
  api: {
    enabled: false,                          // flip to true once keys are wired
    baseUrl: "https://api.playhq.com/v1",
    tenant: "ca",                            // Cricket Australia tenant
    // SECRET — never commit a real key to the repo. Inject at build/deploy time
    // (Vercel env var PLAYHQ_API_KEY) or proxy through SportsWeb One. See dev note.
    apiKeyEnv: "PLAYHQ_API_KEY",

    orgId: null,                             // RDCA PlayHQ org UUID — TODO confirm
    seasonIds: { seniors: null, juniors: null, womens: null, veterans: null },
    gradeIds:  {},                           // gradeId -> friendly grade name
    clubIds:   {},                           // clubId  -> club key (see site-data.clubs)

    cacheTtlMinutes: 15,                     // cache PlayHQ responses; don't hammer
    requestTimeoutMs: 8000,

    // Graceful degradation — what the UI shows when the API is off/slow/down.
    fallback: {
      mode: "link",                          // "link" = show PlayHQ button instead of live table
      message: "Live ladders & results are on PlayHQ.",
      onError:   "Live data is temporarily unavailable — view it directly on PlayHQ.",
      onEmpty:   "No matches scheduled yet for this grade."
    },

    // Manual override — lets an admin pin/replace data without code (e.g. finals,
    // washouts, corrections). Later sourced from SportsWeb One / Supabase.
    overrides: { enabled: false, items: [] }
  },

  /* Helper: returns the link for a section, falling back to the org page. */
  linkFor: function (key) {
    var c = this.competitions[key];
    return (c && c.url) || this.orgUrl;
  }
};
