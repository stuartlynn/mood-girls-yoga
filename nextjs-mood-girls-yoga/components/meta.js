import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content="Modern, accessible and inclusive yoga classes for young girls in schools, communities and more."
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
            <meta property="og:" content={HOME_OG_IMAGE_URL} />
            <meta property="og:title" content="Mood Girls Yoga" />
            <meta
                property="og:description"
                content="Modern, accessible and inclusive yoga classes for young girls in schools, communities and more."
            />
            <meta property="og:url" content="https://www.moodgirlsyoga.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Mood Girls Yoga" />
            <meta property="og:site_name" content="Mood Girls Yoga" />
            <meta
                property="og:description"
                content="Modern, accessible and inclusive yoga classes for young girls in schools, communities and more."
            />
            <meta
                property="og:image"
                itemprop="image"
                content="https://www.moodgirlsyoga.com/_next/image?url=%2FMood_Logo-29.png&w=3840&q=75"
            />
            <meta
                property="og:image:secure_url"
                itemprop="image"
                content="https://www.moodgirlsyoga.com/_next/image?url=%2FMood_Logo-29.png&w=3840&q=75"
            />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="moodgirlsyoga.com" />
            <meta property="twitter:url" content="https://www.moodgirlsyoga.com/" />
            <meta name="twitter:title" content="Mood Girls Yoga" />
            <meta
                name="twitter:description"
                content="Modern, accessible and inclusive yoga classes for young girls in schools, communities and more."
            />
            <meta
                name="twitter:image"
                content="https://www.moodgirlsyoga.com/_next/image?url=%2FMood_Logo-29.png&w=3840&q=75"
            />

            <title>Mood Girls Yoga</title>
        </Head>
    );
}
