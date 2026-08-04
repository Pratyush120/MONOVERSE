const allEssays: any[] = [], allMovies: any[] = [], allCinemaArticles: any[] = [], allCinemaPeople: any[] = [], allCinemaLists: any[] = [];
import { SearchClient } from "../components/SearchClient";

export default function SearchPage() {
  // Aggregate all search data
  const searchItems = [
    ...allEssays.map(e => ({ id: `essay-${e.slug}`, title: e.title, description: e.description, type: e.domain, url: `/essay/${e.slug}` })),
    ...allMovies.map(m => ({ id: `movie-${m.slug}`, title: m.title, description: m.synopsis, type: "Movie", url: `/cinema/movie/${m.slug}` })),
    ...allCinemaArticles.map(a => ({ id: `article-${a.slug}`, title: a.title, description: a.description, type: a.editorialType, url: `/cinema/article/${a.slug}` })),
    ...allCinemaPeople.map(p => ({ id: `person-${p.slug}`, title: p.name, description: p.bio, type: "Person", url: `/cinema/person/${p.slug}` })),
    ...allCinemaLists.map(l => ({ id: `list-${l.slug}`, title: l.title, description: l.description, type: "List", url: `/cinema/list/${l.slug}` })),
  ];

  return (
    <div className="pt-[160px] min-h-screen px-[24px] md:px-[64px] max-w-[1440px] mx-auto mb-[120px]">
      <h1 className="font-display text-[48px] md:text-[64px] text-foreground mb-8 text-center">Search the Archive</h1>
      <p className="font-body text-text-secondary text-[20px] max-w-[600px] mx-auto text-center mb-[64px]">
        Search across essays, collections, authors, movies, reviews, and lists.
      </p>
      
      <SearchClient items={searchItems} />
    </div>
  );
}
