import Selector from "./Selector";

// Interface to describe sort order
export interface SortOrder {
  id: number;
  name: string;
  value: string;
}

// Pass in function to pass sort order to App component
interface Props {
  onSelect: (sortOrder: SortOrder) => void;
  sortOrder: string;
}

// Returns a selector for sort orders
const SortSelector = ({ onSelect, sortOrder }: Props) => {
  // Array of sort orders
  const sortOrders: SortOrder[] = [
    { id: 0, name: "Relevance", value: "" },
    { id: 1, name: "Date added", value: "-added" },
    { id: 2, name: "Name", value: "name" },
    { id: 3, name: "Release date", value: "-release" },
    { id: 4, name: "Popularity", value: "-metacritic" },
    { id: 5, name: "Average rating", value: "-rating" },
  ];

  // Find the current sort order
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  // Create a string placeholder based on sort order
  const selectName: string = currentSortOrder?.name || "Relevance";

  return (
    <Selector
      data={sortOrders}
      selectedName={"Sort by: " + selectName}
      onSelect={onSelect}
    ></Selector>
  );
};

export default SortSelector;
