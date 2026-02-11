import { Controller, Get, NotFoundException, Param, Post, Body }from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {

        constructor(private readonly userService: UserService){}

        @Get()
        getAllUsers(){
            return this.userService.getAllUsers();
        }

        @Get(':id')
        getUser(@Param('id') id: number){
            try {
                return this.userService.getUser(+id)
            }catch(error){
                throw new NotFoundException(error.message);
            }       
        }

        @Post()
        addUser(@Body() user:UserDto){
            return this.userService.addUser(user);
        }
        
}