import Icon, { type IconName } from "../icon/Icon";
import "./tag.css";

type TagProps = {
  children: string;
  icon?: IconName;
  className?: string;
};

export default function Tag({ className, children, icon }: TagProps) {
  const classes = `tag ${className}`;
  return (
    <div className={classes}>
      {icon && <Icon name={icon} className="faq-chevron" />}
      {children}
    </div>
  );
}
