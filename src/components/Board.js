import React, { useState, useEffect } from 'react';
import Card from './Card';

const fetchCatImages = async (count) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=${count}`, {
        headers: {
            Authorization: 'iK5NvDLyZmmtOCkdSyujIel8g8LmKIRKRdSPZKiE2o2OqXvcrmW4mZ9u'
        }
    });
    const data = await response.json();
    return data.photos.map(photo => photo.src.medium);
};

const Board = ({ numImages, onEndGame }) => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const catImages = await fetchCatImages(numImages);
            const images = [...catImages, ...catImages]
                .sort(() => Math.random() - 0.5)
                .map((image, index) => ({ id: index, image, flipped: false }));
            setCards(images);
            setFlipped([]);
            setMatched([]);
        };
        getImages();
    }, [numImages]);

    useEffect(() => {
        if (matched.length === numImages) {
            onEndGame();
        }
    }, [matched, numImages, onEndGame]);

    const handleClick = (id) => {
        if (flipped.length === 2) return;

        setFlipped([...flipped, id]);

        const flippedCards = cards.filter(card => card.id === id || flipped.includes(card.id));
        if (flippedCards.length === 2) {
            if (flippedCards[0].image === flippedCards[1].image) {
                setMatched([...matched, flippedCards[0].image]);
            }
            setTimeout(() => setFlipped([]), 1000);
        }
    };

    return (
        <div className="board">
            {cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    flipped={flipped.includes(card.id) || matched.includes(card.image)}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Board;
