import ItemCard from "./ItemCard";
import { motion } from "framer-motion";

function CategorySection({
  categoryName,
  items,
}) {
  return (
   <motion.section
  id={categoryName.toLowerCase()}
  className="category-section"

  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.6 }}

  viewport={{ once: true, margin: "-100px" }}
>


    <section
      id={categoryName.toLowerCase()}
      className="category-section"
    >

      <h2>{categoryName}</h2>

      <motion.div
  className="items-grid"

  initial="hidden"
  whileInView="visible"

  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }}
>

        {items.map((item) => (

          <ItemCard
            key={item.id}
            item={item}
          />

        ))}

      </motion.div>

    </section>
    </motion.section> 
  );
}

export default CategorySection;