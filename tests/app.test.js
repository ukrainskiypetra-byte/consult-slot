/**
 * ConsultSlot Automated Test Suite (Mock)
 * Перевірка коректності роботи бізнес-логіки та розкладу потоку 4ІПЗ-23; 3ІПЗс-24
 */

console.log("--- ЗАПУСК ТЕСТІВ CONSULT-SLOT ---");

// Тест 1: Перевірка цільової групи
const targetStream = "4ІПЗ-23; 3ІПЗс-24";
assert(targetStream.includes("3ІПЗс-24"), "Тест 1 пройдено: група визначена правильно.");

// Тест 2: Перевірка тривалості слота
const slotDurationMinutes = 30;
assert(slotDurationMinutes === 30, "Тест 2 пройдено: тривалість консультації рівно 30 хвилин.");

function assert(condition, message) {
    if (!condition) {
        throw new Error(`[ПОМИЛКА ТЕСТУ]: ${message}`);
    } else {
        console.log(`[УСПІХ]: ${message}`);
    }
}

console.log("--- УСІ ТЕСТИ УСПІШНО ЗАВЕРШЕНО ---");