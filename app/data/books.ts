import scrapedBooks from "./books-scraped.json";

export type Book = {
    id: string;
    title: string;
    author: string;
    price: number;
    coverUrl: string;
    accentColor: string;
    rating: {
        average: number;
        count: number;
    };
    tags: string[];
    synopsis: string;
    sentiment: string;
    affiliateLink: string;
    communityThoughts: string;
};

// Map scraped data to match the type precisely if needed, or just cast if structure matches
export const books: Book[] = scrapedBooks.map((book) => ({
    ...book,
    // Ensure defaults if missing from JSON (though our script handles most)
    tags: book.tags || ["Non-Fiction"],
    affiliateLink: book.affiliateLink || "#",
    communityThoughts: book.communityThoughts || "No reviews available yet.",
}));
