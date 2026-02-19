import {
  IconCake,
  IconGenderFemale,
  IconGenderMale,
  IconChevronDown,
  IconReportMedical,
  IconInfoCircle,
  IconX,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandTiktokFilled,
  IconExternalLink,
  IconDownload,
  IconHome,
  IconHomeFilled,
  IconPaw,
  IconPawFilled,
  IconMessage,
  IconMessageFilled
} from "@tabler/icons-react";

const icons = {
  navArrowDown: IconChevronDown,
  female: IconGenderFemale,
  male: IconGenderMale,
  health: IconReportMedical,
  age: IconCake,
  info: IconInfoCircle,
  close: IconX,
  facebook: IconBrandFacebookFilled,
  tiktok: IconBrandTiktokFilled,
  instagram: IconBrandInstagramFilled,
  extLink: IconExternalLink,
  download: IconDownload,
  home: IconHome,
  homeFilled: IconHomeFilled,
  paw: IconPaw,
  pawFilled: IconPawFilled,
  message: IconMessage,
  messageFilled: IconMessageFilled
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
