const Notify = (() => {
    const colors = {
        success: "bg-green-300",
        error: "bg-red-300",
        info: "bg-blue-300",
    };

    const border = {
        success: "border-green-500",
        error: "border-red-500",
        info: "border-blue-500",
    }

    // Create a container for notifications if it doesn't exist
    let container = document.getElementById("notification-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "notification-container";
        container.className = "fixed top-5 right-5 space-y-2 z-50";
        document.body.appendChild(container);
    }

    return {
        show: (text, type = "info") => {
            const notification = document.createElement("div");
            notification.className = `px-4 py-2 text-white rounded shadow-lg ${colors[type] || "bg-gray-200"} opacity-0 transition-opacity duration-300 ease-in-out border ${border[type] || "bg-gray-500"}`;
            notification.style.transform = "translateY(-20px)";
            notification.style.transition = "transform 0.3s ease-in-out";
            setTimeout(() => notification.style.transform = "translateY(0)", 30);
            notification.innerText = text;

            container.appendChild(notification);

            // Fade in
            setTimeout(() => notification.classList.add("opacity-100"), 50);

            // Auto remove after 3s
            setTimeout(() => {
                notification.classList.remove("opacity-100");
                setTimeout(() => notification.remove(), 500);
            }, 3000);
        },

        success: (text) => Notify.show(text, "success"),
        error: (text) => Notify.show(text, "error"),
        info: (text) => Notify.show(text, "info"),
    };
})();

export default Notify;
