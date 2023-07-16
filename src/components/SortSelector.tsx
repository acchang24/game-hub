import Selector from "./Selector";

export interface SortOrder {
  id: number;
  name: string;
  value: string;
}

interface Props {
  onSelect: (sortOrder: SortOrder) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelect, sortOrder }: Props) => {
  const sortOrders: SortOrder[] = [
    { id: 0, name: "Relevance", value: "" },
    { id: 1, name: "Date added", value: "-added" },
    { id: 2, name: "Name", value: "name" },
    { id: 3, name: "Release date", value: "-release" },
    { id: 4, name: "Popularity", value: "-metacritic" },
    { id: 5, name: "Average rating", value: "-rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  
  const selectName: string = currentSortOrder?.name || "Relevance"

  return (
    <Selector
      data={sortOrders}
      selectedName={"Sort by: " + selectName}
      onSelect={onSelect}
    ></Selector>
  );
};

export default SortSelector;
