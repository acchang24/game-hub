import { ReactNode } from "react";
import "./css/DefinitionItem.css";

interface Props {
  name: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ name, children }: Props) => {
  return (
    <div className="definition-item">
      <dl>
        <dt>{name}</dt>
        <dd className="description-item">{children}</dd>
      </dl>
    </div>
  );
};

export default DefinitionItem;
