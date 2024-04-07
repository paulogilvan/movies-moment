import { useEffect, useState } from 'react';
import * as C from './globalStyles';
import { Movie } from './types/Movie';

const App = () => {
  const [movie, setMovie]  = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        let res = await fetch('https://api.b7web.com.br/cinema/');
        let json = await res.json();    
        setLoading(false);
        setMovie(json);
      } catch(e) {
        setLoading(false);
        setMovie([]);
        console.error(e);
      }                                                                                                                                                                                                                         
    }                                                                                                                                                                                                                                                                                                                                                                                                                  
    loadMovies();
  }, []);  

  return (
    <C.Container>
      {loading &&
        <div>Carregando...</div>
      }

      {!loading && movie.length > 0 &&     
        <>
          <C.Title>Total de filmes em cartaz: {movie.length}</C.Title>         
          
          <C.ContainerFilmes>
            {movie.map((item, index) => (
              <C.Filmes key={index}>
                <img src={item.avatar} alt="" />
                {item.titulo}
              </C.Filmes>              
            ))}
          </C.ContainerFilmes>
        </>
      }    

      {!loading && movie.length === 0 &&
        <div>Não há filmes para exibir. Tente novamente mais tarde.</div>
      }
    </C.Container>    
  );
}

export default App;
