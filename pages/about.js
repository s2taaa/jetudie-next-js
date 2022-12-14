import Head from 'next/head';
import Footer from '@/layout/footer';
import style from 'styles/About.module.scss';
// import Image from 'next/image';
function About() {
   return <div className={style.highlight} > <h1 className="text-3xl font-bold underline">
      Hello world!
   </h1>
      <button className="btn btn-primary"> button</button>
      {['2', '3'].map((path) => {
         return (
            <div key={path}>
               {/* <Image src={`/${path}.jpg`} width='600' height='600' alt="" /> */}
            </div>

         )
      })}


   </div>
}
export default About;

About.getLayout = function PageLayout(page) {
   return <>
      <Head>
         <title>About</title>

      </Head>

      {page}
      <Footer />
   </>
}
