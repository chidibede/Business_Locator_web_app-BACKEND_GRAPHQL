/* 
 create a Business interface which sets a strict type of 
 what to receive in the business model
*/

// Business interface for creating and updating 
export interface CreateBusinessInterface {
    id: number,
    name: string,
    location: string,
    price_range?: number
    businessCategoryId: number
}


export interface UpdateBusinessInterface {
    id?: number,
    name: string,
    location: string,
    price_range?: number
}
