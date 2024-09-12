export class DataIO {
    public static importData(file: File): Promise<any> {
        // Import data from a file
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(JSON.parse(reader.result as string));
            reader.readAsText(file);
        });
    }

    public static exportData(data: any): void {
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
