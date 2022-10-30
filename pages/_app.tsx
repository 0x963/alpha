import type { AppProps } from "next/app"
import { Fragment } from "react"
import Head from "next/head"
import "@/styles/main.scss"
const App = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Fragment>
			<Head>
				<title>Visual Code Generator</title>
			</Head>
			<Component {...pageProps} router={router} />
		</Fragment>
	)
}

export default App
