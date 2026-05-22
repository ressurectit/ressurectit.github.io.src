export interface Citizen
{
    name?: string;
    surname?: string;
    birthDate?: string;
}

export interface Address
{
    id?: string;
    country?: string;
    city?: string;
    zip?: string;
    street?: string;
    houseNumber?: string;
    citizen?: Citizen;
}

export interface AddressDetail extends Address
{
    detailVisible?: boolean;
}
