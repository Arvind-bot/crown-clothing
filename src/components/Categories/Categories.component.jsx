import CategoryItem from '../CategoryItem/CategoryItem.component';
import './Categories.styles.scss';

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {categories &&
        Array.isArray(categories) &&
        categories.length > 0 &&
        categories.map((category) => {
          return (
            <CategoryItem key={category.id} category={category} />
          );
        })}
    </div>
  );
};

export default Categories;
