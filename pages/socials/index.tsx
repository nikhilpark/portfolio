import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material'

const Socials: NextPage = () => {
  return (
    <div  >
      <Head>
        <title>Nikhil</title>
        <meta name="description" content="nikhil portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* @ts-ignore */}
    <Container className='pageBg1' maxWidth="100%"  style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
    <div style={{alignItems:'center',gap:'4rem',justifyContent:'center',height:'90%',display:'flex',flexDirection:'column'}}   >
    <div style={{display:'flex',flexDirection:'column',gap:'1rem',justifyContent:'center',alignItems:'center'}} >
    <img src="social.jpg" alt="profile" style={{height:'14vh',borderRadius:'50%'}}/>

     <div style={{display:'flex',gap:'.2rem',flexDirection:'column'}} >
      <Typography style={{color:'white',fontSize:'1.3rem'}} >Socials   </Typography>

     </div>
     </div>
     <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',flexDirection:'column'}} >
      
     <Card id="c1"  sx={{
         padding:'.4rem 1rem',
       
          }} >
       <a href="https://www.instagram.com/nikhilpark/" target="blank" > <div style={{display:'flex',gap:'.2rem',alignItems:'center'}}> <InstagramIcon/> Instagram</div>  </a>
     </Card>
     <Card  style={{padding:'.4rem 1rem'}} >
       <a href="https://www.linkedin.com/in/nikhilpark/" > <div   style={{display:'flex',gap:'.2rem',alignItems:'center'}}><LinkedInIcon/> LinkedIn</div></a>
     </Card>
     <Card  style={{padding:'.4rem 1rem'}} >
       <a href="https://github.com/nikhilpark" > <div   style={{display:'flex',gap:'.2rem',alignItems:'center'}}><GithubIcon/> Github</div></a>
     </Card>
     <Card  style={{padding:'.4rem 1rem'}} >
       <a href="https://twitter.com/nikhilpark" > <div   style={{display:'flex',gap:'.2rem',alignItems:'center'}}><TwitterIcon/> Twitter</div></a>
     </Card>
     </div>
     
     </div>
     <footer style={{display:'flex',justifyContent:'flex-end',gap:'1rem'}} >
     <Typography style={{color:'white',fontSize:'1rem'}} >Made with {"<></>"}  using Next.js </Typography>
    <Typography style={{color:'white',fontSize:'1rem'}} >© 2022 </Typography>
    </footer>
    </Container>
    

    </div>
  )
}

export default Socials
