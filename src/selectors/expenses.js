//GET-VISIBLE-EXPENSE
export default (expenses,{text='',startDate='',endDate=''}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    });
};