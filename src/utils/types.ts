export interface Student {
    _id?: string,
    name: string,
    age: number,
    grade: number,
    createDate: string,
    updateDate: string,
    interests?: string[] | null,
}