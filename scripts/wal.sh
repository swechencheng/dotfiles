# Switch to the next wallpaper
waln() {
	wal -i ~/Pictures/wallpapers --iterative; spicetify update
}

# Select a picture to use with wal using fzf
fzwal(){
	ls ~/Pictures/wallpapers | \
	fzf --bind "enter:execute(wal -i ~/Pictures/wallpapers/{} && spicetify update)"
}
