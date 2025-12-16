"use client";

import { motion } from "framer-motion";
import { Book } from "@/app/data/books";
import Image from "next/image";

interface BookCardProps {
    book: Book;
    onClick: (book: Book) => void;
}

export const BookCard = ({ book, onClick }: BookCardProps) => {
    return (
        <motion.div
            layoutId={`card-container-${book.id}`}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => onClick(book)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Cover Image */}
            <motion.div
                layoutId={`cover-${book.id}`}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src={book.coverUrl}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </motion.div>

            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 flex flex-col justify-end">
                <motion.h3
                    layoutId={`title-${book.id}`}
                    className="text-2xl font-serif font-bold text-white leading-tight mb-1"
                >
                    {book.title}
                </motion.h3>
                <p className="text-sm font-sans text-white/80 uppercase tracking-widest mb-2">
                    {book.author}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-medium font-mono text-white/90">
                        ${book.price.toFixed(2)}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
