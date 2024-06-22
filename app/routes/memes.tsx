import React from 'react';
import Meme1 from '../pictures/Meme1.jpeg';
import Meme2 from '../pictures/Meme2.jpeg';
import Meme3 from '../pictures/Meme3.jpeg';
import Meme4 from '../pictures/Meme4.jpeg';
import Meme5 from '../pictures/Meme5.jpeg';
import Meme6 from '../pictures/Meme6.jpeg';
import Meme7 from '../pictures/Meme7.jpeg';
import Meme8 from '../pictures/Meme8.jpeg';
import Meme9 from '../pictures/Meme9.jpeg';
import Meme10 from '../pictures/Meme10.jpeg';


const memes = [
    { id: 1, imageUrl: Meme1 },
    { id: 2, imageUrl: Meme2 },
    { id: 3, imageUrl: Meme3 },
    { id: 4, imageUrl: Meme4 },
    { id: 5, imageUrl: Meme5 },
    { id: 6, imageUrl: Meme6 },
    { id: 7, imageUrl: Meme7 },
    { id: 8, imageUrl: Meme8 },
    { id: 9, imageUrl: Meme9 },
    { id: 10, imageUrl: Meme10 },

];

export default function Memes() {
    return (
        <div className="aboutMain">
        <main className="mx-auto mt-28 max-w-md">
            <h1 className="text-2xl font-bold mb-8">Your favorite cooking memes</h1>
            <div className="grid grid-cols-1 gap-4 mb-8">
                {memes.map(meme => (
                    <div key={meme.id} className="bg-white mb-8 shadow-md overflow-hidden">
                        <img src={meme.imageUrl} alt={`Meme ${meme.id}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </main>
            </div>
    );
}
