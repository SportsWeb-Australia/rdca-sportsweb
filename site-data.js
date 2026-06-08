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

  board: {
    note:"RDCA Board of Management — governs the Association across all sections.",
    members: [
      { role:"President",                name:"Michael Finn",   phone:"0400 700 606", email:"president@rdca.com", photo:"https://static.wixstatic.com/media/bad3dd_6f15d366553945be94fdd286d2d90f83~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/bad3dd_6f15d366553945be94fdd286d2d90f83~mv2.jpg", real:true },
      { role:"Vice President",           name:"Pat Meehan",                                                       photo:"https://static.wixstatic.com/media/c4acf1_6be612129ee9478bb0a6862c7ada6aeb~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/c4acf1_6be612129ee9478bb0a6862c7ada6aeb~mv2.jpg", real:true },
      { role:"Finance Manager",          name:"Graeme Seymour", phone:"0439 114 843", email:"finance@rdca.com",  photo:"https://static.wixstatic.com/media/9e3e38_a80cee731bb24a6d9cf1eca20284baa9~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/9e3e38_a80cee731bb24a6d9cf1eca20284baa9~mv2.jpg", real:true },
      { role:"Senior Chairman",          name:"Wayne Hartley",  phone:"0411 403 149", real:true },
      { role:"Admin Manager",            name:"Timothy Court",  phone:"0407 838 275", email:"court@rdca.com",    photo:"https://static.wixstatic.com/media/bad3dd_1a740526e320490489b01534c604bce3~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/bad3dd_1a740526e320490489b01534c604bce3~mv2.jpg", real:true },
      { role:"Umpires Chairman",         name:"Jordan Russell", phone:"0413 357 444", email:"j_brussell@outlook.com", photo:"https://static.wixstatic.com/media/9e3e38_25b16187e9dd42bc82f6374e0570750d~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/9e3e38_25b16187e9dd42bc82f6374e0570750d~mv2.jpg", real:true },
      { role:"Marketing & Sponsorship",  name:"Jo Fairy",       phone:"0411 313 334", email:"marketing@rdca.com",photo:"https://static.wixstatic.com/media/bad3dd_f9f0950efb9048f3b8388b1a54351292~mv2.jpg/v1/fill/w_220,h_220,al_c,q_85,enc_avif,quality_auto/bad3dd_f9f0950efb9048f3b8388b1a54351292~mv2.jpg", real:true }
    ]
  },
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
  /* ============================================================================
     MEDIA — photo galleries (Field of View) + video (FrogBox live + archive)
     photoAlbums.url are the REAL Field of View / ShootProof season galleries.
     cover/thumb images are PLACEHOLDER action shots — swap for real RDCA photos.
     ========================================================================== */
  photosNote: "Match-day galleries are shot by Field of View Photography (an RDCA partner) and hosted on their site. Cover images here are placeholders \u2014 swap each for the season's real cover.",
  photoAlbums: [
    { season:"Season 2025/26",              tag:"Latest",  url:"https://fieldofviewphotography.shootproof.com/gallery/28411719/album/21236651", cover:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=70&auto=format&fit=crop" },
    { season:"Season 2024/25",              tag:"",        url:"https://fieldofviewphotography.shootproof.com/gallery/25299604/album/18262926", cover:"https://images.unsplash.com/photo-1593766788306-28561086c716?w=600&q=70&auto=format&fit=crop" },
    { season:"Season 2023/24",              tag:"",        url:"https://fieldofviewphotography.shootproof.com/gallery/19340167/album/15929979", cover:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=70&auto=format&fit=crop" },
    { season:"Season 2022/23",              tag:"",        url:"https://fieldofviewphotography.shootproof.com/gallery/19340167/album/13278529", cover:"https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&q=70&auto=format&fit=crop" },
    { season:"Premiership Posters 2024/25", tag:"Posters", url:"https://fieldofviewphotography.shootproof.com/gallery/15321413/album/19797650", cover:"https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&q=70&auto=format&fit=crop" },
    { season:"Premiership Posters 2023/24", tag:"Posters", url:"https://fieldofviewphotography.shootproof.com/gallery/15321413/album/16811579", cover:"https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=600&q=70&auto=format&fit=crop" }
  ],
  photoStrip: ["https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1593766788306-28561086c716?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1593766788306-28561086c716?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=70&auto=format&fit=crop","https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&q=70&auto=format&fit=crop"],
  liveStream: { status:"offline", title:"RDCA Match of the Round", sub:"Live streaming returns each Saturday during the season.", sponsor:"Your business here", embedUrl:null, channelUrl:"https://www.frogbox.live/" },
  videosNote: "Selected RDCA games are streamed live via FrogBox and replays are kept here. The archive below is placeholder \u2014 wire it to the RDCA FrogBox channel.",
  videos: [
    { title:"Premier Division \u2014 Ringwood v Croydon", comp:"Premier Division", date:"Sat 14 Feb", thumb:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=70&auto=format&fit=crop", url:"#", mock:true },
    { title:"Division 1 \u2014 Kilsyth v Lilydale",        comp:"Division 1",       date:"Sat 14 Feb", thumb:"https://images.unsplash.com/photo-1593766788306-28561086c716?w=600&q=70&auto=format&fit=crop", url:"#", mock:true },
    { title:"Women's \u2014 Grand Final",                 comp:"Women's",          date:"Sun 1 Feb",  thumb:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=70&auto=format&fit=crop", url:"#", mock:true },
    { title:"Premier Division \u2014 Semi Final",          comp:"Finals",           date:"Sat 7 Feb",  thumb:"https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&q=70&auto=format&fit=crop", url:"#", mock:true },
    { title:"Juniors \u2014 U16 Grand Final",              comp:"Juniors",          date:"Sun 8 Feb",  thumb:"https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&q=70&auto=format&fit=crop", url:"#", mock:true },
    { title:"Veterans \u2014 Round 12",                    comp:"Veterans",         date:"Sat 31 Jan", thumb:"https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=600&q=70&auto=format&fit=crop", url:"#", mock:true }
  ],
  /* ----- players: profile + trading-card data (illustrative mock) ----- */
  playersNote: "Player profiles are illustrative mock data for layout. Real players, photos and season stats to be supplied by clubs / PlayHQ.",
  players: [
    { key:"jake-smith", name:"Jake Smith", club:"ringwood", grade:"Premier Division", role:"Opening Batter",
      bats:"Right-hand bat", bowls:"Right-arm medium", number:34, born:"2001", town:"Ringwood",
      rarity:"Season Top Scorer", photo:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=72&auto=format&fit=crop", season:"2024/25",
      bat:{ M:15, Runs:687, HS:"142", Avg:57.3, SR:81.2, "50s":5, "100s":2 },
      bowl:{ M:15, Wkts:6, Best:"2/14", Avg:31.0, Econ:4.6 }, mock:true },
    { key:"mia-chen", name:"Mia Chen", club:"croydon", grade:"Premier Division", role:"All-rounder",
      bats:"Left-hand bat", bowls:"Right-arm off-spin", number:7, born:"2003", town:"Croydon",
      rarity:"Players' Player", photo:"https://images.unsplash.com/photo-1593766788306-28561086c716?w=600&q=72&auto=format&fit=crop", season:"2024/25",
      bat:{ M:14, Runs:431, HS:"88", Avg:39.2, SR:74.5, "50s":3, "100s":0 },
      bowl:{ M:14, Wkts:21, Best:"4/22", Avg:18.6, Econ:3.8 }, mock:true },
    { key:"sam-rivera", name:"Sam Rivera", club:"kilsyth", grade:"Division 1", role:"Fast Bowler",
      bats:"Right-hand bat", bowls:"Right-arm fast", number:88, born:"2000", town:"Kilsyth",
      rarity:"Most Wickets", photo:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=72&auto=format&fit=crop", season:"2024/25",
      bat:{ M:13, Runs:142, HS:"34*", Avg:17.7, SR:96.0, "50s":0, "100s":0 },
      bowl:{ M:13, Wkts:34, Best:"6/31", Avg:13.4, Econ:3.2 }, mock:true },
    { key:"tom-okafor", name:"Tom Okafor", club:"heathmont", grade:"Premier Division", role:"Wicketkeeper-Batter",
      bats:"Right-hand bat", bowls:"-", number:1, born:"1999", town:"Heathmont",
      rarity:"Most Dismissals", photo:"https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=600&q=72&auto=format&fit=crop", season:"2024/25",
      bat:{ M:15, Runs:509, HS:"96", Avg:42.4, SR:88.1, "50s":4, "100s":0 },
      bowl:{ M:15, Wkts:0, Best:"-", Avg:0, Econ:0 }, mock:true }
  ],
  clubs: [
    { key:"ringwood",      name:"Ringwood CC",       grade:"Premier Division", logo:null, colors:["#0d2f6b","#0a1f47"], real:true },
    { key:"croydon",       name:"Croydon CC",        grade:"Premier Division", logo:null, colors:["#0a5c2e","#063d1e"], real:true },
    { key:"heathmont",     name:"Heathmont CC",      grade:"Premier Division", logo:null, colors:["#7a1020","#4d0a14"], real:true },
    { key:"wongapark",     name:"Wonga Park CC",     grade:"Premier Division", logo:null, colors:["#0a5e5e","#063d3d"], real:true },
    { key:"kilsyth",       name:"Kilsyth CC",        grade:"Division 1",       logo:null, colors:["#13366b","#0a1f44"], real:true },
    { key:"lilydale",      name:"Lilydale CC",       grade:"Division 1",       logo:null, colors:["#4a1d6b","#2f1247"], real:true },
    { key:"warranwood",    name:"Warranwood CC",     grade:"Division 1",       logo:null, colors:["#a8521a","#6e3410"], real:true },
    { key:"montrose",      name:"Montrose CC",       grade:"Division 1",       logo:null, colors:["#1f5c2e","#123d1d"], real:true },
    { key:"coldstream",    name:"Coldstream CC",     grade:"Division 2",       logo:null, colors:["#334155","#1e293b"], real:true },
    { key:"mtevelyn",      name:"Mt Evelyn CC",      grade:"Division 2",       logo:null, colors:["#7a1530","#4d0d1f"], real:true },
    { key:"chirnsidepark", name:"Chirnside Park CC", grade:"Division 2",       logo:null, colors:["#1e3a8a","#152a63"], real:true },
    { key:"mooroolbark",   name:"Mooroolbark CC",    grade:"Division 2",       logo:null, colors:["#0e5f8a","#093f5c"], real:true }
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
      aboutText:"<p>RDCA junior cricket caters for boys and girls across a range of age groups, from entry-level formats through to under-17s. Alongside weekly club fixtures, the Association runs representative (rep) team pathways that give talented juniors the chance to test themselves against the best in the region.</p>",
      conduct:{ summary:"<p>Junior matches are played in the true spirit of cricket, with an emphasis on safety, enjoyment and good sportsmanship. The Code of Conduct sets out what is expected of players, coaches, parents and spectators &mdash; respect for umpires and opponents, fair play, and zero tolerance for abuse or discrimination &mdash; and works alongside the Association&rsquo;s child safety commitments.</p>", url:"https://www.rdca.com/juniors-code-of-conduct" },
      committee:{ label:"Junior Committee", url:"/committees.html", internal:true, real:true },
      documents:{ label:"Junior Documents", url:"https://www.rdca.com/juniors-documents", real:true },
      codeOfConduct:{ label:"Junior Code of Conduct", url:"https://www.rdca.com/juniors-code-of-conduct", real:true },
      repTeams:[
        { label:"Rep Team — U12 Boys",  url:"https://www.rdca.com/juniors-under-12s", real:true, blank:true },
        { label:"Rep Team — U12 Girls", url:"https://www.rdca.com/junior-rep-girls", real:true, blank:true },
        { label:"Rep Team — U14 Boys",  url:"https://www.rdca.com/juniors-under-14s", real:true, blank:true },
        { label:"Rep Team — U14 Girls", url:"https://www.rdca.com/copy-of-rep-team-girls", real:true, blank:true },
        { label:"Rep Team — U16 Boys",  url:"https://www.rdca.com/juniors-under-16s", real:true, blank:true },
        { label:"Rep Team — U17 Girls", url:"https://www.rdca.com/copy-2-of-rep-team-girls", real:true, blank:true },
        { label:"Rep Team — U17 Boys",  url:"https://www.rdca.com/juniors-under-18s", real:true, blank:true }
      ]
    },
    seniors: {
      title:"Seniors", icon:"ti-trophy",
      blurb:"RDCA senior grade cricket — the core Saturday competition across divisions.",
      playhqKey:"seniors",
      aboutText:"<p>Senior cricket is the heart of the RDCA &mdash; the traditional Saturday competition contested across multiple grades, from Premier Division through the lower divisions. Clubs field teams to suit players of every standard, from those chasing premierships to weekend social cricketers.</p>",
      conduct:{ summary:"<p>RDCA matches are played in the true spirit of cricket. The Code of Conduct &mdash; based on the Victorian Metropolitan Cricket Union (VMCU) code &mdash; sets out the standards of behaviour expected of players, club officials, coaches and spectators: respect for umpires and opponents, fair play, and zero tolerance for abuse, intimidation or discrimination. Serious or repeated breaches can lead to reports and suspensions.</p>", url:"https://www.rdca.com/seniors-code-of-conduct" },
      committee:{ label:"Senior Committee", url:"/committees.html", internal:true, real:true },
      documents:{ label:"Seniors Documents", url:"https://www.rdca.com/seniors-documents", real:true },
      codeOfConduct:{ label:"Senior Code of Conduct", url:"https://www.rdca.com/seniors-code-of-conduct", real:true },
      links:[ { label:"Suspended Players", url:"https://www.rdca.com/suspended-players", real:true } ]
    },
    veterans: {
      title:"Veterans", icon:"ti-medal",
      blurb:"Veterans cricket for older players who want to keep enjoying the game.",
      playhqKey:"veterans",
      aboutText:"<p>RDCA Veterans cricket is an Over-40s Big Bash &mdash; a relaxed Twenty20 format for players who want to keep enjoying the game in their later cricketing years. Teams nominate each season, and players of all backgrounds are welcome.</p><p style='margin-top:10px'><em>The Veterans&rsquo; motto: &ldquo;Strive to do your best, never give up and treat people with respect.&rdquo;</em></p><p style='margin-top:10px'>To get involved, speak to your club or call Peter Chamings on <a href='tel:+61419693097'>0419 693 097</a>. Forms: <a href='https://www.rdca.com/_files/ugd/bad3dd_ff323a6c498c495692aee01743d6d570.docx?dn=RDCA%20Over%2040s%20Big%20Bash%207%20Team%20Nomination%20form%202026.docx' target='_blank' rel='noopener'>Team Nomination (2026)</a> &middot; <a href='https://www.rdca.com/_files/ugd/bad3dd_bdb67564cd4347b49a516f68f16879f8.docx?dn=RDCA%20Big%20Bash%20Veterans%20T20%20Rules%202026.docx' target='_blank' rel='noopener'>Big Bash T20 Rules (2026)</a>.</p>",
      conduct:{ summary:"<p>Veterans cricket is played in great spirit, true to the section&rsquo;s motto. The Code of Conduct sets out the behaviour expected of all participants &mdash; respect for opponents and officials, fair play, and no abuse, intimidation or discrimination.</p>", url:"https://www.rdca.com/veterans-code-of-conduct" },
      about:{ label:"About Veterans", url:"https://www.rdca.com/about-veterans", real:true },
      committee:{ label:"Veterans Committee", url:"/committees.html", internal:true, real:true },
      documents:{ label:"Veterans Documents", url:"https://www.rdca.com/veterans-documents", real:true },
      codeOfConduct:{ label:"Veterans Code of Conduct", url:"https://www.rdca.com/veterans-code-of-conduct", real:true }
    },
    womens: {
      title:"Women's", icon:"ti-ball-baseball",
      blurb:"Women's cricket in the RDCA, played in the East competition.",
      playhqKey:"womens",
      aboutText:"<p>Women&rsquo;s cricket in the RDCA is played in the East competition, offering a welcoming and competitive environment for women and girls to take up or continue playing. New players of all experience levels are encouraged to get involved through their local club.</p>",
      committee:{ label:"Women's Committee", url:"/committees.html", internal:true, real:true },
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
      { label:"Umpires Committee",        url:"/committees.html", icon:"ti-users", internal:true, real:true },
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
    // Key forms / rules / policies — direct files on rdca.com (live; no upload needed)
    { title:"Registration Form",              url:"https://www.rdca.com/_files/ugd/c846e3_7ca10e17623b49e8ad0a6e9e4b08f6c3.pdf", type:"pdf", icon:"ti-file-text", real:true },
    { title:"Senior Rules 2026-27",           url:"https://www.rdca.com/_files/ugd/5d13eb_213140ec8e044fe589d6a95ab6b7af43.pdf", type:"pdf", icon:"ti-file-text", real:true },
    { title:"Adverse Weather Policy 2026-27", url:"https://www.rdca.com/_files/ugd/5d13eb_5e0a952f27094f01815aa4c57eb5171a.pdf", type:"pdf", icon:"ti-file-text", real:true },
    { title:"Clearances & Transfers Guide",   url:"https://www.rdca.com/_files/ugd/c846e3_2337caa1f5584ee99832599a9812cdf3.pdf", type:"pdf", icon:"ti-file-text", real:true },
    // Section document hubs — open the current pages on rdca.com
    { title:"Junior Documents",   url:"https://www.rdca.com/juniors-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"Seniors Documents",  url:"https://www.rdca.com/seniors-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"Veterans Documents", url:"https://www.rdca.com/veterans-documents", type:"hub", icon:"ti-folder", real:true },
    { title:"Women's Documents",  url:"https://www.rdca.com/copy-of-documents",  type:"hub", icon:"ti-folder", real:true, needsReview:true },
    { title:"Umpire Documents",   url:"https://www.rdca.com/umpires-documents",  type:"hub", icon:"ti-folder", real:true },
    { title:"Safe Cricket / Child Safety Policy", url:"https://www.rdca.com/child-safety", type:"hub", icon:"ti-shield-check", real:true }
  ],

  /* ==========================================================================
     COMMITTEES / BOARD  — structure is real (links to rdca.com committee
     pages). Individual member names/photos still to be migrated → SAMPLE rows
     are placeholders so the layout is reviewable.
     // CONNECT later: SportsWeb One "People/Committee" collection.
     ========================================================================== */
  committees: {
    note:"The volunteers and officials who run RDCA across each section of the competition.",
    groups:[
      { name:"Senior Committee", real:true, members:[
        { role:"Chair", name:"Wayne Hartley", phone:"0411 403 149", email:"hartleyfam@bigpond.com" },
        { role:"Senior Secretary", name:"Paul Broussard", phone:"0438 342 358", email:"seniors@rdca.com", photo:"https://static.wixstatic.com/media/c4acf1_2a526edbf4a441e1a0f16ace087f3a24~mv2.jpg/v1/crop/x_0,y_10,w_2250,h_2242/fill/w_263,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Paul%20Brousard_edited.jpg" },
        { role:"Asst. Secretary — Minutes & Rules", name:"Chris Anderson", phone:"0401 945 830", email:"Christopher.Anderson@education.vic.gov.au", photo:"https://static.wixstatic.com/media/93eb8a_6a891c8f31e94c6bb260c61d267b8630~mv2.jpg/v1/crop/x_0,y_608,w_2432,h_2432/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Staff%20-%20Mr%20Chris%20Anderson.jpg" },
        { role:"VMCU Rep", name:"Pat Meehan", photo:"https://static.wixstatic.com/media/c4acf1_6be612129ee9478bb0a6862c7ada6aeb~mv2.jpg/v1/fill/w_199,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pat%20Meehan%20medium.jpg" },
        { role:"Veterans Secretary", name:"Peter Chamings", phone:"0419 693 097", email:"peter.chamings@gmail.com", photo:"https://static.wixstatic.com/media/c4acf1_ad7dc3b3abaf4c539244e1f4c7fc6a43~mv2.jpg/v1/crop/x_0,y_181,w_1368,h_1363/fill/w_283,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/peter%20chamings%20veterans_edited_edited_jp.jpg" },
        { role:"General Committee", name:"David Peel", photo:"https://static.wixstatic.com/media/c4acf1_5ebb0c94f1f54f0b92cc820c61d77dfe~mv2.jpg/v1/crop/x_0,y_386,w_2316,h_2316/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/David%20Peel.jpg" },
        { role:"General Committee", name:"Steve Oxley", photo:"https://static.wixstatic.com/media/c4acf1_296dfa3e8b4e4a559841e5fbf2e50cb1~mv2.webp/v1/fill/w_276,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Steve%20Oxley.webp" },
        { role:"PlayHQ", name:"Adam Kuklych", phone:"0402 382 899", email:"adam@mcservices.com.au" }
      ]},
      { name:"Junior Committee", real:true, members:[
        { role:"Junior President", name:"Gavin Kellar", phone:"0401 032 404", email:"gkellar@whitefriars.vic.edu.au", photo:"https://static.wixstatic.com/media/23872a_00948f2b62c64c3a9f6cb9edf9750219~mv2.jpg/v1/crop/x_0,y_84,w_652,h_652/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed%20(18).jpg" },
        { role:"Secretary", name:"Bill Stafford", phone:"0400 442 050", email:"billstafford1@bigpond.com", photo:"https://static.wixstatic.com/media/c846e3_87c61cb8cb344a71a7b9f2404cf45504~mv2.jpg/v1/crop/x_0,y_16,w_1078,h_1078/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bill.jpg" },
        { role:"Girls' Coordinator", name:"Cherie Howland", phone:"0479 196 435", email:"RDCAgirls@gmail.com" },
        { role:"Junior Umpire Coordinator", name:"Doug Dowling", phone:"0432 374 748", email:"dougdowling03@gmail.com" },
        { role:"Girls' Rep Cricket & Development", name:"Dave Sykes", phone:"0419 388 196", email:"dave_sykes_6@yahoo.com.au" },
        { role:"Committee", name:"Kristi Disney", phone:"0431 309 269", email:"kristidisney@bigpond.com" },
        { role:"Committee", name:"Eloise Howland", email:"howlands179@gmail.com" },
        { role:"Committee", name:"Luke Henderson", phone:"0418 313 850", email:"luke.henderson3@bigpond.com" },
        { role:"Committee", name:"Leah Parker", phone:"0411 417 253", email:"leahandstuart@hotmail.com" }
      ]},
      { name:"Women's Committee", real:true, members:[
        { role:"Chair", name:"Linda Bailey", email:"lindabb101@gmail.com", photo:"https://static.wixstatic.com/media/c846e3_156ff6f95fc8411184bd0343bebfb850~mv2.jpg/v1/crop/x_0,y_368,w_2208,h_2208/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20201022_123117.jpg" },
        { role:"Secretary", name:"Pamela Vodopier", phone:"0407 728 786", email:"pvods74@gmail.com" },
        { role:"Secretary", name:"Timothy Court", email:"womens@rdca.com" },
        { role:"BOM Rep", name:"Pat Meehan", phone:"9758 4037", email:"pcmeehan@bigpond.net.au" },
        { role:"Communications Coordinator", name:"Briony Polkinghorne" },
        { role:"Rules", name:"Dee Callanan", phone:"0427 330 733", email:"dee.callanan@yahoo.com" },
        { role:"FTGDCA Rep", name:"Belinda Cunningham" },
        { role:"Junior Liaison", name:"Jas Harrison" }
      ]},
      { name:"Umpires Committee", real:true, members:[
        { role:"President", name:"Jordan Russell", phone:"0413 357 444", email:"j_brussell@outlook.com", photo:"https://static.wixstatic.com/media/9e3e38_25b16187e9dd42bc82f6374e0570750d~mv2.jpg/v1/crop/x_0,y_32,w_412,h_412/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jordan%202.jpg" },
        { role:"Secretary", name:"Doug Wooles" },
        { role:"Selector", name:"Andy Laws", phone:"0418 545 175", email:"alaws2709@gmail.com", photo:"https://static.wixstatic.com/media/9e3e38_b284b8f5d7be414aa5e26843995635a9~mv2.jpg/v1/crop/x_0,y_504,w_3024,h_3024/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Andy%20Laws.jpg" },
        { role:"Mentor", name:"Steve Pascoe OAM", phone:"0431 170 963", email:"steve.ann1@outlook.com", photo:"https://static.wixstatic.com/media/bad3dd_f90584f1c3d443a788570bb91be5a33e~mv2.jpg/v1/crop/x_1,y_0,w_350,h_350/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/steve-pascoe%20umpires.jpg" },
        { role:"Committee Member", name:"Lothar Pilz", email:"rdca.lothar.pilz@gmail.com", photo:"https://static.wixstatic.com/media/9e3e38_6d8ba35774df489a9a1881b468676bdb~mv2.jpg/v1/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lothar.jpg" },
        { role:"Merchandise", name:"Barry Johnson", phone:"0417 102 057", email:"barbaradawnjohnson@gmail.com", photo:"https://static.wixstatic.com/media/9e3e38_3cecca6276f842ce81619ee9653a38d6~mv2.jpg/v1/crop/x_0,y_80,w_480,h_480/fill/w_264,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Barry%20Johnson.jpg" },
        { role:"Recruitment", name:"TBA" }
      ]},
      { name:"Veterans Committee", real:true, note:"RDCA Veterans cricket is administered by the Senior Committee — see the Veterans Secretary, Peter Chamings, above.", members:[] }
    ]
  },

  /* ==========================================================================
     SPONSORS  — REAL set carried from the approved homepage.
     // CONNECT later: SportsWeb One "Sponsors" collection (logo on Cloudinary).
     ========================================================================== */
  sponsors: [
    { name:"SEDA College", tier:"Education Partner", url:"https://seda.vic.edu.au",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780760760/seda-vic-logo_cxgyvs.svg",
      grad:["#081828","#0d2a4a"], logoMode:"invert", cta:"Learn More",
      blurb:"Sport & Education Development Australia — combining VCE studies with elite sporting pathways for the next generation of cricketers.", real:true },
    { name:"Grant Professionals", tier:"Proud Sponsor", url:"https://www.grantprofessionals.com.au/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780769907/images_18_iq66l4.png",
      grad:["#1a4a78","#2f7bbf"], logoMode:"chip", cta:"Visit Website",
      blurb:"A proud supporter of cricket in Melbourne's east. Partnering with RDCA to develop the game at all levels of the community.", real:true },
    { name:"Altegra", tier:"Official Supplier", url:"https://altegra.com.au",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780760760/Altegra.com_.au-logo_350x100_tqmti7.png",
      grad:["#0a1f0a","#1a3a1a"], logoMode:"invert", cta:"Shop Now",
      blurb:"Premium gazebos, marquees and shade structures. The official outdoor equipment supplier to RDCA clubs.", real:true },
    { name:"Field of View", tier:"Photography Partner", url:"https://www.fieldofview.com.au/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780760760/FOV_p2scu1.avif",
      grad:["#176635","#25a54f"], logoMode:"chip", cta:"View Portfolio",
      blurb:"Capturing the moments that matter. RDCA's official photographer — covering matches, events and finals all season.", real:true },
    { name:"Dorset Gardens Hotel", tier:"Hospitality Partner", url:"https://www.dorsetgardenshotel.com.au/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780769044/images_4_x9mrk5.jpg",
      grad:["#3a1a05","#7a3a10"], logoMode:"bare", cta:"Book a Table",
      blurb:"Ringwood's premier hospitality venue — great food, cold drinks and sport on every screen.", real:true },
    { name:"Bendigo Bank Mooroolbark", tier:"Banking Partner", url:"https://www.bendigobank.com.au/branch/vic/community-bank-mooroolbark/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780769147/Resized_Sponsor_logos10_jgn2lt.avif",
      grad:["#4a0e20","#721444"], logoMode:"chip", cta:"Visit Branch",
      blurb:"Community Bank Mooroolbark — local banking that gives back. Proudly supporting RDCA cricket.", real:true },
    { name:"Fridge Repairs Today", tier:"Official Sponsor", url:"https://www.fridgerepairs.net.au/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780769263/Fridge-Repairs-Melbourne_gxvytd.webp",
      grad:["#051a2a","#0a3050"], logoMode:"bare", cta:"Get a Free Quote",
      blurb:"Melbourne's trusted fridge and appliance repair specialists. Fast, affordable, same-day service.", real:true },
    { name:"Good Sports", tier:"Community Wellbeing Partner", url:"https://goodsports.com.au/",
      logo:"https://res.cloudinary.com/dozdbhjhs/image/upload/v1780770434/good-sports-social.width-1280_uvdayn.png",
      grad:["#0a8aaa","#4acae4"], logoMode:"chip", cta:"Learn More",
      blurb:"Supporting 12,000+ Australian community clubs to reduce alcohol and drug harms — fostering healthier, safer environments.", real:true }
  ,
    { name:"Cricket Victoria", tier:"State Body", url:"https://www.cricketvictoria.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_3001cafca72f4f7f80fbdcd9f9e40840~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_3001cafca72f4f7f80fbdcd9f9e40840~mv2.jpg",
      grad:["#081a38","#103063"], logoMode:"chip", cta:"Visit Website",
      blurb:"Home of Victorian cricket — elite pathways, coaching and the indoor centre where the state's future stars train.", real:true },
    { name:"Kookaburra Sport", tier:"Cricket Equipment", url:"https://www.kookaburrasport.com.au/cricket/",
      logo:"https://static.wixstatic.com/media/c846e3_b5469719eebe4fd48cbe902842c98a51~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_b5469719eebe4fd48cbe902842c98a51~mv2.jpg",
      grad:["#6e0a14","#b81428"], logoMode:"chip", cta:"Shop Cricket Gear",
      blurb:"The iconic Australian cricket brand — bats, balls and protective gear to take your game to the next level.", real:true },
    { name:"Saxon Sports", tier:"Facilities & Coaching", url:"https://www.saxonsports.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_4ebe3f8d2f934246b2207e2c99ca3fed~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_4ebe3f8d2f934246b2207e2c99ca3fed~mv2.jpg",
      grad:["#0a2e3a","#13616f"], logoMode:"chip", cta:"Book Online",
      blurb:"State-of-the-art indoor cricket facilities and coaching for individuals, groups and clubs across Melbourne's east.", real:true },
    { name:"Club Builder", tier:"Club Development", url:"https://www.club-builder.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_5cd9e36249554dc5abfcf84cd995c270~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_5cd9e36249554dc5abfcf84cd995c270~mv2.jpg",
      grad:["#0d3a2a","#1a7a55"], logoMode:"chip", cta:"Learn More",
      blurb:"Strategic planning and governance support helping community clubs grow and thrive for generations.", real:true },
    { name:"McPhail & Partners", tier:"Accounting Partner", url:"https://www.mcphailandpartners.com.au/",
      logo:"https://static.wixstatic.com/media/bad3dd_269fc0d2a92441fcb7085a65482c03ae~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/bad3dd_269fc0d2a92441fcb7085a65482c03ae~mv2.jpg",
      grad:["#0a2440","#14467a"], logoMode:"chip", cta:"Visit Website",
      blurb:"Eastern-suburbs accounting and advisory firm — tax, audit and business services for families and businesses alike.", real:true },
    { name:"Brown & Co Lawyers", tier:"Legal Partner", url:"https://www.browncolawyers.com.au/",
      logo:"https://static.wixstatic.com/media/bad3dd_5142bf9dfdad45248731f5135ecc4789~mv2.png/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/bad3dd_5142bf9dfdad45248731f5135ecc4789~mv2.png",
      grad:["#14181f","#2a3340"], logoMode:"chip", cta:"Visit Website",
      blurb:"Ringwood-based law firm offering family law, wills & estates, litigation and more across Melbourne's east.", real:true },
    { name:"MoneyQuest Camberwell", tier:"Finance Partner", url:"https://www.moneyquest.com.au/broker/jason-butcher/",
      logo:"https://static.wixstatic.com/media/c846e3_d9768029a6674160ac50a887cadf5d39~mv2.png/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_d9768029a6674160ac50a887cadf5d39~mv2.png",
      grad:["#7a1408","#c8501a"], logoMode:"chip", cta:"Get in Touch",
      blurb:"Mortgage brokers servicing Melbourne's east — home, investment and commercial finance that gives back to local clubs.", real:true },
    { name:"Noel Jones", tier:"Real Estate Partner", url:"https://noeljones.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_1d15d2a318934c12aacab593c5c3ed4e~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_1d15d2a318934c12aacab593c5c3ed4e~mv2.jpg",
      grad:["#0a2342","#13447a"], logoMode:"chip", cta:"Visit Website",
      blurb:"Trusted local agents with 40+ years selling and managing property across Melbourne's eastern suburbs.", real:true },
    { name:"Matrix Roofing", tier:"Roofing Partner", url:"https://matrixroofing.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_4cbed2531b0e45f7a63dc8543a295562~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_4cbed2531b0e45f7a63dc8543a295562~mv2.jpg",
      grad:["#16181c","#2c3138"], logoMode:"chip", cta:"Get a Quote",
      blurb:"Roof restoration and repair specialists servicing Melbourne's eastern and south-eastern suburbs.", real:true },
    { name:"Shieldguard Security", tier:"Security Partner", url:"https://www.shieldguard.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_0f97cb15dfce4f66b896d3a39208dfe6~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_0f97cb15dfce4f66b896d3a39208dfe6~mv2.jpg",
      grad:["#15181d","#2e353f"], logoMode:"chip", cta:"Visit Website",
      blurb:"Melbourne family business since 1974 — custom steel and wrought-iron security doors, gates and grilles.", real:true },
    { name:"Best Embroidery", tier:"Apparel Partner", url:"https://bestembroidery.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_4488d45c1d93450c808c0e937ab9203e~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_4488d45c1d93450c808c0e937ab9203e~mv2.jpg",
      grad:["#3a0e1a","#7a1f38"], logoMode:"chip", cta:"Get a Quote",
      blurb:"Melbourne embroidery specialists — custom logos on workwear, uniforms and corporate apparel.", real:true },
    { name:"ChildSafe", tier:"Child Safety Partner", url:"https://www.childsafe.org.au/",
      logo:"https://static.wixstatic.com/media/c846e3_52d6aa933bc64d7e9200a265329c2e2d~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_52d6aa933bc64d7e9200a265329c2e2d~mv2.jpg",
      grad:["#0a3a3f","#127a72"], logoMode:"chip", cta:"Learn More",
      blurb:"Helping clubs meet child safety standards and build a strong culture of protecting young players.", real:true },
    { name:"Outside the Locker Room", tier:"Wellbeing Partner", url:"https://otlr.org.au/",
      logo:"https://static.wixstatic.com/media/23872a_70c19482bff5426182eda9ee6fc844ec~mv2.png/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/23872a_70c19482bff5426182eda9ee6fc844ec~mv2.png",
      grad:["#0a3a44","#11808f"], logoMode:"chip", cta:"Learn More",
      blurb:"Mental health education and support that helps sporting clubs look after their players and communities.", real:true },
    { name:"Radio Eastern FM", tier:"Community Radio", url:"http://www.radioeasternfm.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_2b1f596dfc2d4ad88f33d5c12d4c992f~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_2b1f596dfc2d4ad88f33d5c12d4c992f~mv2.jpg",
      grad:["#2a0e44","#5a2090"], logoMode:"chip", cta:"Tune In",
      blurb:"Community radio for Melbourne's east — local news, information and music powered by members and sponsors.", real:true },
    { name:"Michael Sukkar MP", tier:"Federal Member for Deakin", url:"http://www.michaelsukkar.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_d4e23c794e2249f9b4ff05c153f1a7ed~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_d4e23c794e2249f9b4ff05c153f1a7ed~mv2.jpg",
      grad:["#0a2746","#13497e"], logoMode:"chip", cta:"Visit Website",
      blurb:"Federal Member for Deakin, proudly supporting community sport across Melbourne's eastern suburbs.", real:true },
    { name:"David Hodgett MP", tier:"State Member for Croydon", url:"https://davidhodgett.com.au/",
      logo:"https://static.wixstatic.com/media/c846e3_a15141a0f87d40b18d2391f76b47e019~mv2.jpg/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/c846e3_a15141a0f87d40b18d2391f76b47e019~mv2.jpg",
      grad:["#0c2240","#154173"], logoMode:"chip", cta:"Visit Website",
      blurb:"State Member for Croydon, backing local residents, businesses and community clubs.", real:true },
    { name:"SportsWeb Australia", tier:"Website Partner", url:"https://sportsweb.com.au",
      logo:"https://static.wixstatic.com/media/23872a_5a7011130e6b4c21bc54751b83b21577~mv2.png/v1/fit/w_320,h_280,q_85,enc_avif,quality_auto/23872a_5a7011130e6b4c21bc54751b83b21577~mv2.png",
      grad:["#10153a","#2a3a8a"], logoMode:"chip", cta:"Visit Website",
      blurb:"Specialist websites for cricket clubs and associations — boosting your online presence and sponsorship.", real:true }
  ],

  /* ==========================================================================
     NEWS  — SAMPLE items for layout. Replace with real match reports / notices.
     // CONNECT later: SportsWeb One "News" collection / Supabase `articles`.
     ========================================================================== */
  news: [
    { title:"Season 2026-27 registrations now open", date:"2026-09-01", cat:"Association", excerpt:"Player registrations for the new season are open across all grades and age groups.", url:"#", sample:true },
    { title:"Representative squads announced", date:"2026-08-20", cat:"Representative", excerpt:"Junior representative squads have been named ahead of the carnival season.", url:"#", sample:true },
    { title:"Umpire accreditation course dates", date:"2026-08-10", cat:"Umpires", excerpt:"Upcoming Level 1 and Level 2 umpire accreditation sessions across the east.", url:"#", sample:true }
  ],

  /* ==========================================================================
     HONOURS / RECORDS  — SAMPLE rows for layout. Replace with real honour board.
     // CONNECT later: SportsWeb One "Honours" collection.
     ========================================================================== */
  honours: {
    lifeMembers: [
      { season:"2021/22", name:"Stuart Minetti",   assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/93eb8a_77bdb4ba63eb4390b065c54da9f4c596.pdf", real:true },
      { season:"2019/20", name:"Gregor Mason",      assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_af032b3e495b427eb7b7ac8209fe11a2.pdf", real:true },
      { season:"2014/15", name:"Greg Mitchell",     assoc:"YVCA", doc:"https://www.rdca.com/_files/ugd/c846e3_fd01d16ca4374ab19cea7192da5cac20.docx?dn=YVCA%2520LM%2520G.Mitchell.docx", real:true },
      { season:"2014/15", name:"Ian Dench",         assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_aa2a9fb4f48d43c68c5450b8737b4f1c.pdf", real:true },
      { season:"2012/13", name:"Bill Stafford",     assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_42a62ab1eeb64df3aefe98c205913eb7.pdf", real:true },
      { season:"2012/13", name:"Tony Gawne",        assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_3f24ce4104544806b5b52d3c64a16084.pdf", real:true },
      { season:"2011/12", name:"Tim Court",         assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_39867587b8c346d58254ae0d472b82bd.pdf", real:true },
      { season:"2009/10", name:"Adrian Hammond",    assoc:"YVCA", doc:"https://www.rdca.com/_files/ugd/c846e3_e7baf7b8a0cd4c07ab6738ed56ac6f6f.pdf", real:true },
      { season:"2009/10", name:"Ian Spencer",       assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_1272969a87e444d9b0975621d1853723.pdf", real:true },
      { season:"2009/10", name:"Josh Browne *",     assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_f5390ae572da429198dcdbd924d5602c.pdf", real:true },
      { season:"2007/08", name:"John Springett *",  assoc:"RDCA", doc:"https://www.rdca.com/_files/ugd/c846e3_2ce38531f30740e598da3f46c7d180e4.pdf", real:true }
    ],
    premiers: [
      { season:"2024/25", winners:[ {grade:"Premier Division",club:""},{grade:"Division 1",club:""},{grade:"Division 2",club:""} ], sample:true },
      { season:"2023/24", winners:[ {grade:"Premier Division",club:""},{grade:"Division 1",club:""},{grade:"Division 2",club:""} ], sample:true },
      { season:"2022/23", winners:[ {grade:"Premier Division",club:""},{grade:"Division 1",club:""},{grade:"Division 2",club:""} ], sample:true },
      { season:"2021/22", winners:[ {grade:"Premier Division",club:""},{grade:"Division 1",club:""},{grade:"Division 2",club:""} ], sample:true },
      { season:"2020/21", winners:[ {grade:"Premier Division",club:""},{grade:"Division 1",club:""},{grade:"Division 2",club:""} ], sample:true }
    ],
    boards: [
      { label:"Hall of Fame",       url:"https://www.rdca.com/hall-of-fame",  icon:"ti-award",          note:"Legends & inductees",       external:true, real:true },
      { label:"Honour Board",       url:"https://www.rdca.com/honour-board",  icon:"ti-clipboard-list", note:"Association honour board",  external:true, real:true },
      { label:"Awards",             url:"https://www.rdca.com/awards",        icon:"ti-medal",          note:"Season award winners",      external:true, real:true },
      { label:"Premiership Photos", url:"https://www.rdca.com/photos",        icon:"ti-photo",          note:"Photo galleries",           external:true, real:true }
    ]
  }
};
