/* ============================================================================
   RDCA SportsWeb One — site content data  (shared/data/site-data.js)
   ----------------------------------------------------------------------------
   SINGLE SOURCE OF CONTENT for the data-driven sections. Pages render FROM
   this file — content is never hard-buried inside page markup. To update the
   site today, RDCA edits this one file. Later, each block below becomes a
   SportsWeb One / Supabase collection (see // CONNECT notes).

   FLAGS
     real:true        → migrated from rdca.com, safe to use.
     needsReview:true → present but unverified / possibly outdated → UI shows
                        a "Needs RDCA review" pill.
     sample:true      → placeholder for layout only → UI shows a "Sample" pill.
   ========================================================================== */

window.RDCA_DATA = {

  meta: {
    assoc: "Ringwood & District Cricket Association",
    short: "RDCA",
    est: 1892,
    contentSource: "rdca.com",
    lastMigrated: "2026-06-08"
  },

  /* ==========================================================================
     CLUBS  — 12 names are REAL (carried from the approved homepage).
     RDCA has 28 member clubs; the remaining 16 are flagged to be added.
     // CONNECT later: SportsWeb One "Clubs" collection / Supabase `clubs` table.
     // logo: Cloudinary (account dozdbhjhs). Per-club logo URLs still need
     //       mapping — until then the card shows the club initials.
     ========================================================================== */
  clubsNote: "12 of RDCA's 28 member clubs shown. Remaining 16 + per-club logos to be added from rdca.com / RDCA records.",
  clubs: [
    { key:"ringwood",      name:"Ringwood CC",       grade:"Premier Division", logo:null, real:true },
    { key:"croydon",       name:"Croydon CC",        grade:"Premier Division", logo:null, real:true },
    { key:"heathmont",     name:"Heathmont CC",      grade:"Premier Division", logo:null, real:true },
    { key:"wongapark",     name:"Wonga Park CC",     grade:"Premier Division", logo:null, real:true },
    { key:"kilsyth",       name:"Kilsyth CC",        grade:"Division 1",       logo:null, real:true },
    { key:"lilydale",      name:"Lilydale CC",       grade:"Division 1",       logo:null, real:true },
    { key:"warranwood",    name:"Warranwood CC",     grade:"Division 1",       logo:null, real:true },
    { key:"montrose",      name:"Montrose CC",       grade:"Division 1",       logo:null, real:true },
    { key:"coldstream",    name:"Coldstream CC",     grade:"Division 2",       logo:null, real:true },
    { key:"mtevelyn",      name:"Mt Evelyn CC",      grade:"Division 2",       logo:null, real:true },
    { key:"chirnsidepark", name:"Chirnside Park CC", grade:"Division 2",       logo:null, real:true },
    { key:"mooroolbark",   name:"Mooroolbark CC",    grade:"Division 2",       logo:null, real:true }
  ],

  /* ==========================================================================
     SECTIONS  — the grade-based structure of RDCA. Each links to the REAL
     rdca.com pages (so the rebuilt section pages are useful immediately) and
     to its PlayHQ competition (see playhq.js). Do NOT collapse RDCA into only
     Premier/Div1/Div2 — these sections are first-class.
     // CONNECT later: SportsWeb One "Sections" + linked committee/docs collections.
     ========================================================================== */
  sections: {
    juniors: {
      title:"Juniors", icon:"ti-friends",
      blurb:"Junior cricket across boys' and girls' age groups, including representative pathways.",
      playhqKey:"juniors",
      committee:{ label:"Junior Committee", url:"https://www.rdca.com/junior-committee", real:true },
      documents:{ label:"Junior Documents", url:"https://www.rdca.com/juniors-documents", real:true },
      codeOfConduct:{ label:"Junior Code of Conduct", url:"https://www.rdca.com/juniors-code-of-conduct", real:true },
      repTeams:[
        { label:"Rep Team — U12 Boys",  url:"https://www.rdca.com/juniors-under-12s", real:true },
        { label:"Rep Team — U12 Girls", url:"https://www.rdca.com/junior-rep-girls", real:true },
        { label:"Rep Team — U14 Boys",  url:"https://www.rdca.com/juniors-under-14s", real:true },
        { label:"Rep Team — U14 Girls", url:"https://www.rdca.com/copy-of-rep-team-girls", real:true },
        { label:"Rep Team — U16 Boys",  url:"https://www.rdca.com/juniors-under-16s", real:true },
        { label:"Rep Team — U17 Girls", url:"https://www.rdca.com/copy-2-of-rep-team-girls", real:true },
        { label:"Rep Team — U17 Boys",  url:"https://www.rdca.com/juniors-under-18s", real:true }
      ]
    },
    seniors: {
      title:"Seniors", icon:"ti-trophy",
      blurb:"RDCA senior grade cricket — the core Saturday competition across divisions.",
      playhqKey:"seniors",
      committee:{ label:"Senior Committee", url:"https://www.rdca.com/senior-committee", real:true },
      documents:{ label:"Seniors Documents", url:"https://www.rdca.com/seniors-documents", real:true },
      codeOfConduct:{ label:"Senior Code of Conduct", url:"https://www.rdca.com/seniors-code-of-conduct", real:true },
      links:[ { label:"Suspended Players", url:"https://www.rdca.com/suspended-players", real:true } ]
    },
    veterans: {
      title:"Veterans", icon:"ti-medal",
      blurb:"Veterans cricket for older players who want to keep enjoying the game.",
      playhqKey:"veterans",
      about:{ label:"About Veterans", url:"https://www.rdca.com/about-veterans", real:true },
      committee:{ label:"Veterans Committee", url:"https://www.rdca.com/veterans-committee", real:true },
      documents:{ label:"Veterans Documents", url:"https://www.rdca.com/veterans-documents", real:true },
      codeOfConduct:{ label:"Veterans Code of Conduct", url:"https://www.rdca.com/veterans-code-of-conduct", real:true }
    },
    womens: {
      title:"Women's", icon:"ti-ball-baseball",
      blurb:"Women's cricket in the RDCA, played in the East competition.",
      playhqKey:"womens",
      committee:{ label:"Women's Committee", url:"https://www.rdca.com/womens-committee", real:true },
      documents:{ label:"Women's Documents", url:"https://www.rdca.com/copy-of-documents", real:true, needsReview:true }
    }
  },

  /* ==========================================================================
     UMPIRES  — real rdca.com links.
     // CONNECT later: SportsWeb One "Umpires" section + panel collection.
     ========================================================================== */
  umpires: {
    blurb:"Umpiring in the RDCA — get involved, get accredited, and access resources.",
    links:[
      { label:"About Umpires",            url:"https://www.rdca.com/about-umpires", icon:"ti-info-circle", real:true },
      { label:"Umpires Committee",        url:"https://www.rdca.com/umpires-committee", icon:"ti-users", real:true },
      { label:"Become an Umpire",         url:"https://www.rdca.com/become-an-umpire", icon:"ti-user-plus", real:true },
      { label:"Training",                 url:"https://www.rdca.com/training", icon:"ti-school", real:true },
      { label:"Umpire Documents",         url:"https://www.rdca.com/umpires-documents", icon:"ti-file-text", real:true },
      { label:"Laws of Cricket (MCC)",    url:"https://www.lords.org/mcc/the-laws-of-cricket", icon:"ti-book", real:true, external:true },
      { label:"Umpire (re)Accreditation", url:"https://www.cricketvictoria.com.au/umpiring/level-two-umpire-accreditation/", icon:"ti-certificate", real:true, external:true }
    ]
  },

  /* ==========================================================================
     DOCUMENTS / POLICIES / FORMS  — these point at the real rdca.com document
     hubs per section. Individual downloadable files (PDFs) still need to be
     collected/hosted (Cloudinary or SportsWeb One) — flagged where missing.
     // CONNECT later: SportsWeb One "Documents" library / Supabase storage.
     ========================================================================== */
  documents: [
    { title:"Junior Documents",   url:"https://www.rdca.com/juniors-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"Seniors Documents",  url:"https://www.rdca.com/seniors-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"Veterans Documents", url:"https://www.rdca.com/veterans-documents", type:"hub", icon:"ti-folder", real:true },
    { title:"Women's Documents",  url:"https://www.rdca.com/copy-of-documents",  type:"hub", icon:"ti-folder", real:true, needsReview:true },
    { title:"Umpire Documents",   url:"https://www.rdca.com/umpires-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"By-Laws & Playing Conditions", url:"#", type:"pdf", icon:"ti-file-text", sample:true },
    { title:"Registration Form",            url:"#", type:"pdf", icon:"ti-file-text", sample:true },
    { title:"Safe Cricket / Child Safety Policy", url:"https://www.rdca.com/child-safety", type:"hub", icon:"ti-shield-check", real:true }
  ],

  /* ==========================================================================
     COMMITTEES / BOARD  — structure is real (links to rdca.com committee
     pages). Individual member names/photos still to be migrated → SAMPLE rows
     are placeholders so the layout is reviewable.
     // CONNECT later: SportsWeb One "People/Committee" collection.
     ========================================================================== */
  committees: {
    note:"Committee structure links to rdca.com. Member names below are placeholders pending RDCA confirmation.",
    groups:[
      { name:"RDCA Board / Executive", url:"#", needsReview:true,
        members:[
          { name:"President",  role:"President",  email:"admin@rdca.com.au", sample:true },
          { name:"Secretary",  role:"Secretary",  email:"admin@rdca.com.au", sample:true },
          { name:"Treasurer",  role:"Treasurer",  email:"admin@rdca.com.au", sample:true }
        ]
      },
      { name:"Senior Committee",   url:"https://www.rdca.com/senior-committee",   real:true, members:[] },
      { name:"Junior Committee",   url:"https://www.rdca.com/junior-committee",   real:true, members:[] },
      { name:"Veterans Committee", url:"https://www.rdca.com/veterans-committee", real:true, members:[] },
      { name:"Women's Committee",  url:"https://www.rdca.com/womens-committee",   real:true, members:[] },
      { name:"Umpires Committee",  url:"https://www.rdca.com/umpires-committee",  real:true, members:[] }
    ]
  },

  /* ==========================================================================
     SPONSORS  — REAL set carried from the approved homepage.
     // CONNECT later: SportsWeb One "Sponsors" collection (logo on Cloudinary).
     ========================================================================== */
  sponsors: [
    { name:"SEDA College",          tier:"Education Partner",  url:"https://seda.vic.edu.au", real:true },
    { name:"Grant Professionals",   tier:"Proud Sponsor",      url:"https://www.grantprofessionals.com.au/", real:true },
    { name:"Altegra",               tier:"Official Supplier",  url:"https://altegra.com.au", real:true },
    { name:"Field of View",         tier:"Photography",        url:"https://www.fieldofview.com.au/", real:true },
    { name:"Bendigo Bank Mooroolbark", tier:"Banking Partner", url:"https://www.bendigobank.com.au/branch/vic/community-bank-mooroolbark/", real:true },
    { name:"Dorset Gardens Hotel",  tier:"Hospitality",        url:"https://www.dorsetgardenshotel.com.au/", real:true },
    { name:"Fridge Repairs Today",  tier:"Official Sponsor",   url:"https://www.fridgerepairs.net.au/", real:true },
    { name:"Good Sports",           tier:"Community Partner",  url:"https://goodsports.com.au/", real:true }
  ],

  /* ==========================================================================
     NEWS  — SAMPLE items for layout. Replace with real match reports / notices.
     // CONNECT later: SportsWeb One "News" collection / Supabase `articles`.
     ========================================================================== */
  news: [
    { title:"Season 2025–26 registrations now open", date:"2025-09-01", cat:"Association", excerpt:"Player registrations for the new season are open across all grades and age groups.", url:"#", sample:true },
    { title:"Representative squads announced", date:"2025-08-20", cat:"Representative", excerpt:"Junior representative squads have been named ahead of the carnival season.", url:"#", sample:true },
    { title:"Umpire accreditation course dates", date:"2025-08-10", cat:"Umpires", excerpt:"Upcoming Level 1 and Level 2 umpire accreditation sessions across the east.", url:"#", sample:true }
  ],

  /* ==========================================================================
     HONOURS / RECORDS  — SAMPLE rows for layout. Replace with real honour board.
     // CONNECT later: SportsWeb One "Honours" collection.
     ========================================================================== */
  honours: {
    note:"Sample rows for layout only — replace with the real RDCA honour board / premiership history.",
    premierships: [
      { season:"2024–25", grade:"Premier Division", club:"—", sample:true },
      { season:"2024–25", grade:"Division 1",       club:"—", sample:true },
      { season:"2024–25", grade:"Division 2",       club:"—", sample:true }
    ]
  }
};
