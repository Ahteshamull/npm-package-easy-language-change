import { t } from "./i18n.js";

export function showModal({
  titleKey = "",
  contentKey = "",
  buttonsKeys = ["ok"],
} = {}) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    const modal = document.createElement("div");
    modal.className = "bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4";

    const h2 = document.createElement("h2");
    h2.textContent = t(titleKey);
    h2.className = "text-lg font-semibold mb-2";
    modal.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = t(contentKey);
    p.className = "text-gray-700 mb-4";
    modal.appendChild(p);

    const btnContainer = document.createElement("div");
    btnContainer.className = "flex justify-end gap-2";

    buttonsKeys.forEach((key, index) => {
      const btn = document.createElement("button");
      btn.textContent = t(key);
      btn.className =
        "px-4 py-2 rounded font-medium " +
        (index === buttonsKeys.length - 1
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300");
      btn.onclick = () => {
        overlay.remove();
        resolve(key);
      };
      btnContainer.appendChild(btn);
    });

    modal.appendChild(btnContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  });
}
