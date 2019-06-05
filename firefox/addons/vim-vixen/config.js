{
  "keymaps": {
    "0": {
      "type": "scroll.home"
    },
    ":": {
      "type": "command.show"
    },
    "o": {
      "type": "command.show.open",
      "alter": false
    },
    "O": {
      "type": "command.show.open",
      "alter": true
    },
    "t": {
      "type": "command.show.tabopen",
      "alter": false
    },
    "T": {
      "type": "command.show.tabopen",
      "alter": true
    },
    "w": {
      "type": "command.show.winopen",
      "alter": false
    },
    "W": {
      "type": "command.show.winopen",
      "alter": true
    },
    "b": {
      "type": "command.show.buffer"
    },
    "a": {
      "type": "command.show.addbookmark",
      "alter": true
    },
    "k": {
      "type": "scroll.vertically",
      "count": -1
    },
    "j": {
      "type": "scroll.vertically",
      "count": 1
    },
    "h": {
      "type": "scroll.horizonally",
      "count": -1
    },
    "l": {
      "type": "scroll.horizonally",
      "count": 1
    },
    "<C-U>": {
      "type": "scroll.pages",
      "count": -0.5
    },
    "<C-D>": {
      "type": "scroll.pages",
      "count": 0.5
    },
    "<C-B>": {
      "type": "scroll.pages",
      "count": -1
    },
    "<C-F>": {
      "type": "scroll.pages",
      "count": 1
    },
    "gg": {
      "type": "scroll.top"
    },
    "G": {
      "type": "scroll.bottom"
    },
    "$": {
      "type": "scroll.end"
    },
    "d": {
      "type": "tabs.close"
    },
    "D": {
      "type": "tabs.close.right"
    },
    "u": {
      "type": "tabs.reopen"
    },
    "J": {
      "type": "tabs.prev",
      "count": 1
    },
    "K": {
      "type": "tabs.next",
      "count": 1
    },
    "g0": {
      "type": "tabs.first"
    },
    "g$": {
      "type": "tabs.last"
    },
    "r": {
      "type": "tabs.reload",
      "cache": false
    },
    "R": {
      "type": "tabs.reload",
      "cache": true
    },
    "zp": {
      "type": "tabs.pin.toggle"
    },
    "zd": {
      "type": "tabs.duplicate"
    },
    "zi": {
      "type": "zoom.in"
    },
    "zo": {
      "type": "zoom.out"
    },
    "zz": {
      "type": "zoom.neutral"
    },
    "f": {
      "type": "follow.start",
      "newTab": false
    },
    "m": {
      "type": "mark.set.prefix"
    },
    "'": {
      "type": "mark.jump.prefix"
    },
    "H": {
      "type": "navigate.history.prev"
    },
    "L": {
      "type": "navigate.history.next"
    },
    "[[": {
      "type": "navigate.link.prev"
    },
    "]]": {
      "type": "navigate.link.next"
    },
    "gu": {
      "type": "navigate.parent"
    },
    "gU": {
      "type": "navigate.root"
    },
    "gi": {
      "type": "focus.input"
    },
    "gf": {
      "type": "page.source"
    },
    "gh": {
      "type": "page.home"
    },
    "gH": {
      "type": "page.home",
      "newTab": true
    },
    "y": {
      "type": "urls.yank"
    },
    "p": {
      "type": "urls.paste",
      "newTab": false
    },
    "P": {
      "type": "urls.paste",
      "newTab": true
    },
    "/": {
      "type": "find.start"
    },
    "n": {
      "type": "find.next"
    },
    "N": {
      "type": "find.prev"
    },
    "<S-Esc>": {
      "type": "addon.toggle.enabled"
    }
  },
  "search": {
    "default": "duckduckgo",
    "engines": {
      "duckduckgo": "https://duckduckgo.com/?q={}"
    }
  },
  "blacklist": [],
  "properties": {
    "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh"
  }
}