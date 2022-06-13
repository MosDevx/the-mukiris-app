import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     <Layout>

       {/* <div className="flex justify-center place-self-center bg-gray-100">
         <svg className=" h-[480px] w-[480px] rotate-45  bg-gray-100">
           <g>
              <rect className="h-[480px] w-[480px] stroke-black stroke-[4px] fill-transparent"></rect>
              <text className="font-sans text-2xl fill-black">The Mukiris</text>
           </g>
         </svg>
       </div>
         <p>This text is righteous</p> */}

         <div className="bg-scroll bg-no-repeat bg-center h-screen -z-10" style={{backgroundImage:"url('/diamond.svg')"}}>
         </div>
         <div className="absolute top-0 h-screen w-screen text-2xl ">
            
            <Link href="/#" >
              <a  className="absolute top-1/2 left-44">Organizer</a>
            </Link> 
            
            <Link href="/#">
              <a className="absolute top-28 left-96">Documents</a>
            </Link>
            
            <Link href="/#">
              <a className="absolute top-1/2 right-44">Gallery</a>
            </Link>
            
            <Link href="/#">
              <a className="absolute bottom-28 right-1/3">Projects</a>
            </Link>
          </div>

  
   </Layout> 

  )
}
