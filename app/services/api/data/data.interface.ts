export interface Citizen
{
    name?: string;
    surname?: string;
    birthDate?: string;
}

export interface Address
{
    country?: string;
    city?: string;
    zip?: string;
    street?: string;
    houseNumber?: string;
    citizen?: Citizen;
}