import Head from 'next/head'

export const siteTitle = "The Mukiris" 

export default function layout({children}){
	return (

		<div className="flex-row">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name='description' content='Personal Document Manager'/>
				<meta name="og:title" content={siteTitle}/>
			</Head>

			<main>
			
				{children}
			</main>
		</div>
	)
};
