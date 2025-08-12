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

/** @description The firebase instance for this project */
export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentMultipleTabManager(),
	}),
});

type FirestoreProj = {
	/** @description The ID of the project */
	id: string;
	/** @description The title of the project */
	title: string;
	/** @description The description of the project */
	description: string;
	/** @description The stack that the project uses */
	techStack: string[];
	/** @description The category in which the project belongs to */
	category: string;
	/** @description The GitHub Repo for the project */
	github?: string;
	/** @description The live project link */
	liveDemo?: string;
	/** @description The cover image for the card */
	coverImage: string;
	/** @description Array of images to add to the project page */
	images?: string[];
	/** @description Timestamp of when the project was created */
	createdAt: Timestamp;
	/** @description Timestamp of when the project was last updated */
	updatedAt?: Timestamp;
	/** @description Array of strings for the tags for the project */
	tags?: string[];
	/** @description The longer description of the project */
	longDescription?: string;
};

export class FirestoreProject {
	/** @description The ID of the project */
	id: string;
	/** @description The title of the project */
	title: string;
	/** @description The description of the project */
	description: string;
	/** @description The stack that the project uses */
	techStack: string[];
	/** @description The category in which the project belongs to */
	category: string;
	/** @description The GitHub Repo for the project */
	github?: string;
	/** @description The live project link */
	liveDemo?: string;
	/** @description The cover image for the card */
	coverImage: string;
	/** @description Array of images to add to the project page */
	images?: string[];
	/** @description Timestamp of when the project was created */
	createdAt: Timestamp;
	/** @description Timestamp of when the project was last updated */
	updatedAt?: Timestamp;
	/** @description Array of strings for the tags for the project */
	tags?: string[];
	/** @description The longer description of the project */
	longDescription?: string;
	constructor(obj: FirestoreProj) {
		this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;
		this.techStack = obj.techStack;
		this.category = obj.category;
		this.github = obj.github;
		this.liveDemo = obj.liveDemo;
		this.coverImage = obj.coverImage;
		this.createdAt = obj.createdAt;
		this.updatedAt = obj.updatedAt;
		this.tags = obj.tags;
		this.longDescription = obj.longDescription;
	}
}

export async function fetchProjects() {
	try {
		const col = collection(db, 'projects');
		const snapshot = await getDocs(col);

		return snapshot.docs
			.map((doc) => new FirestoreProject({ ...(doc.data() as FirestoreProj) }))
			.sort((a, b) => {
				console.log(a.createdAt.toMillis());
				const aTime = a.createdAt?.toMillis?.() ?? 0;
				const bTime = b.createdAt?.toMillis?.() ?? 0;
				return bTime - aTime; // newest first
			});
	} catch (error) {
		console.error(error);
		return null;
	}
}
