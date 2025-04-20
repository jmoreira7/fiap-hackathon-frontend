export interface Student {
    name: string,
    age: number,
    grade: number,
    createDate: string,
    updateDate: string,
    interests?: string[] | null,
}