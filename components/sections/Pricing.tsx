'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, ArrowRight, CheckCircle2, RotateCcw, Calendar } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-white overflow-hidden relative min-h-[800px] flex items-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3b82f6]/5 to-transparent pointer-events-none" />

            <div className="container-custom relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        KI-Analyse
                    </span>
                    <h2 className="mb-6">
                        Lassen Sie Ihre <span className="gradient-text">Ersparnis berechnen</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Unser AI-Assistent analysiert Ihre Situation in Sekunden und zeigt Ihnen Ihr Potenzial.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto h-[600px] perspective-[2000px]">
                    <AIChatInterface />
                </div>
            </div>
        </section>
    );
}

function AIChatInterface() {
    const [messages, setMessages] = useState<Array<{ role: 'ai' | 'user'; text: string; id: string }>>([
        {
            role: 'ai',
            text: 'Hallo! Ich bin Endo, Ihr persönlicher Energiespar-Assistent. Lassen Sie uns herausfinden, wie viel Sie sparen können. Wie hoch sind Ihre aktuellen jährlichen Heizkosten (ca. in €)?',
            id: 'init'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Store user answers for the result card
    const [answers, setAnswers] = useState({ cost: '', type: '', area: '' });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, step]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { role: 'user', text: userMsg, id: Date.now().toString() }]);
        setInputValue('');
        setIsTyping(true);

        // Save answers based on step
        if (step === 0) setAnswers(prev => ({ ...prev, cost: userMsg }));
        if (step === 1) setAnswers(prev => ({ ...prev, type: userMsg }));
        if (step === 2) setAnswers(prev => ({ ...prev, area: userMsg }));

        setTimeout(() => {
            let nextQuestion = '';

            if (step === 0) {
                nextQuestion = 'Verstehe, das ist ein wichtiger Faktor. Welche Heizungsart nutzen Sie aktuell vorwiegend (z.B. Gas, Öl, Fernwärme)?';
                setStep(1);
            } else if (step === 1) {
                nextQuestion = 'Danke für die Information. Und wie groß ist die zu beheizende Fläche ungefähr (in m²)?';
                setStep(2);
            } else if (step === 2) {
                nextQuestion = 'Perfekt! Ich habe alle Daten. Ich analysiere jetzt Ihr Potenzial...';
                setStep(3);

                setTimeout(() => {
                    setMessages(prev => [...prev, { role: 'ai', text: nextQuestion, id: 'analysis' }]);
                    setIsTyping(false);
                    // Trigger Flip after reading 'analysing'
                    setTimeout(() => {
                        setIsFlipped(true);
                    }, 2000);
                    return;
                }, 100);
                return;
            }

            setMessages(prev => [...prev, { role: 'ai', text: nextQuestion, id: Date.now().toString() }]);
            setIsTyping(false);

            // Auto-focus input after answer received
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 50);
        }, 1200 + Math.random() * 800);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const resetChat = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setMessages([{
                role: 'ai',
                text: 'Willkommen zurück! Wollen wir eine neue Berechnung starten? Wie hoch sind Ihre aktuellen Heizkosten?',
                id: Date.now().toString()
            }]);
            setStep(0);
            setAnswers({ cost: '', type: '', area: '' });
        }, 500); // Reset data while flipped back
    };

    return (
        <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 12 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT FACE: Chat Interface */}
                <div
                    className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col md:flex-row"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Sidebar / Context */}
                    <div className="hidden md:flex w-1/3 bg-gray-50 p-8 flex-col justify-between border-r border-gray-100">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#3b82f6]/20">
                                    <Bot className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Endo AI</div>
                                    <div className="text-xs text-[#3b82f6] flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                                        Online
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#3b82f6]" />
                                        Echtzeit-Analyse
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Beantworten Sie 3 kurze Fragen. Unsere AI vergleicht Ihre Daten sofort mit ähnlichen Gebäudeprofilen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-xs text-gray-400">
                            Powered by N5 Solutions AI
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col relative bg-white">
                        {/* Mobile Header */}
                        <div className="md:hidden p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50">
                            <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center">
                                <Bot className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-sm">Endo AI</div>
                                <div className="text-xs text-[#3b82f6]">Online</div>
                            </div>
                        </div>

                        <div ref={containerRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                            <AnimatePresence mode='popLayout'>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-[#3b82f6]/10' : 'bg-gray-100'}`}>
                                                {msg.role === 'ai' ? <Bot className="w-5 h-5 text-[#2563eb]" /> : <User className="w-5 h-5 text-gray-700" />}
                                            </div>
                                            <div
                                                className={`p-3 md:p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.role === 'user'
                                                    ? 'bg-gray-900 text-white rounded-br-none'
                                                    : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex items-end gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-5 h-5 text-[#2563eb]" />
                                        </div>
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-100 bg-white">
                            <div className="relative flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ihre Antwort..."
                                    disabled={isTyping}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-2 p-2 bg-[#3b82f6] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2563eb] transition-colors shadow-md transform active:scale-95 duration-100"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK FACE: Result Card */}
                <div
                    className="absolute inset-0 h-full w-full backface-hidden bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16 border border-blue-200"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#3b82f6] to-blue-600" />

                    <ResultContent
                        isFlipped={isFlipped}
                        answers={answers}
                        onReset={resetChat}
                    />
                </div>
            </motion.div>
        </div>
    );
}

function ResultContent({ isFlipped, answers, onReset }: { isFlipped: boolean; answers: any; onReset: () => void }) {
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initialisiere...');

    useEffect(() => {
        if (isFlipped) {
            setProgress(0);
            setShowResults(false);

            const duration = 2500; // 2.5 seconds total loading
            const interval = 20;
            const steps = duration / interval;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const newProgress = Math.min((currentStep / steps) * 100, 100);
                setProgress(newProgress);

                // Dynamic text phases based on progress
                if (newProgress < 30) {
                    setLoadingText(`Analysiere Verbrauch von ${answers.cost}...`);
                } else if (newProgress < 65) {
                    setLoadingText(`Berechne Potenzial für ${answers.type}-Heizung...`);
                } else if (newProgress < 90) {
                    setLoadingText(`Optimiere für ${answers.area}m² Gebäudefläche...`);
                } else {
                    setLoadingText('Erstelle Auswertung...');
                }

                if (currentStep >= steps) {
                    clearInterval(timer);
                    setTimeout(() => setShowResults(true), 300);
                }
            }, interval);

            return () => clearInterval(timer);
        } else {
            setShowResults(false);
            setProgress(0);
        }
    }, [isFlipped, answers]);

    if (!showResults) {
        return (
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto px-4">
                <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>
                <motion.p
                    key={loadingText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-500 font-medium text-center text-sm"
                >
                    {loadingText}
                </motion.p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg flex flex-col items-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', delay: 0.1 }}
                className="w-20 h-20 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6"
            >
                <CheckCircle2 className="w-10 h-10 text-[#3b82f6]" />
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 mb-2"
            >
                Analyse erfolgreich!
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-8"
            >
                Wir haben für Ihre Angaben ({answers.area}m², {answers.type}) ein <span className="text-[#2563eb] font-bold">signifikantes Einsparpotenzial</span> ermittelt.
            </motion.p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#3b82f6]/10 rounded-2xl p-4 border border-[#3b82f6]/20 flex flex-col items-center justify-center min-h-[120px]"
                >
                    <div className="text-sm text-[#2563eb] font-medium mb-1">Mögliche Ersparnis</div>
                    <div className="text-3xl font-bold text-[#1e40af]">
                        <CountUp end={15} suffix="%" duration={2} />
                    </div>
                    <div className="text-xs text-[#3b82f6] mt-1">der Heizkosten</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex flex-col items-center justify-center min-h-[120px]"
                >
                    <div className="text-sm text-blue-700 font-medium mb-1">Amortisation</div>
                    <div className="text-3xl font-bold text-blue-800 flex items-baseline gap-1">
                        <span>&lt;</span>
                        <CountUp start={60} end={14} duration={2} />
                        <span className="text-xl">Monaten</span>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">bei durchschnittlicher Nutzung</div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full"
            >
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary w-full flex items-center justify-center gap-2 group text-lg py-4"
                    >
                        <Calendar className="w-5 h-5" />
                        Expertengespräch vereinbaren
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={onReset}
                        className="text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1 transition-colors py-2"
                    >
                        <RotateCcw className="w-3 h-3" />
                        Berechnung neu starten
                    </button>
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-[10px] text-gray-400 mt-4 max-w-md mx-auto leading-tight"
            >
                *Dies ist eine unverbindliche Schätzung basierend auf Durchschnittswerten. Die tatsächliche Ersparnis kann je nach Gebäudezustand und Nutzerverhalten variieren.
            </motion.p>
        </div>
    );
}

// Simple CountUp Component
function CountUp({ start = 0, end, duration = 2, suffix = '' }: { start?: number, end: number, duration?: number, suffix?: string }) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const ease = (x: number) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

            const currentVal = start + (end - start) * ease(percentage);
            setCount(Math.floor(currentVal));

            if (progress < duration * 1000) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [start, end, duration]);

    return <>{count}{suffix}</>;
}
