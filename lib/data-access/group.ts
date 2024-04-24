'use server'

import { db } from '../db'
import {
  group
} from '../db/schema/group'


export type NewGroup = typeof group.$inferInsert

export async function createGroup(values: NewGroup){
    const {...newGroup} = values
    return db.transaction(async(tx) => {
        await tx
        .insert(group)
        .values(newGroup)
        .returning({id: group.id})
    })
}


// export async function createCompany(
//     values: NewCompany & { memberIds: string[] },
//   ) {
//     const { memberIds, ...newCompany } = values
//     return db.transaction(async (tx) => {
//       const [result] = await tx
//         .insert(companies)
//         .values(newCompany)
//         .returning({ id: companies.id })
  
//       if (memberIds.length > 0) {
//         await tx.insert(companiesToMembers).values(
//           memberIds.map((memberId) => ({
//             companyId: result.id,
//             memberId: memberId,
//           })),
//         )
//       }
//       return result.id
//     })
//   }