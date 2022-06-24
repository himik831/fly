import classes from "./Search.module.scss";

export default function Search() {
  return (
    <div className={classes.body}>
      <form action="">
        <input type="text" id="fname" name="fname" placeholder="Search the best fly" />
      </form>
    </div>
  );
}
