import Head from "next/head";
import Navbar from "../components/landing/Navigation-bar";
import Footer from "../components/landing/Footer";
import HomePageBody from "../components/landing/HomePageBody";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import Projects from "../components/landing/Projects";
import ContactUs from "../components/landing/ContactUs";
import Clientreview from "../components/landing/Clientreview";

export default function Home({ feed }) { 
    const images = feed.data
  return (
    <>
      <Head>
        <title>ARQON</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <link rel="icon" href="/Arqon-Logos-A-White.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://arqon.com.ph/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ARQON Website" />
        <meta
          property="og:description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <meta property="og:image" content="/01_Arqon_Home page_01-01.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="https://arqon.com.ph/" />
        <meta name="twitter:title" content="ARQON Website" />
        <meta
          name="twitter:description"
          content="We are a full service architectural firm that specializes in streamlined design and build projects"
        />
        <meta name="twitter:image" content="/01_Arqon_Home page_01-01.jpg" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      {/* <Popup /> */}
      <HomePageBody />
      <Projects />
      {/* <Clientreview /> */}
      <ContactUs />
      <footer>
        <Footer data={images}/>
      </footer>
    </>
  );
}


export const getStaticProps = async (context) => {

  // const longLiveToken = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.IG_APP_SECRET}&access_token=${process.env.INSTAGRAM_KEY}`
  // const longLiveData = await fetch(longLiveToken)
  // const longLiveAttr = await longLiveData.json()
  // // console.log(longLiveAttr)

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.INSTAGRAM_KEY}`
    const data = await fetch(url)
    const feed = await data.json()
    console.log('This is the value in my feed' + data)   

    return {
      props: {
        feed
      }
    }

}
  
