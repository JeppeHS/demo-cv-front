import { useCallback, useEffect, useRef, useState } from "react";

// Copied from https://github.com/orgs/mantinedev/discussions/6843

const getUrlParams = () => {
  const params: Record<string, any> = {};

  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key) => {
      try {
        // Decode the parameter value and parse it from JSON
        params[key] = JSON.parse(decodeURIComponent(value));
      } catch {
        // If parsing fails, assign the decoded value directly
        params[key] = decodeURIComponent(value);
      }
    });
  }

  return params;
};

const useUrlState = <T extends Record<string, any>>(initialState: T) => {
  const [state, setState] = useState<T>(() => {
    // On initial render, merge initial state with URL parameters
    const urlParams = getUrlParams();
    return { ...initialState, ...urlParams };
  });

  // Ref to track if the state update is from a popstate event
  const isPopState = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true; // Set flag to prevent URL update in the next effect
      const urlParams = getUrlParams();
      // Update state with parameters from the URL when navigating back/forward
      setState((prevState) => ({ ...prevState, ...urlParams }));
    };

    // Listen for browser navigation events (back/forward)
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (isPopState.current) {
      // Skip updating the URL if the state change originated from a popstate event
      isPopState.current = false;
      return;
    }

    const searchParams = new URLSearchParams();

    Object.entries(state).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        // Stringify and encode each state value before adding it to the URL
        searchParams.set(key, encodeURIComponent(JSON.stringify(value)));
      }
    });

    // Construct the new URL with updated query parameters
    const newUrl = `${window.location.pathname}?${searchParams.toString()}${window.location.hash}`;
    // Update the browser's history without reloading the page
    window.history.pushState(null, "", newUrl);
  }, [state]);

  const updateState = useCallback((updater: (current: T) => T) => {
    // Update the state using the provided updater function
    setState((current) => updater(current));
  }, []);

  return [state, updateState] as const;
};

export default useUrlState;