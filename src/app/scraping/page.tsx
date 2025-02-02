"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { WebPage } from "@/types/types";
import { initialWebpages, dummyChunks } from "@/data/mockData";
import { useRouter } from "next/navigation";
import ScrapingDataCard from "@/components/ScrapingDataCard";

const Scraping = () => {
    const [webpages, setWebpages] = useState<WebPage[]>(initialWebpages);
    const [selectedPage, setSelectedPage] = useState<WebPage | null>(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("pending");

    const modalRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (progress === 100) {
            setWebpages((prevWebpages) =>
                prevWebpages.map((page) =>
                    page.status === "pending" ? { ...page, status: "scraped" } : page
                )
            );
            toast.success("Scraping Completed!");
            setSelectedPage(null);
        }
    }, [progress]);

    useEffect(() => {
        if (status === "pending") {
            const interval = setInterval(() => {
                if (progress < 100) {
                    setProgress((prevProgress) => prevProgress + 10);
                } else {
                    clearInterval(interval);
                }
            }, 200);

            return () => clearInterval(interval);
        }
    }, [status, progress]);

    const handleViewDetails = (page: WebPage) => {
        setSelectedPage(page);
        setProgress(0);
        setStatus(page.status);
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setSelectedPage(null);
        }
    };

    return (
        <section className="min-h-screen bg-black flex flex-col items-center pt-12 pb-4 md:pt-32">
            {status === "pending" && (
                <div className="absolute top-0 w-full h-2 z-20">
                    <div
                        className="h-full bg-blue-500 rounded-lg"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
            <ToastContainer />
            <div className="w-4/5 mx-auto">
                <h2 className="text-white text-4xl font-semibold mb-12">Webpages Detected</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {webpages.map((page) => (
                        <ScrapingDataCard key={page.title} page={page} handleViewDetails={handleViewDetails} />
                    ))}
                </div>

                {selectedPage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                        onClick={handleOutsideClick}
                    >
                        <div ref={modalRef} className="relative w-[350px] md:w-[800px] bg-gradient-to-t from-gray-800 to-black text-white rounded-xl border border-gray-600 p-6 md:mt-8">
                            <h2 className="text-2xl font-semibold mb-4">{selectedPage.title} - Scraped Data</h2>
                            <Link href={selectedPage.url} className="text-lg mb-4">URL: {selectedPage.url}</Link>

                            <div className="space-y-4 mt-6">
                                {dummyChunks.map((chunk) => (
                                    <div key={chunk.id} className="bg-gray-700 p-4 rounded-lg">
                                        <h3 className="text-xl font-semibold">{chunk.title}</h3>
                                        <p className="text-sm mt-2">{chunk.content}</p>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => setSelectedPage(null)}
                                className="mt-6 py-2 px-4 bg-red-600 text-white rounded-xl"
                            >
                                Close
                            </Button>
                        </div>
                    </motion.div>
                )}

                <div className="flex justify-end mt-8">
                    <Button onClick={() => router.push("/integration")} variant="outline" className="w-full md:w-min border-none px-16 py-2 rounded-2xl text-lg font-bold transition-all duration-200 hover:bg-gray-600 hover:text-white">Next</Button>
                </div>
            </div>
        </section>
    );
};

export default Scraping;
