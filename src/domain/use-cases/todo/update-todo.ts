import {TodoEntity} from '../../entities/todo.entity'
import {TodoRepository} from '../../repositories/todo.repository'

export interface UpdateTodoUseCase {
    execute(id: number): Promise<TodoEntity>
}

export class DeleteTodo implements UpdateTodoUseCase {
    constructor(
        private readonly repository: TodoRepository
    ) {
    }
    execute(id: number): Promise<TodoEntity> {
        return this.repository.deleteById(id)
    }
}