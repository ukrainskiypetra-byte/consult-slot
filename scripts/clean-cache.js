/**
 * ConsultSlot Maintenance Script
 * Очищення локального сховища та скидання кешу сесії користувача
 */

function clearApplicationCache() {
    try {
        localStorage.removeItem('consultslot_user');
        localStorage.removeItem('consultslot_cyber_theme');
        console.log("[ConsultSlot System]: Кеш успішно очищено. Сесію скинуто.");
        window.location.reload();
    } catch (error) {
        console.error("[ConsultSlot Error]: Не вдалося очистити сховище:", error);
    }
}

// Автоматичний виклик при потребі
// clearApplicationCache();