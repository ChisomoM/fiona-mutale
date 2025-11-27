# Firebase Implementation in Fiona Mutale Portfolio

## Overview
This project uses Firebase as the backend service for data storage and management. Firebase provides a NoSQL cloud database (Firestore), authentication, and cloud storage capabilities. Currently, the project primarily utilizes Firestore for storing and managing portfolio data, with authentication and storage services initialized for future use.

## Firebase Services Used

### 1. Firestore Database
Firestore is the primary database used in this project for storing all portfolio-related data. It's a NoSQL document database that provides real-time synchronization and offline support.

#### Collections Used:
- **services**: Stores information about the services offered
- **experience**: Contains work experience entries
- **education**: Holds educational background information
- **skillCategories**: Organizes skills into categorized groups
- **site**: Contains site metadata (stored as a single document with ID 'metadata')

#### Data Structure
Each collection follows a consistent structure with the following common fields:
- `id`: Auto-generated document ID
- `createdAt`: Timestamp when the document was created
- `updatedAt`: Timestamp when the document was last updated
- `order`: Used for sorting/display order
- `isActive`: Boolean flag for active/inactive status (where applicable)

### 2. Firebase Authentication
The authentication service is initialized but not currently implemented in the application. The `auth` instance is exported from `src/lib/firebase.ts` for future use.

### 3. Firebase Storage
The storage service is initialized but not currently used. The `storage` instance is exported from `src/lib/firebase.ts` for future use (e.g., for uploading profile images, CV files, or project assets).

## Configuration
Firebase is configured using environment variables stored in a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Implementation Details

### Firebase Initialization (`src/lib/firebase.ts`)
```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

### Admin Service (`src/lib/adminService.ts`)
This file contains all CRUD operations for managing portfolio data:

- **Services Management**: `getServices()`, `addService()`, `updateService()`, `deleteService()`
- **Experience Management**: `getExperience()`, `addExperience()`, `updateExperience()`, `deleteExperience()`
- **Education Management**: `getEducation()`, `addEducation()`, `updateEducation()`, `deleteEducation()`
- **Skills Management**: `getSkillCategories()`, `addSkillCategory()`, `updateSkillCategory()`, `deleteSkillCategory()`
- **Site Metadata**: `getSiteMetadata()`, `updateSiteMetadata()`

All operations use Firestore's server timestamps for `createdAt` and `updatedAt` fields.

### Database Seeding (`src/lib/seed.ts`)
The `seedDatabase()` function populates the Firestore database with initial data from `src/data/site.ts`. This includes:
- Experience entries
- Education records
- Skill categories
- Site metadata

### Admin Interface
The admin pages (`src/pages/admin/`) provide a web interface for managing portfolio content:
- `ServicesAdmin.tsx`: Manage services
- `ExperienceAdmin.tsx`: Manage work experience
- `EducationAdmin.tsx`: Manage education
- `SkillsAdmin.tsx`: Manage skill categories
- `MetadataAdmin.tsx`: Manage site metadata

Each admin page uses the corresponding functions from `adminService.ts` to perform CRUD operations.

## Dependencies
- `firebase`: ^12.3.0 - Core Firebase SDK

## TypeScript Declarations
Custom type declarations are provided in `src/declarations.d.ts` for Firebase modules to ensure proper TypeScript support.

## Future Enhancements
- Implement Firebase Authentication for admin login
- Utilize Firebase Storage for file uploads (CV, images)
- Add real-time listeners for live updates
- Implement data validation and security rules
- Add offline support capabilities