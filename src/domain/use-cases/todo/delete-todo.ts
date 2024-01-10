import {TodoEntity} from '../../entities/todo.entity'
import {UpdateTodoDto} from '../../dtos'
import {TodoRepository} from '../../repositories/todo.repository'

export interface DeleteTodoUseCase {
    execute(dto: UpdateTodoDto): Promise<TodoEntity>
}

export class UpdateTodo implements DeleteTodoUseCase {
    constructor(
        private readonly repository: TodoRepository
    ) {
    }
    execute(dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(dto)
    }
}