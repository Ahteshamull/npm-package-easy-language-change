# easy-language-change

**Professional, lightweight, multi-language support for websites**  
Includes Tailwind CSS ready **modals** and optional **toasts**.

---

## Features

- ✅ Global multi-language switching
- ✅ Promise-based modal API
- ✅ Tailwind CSS styling ready
- ✅ Lightweight, dependency-free
- ✅ Mobile responsive
- ✅ Framework-agnostic (React, Vue, Svelte, plain JS)

---

## Installation

```bash
npm install easy-language-change
npm install tailwindcss
```

---

## Quick Start

```javascript
import { translations, setLanguage, showModal } from "easy-language-change";

// Define translations
translations.en = {
  delete_title: "Delete Item?",
  delete_content: "Are you sure?",
  cancel: "Cancel",
  yes: "Yes",
};
translations.bn = {
  delete_title: "আইটেম মুছবেন?",
  delete_content: "আপনি কি নিশ্চিত?",
  cancel: "বাতিল",
  yes: "হ্যাঁ",
};
translations.fr = {
  delete_title: "Supprimer l'élément?",
  delete_content: "Êtes-vous sûr?",
  cancel: "Annuler",
  yes: "Oui",
};

// Set language globally
setLanguage("en"); // or "bn" or "fr"

// Show modal
async function confirmDelete() {
  const result = await showModal({
    titleKey: "delete_title",
    contentKey: "delete_content",
    buttonsKeys: ["cancel", "yes"],
  });

  console.log(result); // Returns button key clicked
}

confirmDelete();
```

## Basic Usage

```javascript
import { setLanguage, t, showModal, showToast } from "easy-language-change";

// Add translations
import { translations } from "easy-language-change";

translations.en = {
  welcome: "Welcome!",
  goodbye: "Goodbye",
  confirm: "Are you sure?",
};

translations.bn = {
  welcome: "স্বাগতম!",
  goodbye: "বিদায়",
  confirm: "আপনি কি নিশ্চিত?",
};

// Switch language
setLanguage("bn");

// Use in modals
showModal({
  titleKey: "confirm",
  contentKey: "welcome",
  buttonsKeys: ["ok", "cancel"],
});

// Use toasts
showToast({
  messageKey: "welcome",
  type: "success",
});

// Translate text
const text = t("welcome"); // 'স্বাগতম!'
```

---

## API Reference

### `setLanguage(lang)`

Switch the current language.

### `getLanguage()`

Get the current language code.

### `t(key)`

Get translation for a key.

### `showModal(options)`

Show a promise-based modal.

### `showToast(options)`

Show a toast notification.

---

## License

MIT | Ahteshamul Hasan
