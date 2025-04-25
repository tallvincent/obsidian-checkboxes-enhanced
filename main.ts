import { Editor, Plugin } from 'obsidian';

const toggleCheckbox = (editor: Editor, char: string) => {
	const cursor = editor.getCursor();
	const line = editor.getLine(cursor.line);

	// Regex to match a checkbox
	const checkboxRegex = /- \[([^\]]+)\]/;
	const match = line.match(checkboxRegex);

	if (match) {
		const currentState = match[1];
		const newState = currentState !== char ? char : ' ';
		const newLine = line.replace(checkboxRegex, `- [${newState}]`);

		editor.setLine(cursor.line, newLine);
		editor.setCursor(cursor)
	} else {
		const newLine = `- [${char}] ${line}`;
		editor.setLine(cursor.line, newLine);
		editor.setCursor(cursor.line)
	}
}

export default class EnhancedCheckboxes extends Plugin {
	async onload() {
		this.addCommand({
			id: 'toggle-checkbox-incomplete',
			name: 'Toggle Checkbox Incomplete',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '/')
		});

		this.addCommand({
			id: 'toggle-checkbox-canceled',
			name: 'Toggle Checkbox Canceled',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '-')
		});

		this.addCommand({
			id: 'toggle-checkbox-forwarded',
			name: 'Toggle Checkbox Forwarded',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '>')
		});

		this.addCommand({
			id: 'toggle-checkbox-scheduling',
			name: 'Toggle Checkbox Scheduling',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '<')
		});

		this.addCommand({
			id: 'toggle-checkbox-question',
			name: 'Toggle Checkbox Question',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '?')
		});

		this.addCommand({
			id: 'toggle-checkbox-important',
			name: 'Toggle Checkbox Important',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '!')
		});

		this.addCommand({
			id: 'toggle-checkbox-star',
			name: 'Toggle Checkbox Star',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '*')
		});

		this.addCommand({
			id: 'toggle-checkbox-quote',
			name: 'Toggle Checkbox Quote',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, '"')
		});

		this.addCommand({
			id: 'toggle-checkbox-location',
			name: 'Toggle Checkbox Location',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'l')
		});

		this.addCommand({
			id: 'toggle-checkbox-bookmark',
			name: 'Toggle Checkbox Bookmark',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'b')
		});

		this.addCommand({
			id: 'toggle-checkbox-information',
			name: 'Toggle Checkbox Information',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'i')
		});

		this.addCommand({
			id: 'toggle-checkbox-savings',
			name: 'Toggle Checkbox Savings',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'S')
		});

		this.addCommand({
			id: 'toggle-checkbox-idea',
			name: 'Toggle Checkbox Idea',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'I')
		});

		this.addCommand({
			id: 'toggle-checkbox-pro',
			name: 'Toggle Checkbox Pro',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'p')
		});

		this.addCommand({
			id: 'toggle-checkbox-con',
			name: 'Toggle Checkbox Con',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'c')
		});

		this.addCommand({
			id: 'toggle-checkbox-fire',
			name: 'Toggle Checkbox Fire',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'f')
		});

		this.addCommand({
			id: 'toggle-checkbox-key',
			name: 'Toggle Checkbox Key',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'k')
		});

		this.addCommand({
			id: 'toggle-checkbox-win',
			name: 'Toggle Checkbox Win',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'w')
		});

		this.addCommand({
			id: 'toggle-checkbox-up',
			name: 'Toggle Checkbox Up',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'u')
		});

		this.addCommand({
			id: 'toggle-checkbox-down',
			name: 'Toggle Checkbox Down',
			editorCallback: (editor: Editor) => toggleCheckbox(editor, 'd')
		});
	}
}
