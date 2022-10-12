import Layout from '../components/Layout';
import { useRouter} from "next/router";
import {useEffect} from "react";
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            document.body.style.overflow = 'unset';
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
