import {User} from '../models/user.interface';

const USERS: User[]=[
    {
        name: 'pablo',
        company: 'Consult S.A',
        location: 'Villa Ballester , Buenos Aires , Argentina',
        bio: 'PHP Developer',
        avatar_url: 'https://avatars2.githubusercontent.com/u/4030626?s=400&v=4',
        email: 'pablosrecagno@gmail.com', 
    },
    {
        name: 'juan',
        company: 'ExpreNet',
        location: 'Villa Carlos Paz , Cordoba , Argentina',
        bio: 'Java Architect',
        avatar_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4c7d229a-9d34-4685-9492-2ed7b7b944f5-profile_image-300x300.jpg',
        email: 'juannilos@gmail.com', 
    }
    
];

export const USER_LIST=USERS;

