"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { books, Book } from "@/app/data/books";
import { BookCard } from "@/app/components/BookCard";
import { DetailView } from "@/app/components/DetailView";
import { NavBar } from "@/app/components/NavBar";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return books;
    }
    return books.filter((book) => {
      const haystack = [
        book.title,
        book.author,
        ...(book.tags || []),
        ...(book.reviews || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery]);

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
        <h1 className="text-3xl font-serif text-white font-bold pointer-events-auto">booktok.ink</h1>
        <div
          className={[
            "h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 pointer-events-auto transition-all duration-300 ease-out overflow-hidden flex items-center",
            searchOpen ? "w-72 sm:w-96 px-4" : "w-10",
          ].join(" ")}
        >
          <input
            ref={searchRef}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setSearchOpen(false);
              }
            }}
            placeholder="Search books, authors, tags..."
            className={[
              "bg-transparent text-white/90 placeholder:text-white/40 text-sm w-full outline-none transition-opacity duration-300",
              searchOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          />
        </div>
      </header>

      {/* Grid */}
      <div className="pt-32 px-4 pb-32 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="break-inside-avoid">
              <BookCard book={book} onClick={setSelectedBook} />
            </div>
          ))}
          {filteredBooks.length === 0 && (
            <div className="text-white/70 text-sm mt-12">
              No matches found. Try a different search.
            </div>
          )}
        </div>
      </div>

      {/* Navigation Dock */}
      <NavBar onSearchToggle={() => setSearchOpen((prev) => !prev)} searchActive={searchOpen} />

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <DetailView book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </AnimatePresence>

    </main>
  );
}
