import { initializeApp } from 'firebase/app';
import {
	collection,
	getDocs,
	initializeFirestore,
	persistentLocalCache,
	persistentMultipleTabManager,
	type Timestamp,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDv0F2sY9KGLiocDR5uj_krQ8Xz_Cdge6A',
	authDomain: 'mohammadelhsn-portfolio.firebaseapp.com',
	projectId: 'mohammadelhsn-portfolio',
	storageBucket: 'mohammadelhsn-portfolio.firebasestorage.app',
	messagingSenderId: '136079182833',
	appId: '1:136079182833:web:75e19513dd4d8f6eb95250',
	measurementId: 'G-R3P0GR561V',
};

const app = initializeApp(firebaseConfig);

/** The firebase instance for this project */
export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentMultipleTabManager(),
	}),
});

/**
 * Represents the structured data for a project stored in Firestore.
 */
export type FirestoreProj = {
	/** The unique identifier for the project. */
	id: string;
	/** The main title of the project. */
	title: string;
	/** A brief summary or description of the project. */
	description: string;
	/** A more detailed description of the project, which is optional. */
	longDescription?: string;
	/** The source of the project, indicating if it was a personal, coursework, hackathon, or open-source project. */
	source: 'Personal' | 'Coursework' | 'Hackathon' | 'Open Source';
	/** The primary category the project falls into, such as 'Frontend' or 'Backend'. */
	category: 'Frontend' | 'Backend' | 'Full-stack' | 'Mobile' | 'AI';
	/** The URL for the cover image of the project, typically used on a card. */
	coverImage: string;
	/** An optional link to a dedicated project page. */
	projectPage?: string;
	/** An optional link to project documentation. */
	docs?: string;
	/** An optional link to the project's GitHub repository. */
	github?: string;
	/** An optional link to a live demo of the project. */
	liveDemo?: string;
	/** An array of tags or keywords associated with the project. */
	tags?: string[];
	/** An array of technologies or languages used in the project's stack. */
	techStack: string[];
	/** An optional array of image URLs to be displayed on the project page. */
	images?: string[];
	/** The current status of the project. */
	status: 'complete' | 'in-progress' | 'archived';
	/** The timestamp when the project was first created. */
	createdAt: Timestamp;
	/** The timestamp when the project was last updated. */
	updatedAt?: Timestamp;
};

export class FirestoreProject {
	/** The unique identifier for the project. */
	id: string;
	/** The main title of the project. */
	title: string;
	/** A brief summary or description of the project. */
	description: string;
	/** A more detailed description of the project, which is optional. */
	longDescription?: string;
	/** The source of the project, indicating if it was a personal, coursework, hackathon, or open-source project. */
	source: 'Personal' | 'Coursework' | 'Hackathon' | 'Open Source';
	/** The primary category the project falls into, such as 'Frontend' or 'Backend'. */
	category: 'Frontend' | 'Backend' | 'Full-stack' | 'Mobile' | 'AI';
	/** The URL for the cover image of the project, typically used on a card. */
	coverImage: string;
	/** An optional link to a dedicated project page. */
	projectPage?: string;
	/** An optional link to project documentation. */
	docs?: string;
	/** An optional link to the project's GitHub repository. */
	github?: string;
	/** An optional link to a live demo of the project. */
	liveDemo?: string;
	/** An array of tags or keywords associated with the project. */
	tags?: string[];
	/** An array of technologies or languages used in the project's stack. */
	techStack: string[];
	/** An optional array of image URLs to be displayed on the project page. */
	images?: string[];
	/** The current status of the project. */
	status: 'complete' | 'in-progress' | 'archived';
	/** The timestamp when the project was first created. */
	createdAt: Timestamp;
	/** The timestamp when the project was last updated. */
	updatedAt?: Timestamp;
	constructor(obj: FirestoreProj) {
		this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;
		this.longDescription = obj.longDescription;
		this.source = obj.source;
		this.category = obj.category;
		this.coverImage = obj.coverImage;
		this.projectPage = obj.projectPage;
		this.docs = obj.docs;
		this.github = obj.github;
		this.liveDemo = obj.liveDemo;
		this.tags = obj.tags;
		this.techStack = obj.techStack;
		this.images = obj.images;
		this.status = obj.status;
		this.createdAt = obj.createdAt;
		this.updatedAt = obj.updatedAt;
	}
}

export async function fetchProjects() {
	try {
		const col = collection(db, 'projects');
		const snapshot = await getDocs(col);

		return snapshot.docs
			.map((doc) => new FirestoreProject({ ...(doc.data() as FirestoreProj) }))
			.sort((a, b) => {
				const aTime = a.createdAt?.toMillis?.() ?? 0;
				const bTime = b.createdAt?.toMillis?.() ?? 0;
				return aTime - bTime; // oldest first
			});
	} catch (error) {
		console.error(error);
		return null;
	}
}
