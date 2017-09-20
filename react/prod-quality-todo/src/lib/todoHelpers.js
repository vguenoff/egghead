// addTodo should add the passed todo to the list
export const addTodo = (list, item) => [...list, item];
// addTodo should not mutate the existing todo array
export const generateId = () => Math.floor(Math.random() * 100000);
// findById should return the expected item from an array
export const findById = (id, list) => list.find(item => item.id === id);
// toggleTodo should toggle isComplete prop of a todo
export const toggleTodo = todo => ({ ...todo, isComplete: !todo.isComplete });
// updateTodo should update an item by id && updateTodo should not mutate the original array
export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ];
};
// removeTodo should remove an item by id & should not mutate the original array
export const removeTodo = (list, id) => {
  const updatedIndex = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, updatedIndex),
    ...list.slice(updatedIndex + 1)
  ];
};
