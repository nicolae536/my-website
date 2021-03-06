import { NmbApiService } from './api.service';

export interface IBasicInfo {
    info: {
        name: string,
        age: string,
        picture: string,
        phone: string
    };
    skills: {
        description: string,
        education: {
            domain: string,
            school: string,
            street: string,
            phone: string,
            pictureUrl: string,
            url: string
        }[];
        languages: {
            name: string,
            isNative: boolean
        }[]
    };
    programming: {
        description: string,
        advanced: {
            class: string,
            title: string,
            iconUrl: string,
            description: string
        }[],
    };
}

export class BasicInfoApi {
    constructor(private api: NmbApiService) {

    }

    getinfo() {
        return this.api.http.get<IBasicInfo>(this.api.wrapUrl('/basic-info.json'));
    }
}
