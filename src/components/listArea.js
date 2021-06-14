import Todo from "./todo";
const ListArea = () => {
  const todoList = [
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
    { title: "読書", description: "イシューから始めよ" },
  ];
  return (
    <div>
      {todoList.map((todo) => {
        <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
};
export default ListArea;
