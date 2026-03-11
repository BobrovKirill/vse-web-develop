import Card from "../components/Card/Card.jsx";
import {CARDS_DATA} from "../data.js";
import {useEffect, useState} from "react";
import reactImg from '../assets/react.svg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function App() {
    const [cards, setCards] = useState(CARDS_DATA);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((r) => {
                if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`);
                return r.json();
            })
            .then(setPosts)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    function addCard() {
        const randomIndexCard  = (Math.random() * 1000000).toFixed(0)
        const newCard = {
                id: randomIndexCard,
                header: {
                    className: 'header-card',
                    content: `Это шапка карточки #${randomIndexCard}`
                },
                footer: {
                    className: 'footer-card',
                    content: `Это подвал карточки #${randomIndexCard}`
                },
                body: {
                    className: 'body',
                    content: `Это тело карточки #${randomIndexCard}`
                }
            }

        setCards(cards => [...cards, newCard]);
    }

  return (
    <>
        <header className="header">
            <h1>HomeWork</h1>

            <img src={reactImg} alt="react logo"/>
        </header>


        {/*<h2>HomeWork #1</h2>*/}
        {/*<div className="cards">*/}
        {/*    {cards.map((item) => (*/}
        {/*        <Card key={item.id} data={item} />*/}
        {/*    ))}*/}
        {/*</div>*/}

        {/*<h2>HomeWork #2</h2>*/}
        {/*<button onClick={addCard}> Добавить карточку </button>*/}

        {/*<h2>HomeWork #3</h2>*/}

        {/*{error && <div className="error">⚠ Ошибка: {error}</div>}*/}
        {/*{loading && <div className="loader"><span/><span/><span/></div>}*/}

        {/*<div className="cards">*/}
        {/*    {posts.map((item) => (*/}
        {/*        <Card key={item.id} data={item} />*/}
        {/*    ))}*/}
        {/*</div>*/}

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={posterUrl}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>

    </>
  )
}

export default App
