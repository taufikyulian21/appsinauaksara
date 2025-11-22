import React, { useState, useEffect } from 'react';
import { generateQuizQuestion } from '../services/geminiService';
import { QuizQuestion } from '../types';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const loadQuestion = async () => {
    setLoading(true);
    setSelectedAnswer(null);
    setShowFeedback(false);
    try {
      const q = await generateQuizQuestion();
      setCurrentQuestion(q);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(option);
    setShowFeedback(true);
    
    if (option === currentQuestion?.correctAnswer) {
      setScore(s => s + 10);
    }
    setQuestionCount(c => c + 1);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <p className="text-sm text-gray-500">Skor Kamu</p>
          <p className="text-3xl font-bold text-jawa-gold">{score}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 text-right">Soal Dijawab</p>
          <p className="text-3xl font-bold text-jawa-blue text-right">{questionCount}</p>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-jawa-gold mb-4"></div>
          <p className="text-gray-600">AI sedang menyiapkan soal...</p>
        </div>
      )}

      {!loading && currentQuestion && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-jawa-blue p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold text-center">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              let btnClass = "bg-gray-50 hover:bg-gray-100 text-gray-800 border-2 border-gray-200";
              
              if (showFeedback) {
                if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-800";
                else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-red-500 text-red-800";
                else btnClass = "bg-gray-50 opacity-50";
              } else if (isSelected) {
                btnClass = "bg-sky-100 border-sky-500 text-sky-800";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`py-6 px-4 rounded-xl text-xl font-javanese font-bold transition-all transform duration-200 ${btnClass} ${!showFeedback && 'hover:scale-105'}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="px-6 pb-6 animate-fade-in">
              <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <p className="font-bold mb-1">
                  {selectedAnswer === currentQuestion.correctAnswer ? "🎉 Benar!" : "😔 Kurang Tepat"}
                </p>
                <p>{currentQuestion.explanation}</p>
              </div>
              
              <button
                onClick={loadQuestion}
                className="w-full bg-jawa-gold hover:bg-amber-500 text-jawa-brown font-bold py-3 rounded-xl shadow transition"
              >
                Soal Berikutnya ➔
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;