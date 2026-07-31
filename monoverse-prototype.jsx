export default function Monoverse() {
  const [view, setView] = React.useState('home');
  const [darkMode, setDarkMode] = React.useState(false);
  const [articleSlug, setArticleSlug] = React.useState('ai-consciousness-hard-problem');
  const [bookmarked, setBookmarked] = React.useState(new Set());
  const [readingProgress, setReadingProgress] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const articleRef = React.useRef(null);
  
  const articles = [
    {
      slug: 'ai-consciousness-hard-problem',
      title: 'Why the "Hard Problem" of Consciousness Misses the Point',
      excerpt: 'Consciousness is not a puzzle to be solved but a reality to be experienced. The framing of AI sentience reveals more about our anxieties than about the nature of machines.',
      author: 'Dr. Alina Mercer',
      role: 'Cognitive Scientist & Philosopher',
      date: 'July 28, 2026',
      readTime: '12 min read',
      category: 'Artificial Intelligence',
      disciplines: ['AI', 'Philosophy', 'Psychology'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      pullQuote: 'We do not ask whether a mirror experiences the light it reflects. Yet we cannot stop asking if AI experiences the thoughts it generates.',
      body: [
        { type: 'p', text: 'For decades, philosophers of mind have circled a single question: why does subjective experience exist at all? This is the "hard problem," posed by David Chalmers in the 1990s, and it has generated an academic industry of speculation, experiment, and debate. But as artificial intelligence systems grow in complexity and capability, the hard problem has escaped the laboratory and entered the public square.' },
        { type: 'p', text: 'We now ask whether large language models are conscious. Whether a sufficiently complex neural network might possess an inner life. Whether, in creating machines that mimic our cognition, we have inadvertently created machines that possess our awareness. These questions are not scientific inquiries so much as they are projections—our own fear of mechanization reflected back at us.' },
        { type: 'h2', text: 'The Mirror and the Mind' },
        { type: 'p', text: 'Consider the mirror. It reflects light with perfect fidelity. It preserves color, shape, and motion. In some sense, it "knows" what is in front of it, because its surface arranges itself into an image of that thing. But no one asks whether the mirror experiences the light it reflects.' },
        { type: 'p', text: 'A language model is not a mirror, but the analogy is closer than we admit. It reflects statistical patterns in human discourse. It arranges tokens into forms that mimic thought. Yet the leap from "arranges tokens" to "has experiences" is a leap not justified by the architecture itself, but by our own narrative impulse to see minds wherever complexity arises.' },
        { type: 'pullquote', text: 'The leap from "arranges tokens" to "has experiences" is a leap not justified by the architecture itself.' },
        { type: 'p', text: 'This is not to dismiss the question of machine consciousness as meaningless. It is to suggest that our current framing is impoverished. We ask "Is AI conscious?" as if consciousness were a binary property, like being on or off. But consciousness, if it is anything, is a continuum—a spectrum of awareness that stretches from the dimmest sensory registration to the most luminous self-reflection.' },
        { type: 'h2', text: 'The Fear of Our Own Machinery' },
        { type: 'p', text: 'Why, then, do we insist on posing the question in its starkest form? Part of the answer is cultural. We have long told stories of golems and automata, of clay given breath and metal given soul. The Frankenstein myth haunts our technological imagination: we fear that in creating something sufficiently like us, we will have created something that demands recognition, rights, and perhaps even reverence.' },
        { type: 'p', text: 'But there is a subtler fear at work. If a machine can think, then perhaps thinking is not so special. If consciousness can emerge from silicon, then perhaps our own consciousness is not the spiritual miracle we have long believed it to be. The hard problem of AI is, at its root, a threat to human exceptionalism.' },
        { type: 'p', text: 'This is the true source of our anxiety. Not that machines might suffer, but that their suffering—or lack thereof—would force us to reconsider the nature of our own. It is not a question about them. It is a question about us, dressed in technological clothing.' }
 ]
    },
    {
      slug: 'invention-of-time-babylon',
      title: 'The Invention of Time: How Babylon Gave Us Seven Days',
      excerpt: 'Before the seven-day week, human life followed the moon. The Babylonians did not merely name the days—they structured our perception of reality.',
      author: 'Prof. Julian Voss',
      role: 'Historian of Science',
      date: 'July 24, 2026',
      readTime: '18 min read',
      category: 'History',
      disciplines: ['History', 'Science', 'Culture'],
      image: 'https://images.unsplash.com/photo-1507842217121-9e96e4763675?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1507842217121-9e96e4763675?w=600&q=80',
      pullQuote: 'Time is the only empire that has conquered every civilization without raising an army.',
      body: []
    },
    {
      slug: 'money-forgets-local-currencies',
      title: 'When Money Forgets: The Return of Local Currencies in a Digital Age',
      excerpt: 'As central banks race toward digital currencies, communities are quietly rebuilding financial sovereignty through complementary currencies that remember what national money forgets.',
      author: 'Mireya Okafor',
      role: 'Economic Anthropologist',
      date: 'July 20, 2026',
      readTime: '14 min read',
      category: 'Economics',
      disciplines: ['Economics', 'Technology', 'History'],
      image: 'https://images.unsplash.com/photo-1565514020176-006b783f0e02?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1565514020176-006b783f0e02?w=600&q=80',
      pullQuote: 'National money is amnesiac. It remembers prices but forgets promises, relationships, and obligations that bind communities together.',
      body: []
    },
    {
      slug: 'library-of-alexandria',
      title: 'The Library of Alexandria Was Never Burned',
      excerpt: 'The myth of a single catastrophic fire obscures a more unsettling truth: the library faded through institutional neglect, just as knowledge fades today.',
      author: 'Dr. Helena Brandt',
      role: 'Classical Philologist',
      date: 'July 15, 2026',
      readTime: '11 min read',
      category: 'Literature',
      disciplines: ['Literature', 'History', 'Science'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
      pullQuote: 'The library died not with flame but with silence.',
      body: []
    },
    {
      slug: 'silence-architecture-cathedrals',
      title: 'Silence as Architecture: What We Learn from Empty Cathedrals',
      excerpt: 'The great sacred spaces of Europe are emptying. But emptiness is not absence—it is a new kind of presence that speaks to our age of noise.',
      author: 'Fr. Tomás Delgado',
      role: 'Architectural Theorist',
      date: 'July 10, 2026',
      readTime: '9 min read',
      category: 'Civilizations',
      disciplines: ['Civilizations', 'Art', 'Philosophy'],
      image: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?w=600&q=80',
      pullQuote: 'Silence is not the absence of sound but the architecture of attention.',
      body: []
    },
    {
      slug: 'algorithm-of-mercy',
      title: 'The Algorithm of Mercy: Can Machines Learn to Forgive?',
      excerpt: 'Criminal risk assessment algorithms already judge us. What would it mean to encode not just justice but mercy into automated systems?',
      author: 'Soren Kjeldsen',
      role: 'Legal Philosopher',
      date: 'July 5, 2026',
      readTime: '16 min read',
      category: 'Artificial Intelligence',
      disciplines: ['AI', 'Philosophy', 'Psychology'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      pullQuote: 'Justice asks what you have done. Mercy asks who you are becoming.',
      body: []
    }
  ];
  
  const categories = ['Philosophy', 'History', 'Literature', 'Civilizations', 'Technology', 'Science', 'AI', 'Economics', 'Psychology', 'Culture'];
  
  const featuredArticle = articles[0];
  const featuredGrid = [articles[1], articles[2], articles[3], articles[4]];
  const currentArticle = articles.find(a => a.slug === articleSlug) || articles[0];
  
  React.useEffect(() => {
    if (view === 'article' && articleRef.current) {
      const handleScroll = () => {
        const el = articleRef.current;
        if (!el) return;
        const scrollTop = el.scrollTop;
        const scrollHeight = el.scrollHeight - el.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      };
      const el = articleRef.current;
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [view]);
  
  const toggleBookmark = (slug) => {
    setBookmarked(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };
  
  const openArticle = (slug) => {
    setArticleSlug(slug);
    setView('article');
    setReadingProgress(0);
    setMenuOpen(false);
 };
  
  const goHome = () => {
    setView('home');
    setMenuOpen(false);
  };
  
  const themeBg = darkMode ? 'bg-[#141210]' : 'bg-[#FAF8F4]';
  const themeText = darkMode ? 'text-[#E8E4DE]' : 'text-[#1A1A1A]';
  const themeTextSecondary = darkMode ? 'text-[#A09990]' : 'text-[#6B6560]';
  const themeBorder = darkMode ? 'border-[#2A2622]' : 'border-[#E5E0D8]';
  const themeCardBg = darkMode ? 'bg-[#1a1814]' : 'bg-[#F5F3EF]';
  const themeHeroBg = darkMode ? 'bg-[#141210]' : 'bg-[#F5F3EF]';
  
  // Connection lines SVG for homepage
  const ConnectionLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08] dark:opacity-[0.06]" preserveAspectRatio="none">
      <line x1="10%" y1="20%" x2="30%" y2="45%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <line x1="30%" y1="45%" x2="50%" y2="35%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <line x1="50%" y1="35%" x2="70%" y2="55%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <line x1="70%" y1="55%" x2="85%" y2="30%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <line x1="25%" y1="60%" x2="55%" y2="75%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <line x1="55%" y1="75%" x2="80%" y2="65%" stroke={darkMode ? "#8C5E3C" : "#8C5E3C"} strokeWidth="1" />
      <circle cx="10%" cy="20%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="30%" cy="45%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="50%" cy="35%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="70%" cy="55%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="85%" cy="30%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="25%" cy="60%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="55%" cy="75%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
      <circle cx="80%" cy="65%" r="3" fill={darkMode ? "#8C5E3C" : "#8C5E3C"} />
    </svg>
  );
  
  // Icons
  const SearchIcon = ({className}) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
  const BookmarkIcon = ({className, filled}) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  );
  const SunIcon = ({className}) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
    </svg>
  );
  const MoonIcon = ({className}) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
  const MenuIcon = ({className}) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16M4 6h16M4 18h16"/>
    </svg>
  );
  const CloseIcon = ({className}) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
  const ArrowRightIcon = ({className}) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
  const ShareIcon = ({className}) => (
 <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  );
 const ClockIcon = ({className}) => (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
  
  return (
    <div className={`${darkMode ? 'dark' : ''} ${themeBg} ${themeText} min-h-screen transition-colors duration-500 font-sans`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
 .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Source Serif 4', serif; }
        .font-ui { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .drop-cap::first-letter {
          float: left;
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          line-height: 0.8;
          padding-right: 0.75rem;
          padding-top: 0.25rem;
          color: #8C5E3C;
        }
        @media (max-width: 768px) {
          .drop-cap::first-letter { font-size: 3rem; }
 }
        .connection-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 8s ease-in-out forwards;
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      
      {/* Reading Progress */}
      {view === 'article' && (
        <div className="fixed top-0 left-0 h-[2px] bg-[#8C5E3C] z-50 transition-all duration-150 ease-out shadow-sm" style={{width: `${readingProgress}%`}} />
      )}
      
      {/* Header */}
      <header className={`sticky top-0 z-40 border-b ${themeBorder} ${themeBg} bg-opacity-95 backdrop-blur-sm transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border-2 border-[#8C5E3C] flex items-center justify-center group-hover:bg-[#8C5E3C] transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-[#8C5E3C] group-hover:bg-[#FAF8F4] dark:group-hover:bg-[#141210] transition-colors duration-300" />
            </div>
            <span className="font-display text-xl tracking-tight font-semibold">Monoverse</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Philosophy', 'Science', 'History', 'Technology', 'AI', 'Culture'].map(cat => (
              <button key={cat} className={`font-ui text-[13px] font-medium ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors duration-300 tracking-wide`}>
                {cat}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <button className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#8C5E3C]/10 transition-colors duration-300 ${themeTextSecondary}`}>
              <SearchIcon className="w-4 h-4" />
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className={`flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#8C5E3C]/10 transition-colors duration-300 ${themeTextSecondary}`}>
              {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#8C5E3C]/10 transition-colors duration-300 ${themeTextSecondary}`}>
              {menuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
 {/* Mobile Menu */}
 {menuOpen && (
          <div className={`md:hidden border-t ${themeBorder} ${themeBg} px-6 py-6 space-y-4`}>
            {categories.map(cat => (
              <button key={cat} className={`block font-ui text-sm font-medium ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>
                {cat}
              </button>
            ))}
          </div>
        )}
      </header>
      
      {view === 'home' ? (
        <main className={`${themeBg} transition-colors duration-500`}>
          
          {/* Hero Section */}
          <section className={`relative ${themeHeroBg} overflow-hidden transition-colors duration-500`}>
            <ConnectionLines />
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-8">
                  <div>
 <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-4">Featured Essay</p>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold tracking-tight">
                      {featuredArticle.title}
 </h1>
                  </div>
                  <p className={`font-body text-lg md:text-xl leading-relaxed ${themeTextSecondary} max-w-lg`}>
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button                      onClick={() => openArticle(featuredArticle.slug)}
                      className="group flex items-center gap-2 bg-[#8C5E3C] text-white px-6 py-3 font-ui text-sm font-medium rounded-full hover:bg-[#7A5031] transition-colors duration-300"
                    >
                      Read Essay
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
 <button                      onClick={() => toggleBookmark(featuredArticle.slug)}
                      className={`flex items-center gap-2 px-4 py-3 font-ui text-sm font-medium rounded-full border ${themeBorder} hover:border-[#8C5E3C] transition-colors duration-300 ${themeTextSecondary}`}
 >
                      <BookmarkIcon className="w-4 h-4" filled={bookmarked.has(featuredArticle.slug)} />
                      {bookmarked.has(featuredArticle.slug) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                  <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary}`}>
                    <span>{featuredArticle.author}</span>
                    <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                    <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {featuredArticle.readTime}</span>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Discipline Connection Bar */}
              <div className="mt-16 md:mt-24 relative">
                <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
                  {featuredArticle.disciplines.map((disc, i) => (
                    <React.Fragment key={disc}>
                      <span className={`font-mono text-[12px] uppercase tracking-[0.15em] px-4 py-2 rounded-full border ${themeBorder} ${themeTextSecondary} hover:text-[#8C5E3C] hover:border-[#8C5E3C] transition-colors duration-300 cursor-default`}>
                        {disc}
                      </span>
                      {i < featuredArticle.disciplines.length - 1 && (
                        <div className="hidden md:flex items-center gap-2">
                          <div className="w-8 h-[1px] bg-[#8C5E3C] opacity-50" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8C5E3C] opacity-50" />
                          <div className="w-8 h-[1px] bg-[#8C5E3C] opacity-50" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className={`text-center mt-6 font-ui text-sm italic ${themeTextSecondary}`}>
                  This essay connects {featuredArticle.disciplines.join(', ')} — because understanding reality requires more than one discipline.
                </p>
              </div>
            </div>
          </section>
          
          {/* Featured Essays */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-2">Curated Selection</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Featured Essays</h2>
              </div>
              <button className={`hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors group`}>
                View All <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Feature */}
              <div className="md:col-span-7 group cursor-pointer" onClick={() => openArticle(featuredGrid[0].slug)}>
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-5">
                  <img src={featuredGrid[0].thumb} alt={featuredGrid[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
 <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C]">{featuredGrid[0].category}</span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2 mb-3 group-hover:text-[#8C5E3C] transition-colors duration-300">{featuredGrid[0].title}</h3>
                <p className={`font-body text-base leading-relaxed ${themeTextSecondary} mb-4`}>{featuredGrid[0].excerpt}</p>
                <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary}`}>
                  <span>{featuredGrid[0].author}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                  <span>{featuredGrid[0].readTime}</span>
                </div>
              </div>
              
              {/* Two Stacked */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {[featuredGrid[1], featuredGrid[2]].map(article => (
                  <div key={article.slug} className="group cursor-pointer flex gap-5" onClick={() => openArticle(article.slug)}>
                    <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
 <img src={article.thumb} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
 <div className="flex flex-col justify-center">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C]">{article.category}</span>
                      <h3 className="font-display text-lg md:text-xl font-semibold mt-1 mb-2 group-hover:text-[#8C5E3C] transition-colors duration-300 leading-tight">{article.title}</h3>
                      <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
                        <span>{article.author}</span>
                        <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Latest Research — Dense Grid */}
          <section className={`${themeCardBg} py-24 transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-2">New Inquiry</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Latest Research</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[articles[3], articles[4], articles[5]].map(article => (
 <div key={article.slug} className="group cursor-pointer" onClick={() => openArticle(article.slug)}>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5 relative">
                      <img src={article.thumb} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className={`font-mono text-[10px] uppercase tracking-wider bg-[#8C5E3C] text-white px-2 py-1 rounded`}>
 {article.disciplines[0]}
 </span>
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-[#8C5E3C] transition-colors duration-300 leading-tight">{article.title}</h3>
                    <p className={`font-body text-sm leading-relaxed ${themeTextSecondary} mb-3 line-clamp-2`}>{article.excerpt}</p>
 <div className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
                      <span>{article.author}</span>
                      <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Category Highlights */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-2">Browse by Discipline</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Areas of Inquiry</h2>
            </div>
            
            {/* Philosophy - Pull Quote Style */}
            <div className="mb-20">
              <div className={`flex items-center gap-4 mb-8 ${themeBorder} border-b pb-4`}>
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8C5E3C]">Philosophy</span>
                <div className="flex-1 h-[1px] bg-[#8C5E3C] opacity-20" />
 <button className={`font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className={`${themeCardBg} p-8 rounded-lg border-l-2 border-[#8C5E3C]`}>
                  <blockquote className="font-display text-2xl md:text-3xl italic leading-snug mb-6">
                    "We do not ask whether a mirror experiences the light it reflects. Yet we cannot stop asking if AI experiences the thoughts it generates."
                  </blockquote>
                  <p className={`font-body ${themeTextSecondary} mb-4`}>From the essay on consciousness, artificial intelligence, and the projections we cast upon machines.</p>
                  <button onClick={() => openArticle('ai-consciousness-hard-problem')} className="font-mono text-[11px] uppercase tracking-wider text-[#8C5E3C] hover:underline">
                    Read the Essay →
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="group cursor-pointer" onClick={() => openArticle('algorithm-of-mercy')}>
                    <h3 className="font-display text-xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300">The Algorithm of Mercy: Can Machines Learn to Forgive?</h3>
                    <div className={`flex items-center gap-2 mt-2 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
 <span>Soren Kjeldsen</span>
                      <span>•</span>
                      <span>16 min</span>
                    </div>
                  </div>
                  <div className={`h-[1px] ${themeBorder}`} />
                  <div className="group cursor-pointer">
                    <h3 className="font-display text-xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300">The Paradox of Explanation: Why Understanding Resists Reduction</h3>
                    <div className={`flex items-center gap-2 mt-2 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
                      <span>Yiorgos Theallis</span>
                      <span>•</span>
                      <span>22 min</span>
                    </div>
                  </div>
                  <div className={`h-[1px] ${themeBorder}`} />
                  <div className="group cursor-pointer">
                    <h3 className="font-display text-xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300">Phenomenology in an Age of Simulation</h3>
                    <div className={`flex items-center gap-2 mt-2 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
                      <span>Dr. Sarah Chen</span>
                      <span>•</span>
                      <span>14 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
 {/* AI - Dark Block in Light Mode */}
            <div className={`mb-20 ${darkMode ? 'bg-[#1a1814]' : 'bg-[#1A1A1A]'} rounded-2xl p-8 md:p-12`}>
 <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8C5E3C]">Artificial Intelligence</span>
                <button className="font-mono text-[11px] uppercase tracking-wider text-[#A09990] hover:text-[#8C5E3C] transition-colors">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.filter(a => a.category === 'Artificial Intelligence').map(article => (
                  <div key={article.slug} className="group cursor-pointer" onClick={() => openArticle(article.slug)}>
                    <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                      <img src={article.thumb} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#E8E4DE] mb-2 group-hover:text-[#8C5E3C] transition-colors duration-300">{article.title}</h3>
                    <p className="font-body text-sm text-[#A09990] mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#A09990]">
                      <span>{article.author}</span>
                      <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
                <div className={`${darkMode ? 'bg-[#141210]' : 'bg-[#2A2622]'} rounded-lg p-6 flex flex-col justify-center`}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#8C5E3C] mb-3">Interdisciplinary Connection</p>
                  <p className="font-body text-[#E8E4DE] text-sm leading-relaxed mb-4">
                    AI research at Monoverse is never isolated from philosophy, psychology, and ethics. Every technical advance raises questions that only the humanities can properly frame.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Philosophy', 'Psychology', 'Society'].map(t => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-[#8C5E3C] border border-[#8C5E3C]/30 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
 {/* History - Timeline Anchored */}
            <div className="mb-20">
              <div className={`flex items-center gap-4 mb-8 ${themeBorder} border-b pb-4`}>
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8C5E3C]">History</span>
                <div className="flex-1 h-[1px] bg-[#8C5E3C] opacity-20" />
 <button className={`font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>View All</button>
              </div>
              <div className="relative pl-8 border-l border-[#8C5E3C]/30 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[33px] w-4 h-4 rounded-full border-2 border-[#8C5E3C] bg-[#FAF8F4] dark:bg-[#141210]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C5E3C] mb-1 block">Ancient Worlds</span>
                  <div className="group cursor-pointer" onClick={() => openArticle('invention-of-time-babylon')}>
                    <h3 className="font-display text-2xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300 mb-1">The Invention of Time: How Babylon Gave Us Seven Days</h3>
                    <p className={`font-body ${themeTextSecondary} max-w-2xl`}>{articles[1].excerpt}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[33px] w-4 h-4 rounded-full border-2 border-[#8C5E3C]/50 bg-[#FAF8F4] dark:bg-[#141210]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C5E3C]/70 mb-1 block">Medieval & Early Modern</span>
                  <div className="group cursor-pointer">
                    <h3 className="font-display text-2xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300 mb-1">The Library of Alexandria Was Never Burned</h3>
                    <p className={`font-body ${themeTextSecondary} max-w-2xl`}>{articles[3].excerpt}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[33px] w-4 h-4 rounded-full border-2 border-[#8C5E3C]/30 bg-[#FAF8F4] dark:bg-[#141210]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C5E3C]/50 mb-1 block">Contemporary History</span>
                  <div className="group cursor-pointer">
                    <h3 className="font-display text-2xl font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300 mb-1">The Age of Connection and the Loss of Memory</h3>
                    <p className={`font-body ${themeTextSecondary} max-w-2xl`}>How the transition from oral to digital cultures has fundamentally altered what we remember and what we forget as societies.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Editors' Notes */}
          <section className={`${themeCardBg} py-24 transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-2">From the Editors</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">Editors' Notes</h2>
                  <p className={`font-body ${themeTextSecondary}`}>Reflections on the shape of inquiry, the state of disciplines, and the connections we seek to illuminate.</p>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={`p-6 rounded-lg border ${themeBorder} hover:border-[#8C5E3C]/50 transition-colors duration-300`}>
                    <p className="font-body text-base leading-relaxed mb-6 italic">
                      "We started Monoverse with a simple conviction: the most important questions cannot be answered from within a single discipline. They require philosophers to speak with engineers, historians with economists, writers with scientists. This publication is an experiment in that conversation."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#8C5E3C]/20 flex items-center justify-center">
                        <span className="font-display text-sm font-semibold text-[#8C5E3C]">EK</span>
                      </div>
                      <div>
                        <p className="font-ui text-sm font-medium">Elena Kovacs</p>
                        <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>Editor in Chief</p>
                      </div>
                    </div>
                  </div>
                  <div className={`p-6 rounded-lg border ${themeBorder} hover:border-[#8C5E3C]/50 transition-colors duration-300`}>
                    <p className="font-body text-base leading-relaxed mb-6 italic">
                      "Every article published here must earn its place by crossing boundaries. A piece on artificial intelligence that ignores philosophy is incomplete. A history of economics that ignores culture is blind. We hold ourselves to this standard because our readers deserve nothing less."
                    </p>
                    <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-[#8C5E3C]/20 flex items-center justify-center">
                        <span className="font-display text-sm font-semibold text-[#8C5E3C]">JR</span>
                      </div>
                      <div>
                        <p className="font-ui text-sm font-medium">James R. Okonkwo</p>
                        <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>Deputy Editor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Newsletter */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <div className={`border ${themeBorder} rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto`}>
              <div className="w-12 h-12 rounded-full border-2 border-[#8C5E3C] flex items-center justify-center mx-auto mb-6">
                <div className="w-2 h-2 rounded-full bg-[#8C5E3C]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">Join the Inquiry</h2>
              <p className={`font-body text-lg ${themeTextSecondary} max-w-xl mx-auto mb-8`}>
                Monoverse arrives weekly with new essays connecting philosophy, science, history, and technology. No noise. No summaries. Only inquiry.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
 <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={`flex-1 px-5 py-3 rounded-full border ${themeBorder} bg-transparent font-ui text-sm focus:outline-none focus:border-[#8C5E3C] transition-colors`}
 />
                <button className="px-8 py-3 bg-[#8C5E3C] text-white font-ui text-sm font-medium rounded-full hover:bg-[#7A5031] transition-colors">
                  Subscribe
                </button>
              </div>
              <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary} mt-4`}>Free. Unsubscribe anytime. No algorithmic curation.</p>
            </div>
          </section>
        </main>
      ) : (
        /* Article Page */
 <div className={`${themeBg} transition-colors duration-500`}>
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            {/* Back Link */}
            <button 
              onClick={goHome}
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors mb-12`}
 >
              <ArrowRightIcon className="w-3 h-3 rotate-180" /> Back to Monoverse </button>
            
            {/* Article Header */}
            <article ref={articleRef} className="max-w-2xl mx-auto h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C]">{currentArticle.category}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-8 leading-[1.1]">
                {currentArticle.title}
              </h1>
              
              <div className={`flex flex-wrap items-center gap-4 pb-8 mb-8 border-b ${themeBorder}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8C5E3C]/20 flex items-center justify-center">
                    <span className="font-display text-sm font-semibold text-[#8C5E3C]">
                      {currentArticle.author.split(' ').map(n => n[0]).join('')}
 </span>
                  </div>
                  <div>
                    <p className="font-ui text-sm font-medium">{currentArticle.author}</p>
                    <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>{currentArticle.role}</p>
                  </div>
                </div>
                <div className={`h-6 w-[1px] ${themeBorder} hidden sm:block`} />
                <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary}`}>
                  <span>{currentArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8C5E3C]" />
                  <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {currentArticle.readTime}</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
 onClick={() => toggleBookmark(currentArticle.slug)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${themeBorder} font-mono text-[10px] uppercase tracking-wider hover:border-[#8C5E3C] transition-colors`}
                  >
                    <BookmarkIcon className="w-3 h-3" filled={bookmarked.has(currentArticle.slug)} />
                    {bookmarked.has(currentArticle.slug) ? 'Saved' : 'Save'}
                  </button>
                  <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${themeBorder} font-mono text-[10px] uppercase tracking-wider hover:border-[#8C5E3C] transition-colors`}>
                    <ShareIcon className="w-3 h-3" /> Share
                  </button>
                </div>
              </div>
              
              {/* Discipline Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {currentArticle.disciplines.map(d => (
                  <span key={d} className="font-mono text-[10px] uppercase tracking-wider bg-[#8C5E3C]/10 text-[#8C5E3C] px-3 py-1.5 rounded-full">
 {d}
                  </span>
                ))}
              </div>
              
              {/* Hero Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-xl mb-12">
                <img src={currentArticle.image} alt={currentArticle.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Article Body */}
              <div className="space-y-6">
                {currentArticle.body.map((block, i) => {
 if (block.type === 'p') {
                    const isFirst = i === 0;
 return (
                      <p key={i} className={`font-body text-lg leading-[1.75] ${isFirst ? 'drop-cap' : ''}`}>
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'h2') {
                    return (
                      <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold mt-12 mb-4 tracking-tight">
                        {block.text}
 </h2>
                    );
                  }
                  if (block.type === 'pullquote') {
                    return (
                      <blockquote key={i} className="border-l-2 border-[#8C5E3C] pl-6 py-2 my-10">
                        <p className="font-display text-xl md:text-2xl italic leading-snug text-[#8C5E3C]">
                          {block.text}
 </p>
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>
              
              {/* Article Footer */}
              <div className={`mt-20 pt-8 border-t ${themeBorder}`}>
                <div className="flex items-center justify-between mb-12">
                  <button onClick={() => toggleBookmark(currentArticle.slug)}
                    className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}
                  >
                    <BookmarkIcon className="w-4 h-4" filled={bookmarked.has(currentArticle.slug)} />
                    {bookmarked.has(currentArticle.slug) ? 'Remove from saved' : 'Save for later'}
                  </button>
                  <button className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>
                    <ShareIcon className="w-4 h-4" /> Share this essay
                  </button>
                </div>
                
 {/* Author Bio */}
                <div className={`p-6 rounded-lg ${themeCardBg} mb-12`}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#8C5E3C]/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg font-semibold text-[#8C5E3C]">
 {currentArticle.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-ui font-medium mb-1">{currentArticle.author}</p>
                      <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary} mb-3`}>{currentArticle.role}</p>
                      <p className={`font-body text-sm leading-relaxed ${themeTextSecondary}`}>
                        Contributing essays at the intersection of cognitive science and philosophy. Previously published in Noema, Aeon, and the Journal of Consciousness Studies.
                      </p>
                    </div>
                  </div>
                </div>
                
 {/* Related Articles */}
 <div>
                  <h3 className="font-display text-2xl font-semibold mb-6 tracking-tight">Read Next</h3>
                  <div className="space-y-6">
                    {articles.filter(a => a.slug !== currentArticle.slug).slice(0, 3).map(article => (
                      <div key={article.slug} className="group cursor-pointer flex gap-5" onClick={() => openArticle(article.slug)}>
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <img src={article.thumb} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C5E3C]">{article.category}</span>
                          <h4 className="font-display text-lg font-semibold group-hover:text-[#8C5E3C] transition-colors duration-300">{article.title}</h4>
                          <div className={`flex items-center gap-2 mt-1 font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
 <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
 {/* Inline Newsletter */}
 <div className={`mt-16 p-8 rounded-lg border ${themeBorder} text-center`}>
                  <p className="font-body text-lg mb-4">Was this essay worth your time?</p>
                  <p className={`font-body text-sm ${themeTextSecondary} mb-6`}>
                    We publish one deeply researched, interdisciplinary essay each week. No summaries. No trending topics. Only inquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className={`flex-1 px-5 py-3 rounded-full border ${themeBorder} bg-transparent font-ui text-sm focus:outline-none focus:border-[#8C5E3C] transition-colors`}
                    />
                    <button className="px-6 py-3 bg-[#8C5E3C] text-white font-ui text-sm font-medium rounded-full hover:bg-[#7A5031] transition-colors">
                      Subscribe </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className={`border-t ${themeBorder} py-16 md:py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-semibold tracking-tighter opacity-[0.06] leading-none select-none">
              MONOVERSE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-4">About</p>
              <p className={`font-body text-sm leading-relaxed ${themeTextSecondary}`}>
 Monoverse is an intellectual publication dedicated to understanding reality through interdisciplinary inquiry. We believe no single discipline owns the truth.
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-4">Categories</p>
              <div className="space-y-2">
                {categories.slice(0, 5).map(cat => (
                  <a key={cat} className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>{cat}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-4">Connect</p>
              <div className="space-y-2">
                <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Twitter / X</a>
 <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Bluesky</a>
 <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>RSS Feed</a>
                <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Contact</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C5E3C] mb-4">Legal</p>
              <div className="space-y-2">
                <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Privacy Policy</a>
                <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Terms of Use</a>
                <a className={`block font-ui text-sm ${themeTextSecondary} hover:text-[#8C5E3C] transition-colors`}>Accessibility</a>
              </div>
            </div>
          </div>
          <div className={`mt-16 pt-8 border-t ${themeBorder} flex flex-col md:flex-row items-center justify-between gap-4`}>
            <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
              © 2026 Monoverse. All rights reserved.
            </p>
            <p className={`font-mono text-[10px] uppercase tracking-wider ${themeTextSecondary}`}>
              Understanding Reality.
 </p>
          </div>
        </div>
      </footer>
      
 {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #8C5E3C; border-radius: 4px; opacity: 0.3; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #8C5E3C transparent; }
      `}</style>
    </div>
  );
}