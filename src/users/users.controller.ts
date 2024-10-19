import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    findAll(): boolean{
        return this.userService.Example();
    }

    @Post()
    findOne(@Body() {name, lastname}: {name: string, lastname: string}): {
        name: string;
        lastname: string;
    } {
        console.log({name, lastname})
        return {name, lastname}
    }
}
