'use client';
import React from 'react'
import '@/styles/completebuild.css'
import BuildCard from './buildcard'
import { useState } from 'react'
import { pcBuilds, users, pcParts, pcBuildsParts } from '../lib/placeholder_data';
import Link from 'next/link';

const ITEMS_PER_PAGE = 12;

const completebuild = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = pcBuilds.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const totalPages = Math.ceil(pcBuilds.length / ITEMS_PER_PAGE);

    return (
    <>
        <section className="page-title">
            <h1>Complete PC builds</h1>
        </section>

        <section className="filter-section">
            <button className="filter-btn">Filters</button>
            <input type="text" className="search-input" placeholder="Hinted search text"></input>
        </section>

        <section className="container">
            <div className="builds-gallery">
                {currentProducts.map((product) => (
                <div key={product.id}>
                    <Link href={`/complete_build/${product.id}`} legacyBehavior>
                    <a>
                        <BuildCard
                            id={product.id}
                            users_id={product.user_id}
                            users={users}
                            picture={product.picture}
                            title={product.name}
                        />
                    </a>
                    </Link>
                </div>
                ))}
            </div>
        </section>

        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={index + 1 === currentPage ? "active" : ""}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    </>
  )
}

export default completebuild