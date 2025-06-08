import { useEffect, useState } from 'react';
import { getRickAndMortyCharacters } from '../services/rickAndMortyApi';
import type { Character } from '../types/character';

export const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await getRickAndMortyCharacters();
                setCharacters(response.results);
            } catch (err) {
                setError('Failed to fetch characters');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id}>{character.name}</li>
            ))}
        </ul>
    );
};