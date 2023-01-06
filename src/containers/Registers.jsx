import { useEffect } from "react";
import { i18n } from "../constants/i18n-ES";
import { useAuth } from "../hooks/useAuth";
import { useSortableData } from "../hooks/useSortableData";

import { useProducers } from "../hooks/useProducers";
import "./styles/Registers.css";

export const Registers = () => {
  const { checkSession } = useAuth();
  const { producers, getProducers } = useProducers();
  const { items, requestSort } = useSortableData(producers);

  useEffect(() => {
    checkSession();
    getProducers();
  }, []);

  return (
    <div className="table">
      <div className="table-container">
        <table>
          <caption>{i18n.producerRegister}</caption>
          <tbody>
            <tr>
              <th onClick={() => requestSort("docNumber")}>
                {i18n.documentNumber}
              </th>
              <th onClick={() => requestSort("name")}>{i18n.name}</th>
              <th onClick={() => requestSort("phoneNumber")}>
                {i18n.phoneNumber}
              </th>
            </tr>
            {items.map((item) => (
              <tr key={item.docNumber}>
                <>
                  <td key={`${item.docNumber}-docNumber`}>{item.docNumber}</td>
                  <td key={`${item.docNumber}-name`}>{item.name}</td>
                  <td key={`${item.docNumber}-phoneNumber`}>
                    {item.phoneNumber}
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
