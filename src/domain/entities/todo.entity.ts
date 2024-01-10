export class TodoEntity {
    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null,
    ) {
    }

    get isCompleted() {
        return !!this.completedAt
    }

    public static fromObject(object: { [key: string]: any }) {
        const {id, text, completedAt} = object

        if (!id) throw 'ID is required'
        if (!text) throw 'Text is required'

        let newCompletedAt

        if (completedAt) {
            newCompletedAt = new Date(completedAt)

            if (isNaN(newCompletedAt.getTime())) {
                throw 'completedAt is not a valid date'
            }
        }

        return new TodoEntity(id, text, completedAt)
    }
}