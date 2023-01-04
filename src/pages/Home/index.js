import { useEffect, useState } from 'react'
import api from '../../services/api';
//https://api.themoviedb.org/3/movie/now_playing?api_key=ffc4e2a0702ac7e43b0dc36e69cbc75a&language=pt-BR
import { Link } from 'react-router-dom';
import './home.css'

function Home (){

    const [filmes, setFilmes] =  useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "ffc4e2a0702ac7e43b0dc36e69cbc75a",
                    language: "pt-BR",
                    page: 1,
                }
            })
            // console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map( (filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong><br/>
                            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;