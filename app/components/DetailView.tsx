"use client";

import { motion } from "framer-motion";
import { Book } from "@/app/data/books";
import { X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { RatingRing } from "./RatingRing";

interface DetailViewProps {
    book: Book;
    onClose: () => void;
}

export const DetailView = ({ book, onClose }: DetailViewProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
                layoutId={`card-container-${book.id}`}
                className="fixed inset-0 z-[60] flex flex-col bg-stone-900 md:inset-x-[20%] md:inset-y-[5%] md:rounded-3xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-black/20 backdrop-blur-md rounded-full text-white/80 hover:bg-white/10 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Hero Section */}
                <div className="relative h-[55%] shrink-0">
                    <motion.div
                        layoutId={`cover-${book.id}`}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={book.coverUrl}
                            alt={book.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 pb-4">
                        <motion.h2
                            layoutId={`title-${book.id}`}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight"
                        >
                            {book.title}
                        </motion.h2>
                        <p className="text-lg text-white/70 font-sans uppercase tracking-widest mb-4">
                            {book.author}
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center gap-3">
                                <RatingRing rating={book.rating.average} />
                                <div className="flex flex-col">
                                    <span className="text-xs text-white/50 uppercase tracking-widest">Score</span>
                                    <span className="text-sm font-medium text-white">{book.rating.count} Reviews</span>
                                </div>
                            </div>

                            <div className="h-10 w-[1px] bg-white/10" />

                            <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                                <span className="text-sm font-medium text-white/90">{book.sentiment}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto px-8 py-6 pb-32"> {/* pb-32 for sticky bar spacing */}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {book.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Synopsis */}
                    <div className="mb-10">
                        <h3 className="text-xl font-serif text-white mb-4">The Synopsis</h3>
                        <p className="text-white/70 font-sans leading-loose text-lg">
                            {book.synopsis}
                        </p>
                    </div>

                    {/* Reviews */}
                    <div>
                        <h3 className="text-xl font-serif text-white mb-4">Community Thoughts</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-8 px-8 snap-x">
                            {book.reviews.map((review, i) => (
                                <div key={i} className="min-w-[280px] p-6 rounded-xl bg-white/5 border border-white/10 snap-center">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                                        <span className="text-sm font-medium text-white/80">Reader {i + 1}</span>
                                    </div>
                                    <p className="text-white/60 text-sm italic">
                                        "{review}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Action Bar */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900 via-stone-900/90 to-transparent">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-col">
                            <span className="text-sm text-white/50 uppercase">Best Price</span>
                            <span className="text-3xl font-serif text-white">${book.price.toFixed(2)}</span>
                        </div>
                        <a
                            href={book.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 h-14 bg-white text-black font-medium text-lg rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                        >
                            <ShoppingBag size={20} />
                            Buy on Amazon
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
