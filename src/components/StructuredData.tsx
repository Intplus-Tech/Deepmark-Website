// src/components/StructuredData.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

// Define the props type
type StructuredDataProps = {
  data: Record<string, any>;
};

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default StructuredData;
