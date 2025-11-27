import { 
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    serverTimestamp,
    query,
    orderBy 
} from 'firebase/firestore';
import { db } from './firebase';
import type { Experience, Education, SkillCategory, Service } from './types';

// Services CRUD
export const getServices = async () => {
    const q = query(collection(db, 'services'), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
};

export const addService = async (service: Omit<Service, 'createdAt' | 'updatedAt'>) => {
    return await addDoc(collection(db, 'services'), {
        ...service,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

export const updateService = async (id: string, service: Partial<Service>) => {
    const serviceRef = doc(db, 'services', id);
    await updateDoc(serviceRef, {
        ...service,
        updatedAt: serverTimestamp()
    });
};

export const deleteService = async (id: string) => {
    await deleteDoc(doc(db, 'services', id));
};

// Experience CRUD
export const getExperience = async () => {
    const q = query(collection(db, 'experience'), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
};

export const addExperience = async (experience: Omit<Experience, 'createdAt' | 'updatedAt'>) => {
    return await addDoc(collection(db, 'experience'), {
        ...experience,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

export const updateExperience = async (id: string, experience: Partial<Experience>) => {
    const experienceRef = doc(db, 'experience', id);
    await updateDoc(experienceRef, {
        ...experience,
        updatedAt: serverTimestamp()
    });
};

export const deleteExperience = async (id: string) => {
    await deleteDoc(doc(db, 'experience', id));
};

// Education CRUD
export const getEducation = async () => {
    const q = query(collection(db, 'education'), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
};

export const addEducation = async (education: Omit<Education, 'createdAt' | 'updatedAt'>) => {
    return await addDoc(collection(db, 'education'), {
        ...education,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

export const updateEducation = async (id: string, education: Partial<Education>) => {
    const educationRef = doc(db, 'education', id);
    await updateDoc(educationRef, {
        ...education,
        updatedAt: serverTimestamp()
    });
};

export const deleteEducation = async (id: string) => {
    await deleteDoc(doc(db, 'education', id));
};

// Skill Categories CRUD
export const getSkillCategories = async () => {
    const q = query(collection(db, 'skillCategories'), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
};

export const addSkillCategory = async (category: Omit<SkillCategory, 'createdAt' | 'updatedAt'>) => {
    return await addDoc(collection(db, 'skillCategories'), {
        ...category,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

export const updateSkillCategory = async (id: string, category: Partial<SkillCategory>) => {
    const categoryRef = doc(db, 'skillCategories', id);
    await updateDoc(categoryRef, {
        ...category,
        updatedAt: serverTimestamp()
    });
};

export const deleteSkillCategory = async (id: string) => {
    await deleteDoc(doc(db, 'skillCategories', id));
};

// Site Metadata
export const getSiteMetadata = async () => {
    const docRef = doc(db, 'site', 'metadata');
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const updateSiteMetadata = async (metadata: Record<string, unknown>) => {
    const docRef = doc(db, 'site', 'metadata');
    await updateDoc(docRef, {
        ...metadata,
        updatedAt: serverTimestamp()
    });
};

// Certifications (stored in site metadata)
export const getCertifications = async () => {
    const metadata = await getSiteMetadata();
    return metadata?.certifications || [];
};
