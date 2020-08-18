/* 
 create a Business interface which sets a strict type of 
 what to receive in the business model
*/

// Business interface for creating and updating 
export interface CreateBusinessCategoryInterface {
    id?: number,
    name: string,
    type: string
}


export interface UpdateBusinessCategoryInterface {
    id?: number,
    name: string,
}
