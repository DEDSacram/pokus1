import { getCollection } from "../lib/db"
export type User = {
  name: string;

}

// export const users = async (_parent: any, _args: any, context: any): Promise<User[]> => {
//   return [{name: 'Pepa', id: '1'}, {name: 'Eva', id: '2'}]
// }




export const users = async (_parent: any, _args: any, _context: any) : Promise<User[]> => {

  const query = await getCollection<User>('users');
  const snapshot = await query.get();
  const docs = snapshot.docs.map(doc=>doc.data())
  
  return docs;
}


