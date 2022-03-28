import classes from './TodoItem.module.css';
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={props.onRemoveTodo}>x</button>
    </li>
  );
};
export default TodoItem;
