const bookData = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "fiction",
        length: "short",
        image: "burger-3442227_1280.jpg", 
        synopsis: "A classic story of wealth, love, and the American Dream in the 1920s.",
        relatedBooks: ["None (Standalone Novel)"], 
        reviews: [
            { user: "Reader1", rating: "5/5", comment: "Beautifully written." },
            { user: "HistoryBuff", rating: "4/5", comment: "Great atmosphere." }
        ]
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        genre: "sci-fi",
        length: "long",
        image: "burger-5111533_1280.jpg",
        synopsis: "A sprawling space epic about politics, religion, and giant sandworms.",
        relatedBooks: ["Dune Messiah (Sequel)", "Children of Dune (Sequel)"],
        reviews: [
            { user: "SciFiFan", rating: "5/5", comment: "The best sci-fi ever." }
        ]
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "fiction",
        length: "medium",
        image: "images (1).webp",
        synopsis: "A chilling dystopian tale about government surveillance and totalitarianism.",
        relatedBooks: ["Animal Farm", "Brave New World"],
        reviews: [
            { user: "Thinker99", rating: "5/5", comment: "More relevant today than ever." }
        ]
    },
    {
        id: 4,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "sci-fi",
        length: "long",
        image: "Project Hail Mary.jpg", 
        synopsis: "A lone astronaut must save humanity using science and a very unexpected ally.",
        relatedBooks: ["The Martian", "Artemis"],
        reviews: [
            { user: "SpaceGeek", rating: "5/5", comment: "I couldn't put it down!" }
        ]
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "fiction",
        length: "medium",
        image: "The Hobbit.webp",
        synopsis: "The adventure of Bilbo Baggins as he seeks to reclaim a lost treasure from a dragon.",
        relatedBooks: ["The Lord of the Rings", "The Silmarillion"],
        reviews: [
            { user: "FantasyLover", rating: "5/5", comment: "A perfect adventure." }
        ]
    },
    {
        id: 6,
        title: "Neuromancer",
        author: "William Gibson",
        genre: "sci-fi",
        length: "medium",
        image: "Neuromancer.webp",
        synopsis: "The foundational novel of the cyberpunk genre, following a washed-up data thief.",
        relatedBooks: ["Count Zero", "Mona Lisa Overdrive"],
        reviews: [
            { user: "CyberPunk", rating: "4/5", comment: "Dense but incredibly cool." }
        ]
    },
    {
        id: 7,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        length: "short",
        image: "The Midnight Library.webp",
        synopsis: "Between life and death there is a library where you can try on all the lives you could have lived.",
        relatedBooks: ["How to Stop Time"],
        reviews: [
            { user: "Dreamer", rating: "4.5/5", comment: "Very emotional and thought-provoking." }
        ]
    },
   
    {
        id: 8,
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "fiction",
        length: "medium",
        image: "Frankenstein.webp",
        synopsis: "A scientist brings a creature to life, only to be haunted by the consequences of his ambition.",
        relatedBooks: ["Dracula", "The Picture of Dorian Gray"],
        reviews: [
            { user: "GothReader", rating: "5/5", comment: "The original sci-fi masterpiece." }
        ]
    },
    {
        id: 9,
        title: "The Martian",
        author: "Andy Weir",
        genre: "sci-fi",
        length: "medium",
        image: "The Martian.jpg",
        synopsis: "An astronaut is stranded on Mars and must use his ingenuity to survive until rescue.",
        relatedBooks: ["Project Hail Mary", "Artemis"],
        reviews: [
            { user: "NASA_Fan", rating: "5/5", comment: "Science-heavy and hilarious." }
        ]
    },
    {
        id: 10,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "fiction",
        length: "short",
        image: "The Alchemist.webp",
        synopsis: "A shepherd boy travels to Egypt in search of treasure, only to find himself along the way.",
        relatedBooks: ["The Pilgrimage", "Life of Pi"],
        reviews: [
            { user: "Seeker", rating: "4/5", comment: "A simple but life-changing story." }
        ]
    },
    {
        id: 11,
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "sci-fi",
        length: "medium",
        image: "Foundation.jpg",
        synopsis: "A mathematician predicts the fall of a galactic empire and creates a plan to save knowledge.",
        relatedBooks: ["Foundation and Empire", "Second Foundation"],
        reviews: [
            { user: "EmpireBuilder", rating: "5/5", comment: "The scope of this story is incredible." }
        ]
    },
    {
        id: 12,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "fiction",
        length: "medium",
        image: "To Kill a Mockingbird.jpg",
        synopsis: "A young girl learns about injustice and courage in a small Southern town during the 1930s.",
        relatedBooks: ["Go Set a Watchman"],
        reviews: [
            { user: "ClassicLover", rating: "5/5", comment: "Atticus Finch is a hero for the ages." }
        ]
    }
];