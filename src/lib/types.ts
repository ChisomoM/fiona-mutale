export interface User_info {
name: string
title: string
initials: string
email: string
phone: string
location: string
user : string
updatedAt: any
social: Record<string, string>
}

export interface SiteData{
hero_subtext: string
about_me : string
services_subtext : string
skills_subtext : string
experience_subtext : string
education_subtext : string
certifications_subtext : string
contact_title : string
contact_subtext : string
certifications: string[]
updatedAt: any
}

export interface Experience {
role: string
company: string
companySubtitle?: string
dates: string
duration?: string
location?: string
description: string
skills: string[]
order?: number
isActive?: boolean
createdAt : any
updatedAt: any
}

export interface Education {
degree : string
field : string
institution : string
dates : string
order?: number
createdAt : any
updatedAt: any
}

export interface SkillCategory {
name : string
order? : number
skills : string[]
createdAt : any
updatedAt: any
}

export interface Service {
title: string
description: string
icon: string
features:string[]
order?: number
createdAt? : any
updatedAt?: any
}

export interface contactMessage {
name: string
email: string
message: string
timestamp: any
}

// interface SiteSection {
// id : string
// name:string
// type: string
// order: number
// isVisible : boolean
// updatedAt : Timestamp
// }