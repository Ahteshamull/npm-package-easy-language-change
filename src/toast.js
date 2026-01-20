import { t } from "./i18n.js";

export function showToast({
  messageKey = "",
  type = "info",
  duration = 3000,
} = {}) {
  const toast = document.createElement("div");

  const baseClasses =
    "fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-y-full opacity-0";

  const typeClasses = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  toast.className = `${baseClasses} ${typeClasses[type] || typeClasses.info}`;
  toast.textContent = t(messageKey);

  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-y-full", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  }, 10);

  // Remove after duration
  setTimeout(() => {
    toast.classList.add("translate-y-full", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
