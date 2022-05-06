import { Controller, Get, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()  
    findAll() { 
        return 'Listagem de cursos';
    }
}

@Get(':id')
findOne(@Param() param) {
    return 'Curso #${params.id}';
}


