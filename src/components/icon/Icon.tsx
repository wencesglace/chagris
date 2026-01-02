import {
  BirthdayCake,
  Female,
  Male,
  NavArrowDown,
  PharmacyCrossTag,
  InfoCircle,
  Xmark,
} from "iconoir-react";
import "./icon.css";

const icons = {
  navArrowDown: NavArrowDown,
  female: Female,
  male: Male,
  health: PharmacyCrossTag,
  age: BirthdayCake,
  info: InfoCircle,
  close: Xmark,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({
  name,
  className,
  strokeWidth = 2,
  size,
}: IconProps) {
  const Component = icons[name];
  const iconSize = size ? size : "1em";
  return (
    <Component
      strokeWidth={strokeWidth}
      className={className}
       width={iconSize} height={iconSize} 
    />
  );
}
