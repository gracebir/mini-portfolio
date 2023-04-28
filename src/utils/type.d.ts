
export type techType = {
    title: string
    imageUrl: string
}

export type projectType = {
    id?: number
    title?: string
    description?: string
    live?: string
    code?: string
    image: string
}

export type experienceType = {
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: Array<string>
} 

export type serviceType = {
    title: string
    icon: string
}

export type navModalType = {
    visible: boolean
    onClose: () => void
}
