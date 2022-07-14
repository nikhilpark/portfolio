// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//@ts-ignore
import requestIp from 'request-ip'
import cookie from 'cookie'
const fs = require('fs');
type Data = {
  message: string
}
function parseCookies(req:any) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
  }
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 


{
 
    if(req.method === 'POST'){
        const detectedIp = requestIp.getClientIp(req)
        const {lastVisit} = parseCookies(req)
       
        if(!lastVisit ){
            console.log('Recording visitor')
            const date = new Date()
            const dateString = date.toLocaleString()
            const content = `A user with ip ${detectedIp} visited on ${dateString}  \n`
            fs.appendFile ('lib/visitors.txt', content, (err:any) => {
                if (err) {    
                  console.error(err);
                }
                
            })
                
            
           return res.status(200).json({ message: 'Visitor recorded' });
        }

        const currentDate = new Date()
        const diff = currentDate.getTime() - Number(lastVisit)
        const fiteenMinutes = 1000 * 60 * 15
        console.log(diff,"timeDiff")
        if(diff < fiteenMinutes){
            console.log('Visitor already recorded')
            res.status(200).json({message: 'Visitor already recorded'})
        } else {
            console.log('Recording visitor')
            const date = new Date()
            const dateString = date.toLocaleString()
            const content = `A user with ip ${detectedIp} visited on ${dateString}  \n`
            fs.appendFile ('lib/visitors.txt', content, (err:any) => {
                if (err) {    
                  console.error(err);
                }
                
            })
                
            
            res.status(200).json({ message: 'Visitor recorded' });
        }
        
      
    }
    else {
       //Get visitor data
         const visitors = fs.readFileSync('lib/visitors.txt', 'utf8')
        res.status(200).json({message: visitors})
    }
 
    
}
