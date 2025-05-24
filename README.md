# ProtoML Language Support


## 🧠 What is ProtoML?

[ProtoML](https://github.com/ente/protoml-parser) is a human-readable, declarative markup language optimized for meeting protocols, notes and task management.

This extension provides rich support for `.pml` files directly inside VSCode.

---

## ✨ Features

- ✅ Syntax Highlighting for all ProtoML constructs
- ✅ Command + ID + Path parsing for macros and tags
- ✅ Autocompletion for common commands
- ✅ Comment and heading support


---

## 🚀 Installation

Create a `.vsix` file: `npm run compile && vsce package`

Then install the extension via VSCode:

```bash
code --install-extension protoml-language-support.vsix
```

or simply right-click on the `.vsix` file and select "Install with VSCode".

---

## 🔧 Usage

Just open a `.pml` file and enjoy:

```plaintext
@macro warn_box "macros/warn_box.pml"
@participants
=pt1=John Doe,jdoe@example.com
@meeting
# Hello World
@@macro=warn_box:title=Important;text=This is urgent!
```

---

## 🛠 Development

1. Clone this repo
2. Install deps:

```bash
npm install
```

3. Compile:

```bash
npm run compile
```

4. Launch VSCode → Press `F5` to open Extension Development Host

---

## 📦 Packaging

To build `.vsix`:

```bash
npm install -g vsce
vsce package
```



## 📄 License

[GNU-GPLv3](./LICENSE)
