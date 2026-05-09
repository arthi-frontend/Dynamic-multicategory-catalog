import {useEffect, useState } from "react";

import products from "../data/data.json";
import SkeletonCard from "../components/SkeletonCard";
import CategorySection from "../components/CategorySection";
import EmptyState from "../components/EmptyState";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

function Home({
  darkMode,
  setDarkMode,
}) {

const [loading, setLoading] =
  useState(true);

  useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1200);

  return () => clearTimeout(timer);

}, []);

const resetSearch = () => {
  setSearchTerm("");
};


  const [searchTerm, setSearchTerm] =
    useState("");

  const productsWithIds = products.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  })
);

  const filteredproducts =
  productsWithIds.filter((item) => {

    const searchValue =
      searchTerm.toLowerCase();

    return (
      item.itemname
        .toLowerCase()
        .includes(searchValue)

      ||

      item.category
        .toLowerCase()
        .includes(searchValue)
    );
  });

  const groupedItems =
    filteredproducts.reduce(
      (accumulator, currentItem) => {

        if (
          !accumulator[currentItem.category]
        ) {
          accumulator[
            currentItem.category
          ] = [];
        }

        accumulator[
          currentItem.category
        ].push(currentItem);

        return accumulator;

      },

      {}
    );

  return (
    <>
  <Navbar
    darkMode={darkMode}
  setDarkMode={setDarkMode} />
  <HeroSection />

  <div className="home-container">

      <h1>Dynamic Product Catalog</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />

      {loading ? (

  <div className="items-grid">

    {Array.from({ length: 8 }).map(
      (_, index) => (

        <SkeletonCard
          key={index}
        />

      )
    )}

  </div>

) : Object.keys(groupedItems).length === 0 ? (

  <EmptyState resetSearch={resetSearch} />

) : (

  Object.entries(groupedItems).map(
    ([categoryName, items]) => (

      <CategorySection
        key={categoryName}
        categoryName={categoryName}
        items={items}
      />

    )
  )

)}
    

      {Object.keys(groupedItems).length === 0 ? (

        <h2>No products Found</h2>

      ) : (

        Object.entries(groupedItems).map(
          ([categoryName, items]) => (

            <CategorySection
              key={categoryName}
              categoryName={categoryName}
              items={items}
            />

          )
        )

      )}
<Footer />
    </div>
    </>
  );
}

export default Home;