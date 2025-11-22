import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AiWordExample, QuizQuestion } from "../types";

// Note: In a real deployed app, API keys should be handled carefully. 
// For this static-style generator, we assume process.env.API_KEY is available.
// In the prompt instructions, we are told to use process.env.API_KEY directly.

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

export const generateJavaneseExamples = async (): Promise<AiWordExample[]> => {
  const schema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        word: { type: Type.STRING, description: "The Javanese word in Latin alphabet" },
        script: { type: Type.STRING, description: "The Javanese word in Aksara Jawa" },
        meaning: { type: Type.STRING, description: "The meaning in Indonesian" },
      },
      required: ["word", "script", "meaning"],
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: "Generate 3 unique, simple Javanese words or short phrases suitable for a 6th grade elementary student learning Aksara Jawa. Include the latin text, the aksara jawa script, and the indonesian meaning.",
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.8,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as AiWordExample[];
    }
    return [];
  } catch (error) {
    console.error("Error generating examples:", error);
    // Fallback data in case of API error/quota issues
    return [
      { word: "Sekolah", script: "ꦱꦺꦏꦺꦴꦭꦃ", meaning: "Tempat belajar" },
      { word: "Sinau", script: "ꦱꦶꦤꦲꦸ", meaning: "Belajar" },
      { word: "Bunga", script: "ꦏꦺꦩ꧀ꦧꦁ", meaning: "Kembang" }
    ];
  }
};

export const generateQuizQuestion = async (): Promise<QuizQuestion> => {
  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING, description: "The question text" },
      options: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "4 possible answers" 
      },
      correctAnswer: { type: Type.STRING, description: "The exact string of the correct answer from options" },
      explanation: { type: Type.STRING, description: "Short explanation why it is correct" },
    },
    required: ["question", "options", "correctAnswer", "explanation"],
  };

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: "Create a multiple-choice question about Aksara Jawa (Javanese Script) for a 6th grader. The question could be identifying a character, reading a simple word, or identifying a Sandhangan. Make it fun and educational.",
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.9,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Error generating quiz:", error);
    return {
      question: "Huruf 'Ha' dalam Aksara Jawa adalah?",
      options: ["ꦲ", "ꦤ", "ꦕ", "ꦫ"],
      correctAnswer: "ꦲ",
      explanation: "Simbol ꦲ dibaca Ha.",
    };
  }
};