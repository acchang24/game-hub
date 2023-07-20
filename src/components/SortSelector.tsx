import useGameQueryStore from "../store";
import Selector from "./Selector";

// Interface to describe sort order
export interface SortOrder {
  id: number;
  name: string;
  value: string;
}

// Returns a selector for sort orders
const SortSelector = () => {
  // Array of sort orders
  const sortOrders: SortOrder[] = [
    { id: 0, name: "Relevance", value: "" },
    { id: 1, name: "Date added", value: "-added" },
    { id: 2, name: "Name", value: "name" },
    { id: 3, name: "Release date", value: "-release" },
    { id: 4, name: "Popularity", value: "-metacritic" },
    { id: 5, name: "Average rating", value: "-rating" },
  ];

  // Get the state's sort order
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  // Get the state's setSortOrder function
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

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
      onSelect={(order: SortOrder) => {
        // Set the state's sortOrder to the selected one
        setSortOrder(order.value);
      }}
    ></Selector>
  );
};

export default SortSelector;
