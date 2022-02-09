// generated from test/fixtures/workspaces-need-update
module.exports = t => {
  const path = t.testdir({
  "a": {
    "package.json": JSON.stringify({
      "dependencies": {
        "abbrev": "^1.0.4",
        "once": "^1.3.2"
      }
    })
  },
  "b": {
    "package.json": JSON.stringify({
      "dependencies": {
        "abbrev": "^1.0.4"
      }
    })
  },
  "package-lock.json": JSON.stringify({
    "name": "workspaces-need-update",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "workspaces": [
          "a",
          "b"
        ],
        "dependencies": {
          "abbrev": "^1.0.4"
        }
      },
      "a": {
        "dependencies": {
          "abbrev": "^1.0.4",
          "once": "^1.3.2"
        }
      },
      "b": {
        "dependencies": {
          "abbrev": "^1.0.4"
        }
      },
      "node_modules/a": {
        "resolved": "a",
        "link": true
      },
      "node_modules/abbrev": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.4.tgz",
        "integrity": "sha1-vVWuXkE7oXIu5Mq6H26hBBSlns0="
      },
      "node_modules/b": {
        "resolved": "b",
        "link": true
      },
      "node_modules/once": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/once/-/once-1.3.2.tgz",
        "integrity": "sha1-2P7sqTsDnsHc3ud0HJK9rF4oCBs=",
        "dependencies": {
          "wrappy": "1"
        }
      },
      "node_modules/wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      }
    }
  }),
  "package.json": JSON.stringify({
    "dependencies": {
      "abbrev": "^1.0.4"
    },
    "workspaces": [
      "a",
      "b"
    ]
  })
})
  return path
}