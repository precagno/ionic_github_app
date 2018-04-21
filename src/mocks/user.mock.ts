import {User} from '../models/user.interface';

const USERS: User[]=[
    {
        name: 'pablo',
        company: 'Consult S.A',
        location: 'Villa Ballester , Buenos Aires , Argentina',
        bio: 'PHP Developer',
        avatar_url: 'http://www.imgur.com/4563df',
        email: 'pablosrecagno@gmail.com', 
    },
    {
        name: 'juan',
        company: 'ExpreNet',
        location: 'Villa Carlos Paz , Cordoba , Argentina',
        bio: 'Java Architect',
        avatar_url: 'http://www.imgur.com/9wd41w',
        email: 'juannilos@gmail.com', 
    }
    
];

export const USER_LIST=USERS;

