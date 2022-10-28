import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient();

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
