import Selector from "./Selector";

export interface SortOrder {
  id: number;
  name: string;
  value: string;
}

interface Props {
  onSelect: (sortOrder: SortOrder) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelect, selectedOrder }: Props) => {
  const sortOrders: SortOrder[] = [
    { id: 0, name: "Relevance", value: "" },
    { id: 1, name: "Date added", value: "-added" },
    { id: 2, name: "Name", value: "name" },
    { id: 3, name: "Release date", value: "-release" },
    { id: 4, name: "Popularity", value: "-metacritic" },
    { id: 5, name: "Average rating", value: "-rating" },
  ];

  let selectedName = "Order by: ";
  if (selectedOrder !== undefined) {
    selectedName += selectedOrder;
  } 

  return (
    <Selector
      data={sortOrders}
      selectedName={selectedName}
      onSelect={onSelect}
    ></Selector>
  );
};

export default SortSelector;
