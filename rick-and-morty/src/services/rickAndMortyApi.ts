import axios from 'axios';
import type { ApiResponse, Character } from '../types/character';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const getRickAndMortyCharacters = async (): Promise<ApiResponse> => {
    try {
        const response = await axios.get<ApiResponse>(`${API_BASE_URL}/character`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Rick and Morty characters:', error);
        throw error;
    }
};

export const getCharacterById = async (id: number): Promise<Character> => {
    try {
        const response = await axios.get<Character>(`${API_BASE_URL}/character/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching character with id ${id}:`, error);
        throw error;
    }
};