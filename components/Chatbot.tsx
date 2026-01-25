'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, User, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: 'welcome',
                role: 'assistant',
                content: 'Hallo! Ich bin Endo, Ihr persönlicher Energiespar-Assistent. Haben Sie Fragen zu EndoTherm oder möchten Sie wissen, wie viel Sie sparen können?'
            }
        ]
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, messages]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto bg-white rounded-2xl shadow-2xl border border-gray-100 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-[#3b82f6] p-4 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={`${BASE_PATH}/n5-logo.png`}
                                        alt="N5 Logo"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Endo AI</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-xs">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <Minimize2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${m.role === 'assistant' ? 'bg-white border border-gray-100' : 'bg-gray-200 text-gray-600'
                                            }`}>
                                            {m.role === 'assistant' ? (
                                                <Image
                                                    src={`${BASE_PATH}/n5-logo.png`}
                                                    alt="N5"
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 object-contain"
                                                />
                                            ) : <User className="w-5 h-5" />}
                                        </div>

                                        <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user'
                                            ? 'bg-[#3b82f6] text-white rounded-br-none'
                                            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }`}>
                                            {/* Render markdown-like bold text simply */}
                                            {m.content.split('**').map((part: string, i: number) =>
                                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex gap-2 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                                            <Image
                                                src={`${BASE_PATH}/n5-logo.png`}
                                                alt="N5"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                                            <div className="flex gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 shrink-0">
                            <div className="relative flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Schreiben Sie eine Nachricht..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2 bg-[#3b82f6] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2563eb] transition-colors shadow-sm"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`pointer-events-auto h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 relative group ${isOpen ? 'bg-gray-100 text-gray-600' : 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle className="w-7 h-7" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tooltip hint when closed */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 text-gray-800 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                        Fragen Sie Endo AI
                        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-t border-r border-gray-100 transform rotate-45 -translate-y-1/2"></div>
                    </div>
                )}
            </motion.button>
        </div>
    );
}
