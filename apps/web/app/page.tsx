
import client from "@repo/db/client"


export default async function  Home (){
  

  const user =await client.user.findFirst();


  return (
    <div>
      <h1>Kiran Khadka</h1>
      <div>
        {user?.username}
        {user?.password}
      </div>
    </div>
  )
}