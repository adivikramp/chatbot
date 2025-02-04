const initialWebpages = [
    { title: "Home", url: "https://huly-clone-seven.vercel.app/", imgSrc: "/images/home.png", status: "scraped" },
    { title: "Pricing", url: "https://huly-clone-seven.vercel.app/pricing", imgSrc: "/images/pricing.png", status: "scraped" },
    { title: "Docs", url: "https://huly-clone-seven.vercel.app/docs", imgSrc: "/images/docs.png", status: "pending" },
    { title: "Changelog", url: "https://huly-clone-seven.vercel.app/changelog", imgSrc: "/images/changelog.png", status: "pending" }
];

const dummyChunks = [
    { id: 1, title: "Information", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra mi eu odio volutpat, a venenatis odio malesuada. Sed sit amet ullamcorper odio. Phasellus tristique justo eu mollis vehicula." },
    { id: 2, title: "Fonts", content: "Roboto, Sans-serif, Arial, Times New Roman, Helvetica, Courier New." },
    { id: 3, title: "Assets", content: "img-1.jpg, logo.png, background-image.jpg, hero-banner.png, icon-1.svg, illustration.svg." }
];

const mockCompanies = [
    {
        id: 1,
        name: "Tech Corp",
        url: "https://techcorp.com",
        description: "A leading tech company",
        scrapedData: [
            { page: "Home", link: "https://techcorp.com" },
            { page: "Changelog", link: "https://techcorp.com/changelog" },
        ],
    },
    {
        id: 2,
        name: "Example Inc",
        url: "https://example.com",
        description: "Example company description",
        scrapedData: [],
    },
]

export { initialWebpages, dummyChunks, mockCompanies };