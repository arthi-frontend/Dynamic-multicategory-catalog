import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../data/data.json";
import PropertyItem from "../components/PropertyItem";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ItemDetails({
  darkMode,
}) {

  const { id } = useParams();

  const productsWithIds = products.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  })
);

  const selectedItem = productsWithIds.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    return <h2>Item Not Found</h2>;
  }

return (
<div
  className={
    darkMode
      ? "details-page dark"
      : "details-page"
  }
>

    <div className="details-container">

      <Link
        to="/"
        className="details-back"
      >
        ← Back to Home
      </Link>

      <div className="details-wrapper">

        {/* IMAGE SECTION */}

        <motion.div
  className="details-image-section"

  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}

  transition={{ duration: 0.6 }}
>
          <img
            src={selectedItem.image}
            alt={selectedItem.itemname}
            className="details-image"
            loading="lazy"
              onLoad={(e) =>
    e.target.classList.add("loaded")
  }
          />
</motion.div>
        </div>

        {/* CONTENT SECTION */}
<motion.div
  className="details-content"

  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}

  transition={{ duration: 0.6 }}
>

          <div className="category-badge">
            {selectedItem.category}
          </div>

          <h1>
            {selectedItem.itemname}
          </h1>

          <p className="details-description">

            Experience premium quality,
            cutting-edge technology,
            and world-class performance
            with the
            {" "}
            {selectedItem.itemname}.

          </p>

          <div className="properties-section">

            <h2>
              Specifications
            </h2>

            {selectedItem.itemprops.map(
              (prop, index) => (

                <PropertyItem
                  key={index}
                  property={prop.label}
                  value={prop.value}
                />

              )
            )}

          </div>

        </motion.div>

      </div>
<Footer />

 </div>

);
}

export default ItemDetails;