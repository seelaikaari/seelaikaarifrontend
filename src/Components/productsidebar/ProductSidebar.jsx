import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";
import "./ProductSidebar.css";

const ProductSideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="filter-section">
      <div className="sidebar-header" onClick={toggleExpansion}>
        <span>Category</span>
        {isExpanded ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      {isExpanded && (
        <div className="category-list">
          <ul>
            {["Gadwal", "Banarasi", "Kanchipuram", "Patola"].map((category) => (
              <li key={category} className="category-item">
                <input type="checkbox" id={category} />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSideBar;
