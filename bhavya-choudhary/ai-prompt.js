window.fetchResponse = async function(prompt) {
    const url = `https://node-app-dc4.pages.dev/fetch?prompt=${encodeURIComponent(prompt)}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};