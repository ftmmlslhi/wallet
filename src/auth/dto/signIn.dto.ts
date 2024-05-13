import {
    IsString,
    IsBoolean,
    IsNotEmpty,
    isEnum,
    IsEnum,
    IS_ENUM
} from 'class-validator'

// export enum roleEnum {
// user = 0,
// admin = 1,
// }

export class SignInAuthDto {
    @IsString()
    LastName: string;
    @IsString()
    FirstName: string;
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    email: string;
    role: string|null;
    @IsString()
    mobile_number: string;
    
}
