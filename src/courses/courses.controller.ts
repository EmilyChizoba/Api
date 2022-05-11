import { Body, Controller, Get, Post} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll() { 
        return 'Listagem de cursos';
    }

    @Post()
    create(@Body("name") body){
        return body;
    }
    
}



