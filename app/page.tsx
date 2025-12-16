"use client";

import { useState } from "react";
import { books, Book } from "@/app/data/books";
import { BookCard } from "@/app/components/BookCard";
import { DetailView } from "@/app/components/DetailView";
import { NavBar } from "@/app/components/NavBar";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-white/30">

      {/* Dynamic Background */}
      <div
        className="fixed inset-0 transition-colors duration-1000 ease-in-out -z-10"
        style={{
          background: selectedBook
            ? `radial-gradient(circle at 50% 30%, ${selectedBook.accentColor}33 0%, rgba(28,25,23,1) 80%)`
            : `radial-gradient(circle at 50% 0%, #44403c 0%, #1c1917 60%)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 p-8 flex justify-between items-center pointer-events-none">
        <h1 className="text-3xl font-serif text-white font-bold pointer-events-auto">Lumina.</h1>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur pointer-events-auto border border-white/10" />
      </header>

      {/* Grid */}
      <div className="pt-32 px-4 pb-32 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {books.map((book) => (
            <div key={book.id} className="break-inside-avoid">
              <BookCard book={book} onClick={setSelectedBook} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dock */}
      <NavBar />

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <DetailView book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </AnimatePresence>

    </main>
  );
}
