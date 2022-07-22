import { useState } from "react";

export const BlackjackGameScreen = () => {
  const [cardsNumber, setCardsNumber] = useState([
    { id: 1, value: "10", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/KC.svg" },
    { id: 2, value: "10", suit: "SPADES", image: "https://deckofcardsapi.com/static/img/0S.svg" },
    { id: 3, value: "1", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/AC.svg" },
    { id: 4, value: "10", suit: "HEARTS", image: "https://deckofcardsapi.com/static/img/KH.svg" },
    { id: 5, value: "10", suit: "SPADES", image: "https://deckofcardsapi.com/static/img/JS.svg" },
    { id: 6, value: "3", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/3C.svg" },
    { id: 7, value: "3", suit: "HEARTS", image: "https://deckofcardsapi.com/static/img/3H.svg" },
    { id: 8, value: "4", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/4C.svg" },
    { id: 9, value: "9", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/9C.svg" },
    { id: 10, value: "10", suit: "HEARTS", image: "https://deckofcardsapi.com/static/img/JH.svg" },
  ]);
  const [dealerCards, setDealerCards] = useState([
    { id: 2, value: "10", suit: "SPADES", image: "https://deckofcardsapi.com/static/img/0S.png" },
    { id: 4, value: "10", suit: "HEARTS", image: "https://deckofcardsapi.com/static/img/KH.svg" },
  ]);
  const [playerCards, setPlayerCards] = useState([
    { id: 1, value: "10", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/KC.svg" },
    { id: 3, value: "1", suit: "CLUBS", image: "https://deckofcardsapi.com/static/img/AC.svg" },
  ]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-full max-w-7xl h-3/4 border-4 bg-green-700">
        <div>
          {dealerCards.map((card) => (
            <div className="flex justify-center items-center h-full w-full">
              <img className="w-32 min-32 bg-black bg-contain	" src={card.image} alt={card.value + card.suit} />
            </div>
          ))}
        </div>
        <div>
          {playerCards.map((card) => (
            <div className="flex justify-center items-center h-full w-full">
              <img className="w-32 h-32" src={card.image} alt={card.value + card.suit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
