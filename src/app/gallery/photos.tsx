import Image from "next/image";

interface AndersonImage {
    date: Date;
    image: string;
    title: string;
    text: string;
}

interface YearData {
    year: number;
    images: AndersonImage[];
}

const imagesByYear: YearData[] = [
    {
        year: 2023,
        images: [
            {
                date: new Date("2023-01-01"),
                image: "/about/anderson_1.jpeg",
                title: "New Year's Day",
                text: "Celebrating the start of the year."
            },
            {
                date: new Date("2023-02-14"),
                image: "/about/anderson_2.jpg",
                title: "Valentine's Day",
                text: "A day of love and friendship."
            }
        ]
    },
    {
        year: 2024,
        images: [
            {
                date: new Date("2024-07-04"),
                image: "/about/anderson_3.jpg",
                title: "Independence Day",
                text: "Fireworks and barbecues."
            }
        ]
    }
];

// Pre-compute newest-first ordering at module load so the component doesn't need to sort.
// This runs where the module is evaluated (server/build time for Server Components).
const sortedImagesByYear: YearData[] = [...imagesByYear]
    .slice()
    .reverse()
    .map((y) => ({
        ...y,
        images: [...y.images].slice().reverse(),
    }));

// Format a date as "Month Dayth" (e.g. "February 13th"). Year is omitted because we show the year header.
function formatDateWithoutYear(d: Date) {
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "long" });
    const ordinal = (n: number) => {
        const mod100 = n % 100;
        if (mod100 >= 11 && mod100 <= 13) return "th";
        switch (n % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
    return `${month} ${day}${ordinal(day)}`;
}

export default function Photos() {
    // Use the pre-sorted data so rendering is simple and deterministic.
    return (
        <div className="flex flex-col gap-8">
            {sortedImagesByYear.map((yearData) => (
                <div key={yearData.year} className="flex flex-col gap-6">
                    <div className="text-6xl font-bold text-center py-8 text-gray-700 dark:text-gray-300">
                        {yearData.year}
                    </div>

                    {yearData.images.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-4 items-start"
                        >
                            {/* image */}
                            <div className="relative w-full md:w-2/3 h-64 md:h-80">
                                <Image
                                    src={item.image}
                                    fill={true}
                                    className="object-cover rounded-lg"
                                    alt={item.title}
                                />
                            </div>

                            {/* text */}
                            <div className="flex flex-col gap-2 md:w-1/3">
                                <span className="text-sm text-gray-500 dark:text-gray-500">
                                    {formatDateWithoutYear(item.date)}
                                </span>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}