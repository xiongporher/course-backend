import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    @Get()
    Example(): boolean{
        return false
    }
}
