import { Controller, Get, NotFoundException, Param }from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

        constructor(private readonly userService: UserService){}

        @Get()
        getAllUsers(){
            return this.userService.getAllUsers();
        }

        @Get(':id')
        getUser(@Param('id') id: string){
            try {
                return this.userService.getUser(+id)
            }catch(error){
                throw new NotFoundException(error.message);
            }       
        }
}