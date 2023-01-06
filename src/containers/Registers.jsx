import React, { useEffect, useState } from "react";
import { i18n } from "../constants/i18n-ES";
import { useAuth } from "../hooks/useAuth";
import { useProducers } from "../hooks/useProducers";
import "./styles/Registers.css";

export const Registers = () => {
  const { checkSession } = useAuth();
  const { producers, getProducers } = useProducers();

  useEffect(() => {
    checkSession();
    getProducers();
  }, producers);

  return (
    <table>
      <caption>{i18n.producerRegister}</caption>
      <tbody>
        <tr>
          <th>{i18n.documentNumber}</th>
          <th>{i18n.name}</th>
          <th>{i18n.phoneNumber}</th>
        </tr>
        {producers.map((item) => (
          <tr key={item.docNumber}>
            <>
              <td key={`${item.docNumber}-docNumber`}>{item.docNumber}</td>
              <td key={`${item.docNumber}-name`}>{item.docNumber}</td>
              <td key={`${item.docNumber}-phoneNumber`}>{item.docNumber}</td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
