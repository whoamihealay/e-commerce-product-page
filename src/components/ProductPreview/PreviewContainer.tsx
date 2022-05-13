import { Modal } from '@mantine/core';
import { useState } from 'react';
import { Thumbnail, ActivePreview } from '.';
import { Next, Previous } from '../../assets/Icons';

type image = {
  main: string;
  thumbnail: string;
};

interface IProps {
  images: image[];
}

const PreviewContainer = ({ images }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        styles={{
          modal: { background: 'transparent' }
        }}
      >
        <div className="w-full ">
          <div className="relative">
            <button
              className="absolute top-1/2 flex items-center justify-center rounded-full bg-white p-2"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <Previous />
            </button>
            <ActivePreview src={images[activeIndex].main} />
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute right-0 top-1/2 flex items-center justify-center rounded-full bg-white p-2"
            >
              <Next />
            </button>
          </div>
          <div className="hidden gap-4 py-4 md:flex">
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                index={index}
                src={image.thumbnail}
                alt=""
                active={setActiveIndex}
                isActive={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </Modal>
      <div className="w-full">
        <div className="">
          <ActivePreview src={images[activeIndex].main} setOpened={setOpened} />
        </div>
        <div className="hidden gap-4 py-4 md:flex">
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              index={index}
              src={image.thumbnail}
              alt=""
              active={setActiveIndex}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviewContainer;
