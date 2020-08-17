/* 
 create a knex config interface which will make it easy working 
 with knexfile in typescript
*/

// KnexConfig interface that takes an array of key string type) and an object as value
export interface KnexConfig {
    [key: string]: {}
}