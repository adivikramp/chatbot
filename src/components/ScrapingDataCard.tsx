import Image from "next/image";
import { Button } from "./ui/button";
import { ScrapingDataCardProps } from "@/types/types";

const ScrapingDataCard: React.FC<ScrapingDataCardProps> = ({ page, handleViewDetails }) => {
    return (
        <div className="flex-1 flex flex-col text-white p-6 gap-y-2 border border-gray-600 rounded-xl bg-gradient-to-t from-gray-800 to-black hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="relative w-full h-48 rounded-lg">
                <Image
                    src={page.imgSrc}
                    alt={page.title}
                    fill
                    className="rounded-lg"
                />
            </div>
            <div className="flex gap-x-4">
                <h1 className="text-xl font-semibold mt-4 text-white">{page.title}</h1>
                <p className={`w-min py-1 px-3 text-sm mt-4 rounded-2xl ${page.status === "pending" ? "bg-red-700" : "bg-green-700"} text-center`}>
                    {page.status}
                </p>
            </div>
            <hr className="my-4" />
            <Button
                onClick={() => handleViewDetails(page)}
                className="py-3 text-lg font-semibold w-full rounded-full mt-4 bg-black text-white border border-gray-500 hover:bg-gray-900 transition-colors duration-200 ease-in-out"
            >
                View Details
            </Button>
        </div>
    )
}

export default ScrapingDataCard