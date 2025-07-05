
interface Props{
    children:String;
    color?:"primary" |"secondary" | "dark" |"danger";
    onClick: () => void;
}
const Button = ({children,onClick,color="primary"}:Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}
    </button>
  );
};

export default Button;
