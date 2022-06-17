export const updateListItem = <T extends unknown>(id: string, items: Array<T>, updateFunction: (item: T) => void) => {
    const index = items.findIndex((item: any) => item?.id === id);
    
    const updated = items[index];
    updateFunction(updated)
    
    return  [...items.slice(0, index), updated, ...items.slice(index + 1)];
}
