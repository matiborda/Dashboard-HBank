// Diccionario para cambiar los textos al inglés
const translations = {
    "Banco Virtual": "Virtual Bank",
    "Cerrar sesión": "Log Out",
    "Resumen": "Overview",
    "Transacciones": "Transactions",
    "Tarjetas": "Cards",
    "Configuración": "Settings",
    "Idioma:": "Language:",
    "Notificaciones:": "Notifications:",
    "Modo Oscuro:": "Dark Mode:",
    "Guardar Cambios": "Save Changes"
};

// Guardar configuración
function saveSettings() {
    const language = document.getElementById('language').value;
    const isDarkMode = document.getElementById('dark-mode').checked;
    
    // Cambiar tema y guardar en localStorage
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Cambiar idioma y guardar en localStorage
    document.documentElement.setAttribute('data-language', language);
    localStorage.setItem('language', language);
    
    updateLanguage(language);
}

// Actualizar texto basado en el idioma
function updateLanguage(language) {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const textKey = element.getAttribute('data-lang');
        element.textContent = language === 'en' ? translations[textKey] || textKey : textKey;
    });
}

// Aplicar configuración guardada en carga inicial
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'es';
    
    // Configurar tema y estado de los controles
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('dark-mode').checked = savedTheme === 'dark';

    // Configurar idioma y estado de los controles
    document.documentElement.setAttribute('data-language', savedLanguage);
    document.getElementById('language').value = savedLanguage;
    
    // Actualizar el texto de la página al idioma guardado
    updateLanguage(savedLanguage);
});
