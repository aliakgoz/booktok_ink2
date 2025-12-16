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
};

export const books: Book[] = [
    {
        id: "1",
        title: "Dune: Messiah",
        author: "Frank Herbert",
        price: 18.99,
        coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
        accentColor: "#C5832B", // Desert Orange
        rating: { average: 4.8, count: 420 },
        tags: ["Sci-Fi", "Classic", "Political"],
        synopsis: "The second novel in the Dune Chronicles. Paul Atreides is the Emperor of the Known Universe, wielding power that no human has ever held. But power attracts enemies...",
        sentiment: "Epic & Visionary",
    },
    {
        id: "2",
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 24.50,
        coverUrl: "https://images.unsplash.com/photo-1614726365203-9c89e1b7f43e?q=80&w=1000&auto=format&fit=crop", // Space/Abstract
        accentColor: "#3B82F6", // Space Blue
        rating: { average: 4.9, count: 1540 },
        tags: ["Sci-Fi", "Survival", "Humor"],
        synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that.",
        sentiment: "Thrilling & Heartfelt",
    },
    {
        id: "3",
        title: "Dark Matter",
        author: "Blake Crouch",
        price: 16.00,
        coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop", // Galaxy
        accentColor: "#171717", // Deep Dark
        rating: { average: 4.7, count: 890 },
        tags: ["Thriller", "Multiverse", "Mind-Bending"],
        synopsis: "Jason Dessen is walking home through the streets of Chicago one night when he is kidnapped into an alternate world—one where his life is completely different.",
        sentiment: "Mind-bending & Gripping",
    },
    {
        id: "4",
        title: "Circe",
        author: "Madeline Miller",
        price: 14.99,
        coverUrl: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1000&auto=format&fit=crop", // Classical/Gold
        accentColor: "#D97706", // Gold/Amber
        rating: { average: 4.6, count: 620 },
        tags: ["Fantasy", "Mythology", "Drama"],
        synopsis: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother.",
        sentiment: "Lyrical & Enchanting",
    },
    {
        id: "5",
        title: "Neuromancer",
        author: "William Gibson",
        price: 15.50,
        coverUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", // Cyberpunk
        accentColor: "#10B981", // Neon Green
        rating: { average: 4.5, count: 310 },
        tags: ["Cyberpunk", "Sci-Fi", "Classic"],
        synopsis: "Case was the sharpest data-thief in the matrix—until he crossed the wrong people, and they crippled his nervous system, banishing him from the console cowboy's paradise.",
        sentiment: "Gritty & Prophetic",
    },
    {
        id: "6",
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        price: 19.99,
        coverUrl: "https://images.unsplash.com/photo-1506543730-f3a3a778c1b9?q=80&w=1000&auto=format&fit=crop", // Sun/Warm
        accentColor: "#F59E0B", // Sunny Yellow
        rating: { average: 4.4, count: 280 },
        tags: ["Literary", "Sci-Fi", "Artificial Intelligence"],
        synopsis: "Klara is an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse.",
        sentiment: "Poignant & Beautiful",
    },
];
