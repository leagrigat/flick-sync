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