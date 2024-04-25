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

// getGroupById
/* 
export async function getGroupById (groupId: string) {
    const group = await db.query.group.findFirst())
    OR
    const group = await db.query.group.findFirst(
        with: {
            fields: {
                columns: {
                    name: false // oder sowohl name als auch groupId?
                },
                with: {
                    groupId: true
                }
            }
        },
        where: eq.(group.id, groupId),
    )}
    if (!group) return null
    return {...group}

*/