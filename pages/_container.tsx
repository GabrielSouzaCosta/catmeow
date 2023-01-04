import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ContextProvider, useStateContext } from '../context/ContextProvider';

const Container = ({ Component, pageProps }: AppProps) => {
	const [loaded, setLoaded] = useState(false);
	const context = useStateContext();

	useEffect(() => {
		if (typeof window !== "undefined") {
			context?.setTheme(sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : 'light')
			setLoaded(true)
		}
	},)

	if (!loaded) return ""
	return (
		<div className={context?.theme === 'dark' ? 'dark bg-darkSecondary': 'body-background'}>
			<Component {...pageProps} />
		</div>
	);
};

export default Container