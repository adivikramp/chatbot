/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { mockCompanies } from "@/data/mockData";
import { useState } from "react";

const AdminPanel = () => {
  const [companies, setCompanies] = useState(mockCompanies);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 pt-32">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Company List as Cards */}
      <div className="w-full max-w-5xl grid gap-6 grid-cols-1 md:grid-cols-2">
        {companies.length > 0 ? (
          companies.map((company) => (
            <div key={company.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              {/* Company Name & URL */}
              <h2 className="text-xl font-bold mb-2">{company.name}</h2>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-words"
              >
                {company.url}
              </a>

              {/* Description */}
              <p className="mt-3 text-gray-400">{company.description}</p>

              {/* Scraped Data */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Scraped Pages:</h3>
                {company.scrapedData.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {company.scrapedData.map((data, index) => (
                      <a
                        key={index}
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition"
                      >
                        {data.page}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-red-400 mt-2">No Pages Scraped</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-4xl">No data found</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
