/**
 * @param {Date} startDate
 * @param {Date} [endDate=new Date()] 
 * @returns {number}
 */

export function calculateDiffYears(startDate, endDate = new Date()) {
    const diffMilliseconds = endDate - startDate;
    const diffDate = new Date(diffMilliseconds);
    return diffDate.getFullYear() - 1970
}