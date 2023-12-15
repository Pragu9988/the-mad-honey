"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

const TanstackProvider = ({ children }: { children: ReactNode }) => {
  const [qeuryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={qeuryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
