// import { json } from "stream/consumers";
import { neon } from "@neondatabase/serverless";
const sql = neon(`${process.env.DATABASE_URL}`);

export default async function Home() {
  const result = await sql`SELECT * FROM users;`;
  // const data = await res.json();
  return (
    <div>  
      {result.map(item => <li key={item.id}>{item.username}</li>)}
    </div>
  );
}
