export function useEstatisticas() {
  const { loading, error, execute, clearError } = useApi();
  const [estatisticas, setEstatisticas] = useState(null);

  const fetchEstatisticas = useCallback(async () => {
    const data = await execute(
      () => apiService.getEstatisticas(),
      { context: "Estatísticas", silent: true }
    );
    setEstatisticas(data);
    return data;
  }, [execute]);

  return {
    estatisticas,
    loading,
    error,
    fetchEstatisticas,
    clearError
  };
}