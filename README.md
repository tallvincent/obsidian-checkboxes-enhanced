# Obsidian Checkboxes Enhanced

[Obsidian](https://obsidian.md/) plugin that enables a few more commands for toggling checkboxes.

> [!WARNING]
> You will need a theme that includes icons for the different checkbox types (e.g. [Obsidian Minimal Theme](https://github.com/kepano/obsidian-minimal?tab=readme-ov-file#alternate-checkboxes).

When your cursor is on a line with a checkbox, it will toggle between incomplete - `- [ ]` - and the state specified in the action you select.

![](demo.gif)

The following commands are available:

```
obsidian-checkboxes-enhanced:toggle-checkbox-incomplete
obsidian-checkboxes-enhanced:toggle-checkbox-canceled
obsidian-checkboxes-enhanced:toggle-checkbox-forwarded
obsidian-checkboxes-enhanced:toggle-checkbox-scheduling
obsidian-checkboxes-enhanced:toggle-checkbox-question
obsidian-checkboxes-enhanced:toggle-checkbox-important
obsidian-checkboxes-enhanced:toggle-checkbox-star
obsidian-checkboxes-enhanced:toggle-checkbox-quote
obsidian-checkboxes-enhanced:toggle-checkbox-location
obsidian-checkboxes-enhanced:toggle-checkbox-bookmark
obsidian-checkboxes-enhanced:toggle-checkbox-information
obsidian-checkboxes-enhanced:toggle-checkbox-savings
obsidian-checkboxes-enhanced:toggle-checkbox-idea
obsidian-checkboxes-enhanced:toggle-checkbox-pro
obsidian-checkboxes-enhanced:toggle-checkbox-con
obsidian-checkboxes-enhanced:toggle-checkbox-fire
obsidian-checkboxes-enhanced:toggle-checkbox-key
obsidian-checkboxes-enhanced:toggle-checkbox-win
obsidian-checkboxes-enhanced:toggle-checkbox-up
obsidian-checkboxes-enhanced:toggle-checkbox-down
```

You can assign each action to a hotkey within the Obsidian settings.

Or, if you use the [Obsidian Vimrc Support](https://github.com/esm7/obsidian-vimrc-support) plugin you can set up keybinds for specific actions.

For example, the following keybind to toggle a "canceled" checkbox:

```.vimrc
unmap <Space> " Must unmap space to use it as a leader key
exmap toggleCanceled obcommand obsidian-checkboxes-enhanced:toggle-checkbox-canceled
nmap <Space>tc :toggleCanceled<CR>
```

