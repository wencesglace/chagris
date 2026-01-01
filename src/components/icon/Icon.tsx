import {
  BirthdayCake,
  Female,
  Male,
  NavArrowDown,
  PharmacyCrossTag,
  InfoCircle,
} from "iconoir-react";
import "./icon.css";

const icons = {
  navArrowDown: NavArrowDown,
  female: Female,
  male: Male,
  health: PharmacyCrossTag,
  age: BirthdayCake,
  info: InfoCircle
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({ name, className, strokeWidth = 2 }: IconProps) {
  const Component = icons[name];
  return (
    <Component strokeWidth={strokeWidth} className={`icon ${className}`} />
  );
}
