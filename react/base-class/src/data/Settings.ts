import { type Theme } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';
import { type SettingOpts } from './Data';
import API from '@mohammadelhsn/portfolio-api-wrapper';

class SettingsClass {
	exampleEnable: boolean;
	assignmentNumbersDisable: boolean;
	assignmentTasksDisable: boolean;
	labNumbersDisable: boolean;
	labTasksDisable: boolean;
	courseCode: string;
	courseName: string;
	term: string;
	light: Theme;
	dark: Theme;
	name: string;
	username: string;
	github_handle?: string;
	github?: string;
	email?: string;
	linkedIn?: string;
	baseLab?: string;
	baseAssignment?: string;
	api = new API('CP104');
	constructor({
		exampleEnable = false,
		assignmentNumbersDisable = false,
		assignmentTasksDisable = false,
		labNumbersDisable = false,
		labTasksDisable = false,
		courseCode,
		courseName,
		term,
		light = lightTheme,
		dark = darkTheme,
		name = 'Mohammad El-Hassan',
		username = 'mohammadelhsn',
		github_handle,
		github,
		email,
		linkedIn,
		baseLab = 'elha7950_l',
		baseAssignment = 'elha7950_a',
	}: SettingOpts) {
		this.exampleEnable = exampleEnable;
		this.assignmentNumbersDisable = assignmentNumbersDisable;
		this.assignmentTasksDisable = assignmentTasksDisable;
		this.labNumbersDisable = labNumbersDisable;
		this.labTasksDisable = labTasksDisable;
		this.courseCode = courseCode;
		this.courseName = `${this.courseCode} - ${courseName}`;
		this.term = term;
		this.light = light;
		this.dark = dark;
		this.name = name;
		this.username = username;
		this.github_handle = github_handle ? github_handle : `@${this.username}`;
		this.github = github ? github : `https://github.com/${this.username}`;
		this.email = email ? email : `${this.username}@gmail.com`;
		this.linkedIn = linkedIn
			? linkedIn
			: `https://www.linkedin.com/in/${this.username}`;
		this.baseLab = baseLab;
		this.baseAssignment = baseAssignment;
	}
}

const Settings = new SettingsClass({
	courseCode: 'CP104',
	courseName: 'Introduction to Programming with Python',
	term: 'Fall 2023',
});

export default Settings;
