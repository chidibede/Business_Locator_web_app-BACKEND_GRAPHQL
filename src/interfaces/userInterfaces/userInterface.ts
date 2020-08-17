/* 
 create a user interface which sets a strict type of 
 what to receive in the user model
*/

// User interface for creating and updating 
export interface RegisterUserInterface {
    id?: number,
    username: string,
    email: string,
    password: string
}

export interface LoginUserInterface {
    email: string,
    password: string
}

export interface UpdateUserInterface {
    id?: number,
    username?: string,
    email?: string,
    password?: string
}