import { getCollection } from "../lib/db";
import { User } from "../queries";

type UpdateProfileInput = {
  name: string;
  
}

export const updateProfile = async (_parent: any, args: { input: UpdateProfileInput }, context: any, _info: any): Promise<User> => {
  const query = await getCollection<UpdateProfileInput>('users')
  const snapshot = await query.get();
  // const id = snapshot.docs[0].data().id +1;
  const col = getCollection('users') 
  await col.add({name: args.input.name});
  return {name: args.input.name }
}

