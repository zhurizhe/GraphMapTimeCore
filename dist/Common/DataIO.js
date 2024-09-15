"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataIO = void 0;
class DataIO {
    static importData(file) {
        // Import data from a file
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(JSON.parse(reader.result));
            reader.readAsText(file);
        });
    }
    static exportData(data) {
        // Export data to a file
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}
exports.DataIO = DataIO;
//# sourceMappingURL=DataIO.js.map