// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../Database/connectionDB";

const handler = async (req, res) => {
  const client = await clientPromise
  switch (req.method){
    case 'GET':
      const data = await client.db('sample_weatherdata').collection('data').findOne({})
      res.send(data)
      break
  }
}

export default handler

// export async function getServerSideProps(context) {
//   const client = await clientPromise
//
//   // client.db() will be the default database passed in the MONGODB_URI
//   // You can change the database by calling the client.db() function and specifying a database like:
//   // const db = client.db("myDatabase");
//   // Then you can execute queries against your database like so:
//   // db.find({}) or any of the MongoDB Node Driver commands
//
//   const isConnected = await client.isConnected()
//
//   return {
//     props: { isConnected },
//   }