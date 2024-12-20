import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../components/Sidebar'
import { Counter } from '../components/Counter'
import styles from '../styles/Home.module.css'

import { Layout } from '../components/Layout'

import { useGetUsersQuery, useUpdateMutation } from '../generated/graphql'



const Home: NextPage = () => {
  //ADDING
  // const [ChangeName,{data,loading,error,called}] = useUpdateMutation();
  // ChangeName({variables : {name : "Ok"}})

  const {loading,error,data} = useGetUsersQuery()
  //GETTING

  if(loading) return <div>Loading</div>

  if(error) return <div>NotToday</div> 
  
  console.log(data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create aaaa Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout/>

      
    </div>
  )
}

export default Home


