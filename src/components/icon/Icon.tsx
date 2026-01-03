import {
  IconCake,
  IconGenderFemale,
  IconGenderMale,
  IconChevronDown,
  IconReportMedical,
  IconInfoCircle,
  IconX,
  IconBandage,
  IconHomeHeart,
  IconShoppingCart,
  IconTag
} from "@tabler/icons-react";
import "./icon.css";

const icons = {
  navArrowDown: IconChevronDown,
  female: IconGenderFemale,
  male: IconGenderMale,
  health: IconReportMedical,
  age: IconCake,
  info: IconInfoCircle,
  close: IconX,
  care: IconBandage,
  house: IconHomeHeart,
  cart: IconShoppingCart,
  tag: IconTag,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number | string;
  className?: string;
};

export default function Icon({
  name,
  className,
  size,
}: IconProps) {
  const Component = icons[name];
  const iconSize = size ? size : "1em";
  return (
    <Component
      className={className}
       size={iconSize}
    />
  );
}
