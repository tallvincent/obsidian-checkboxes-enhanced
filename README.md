# Obsidian Checkboxes Enhanced

[Obsidian](https://obsidian.md/) plugin that enables a few more commands for toggling checkboxes.

> [!WARNING]
> You will need a theme that includes icons for the different checkbox types (e.g. [Obsidian Minimal Theme](https://github.com/kepano/obsidian-minimal?tab=readme-ov-file#alternate-checkboxes).

When your cursor is on a line with a checkbox, it will toggle between incomplete - `- [ ]` - and the state specified in the action you select.

![](demo.gif)

The following commands are available:

```
checkboxes-enhanced:toggle-checkbox-incomplete
checkboxes-enhanced:toggle-checkbox-canceled
checkboxes-enhanced:toggle-checkbox-forwarded
checkboxes-enhanced:toggle-checkbox-scheduling
checkboxes-enhanced:toggle-checkbox-question
checkboxes-enhanced:toggle-checkbox-important
checkboxes-enhanced:toggle-checkbox-star
checkboxes-enhanced:toggle-checkbox-quote
checkboxes-enhanced:toggle-checkbox-location
checkboxes-enhanced:toggle-checkbox-bookmark
checkboxes-enhanced:toggle-checkbox-information
checkboxes-enhanced:toggle-checkbox-savings
checkboxes-enhanced:toggle-checkbox-idea
checkboxes-enhanced:toggle-checkbox-pro
checkboxes-enhanced:toggle-checkbox-con
checkboxes-enhanced:toggle-checkbox-fire
checkboxes-enhanced:toggle-checkbox-key
checkboxes-enhanced:toggle-checkbox-win
checkboxes-enhanced:toggle-checkbox-up
checkboxes-enhanced:toggle-checkbox-down
```

You can assign each action to a hotkey within the Obsidian settings.

Or, if you use the [Obsidian Vimrc Support](https://github.com/esm7/obsidian-vimrc-support) plugin you can set up keybinds for specific actions.

For example, the following keybind to toggle a "canceled" checkbox:

```.vimrc
unmap <Space> " Must unmap space to use it as a leader key
exmap toggleCanceled obcommand checkboxes-enhanced:toggle-checkbox-canceled
nmap <Space>tc :toggleCanceled<CR>
```

