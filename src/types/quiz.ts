export type Quiz = {
    id: string
    title: string
    description: string
    totalQuestions: number
    questions: Question[]
}

export type Question = {
    id: number
    question: string
    imageUrl?: string
    options: string[]
    correctAnswer: number
    explanation?: string
}
