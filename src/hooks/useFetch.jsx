import { useState, useEffect } from "react";

export const useFetch = (url, deps = []) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Error fetching data");
				}

				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log(error);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, ...deps]);

	return { data, isLoading, error };
};
