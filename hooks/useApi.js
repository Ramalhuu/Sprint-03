"use client";
import { useState, useCallback } from "react";

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (fn, { context, successMessage, silent } = {}) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fn();
      if (successMessage && !silent) {
        console.log(`[${context}] ${successMessage}`);
      }
      return result;
    } catch (err) {
      if (!silent) {
        console.error(`[${context}]`, err);
      }
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = () => setError(null);

  return { loading, error, execute, clearError };
}
