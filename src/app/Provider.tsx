"use client";
import Modal from "react-modal";
import { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Устанавливаем элемент при монтировании на клиенте
    if (typeof window !== "undefined") {
      Modal.setAppElement("#modal");
    }
  }, []);

  return (
    <div>
      {children}
      <div id="modal"></div>
    </div>
  );
};

export default Provider;
