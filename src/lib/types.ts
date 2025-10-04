import type { Timestamp } from "firebase/firestore"

export interface User_info {
name: string
title: string
initials: string
email: string
phone: string
location: string
user : string
updatedAt: Timestamp
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
updatedAt: Timestamp
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
createdAt : Timestamp
updatedAt: Timestamp
}

export interface Education {
degree : string
field : string
institution : string
dates : string
order?: number
createdAt : Timestamp
updatedAt: Timestamp
}

export interface SkillCategory {
name : string
order? : number
skills : string[]
createdAt : Timestamp
updatedAt: Timestamp
}

export interface Service {
title: string
description: string
icon: string
features:string[]
order?: number
createdAt? : Timestamp
updatedAt?: Timestamp
}

export interface contactMessage {
name: string
email: string
message: string
timestamp: Timestamp
}

// interface SiteSection {
// id : string
// name:string
// type: string
// order: number
// isVisible : boolean
// updatedAt : Timestamp
// }