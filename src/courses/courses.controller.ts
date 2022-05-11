import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res} from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) { 
        return response.status(200).send('Listagem de cursos');
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body("name") body){
        return body;
    }
    
}



