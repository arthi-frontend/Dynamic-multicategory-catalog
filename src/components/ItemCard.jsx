import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ItemCard({ item }) {
  return (
    <Link
      to={`/item/${item.id}`}
      className="card-link"
    >

    <motion.div
  className="item-card"

  whileHover={{
    y: -12,
    scale: 1.03,
  }}

  initial={{
    opacity: 0,
    y: 40,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    duration: 0.4,
  }}

  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }}
>

        <img
          src={item.image}
          alt={item.itemname}
          loading="lazy"
           className="card-image"
        />

        <div className="item-card-content">

          <h3>{item.itemname}</h3>

          <p>{item.category}</p>

        </div>

      </motion.div>

    </Link>
  );
}

export default ItemCard;