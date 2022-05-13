import { Image } from '@mantine/core';

interface IProps {
  src: string;
  alt: string;
  index: number;
  isActive: boolean;
  active: (index: number) => void;
}

const Thumbnail = ({ src, alt, index, active, isActive }: IProps) => {
  const activeStyles = isActive ? '' : '';

  return (
    <button className={`w-full ${activeStyles} `} onClick={() => active(index)}>
      <div className="rounded-xl bg-white">
        <Image
          src={src}
          alt={alt}
          withPlaceholder
          radius={12}
          className="overflow-hidden hover:opacity-50"
        />
      </div>
    </button>
  );
};

export default Thumbnail;
