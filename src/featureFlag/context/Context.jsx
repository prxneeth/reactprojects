import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalContext({ children }) {
  const [enabledFlags, setEnabledFlags] = useState({});

  useEffect(() => {
    featureFlagDataServiceCall()
      .then((data) => {
        setEnabledFlags(data);
      })
      .catch((error) => {
        console.error("Error fetching feature flags:", error);
      });
  }, []);

  return (
    <FeatureFlagContext.Provider value={enabledFlags}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
