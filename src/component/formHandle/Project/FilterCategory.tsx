
interface Props {
    onSelectCategory: (category:string) => void;
}

export const FilterCategory = ({onSelectCategory} : Props) => {
  return (
        <div className="mb-3 mt-4">
        <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
            <option value="">All categories</option>
            <option value="Groceries">Groceries</option>
            <option value="utility">utility</option>
            <option value="Entertaiment">Entertaiment</option>
        </select>
        </div>
  )
}
