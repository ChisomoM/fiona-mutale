import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { siteData } from '../data/site';

export const seedDatabase = async () => {
    console.log("Database Seeding started...")
    
    try {

       

        // Seed Experience
        console.log("Seeding experience...");
        for (const experience of siteData.experience) {
            await addDoc(collection(db, 'experience'), {
                ...experience,
                order: 0,
                isActive: true,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
        }
        console.log("Experience seeded successfully!");

        // Seed Education
        console.log("Seeding education...");
        for (const education of siteData.education) {
            await addDoc(collection(db, 'education'), {
                ...education,
                order: 0,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
        }
        console.log("Education seeded successfully!");

        // Seed Skills as Categories
        console.log("Seeding skills...");
        const skillCategories = [
            { name: "Core Skills", skills: siteData.skills.core },
            { name: "Technical Skills", skills: siteData.skills.technical },
            { name: "Business Skills", skills: siteData.skills.business }
        ];
        
        for (const category of skillCategories) {
            await addDoc(collection(db, 'skillCategories'), {
                ...category,
                order: 0,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
        }
        console.log("Skills seeded successfully!");

        // Seed Site Metadata (single document)
        console.log("Seeding site metadata...");
        await setDoc(doc(db, 'site', 'metadata'), {
            name: siteData.name,
            title: siteData.title,
            initials: siteData.initials,
            email: siteData.email,
            phone: siteData.phone,
            location: siteData.location,
            cvPath: siteData.cvPath,
            profile: siteData.profile,
            about_me: `Welcome to my portfolio! I'm ${siteData.name}, ${siteData.title}.`,
            about_quote: 'I am deeply committed to my work.',
            social: siteData.social,
            certifications: siteData.certifications,
            updatedAt: serverTimestamp()
        });
        console.log("Site metadata seeded successfully!");

        console.log("✅ Database Seeding completed successfully!");
        
    } catch(e) {
        console.error(`❌ Error seeding: ${e}`);
        throw e;
    }
}