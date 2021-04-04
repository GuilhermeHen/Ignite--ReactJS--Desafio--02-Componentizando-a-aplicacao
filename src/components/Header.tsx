interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ComponentProps {
  selectedGenre: GenreResponseProps;
}

export function Header( { selectedGenre }: ComponentProps){
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}