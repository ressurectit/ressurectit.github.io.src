import * as moment from 'moment';

import {Address} from '../data/data.interface';

export interface SampleFilter
{
    name?: string;
    age?: number;
    date?: moment.Moment;
}

export interface SampleData
{
    user: string;
    firstName: string;
    surname: string;
    birthDate: moment.Moment;
    validUser: boolean;
    address: Address;
}