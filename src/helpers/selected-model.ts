/**
 * Función para centralizar el modelo a usar en el proyecto
 *
 * También agregué otras opciones si lo quieres cambiar
 */

// Groq:
// npm i @ai-sdk/groq
import { groq } from '@ai-sdk/groq';

// Anthropic:
// npm i @ai-sdk/anthropic
import { anthropic } from '@ai-sdk/anthropic';

// OpenAI:
// npm i @ai-sdk/openai
import { openai } from '@ai-sdk/openai';

// Gemini:
// npm i @ai-sdk/google
import { google } from '@ai-sdk/google';

// Ollama:
// npm i ollama-ai-provider-v2
// A diferencia de los anteriores, este es un proveedor comunitario.
import { ollama } from 'ollama-ai-provider-v2';

// Minimax:
// npm i @ai-sdk/minimax
import { minimax } from '@ai-sdk/minimax';

// Groq:
//export const model = groq('openai/gpt-oss-20b');
// export const model = groq('openai/gpt-oss-120b');

// Anthropic:
//export const model = anthropic('claude-haiku-4-5');

// OpenAI:
//export const model = openai('gpt-5-mini');

// Gemini:
export const model = google('gemini-3.1-flash-lite');

// Ollama:
//export const model = ollama('llama3.2:3b');
//export const model = ollama('gpt-oss');

// Minimax:
//export const model = minimax('minimax-m3.1-flash');
//export const model = minimax('minimax-m3');


