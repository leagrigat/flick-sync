'user server'

import { revalidatePath } from "next/cache";
import { createGroup } from "../data-access/group"

export async function addGroup(name: string, id: string){
    try {
        await createGroup({name, id});
        revalidatePath('/group/[groupId]')
        return {
            success: true,
            groupName: name,
            message: `The group ${name} has been successfully added`

        }
    } catch(error) {
        console.log(error)
        return {
            error: `The group ${name} could not be added`
        }
    }
}