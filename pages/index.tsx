import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div  >
      <Head>
        <title>Nikhil</title>
        <meta name="description" content="nikhil portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* @ts-ignore */}
      <Container className='pageBg1' maxWidth="100%" style={{borderRadius:'8px',width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
    <div style={{alignItems:'center',gap:'4rem',justifyContent:'center',height:'90%',display:'flex',flexDirection:'column'}}   >
    <div style={{display:'flex',gap:'1rem',justifyContent:'flex-end'}} >
    <img src="profile.png" alt="profile" style={{height:'14vh'}}/>

     <div style={{display:'flex',gap:'.2rem',flexDirection:'column',alignSelf:'flex-end'}} >
      <Typography style={{color:'white',fontSize:'1.3rem'}} >Hey! Welcome to my portfolio  </Typography>
      <Typography style={{color:'white',fontSize:'1rem'}} >Feel free to interact with links below  </Typography>

     </div>
     </div>
     <div style={{display:'flex',flexWrap:'wrap',gap:'1rem'}} >
      
     <Card  style={{padding:'.4rem .6rem'}} >
       <Link href="/socials" > Socials </Link>
     </Card>
     <Card  style={{padding:'.4rem .6rem'}} >
       <Link href="#" > Resume </Link>
     </Card>
     <Card  style={{padding:'.4rem .6rem'}} >
       <Link href="#" > Projects </Link>
     </Card>
     </div>
     
     </div>
     <footer style={{display:'flex',justifyContent:'flex-end',gap:'1rem'}} >
     <Typography style={{color:'white',fontSize:'1rem'}} >Made with ❤️ by Nikhil </Typography>
    <Typography style={{color:'white',fontSize:'1rem'}} >© 2023 </Typography>
    </footer>
    </Container>
    

    </div>
  )
}

export default Home
