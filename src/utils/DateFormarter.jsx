export function formatDate(dateString, withTime = false) {
    if (!dateString) return "N/A";
    const options = withTime
        ? { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
        : { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(dateString).toLocaleString('en-US', options);
}