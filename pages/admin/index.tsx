import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react'
import GithubIcon from '@mui/icons-material/GitHub';
import { TextField, Typography,Button } from '@mui/material'

const Admin: NextPage = () => {




const [password, setPassword] = useState('')
const [visitorData,setVisitorData] = useState('')

const handleGo = () => {

  if(password === "Nklplp12@"){
    fetch("/api/recordVisitor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
  
        console.log(data);
        setVisitorData(data.message)
  
      });
  }


}

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
   <div style={{color:'white',display:'flex',gap:'1rem',alignItems:'center'}} >
   <TextField
    value={password}
    type="password"
    label="Password"
    onChange={(e)=>setPassword(e.target.value)}
    />
     <Button onClick={handleGo} variant="contained" > Go</Button>
   </div>

<div style={{width:'70%'}}>

<h2>Visitor Data</h2>

 <TextField
 style={{width:'100%'}}
 value = {visitorData}
 multiline
  rows={10}
 />
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

export default Admin
