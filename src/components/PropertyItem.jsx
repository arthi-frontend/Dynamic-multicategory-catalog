function PropertyItem({ property, value }) {
  return (
    <div className="property-card">

      <div className="property-left">

        <span className="property-label">
          {property}
        </span>

      </div>

      <div className="property-right">

        <span className="property-value">
          {value}
        </span>

      </div>

    </div>
  );
}

export default PropertyItem;