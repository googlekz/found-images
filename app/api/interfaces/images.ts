export interface IImages {
    id: string
    urls: {
        [key: string]: string,
    },
    slug: string,
    skills_eng: string,
    description: string,
    alt_description: string,
    user: IUser
}

export interface IUser {
    username: string,
    name: string,
    profile_image: {
        medium: string
    }
}
