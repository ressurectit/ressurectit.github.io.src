import {AppInputDateTime} from '../../../misc/types';
import {Address} from '../data/data.interface';

export interface SampleFilter
{
    name?: string;
    age?: number;
    date?: AppInputDateTime;
}

export interface SampleData
{
    user: string;
    firstName: string;
    surname: string;
    birthDate: AppInputDateTime;
    validUser: boolean;
    address: Address;
}